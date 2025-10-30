# 🧠 ThinkBoard (QuickNotes)

ThinkBoard is a simple and powerful **MERN stack note-taking app** that lets you **create, edit, and delete notes** easily.  
Built using **MongoDB, Express, React, and Node.js**, and deployed on **Render**.

🔗 **Live Demo:** [https://thinkboard-4-8hop.onrender.com/](https://thinkboard-4-8hop.onrender.com/)

---

## 🚀 Features
- ✍️ Create, edit, and delete notes  
- 🔐 Secure JWT-based authentication  
- 🗃️ MongoDB for persistent data storage  
- ⚡ Responsive UI built with React + Tailwind/MUI  
- ☁️ Deployed on Render  

---

## 🧩 Tech Stack
**Frontend:** React, Axios, React Router, TailwindCSS  
**Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/ThinkBoard.git
cd ThinkBoard

2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend/:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:
npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev

🌍 Deployment

Both frontend and backend are deployed on Render

Live App: https://thinkboard-4-8hop.onrender.com/

🧠 API Endpoints
Method	Endpoint	Description
POST	/api/users/register	Register new user
POST	/api/users/login	User login
GET	/api/notes	Get all notes
POST	/api/notes	Create note
PUT	/api/notes/:id	Update note
DELETE	/api/notes/:id	Delete note
📜 License

MIT License © 2025 Vivek Gangdhar
