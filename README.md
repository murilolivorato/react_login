# Building a Secure Login System with React + Redux Toolkit and Laravel

A comprehensive guide to implementing a secure authentication system using React with Redux Toolkit for the frontend and Laravel for the backend.

<p align="center">
<br><br>
<img src="https://miro.medium.com/v2/resize:fit:700/1*fdzXWkl-taACTN5Eg4bBoQ.png" alt="Intro" /><br>
</p>


## Overview

This project demonstrates how to build a secure login system with:
- React frontend with Redux Toolkit for state management
- Laravel backend for authentication
- Secure token-based authentication
- Protected routes
- User session management

## Features

- Secure user authentication
- Token-based authorization
- Protected routes
- Redux state management
- Responsive UI with Bulma CSS
- Font Awesome icons integration
- Environment variable management
- Axios for API communication


## Prerequisites

### Backend Requirements
- PHP 8.1 or higher
- Composer
- Laravel 10.x
- MySQL or another database system

### Frontend Requirements
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

## Installation

### Backend Setup

1. Clone the Laravel repository:
```bash
git clone <laravel-repository-url>
cd laravel-auth-backend
```

2. Install dependencies:
```bash
composer install
```

3. Configure your environment:
```bash
cp .env.example .env
php artisan key:generate
```

4. Run migrations:
```bash
php artisan migrate
```

For detailed backend setup instructions, visit: [Laravel Backend Setup Guide](https://medium.com/p/44029c0a91f3)

### Frontend Setup

1. Create a new React application:
```bash
npx create-react-app auth-frontend
cd auth-frontend
```

2. Install required dependencies:
```bash
# Redux and Redux Toolkit
npm install @reduxjs/toolkit react-redux

# UI and Styling
npm install bulma
npm install --save @fortawesome/react-fontawesome
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons

# Routing and API
npm i react-router-dom@6
npm install axios

# Environment Variables
npm install dotenv --save
```

## Project Structure

### Frontend Structure

src/
├── components/
│ ├── auth/
│ │ ├── Login.js
│ │ └── Register.js
│ └── layout/
│ └── Navbar.js
├── features/
│ └── auth/
│ └── authSlice.js
├── store/
│ └── store.js
├── services/
│ └── api.js
├── utils/
│ └── auth.js
└── App.js
Apply



### Backend Structure
app/
├── Http/
│ ├── Controllers/
│ │ └── AuthController.php
│ └── Middleware/
│ └── Authenticate.php
├── Models/
│ └── User.php
└── routes/
└── api.php


## Configuration

### Frontend Environment Setup
Create a `.env` file in your React project root:
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_STORAGE_KEY=auth_token
```

### Redux Store Configuration
```javascript
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
```

### API Configuration
```javascript
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(process.env.REACT_APP_STORAGE_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

## Key Features Implementation

### Authentication Flow
1. User submits login credentials
2. Backend validates and returns JWT token
3. Frontend stores token and updates Redux state
4. Protected routes check authentication status
5. API requests include token in headers

### Protected Routes
```javascript
// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

### Redux Auth Slice
```javascript
// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});
```

## Usage

### Login Component
```javascript
// components/auth/Login.js
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic
    const response = await api.post('/login', credentials);
    dispatch(login(response.data));
  };

  return (
    // Login form JSX
  );
};
```

## Security Considerations

1. **Token Management**
   - Secure token storage
   - Token expiration handling
   - Automatic token refresh

2. **API Security**
   - HTTPS implementation
   - CORS configuration
   - Request validation

3. **User Data Protection**
   - Password hashing
   - Input sanitization
   - XSS prevention

## Best Practices

1. **State Management**
   - Use Redux Toolkit for predictable state updates
   - Implement proper error handling
   - Maintain clean action creators

2. **Code Organization**
   - Follow feature-based structure
   - Implement proper separation of concerns
   - Use consistent naming conventions

3. **Security**
   - Implement proper token management
   - Use environment variables for sensitive data
   - Follow security best practices

## Author

**Murilo Livorato**
- GitHub: [murilolivorato](https://github.com/murilolivorato)
- LinkedIn: [Murilo Livorato](https://www.linkedin.com/in/murilo-livorato-80985a4a/)



## 📸 Screenshots

### Login Page
![Login Page](https://miro.medium.com/v2/resize:fit:700/1*YhRX1xdswQOWbWNtVEPPQg.png)

### Form Error
![Login Page](https://miro.medium.com/v2/resize:fit:700/1*qMeF_qcKnsRwroRYQKgcqA.png)

### Form Error
![Login Page](https://miro.medium.com/v2/resize:fit:700/1*f9fmZgzVXsljsP0sJK4egQ.png)


## Contributing

Feel free to submit issues and pull requests to improve this implementation.

## Acknowledgments

This implementation follows modern best practices for building secure authentication systems in React and Laravel applications.


<div align="center">
  <h3>⭐ Star This Repository ⭐</h3>
  <p>Your support helps us improve and maintain this project!</p>
  <a href="https://github.com/murilolivorato/react_login/stargazers">
    <img src="https://img.shields.io/github/stars/murilolivorato/react_login?style=social" alt="GitHub Stars">
  </a>
</div>

