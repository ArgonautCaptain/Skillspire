const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let playlists = [
    {
        id: 1,
        title: "Summer Hits",
        description: "Best songs for summer",
        creator: "John Doe",
        songs: [
            {
                id: 1,
                title: "Summer of '69",
                artist: "Bryan Adams", 
                duration: "3:36"
            }
        ]
    }
];

const validatePlaylist = (req, res, next) => {
    const { title, description, creator } = req.body;

    if (!title || !description || !creator) {
        return res.status(400).json({
            error: "Missing required fields. Please provide title, description, and creator."
        });
    }

    next();
};

const validateSong = (req, res, next) => {
    const { title, artist, duration } = req.body;

    if (!title || !artist || !duration) {
        return res.status(400).json({
            error: "Missing required fields. Please provide title, artist, and duration."
        });
    }

    next();
};

// GET all playlists
app.get('/playlists', (req, res) => {
    res.json(playlists);
});

// GET playlist by ID
app.get('/playlists/:id', (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) {
        return res.status(404).json({ error: "Playlist not found" });
    }
    res.json(playlist);
});

// POST new playlist
app.post('/playlists', validatePlaylist, (req, res) => {
    const newPlaylist = {
        id: playlists.length > 0 ? Math.max(...playlists.map(p => p.id)) + 1 : 1,
        songs: [],
        ...req.body
    };
    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
});

// PUT update playlist
app.put('/playlists/:id', validatePlaylist, (req, res) => {
    const playlistIndex = playlists.findIndex(p => p.id === parseInt(req.params.id));
    if (playlistIndex === -1) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    const updatedPlaylist = {
        id: parseInt(req.params.id),
        songs: playlists[playlistIndex].songs,
        ...req.body
    };

    playlists[playlistIndex] = updatedPlaylist;
    res.json(updatedPlaylist);
});

// DELETE playlist
app.delete('/playlists/:id', (req, res) => {
    const playlistIndex = playlists.findIndex(p => p.id === parseInt(req.params.id));
    if (playlistIndex === -1) {
        return res.status(404).json({ error: "Playlist not found" });
    }
    const deletedPlaylist = playlists[playlistIndex];
    playlists = playlists.filter(p => p.id !== parseInt(req.params.id));
    res.json(deletedPlaylist);
});

// GET songs from playlist
app.get('/playlists/:id/songs', (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) {
        return res.status(404).json({ error: "Playlist not found" });
    }
    res.json(playlist.songs);
});

// POST new song to playlist
app.post('/playlists/:id/songs', validateSong, (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    const newSong = {
        id: playlist.songs.length > 0 ? Math.max(...playlist.songs.map(s => s.id)) + 1 : 1,
        ...req.body
    };

    playlist.songs.push(newSong);
    res.status(201).json(newSong);
});

// DELETE song from playlist
app.delete('/playlists/:id/songs/:songId', (req, res) => {
    const playlist = playlists.find(p => p.id === parseInt(req.params.id));
    if (!playlist) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    const songIndex = playlist.songs.findIndex(s => s.id === parseInt(req.params.songId));
    if (songIndex === -1) {
        return res.status(404).json({ error: "Song not found in playlist" });
    }

    const deletedSong = playlist.songs[songIndex];
    playlist.songs = playlist.songs.filter(s => s.id !== parseInt(req.params.songId));
    res.json(deletedSong);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
