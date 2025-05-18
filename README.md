# EduConnectF
# RVCE Communication System

A comprehensive web application for RVCE (R.V. College of Engineering) that facilitates communication and information sharing between students, faculty, and administrators.

## Features

### 1. User Authentication
- Separate login/registration for students and teachers
- Email validation for @rvce.edu.in domain
- Secure password handling with bcrypt encryption

### 2. Social Features
- User profiles with academic information
- Post sharing functionality
- Follow/unfollow system
- News feed with timeline posts

### 3. Academic Resources
- Department information and faculty details
- Course materials and announcements
- Event calendar and notifications
- Internship opportunities

### 4. AI-Powered Q&A System
- Interactive chatbot for common queries
- Teacher review system for AI responses
- Question history tracking
- Department-specific information



## Tech Stack

### Frontend
- React.js
- Material-UI
- CSS3
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- Python (for AI chatbot)

### AI/ML
- Google Gemini AI
- Streamlit

## Setup Instructions
# Frontend
cd client
npm install

# Backend
cd api
npm install

#create .env file in api
MONGO_URL=your_mongodb_url
GEMINI_API_KEY=your_gemini_api_key

#create .env in client
REACT_APP_PUBLIC_FOLDER=http://localhost:3000/assets/

##run the app;ication
  # Frontend (from client directory)
  npm start
  
  # Backend (from api directory)
  npm start
  
  # Chatbot (from api directory)
  streamlit run chatbot.py

