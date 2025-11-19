# ZAI – Backend 🧠

This repository contains the backend code for the [ZAI Frontend](https://github.com/ZiadGamalDev/zai-frontend), built using **NestJS** and integrated with **AI API**.

## 🚀 Features

- RESTful API to handle user chat input.
- Connects to AI service to get AI-generated responses.
- Modular NestJS structure.
- Smooth integration with the frontend via HTTP.

## 🧱 Technologies Used

- **NestJS** (TypeScript)
- **AI SDK**
- **Axios / HTTP Client**
- **Node.js**

## 📁 Project Structure

```
src/
├── chat/
│   ├── chat.controller.ts
│   ├── chat.service.ts
│   └── chat.schema.ts
├── openai/
│   ├── openai.controller.ts
│   ├── openai.service.ts
├── main.ts
```

## 🛠️ Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/ZiadGamalDev/zai-backend.git
   cd zai-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   OPENAI_API_KEY=your_openai_key
   ```

4. Run the server:
   ```bash
   npm run start
   ```

Server will run at `http://localhost:3001` (or your configured port).

## 🌐 Production Deployment

The backend is deployed and running at: [https://zai-api.ziadgamal.com/](https://zai-api.ziadgamal.com/)

## 🌐 Frontend Repo

👉 [ZAI Frontend](https://github.com/ZiadGamalDev/zai-frontend)

## 📜 License

MIT License
