# ChatGPT Clone – Backend 🧠

This repository contains the backend code for the [ChatGPT Clone Frontend](https://github.com/ZiadGamalDev/chatgpt-clone-frontend), built using **NestJS** and integrated with **OpenAI API**.

## 🚀 Features

- RESTful API to handle user chat input.
- Connects to OpenAI to get AI-generated responses.
- Modular NestJS structure.
- Smooth integration with the frontend via HTTP.

## 🧱 Technologies Used

- **NestJS** (TypeScript)
- **OpenAI SDK**
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
   git clone https://github.com/ZiadGamalDev/chatgpt-clone-backend.git
   cd chatgpt-clone-backend
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

## 🌐 Frontend Repo

👉 [ChatGPT Clone Frontend](https://github.com/ZiadGamalDev/chatgpt-clone-frontend)

## 📜 License

MIT License
