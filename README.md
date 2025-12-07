# 🗂️ Project Planner (Vue.js + Pinia + JSON Server)

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vuedotjs&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-Store-yellow?logo=pinia&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON%20Server-Fake%20API-red)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

---

## 📌 Overview

**Project Planner** is a small productivity application built with **Vue 3 (Composition API)** and **Pinia** for state management.  
It allows users to create, update, filter, and manage projects efficiently.

This project is part of my **Phase Two → Frontend Only** learning roadmap, focusing on improving component design, store structure, reusable logic, and API integration.

---

## 🚀 Features

- 🔹 Create new projects  
- 🔹 Mark projects as complete  
- 🔹 Edit & delete projects  
- 🔹 Filter by status (All / Completed / Pending)  
- 🔹 Persistent data using **JSON Server (Fake REST API)**  
- 🔹 Clean component structure using **Composition API**  
- 🔹 Centralized state logic with **Pinia**

---

## 🛠️ Tech Stack

### **Frontend**
| Layer | Technology |
|-------|------------|
| Framework | Vue 3 |
| State Management | Pinia |
| Bundler | Vite |
| Styling | Tailwind CSS |
| Icons | Heroicons / Custom |

### **Backend (Fake API)**
| Tool | Usage |
|------|--------|
| JSON Server | Fake REST API for CRUD operations |

---

## 📁 Project Structure
```
project-planner/
│── src/
│   ├── components/
│   ├── views/
│   ├── App.vue
│   └── main.js
│── database
|   ├── db.json
│── package.json
│── README.md
```

---

## 🏗 Architecture Overview

```
Vue Components → Fetch API → json-server → db.json
```

### How it works
1. User interacts with Vue UI  
2. Vue sends request via Fetch API  
3. json-server responds like a real backend  
4. Data is stored inside `db.json`  

This simulates a realistic full CRUD backend without needing a database.

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Zin-Mg-Nyunt/project-planner.git
cd project-planner
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start Vue development server
```bash
npm run dev
```

### 4. Start json-server (Fake Backend)
```bash
npm run server
```

API will run at:  
```
http://localhost:3000/tasks
```

---
