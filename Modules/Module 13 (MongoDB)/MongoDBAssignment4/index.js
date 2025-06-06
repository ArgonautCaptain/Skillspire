const express = require('express');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection URL (replace with your actual connection string)
const uri = "mongodb+srv://skillSpireUser:skillSpirePassword@mongodbassignment1clust.ujnqvw8.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBAssignment1Cluster";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Database and Collection
let db;
let playlistsCollection;

// Connect to MongoDB
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        db = client.db('playlistsDB');
        playlistsCollection = db.collection('playlists');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Validation Middleware
const validatePlaylist = (req, res, next) => {
    const { title, description, creator } = req.body;
    
    if (!title || !description || !creator) {
        return res.status(400).json({ 
            error: 'Missing required fields. Please provide title, description, and creator' 
        });
    }
    
    next();
};

const validateSong = (req, res, next) => {
    const { title, artist, duration } = req.body;
    
    if (!title || !artist || !duration) {
        return res.status(400).json({ 
            error: 'Missing required fields. Please provide title, artist, and duration' 
        });
    }
    
    if (typeof duration !== 'number' || duration <= 0) {
        return res.status(400).json({ 
            error: 'Duration must be a positive number' 
        });
    }
    
    next();
};

// Routes
// GET all playlists
app.get('/playlists', async (req, res) => {
    try {
        const playlists = await playlistsCollection.find({}).toArray();
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching playlists' });
    }
});

// GET playlist by ID
app.get('/playlists/:id', async (req, res) => {
    try {
        const playlist = await playlistsCollection.findOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        
        res.json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching playlist' });
    }
});

// POST new playlist
app.post('/playlists', validatePlaylist, async (req, res) => {
    try {
        const playlist = {
            ...req.body,
            songs: [],
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        const result = await playlistsCollection.insertOne(playlist);
        res.status(201).json({
            message: 'Playlist created successfully',
            playlistId: result.insertedId
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating playlist' });
    }
});

// PUT update playlist
app.put('/playlists/:id', validatePlaylist, async (req, res) => {
    try {
        const result = await playlistsCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { 
                $set: {
                    ...req.body,
                    updatedAt: new Date()
                }
            }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        
        res.json({ message: 'Playlist updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating playlist' });
    }
});

// DELETE playlist
app.delete('/playlists/:id', async (req, res) => {
    try {
        const result = await playlistsCollection.deleteOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        
        res.json({ message: 'Playlist deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting playlist' });
    }
});

// GET songs in a playlist
app.get('/playlists/:id/songs', async (req, res) => {
    try {
        const playlist = await playlistsCollection.findOne({ 
            _id: new ObjectId(req.params.id) 
        });
        
        if (!playlist) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        
        res.json(playlist.songs || []);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching songs' });
    }
});

// POST new song to playlist
app.post('/playlists/:id/songs', validateSong, async (req, res) => {
    try {
        const song = {
            ...req.body,
            _id: new ObjectId(),
            addedAt: new Date()
        };
        
        const result = await playlistsCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { 
                $push: { songs: song },
                $set: { updatedAt: new Date() }
            }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        
        res.status(201).json({
            message: 'Song added successfully',
            songId: song._id
        });
    } catch (error) {
        res.status(500).json({ error: 'Error adding song' });
    }
});

// DELETE song from playlist
app.delete('/playlists/:id/songs/:songId', async (req, res) => {
    try {
        const result = await playlistsCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { 
                $pull: { songs: { _id: new ObjectId(req.params.songId) } },
                $set: { updatedAt: new Date() }
            }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Playlist not found' });
        }
        
        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: 'Song not found in playlist' });
        }
        
        res.json({ message: 'Song removed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error removing song' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
connectToMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
