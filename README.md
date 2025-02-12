# 🎬 Movie Booking App - Client

The **Movie Booking App Client** is a React-based frontend application that allows users to browse movies, select showtimes, book tickets, and make secure online payments. It is built with **React.js**, **Material-UI (MUI)** for UI components, and **TanStack React Query** for API state management.

## 🌟 Features

### 🏠 Home & Movie Listing

- Browse currently running movies with detailed information.
- Search and filter movies by genre, language, or rating.

### 🎟️ Booking & Showtime Selection

- Select movie showtimes from an interactive UI.
- Dynamic **seat selection** based on availability.
- Book tickets and view booking history.

### 🔐 Authentication & User Profile

- Secure **JWT-based login and signup**.
- User dashboard with booking history.
- Role-based access (User/Admin).

### 💳 Payment Gateway

- Secure online payments with **Razorpay integration**.
- Instant booking confirmation after successful transactions.

### 🎨 Modern UI & UX

- Built with **React.js** and styled using **Material-UI (MUI)**.
- Fully responsive design for **mobile & desktop users**.

---

## 🛠️ Tech Stack

| Stack                      | Technology Used                        |
| -------------------------- | -------------------------------------- |
| **Frontend**               | React.js, Vite                         |
| **State Management**       | TanStack React Query                   |
| **Styling**                | Material-UI (MUI), Emotion (CSS-in-JS) |
| **Routing**                | React Router                           |
| **API Communication**      | Axios                                  |
| **Date Handling**          | Moment.js                              |
| **Payment Gateway**        | Razorpay                               |
| **Linting & Code Quality** | ESLint                                 |

---

## 📌 Installation & Setup

### 🔽 1. Clone the Repository

```bash
git clone https://github.com/Me3T/movie-booking-app-client.git
cd movie-booking-app-client
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ⚙️ 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure it as follows:

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_RAZORPAY_KEY=your_razorpay_public_key
```

### 🚀 4. Start the Development Server

```bash
npm run dev
```

The app will be available at **`http://localhost:5173`**.

---

## 🏗️ Project Structure

```bash
movie-booking-app-client/
│── node_modules/        # Dependencies
│── src/                 # Source Code
│   ├── api/             # API Call
│   ├── pages/           # Page Views (Home, Movies, Booking, etc.)
│   ├── hooks/           # Custom React Hooks (React Query, Auth, etc.)
│   ├── App.jsx          # Main App Component
│   ├── main.jsx         # App Entry Point
│── .env                 # Environment Variables
│── package.json         # Project Metadata
│── README.md            # Documentation
```

---

## 🛡️ Security Best Practices

- Store **API keys securely** and avoid committing `.env` files.
- Implement **input validation & error handling** to enhance security.

## ✨ Contributing

We welcome contributions to improve the **Movie Booking App Client**! 🚀  
To contribute:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes**
4. **Commit your changes**:
   ```bash
   git commit -m "Added new feature"
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
6. **Submit a Pull Request** 🚀

---
