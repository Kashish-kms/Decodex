# 🚀 Decodex — AI Code Generator

> Generate clean, production-ready code in 12+ programming languages using the **Google Gemma 4 31B** model, powered by OpenRouter.

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🤖 **AI-Powered Code Generation** — Uses Google Gemma 4 31B via OpenRouter
- 🔤 **12+ Languages Supported** — Python, JavaScript, TypeScript, Java, C++, C#, Go, Rust, PHP, Ruby, Swift, Kotlin
- ⚡ **Fast & Free** — Powered by OpenRouter's free tier
- 🎨 **Beautiful Dark UI** — Clean dark theme with syntax highlighting
- 📋 **One-Click Copy** — Copy generated code to clipboard instantly
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, Axios |
| Backend | Node.js, Express |
| AI Model | Google Gemma 4 31B (via OpenRouter) |
| Deployment | Vercel (Frontend), Railway / Koyeb (Backend) |

---

## 📁 Project Structure

```
Decodex/
├── frontend/          # React + Vite app
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── vite.config.js
├── backend/           # Node.js + Express API
│   ├── index.js
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- An [OpenRouter](https://openrouter.ai) API key (free)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Kashish-kms/Decodex.git
cd Decodex
```

---

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and add your OpenRouter API key:

```env
OPENROUTER_API_KEY=your_api_key_here
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

Backend will run at `http://localhost:5000`

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Frontend will run at `http://localhost:5173`

---

## 🌐 Deployment

### Frontend — Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repo
2. Set **Root Directory** → `frontend`
3. **Framework Preset** → `Vite`
4. **Build Command** → `npm run build`
5. **Output Directory** → `dist`
6. Add environment variable:
   - `VITE_API_URL` = your backend URL
7. Click **Deploy**

### Backend — Railway (Free)

1. Go to [railway.app](https://railway.app) and connect your GitHub repo
2. Set **Root Directory** → `backend`
3. Add environment variable:
   - `OPENROUTER_API_KEY` = your OpenRouter API key
4. Deploy and copy the generated URL
5. Paste that URL as `VITE_API_URL` in your Vercel frontend settings and redeploy

---

## 🔑 Getting an OpenRouter API Key

1. Go to [openrouter.ai](https://openrouter.ai)
2. Sign up for a free account
3. Navigate to **Keys** → **Create Key**
4. Copy and paste it into your `.env` file

> The Gemma 4 31B model is available on OpenRouter's free tier.

---

## 🚀 Usage

1. Open the app in your browser
2. Type your code request in plain English (e.g. *"Write a function to reverse a string in Python"*)
3. Select the programming language
4. Click **Generate**
5. Copy the generated code with one click

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ by [Kashish](https://github.com/Kashish-kms)

---

> ⭐ If you found this useful, consider giving the repo a star!
