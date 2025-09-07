# MERN Dashboard Frontend (React + Vite)

A responsive dashboard application built with React.js. Features include authentication, dashboard widgets, user profile, API integration, and state management using Context API.

## Project Structure
```
mern_project/
├── public/
│   └── ... (static assets)
├── src/
│   ├── assets/           # Images, logos, etc.
│   ├── components/       # Reusable UI components
│   ├── context/          # Context API files (e.g., UserContext.jsx)
│   ├── pages/            # Page components (LoginSignup.jsx, Dashboard.jsx, UserProfile.jsx)
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.jsx          # Entry point
├── package.json
├── README.md
└── ... (other config files)
```
## Project Setup Instructions

1. **Clone or download the repository.**
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Available Pages
- **Login/Signup:** `/`
- **Dashboard:** `/dashboard`
- **User Profile:** `/profile`

## Dependencies Used
- **react**: UI library
- **react-dom**: React DOM rendering
- **vite**: Frontend build tool
- **react-router-dom**: Routing between pages

## State Management
- **Context API**: Used for managing user state globally

## API Integration
- **jsonplaceholder**: Used for mock API data (fallback to mock data if unreachable)

## Responsive Design
- All pages are styled for desktop and mobile using CSS and media queries.

## Customization
- You can switch the API endpoint in `UserProfile.jsx` to use MockAPI.io or your own JSON server.
- For advanced state management, you can integrate Redux Toolkit.




