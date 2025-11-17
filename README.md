# 📘 Skillspire Full-Stack Portfolio
### _Projects & Applications Built During the 2024 Skillspire Software Engineering Program_

This repository contains the full collection of projects, applications, and hands-on exercises I built while completing the **Skillspire Full-Stack Software Engineering Program** in 2025.

The course covered a wide range of technologies across the entire stack, including:

- **React, React Hooks, Context API**
- **Node.js & Express**
- **Flask (Python)**
- **MongoDB & PostgreSQL**
- **REST API design**
- **Authentication & Authorization**
- **Asynchronous JavaScript & Promises**
- **Deployment with Vite, Render, and Cloud platforms**

This repo demonstrates my ability to **learn new technologies quickly**, **build full-stack applications independently**, and **deliver complete features from concept to deployment**.

---

# 🌟 Featured Projects: 

## D&D Character Creator — React + MongoDB Full-Stack Application  
_A fully custom character creation tool for Dungeons & Dragons 5th Edition, supporting both manual builds and procedurally generated characters._

📁 **Path:** `Modules/Module 14 (MERN Full Stack)/FinalProject/` 
💻 **Standalone Repo:** [ArgonautCaptain/dnd-character-generator](https://github.com/ArgonautCaptain/dnd-character-generator)

🛠 **Tech Stack:**
- **Frontend:** React, React Router, Controlled Forms, Custom Hooks  
- **Backend:** Express.js REST API  
- **Database:** MongoDB (character sheets, classes, species, ability scores)  
- **Other:** Data validation, structured schemas, persistent storage  

---

### 🔮 Overview

The D&D Character Creator is a full-stack MERN application designed to help users build or randomly generate complete 5e characters — including stats, race, class, backgrounds, inventory, proficiencies, and more.

This project demonstrates both **UI/UX complexity** and **backend data modeling**, making it one of my strongest full-stack builds.

---

### 🧱 Core Features

#### ✔️ Manual Character Builder  
Users can create characters from scratch with an intuitive step-by-step builder:

- Choose race/species  
- Select class & subclass  
- Assign ability scores (point buy or rolled)  
- Choose background, proficiencies, equipment  
- Add personality traits, flaws, bonds, ideals  
- Auto-calculated modifiers + derived stats

#### ✔️ Random Character Generator  
One-click button generates a fully random but rules-valid D&D character:

- Random race
- Random class/subclass  
- Random abilities  
- Random backstory seeds  
- Random equipment loadout  

Perfect for quickly generating NPCs or fresh characters.

#### ✔️ MongoDB Character Storage  
All characters are saved to MongoDB using a structured document model:

- `_id` assigned per character sheet  
- Nested stat blocks  
- Inventory and spells stored as arrays/subdocuments  
- Fully editable & deletable  

#### ✔️ Searchable Character List  
Users can view all created characters with options to:

- Open  
- Edit  
- Duplicate  
- Delete  

---

### 🧩 Engineering Highlights

- **Complex multi-section form management** with React controlled inputs  
- **Reusable component architecture** (e.g., StatBlock, InventoryEditor, FeatureList)  
- **Server-side validation** of character data  
- **Schema design** tailored for a modular RPG system  
- **REST API for CRUD operations**  
- **Ability score algorithm implementation** (point-buy / roll)  
- **Random generation algorithms** with weighted tables  

---

### 🌟 Why This Project Matters  
This application demonstrates:

- **Deep frontend logic + state management**  
- **Full REST backend creation**  
- **MongoDB modeling for complex objects**  
- **Ability to build production-style tools**  
- **Creative engineering aligned with a real user domain**  

## FullStackAssignment4 — Authenticated Message Board
_A full-stack MERN application with protected routes, user accounts, and CRUD messaging._

📁 **Path:** `Modules/Module 14 (MERN Full Stack)/FullStackAssignment4/`
🛠 **Tech Stack:**
- **Frontend:** React, React Router, Fetch API  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Auth:** JWT authentication + protected routes  

### 🔐 Overview
FullStackAssignment4 is a complete full-stack React application designed around real-world user flows:

#### ✔️ User Registration
Users can create an account with a unique username + password.

#### ✔️ Login & JWT Authentication
A backend-generated JSON Web Token is stored client-side and attached to authorized requests.

#### ✔️ Protected Routes
Only authenticated users may access the **Message Board**, which includes:

- Viewing all posts  
- Creating new posts  
- Editing their own posts  
- Deleting their own posts  

#### ✔️ Secure Backend
The Express API validates tokens on every protected route and rejects unauthorized calls.

---

# 🧩 Key Features

### 🔸 **End-to-end full-stack architecture**
Frontend → API → Database.  
Demonstrates complete understanding of the request/response cycle.

### 🔸 **CRUD Interface**
Users can create, read, update, and delete content through the React interface.

### 🔸 **Reusable React Components**
Form handling, controlled inputs, validation, navigation guards, etc.

### 🔸 **MongoDB Data Modeling**
Message schema includes timestamps, authors, and content structure.

---

# 🚀 Additional Projects & Learning Milestones

### 🧪 **React Projects**
- Component composition  
- State management  
- Dynamic routing  
- API integration  

### 🐍 **Flask Applications**
- Jinja2 templates  
- CRUD server-side apps  
- Request handling & sessions  

### 📡 **Node & REST APIs**
- Express routers  
- Middleware & validation  
- Modular backend architecture  

### 🗃 **Database Experience**
- MongoDB collection design  
- SQL table schemas & queries  
- Joining, indexing, and aggregation fundamentals  

---

# 📈 Continuous Learning
Beyond the course, I continued building production-quality applications independently, such as:

### 🔥 **D&D Dashboard (React + Firestore)**
- Real-time synced ship management system  
- Custom admin panel with Firebase Authentication  
- Role-based permissions  
- Complex UI system with dynamic components  

### 🛠 **Additional React Projects**
- Interactive tools  
- Game-support utilities  
- UI/UX prototypes  
- Full-featured SPA patterns  

These projects reflect my ability to take classroom concepts and apply them to real-world, scalable apps.

---

# 📬 Contact
If you’d like to discuss any project in this repo:

- **GitHub:** https://github.com/ArgonautCaptain  
- **Portfolio Website:** Coming soon  
- **Email:** MPUpdegraff@outlook.com

I’m always open to feedback, collaboration, or engineering opportunities.
