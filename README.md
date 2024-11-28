# StudyApp


## 1. Introduction


**Project Title**: StudyApp - Naan Mudhalvan Project


**Team Members**:
- **Member 1**:  
  **Name**: Sumit Kumar  
  **Role**: Team Lead and Backend Developer  
  [Github Profile](https://github.com/Sumitrazz)


- **Member 2**:  
  **Name**: Prince Kumar Ram  
  **Role**: Frontend Developer  
  [Github Profile](https://github.com/princekumarram)


- **Member 3**:  
  **Name**: Vicky Kumar  
  **Role**: Pentester and Documentation  
  [Github Profile](https://github.com/pwnb0y)


- **Member 4**:  
  **Name**: Rohit Kumar Pandey  
  **Role**: UI UX Developer
[Github Profile](https://github.com/rohitkumar-pandey)


---


## 2. Project Overview


**Purpose**:  
StudyApp is a comprehensive educational platform developed as part of the Naan Mudhalvan project. The application provides a seamless learning experience, enabling users to access educational resources, track progress, and engage in interactive learning modules.


**Features**:
- User authentication and profile management
- Access to a wide range of study materials and resources
- Progress tracking and performance analytics
- Interactive quizzes and assessments
- Real-time notifications and updates
- Community features for collaborative learning


---


## 3. Architecture


- **Frontend**:  
  The frontend is built using **React.js** along with **Redux Toolkit** for state management and **TailwindCSS** for styling. Components are organized for modularity and reusability.


- **Backend**:  
  The backend is structured using **Node.js** and **Express.js**. It handles API endpoints, authentication, and CRUD operations, with middleware for validation and authorization.


- **Database**:  
  **MongoDB** is used to store and manage user data, study materials, and community interactions. Collections include `Users`, `StudyMaterials`, and `StudyGroups`.


---


## 4. Setup Instructions


**Prerequisites**:  
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn


**Installation**:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sumitrazz/StudyApp-naan-mudhalvan-Project.git
   cd StudyApp-naan-mudhalvan-Project
   ```


2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```


3. **Set up environment variables**:  
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```


---


## 5. Folder Structure


- **Client (Frontend - React)**:
  ```
  client/
  ├── src/
  │   ├── components/        # Reusable components
  │   ├── pages/             # Main pages (Dashboard, Profile, etc.)
  │   ├── hooks/             # Custom React hooks
  │   └── App.js             # Main app component
  └── public/                # Public assets
  ```


- **Server (Backend - Node.js and Express)**:
  ```
  server/
  ├── models/                # MongoDB schemas (User, StudyMaterial)
  ├── routes/                # API routes (userRoutes, studyRoutes)
  ├── controllers/           # Route handlers
  ├── middleware/            # Middleware for authentication
  └── server.js              # Main server file
  ```


---


## 6. Running the Application


**Frontend**:  
To start the frontend server, navigate to the client directory and run:
```bash
npm start
# or
yarn start
```


**Backend**:  
To start the backend server, navigate to the server directory and run:
```bash
npm start
# or
yarn start
```


---


## 7. API Documentation


| Endpoint                | Method | Description                        | Parameters                |
|-------------------------|--------|------------------------------------|---------------------------|
| `/api/auth/signup`      | POST   | Register a new user               | `email`, `password`       |
| `/api/auth/login`       | POST   | Login an existing user            | `email`, `password`       |
| `/api/materials`        | GET    | Get all study materials           | -                         |
| `/api/materials`        | POST   | Add new study material            | `title`, `content`        |
| `/api/materials/:id`    | DELETE | Delete a study material by ID     | `id`                      |


**Example Response**:
```json
{
  "success": true,
  "message": "Material retrieved successfully"
}
```


---


## 8. Authentication


Authentication is implemented using **JWT (JSON Web Tokens)**. Upon login, users receive a token, which is stored locally on the client and used for secure access to protected routes. The backend includes middleware to validate tokens.


---


## 9. User Interface


<!-- Add screenshots or GIFs here, e.g.: -->
- **Dashboard View**: ![Dashboard](./screenshots/dashboard.png)
- **Study Materials**: ![Study Materials](./screenshots/study_materials.png)


---


## 10. Testing


Testing is conducted with **Jest** and **React Testing Library** on the frontend, and **Mocha** on the backend. Tests cover both unit and integration aspects to ensure application stability.


---


## 11. Screenshots or Demo

![Screenshot (2394)](https://github.com/user-attachments/assets/e656535f-e230-461d-b31d-cc49cd775241)
![Screenshot (2393)](https://github.com/user-attachments/assets/195fb973-4b19-45d8-bd92-04f9a7977bb0)
![Screenshot (2392)](https://github.com/user-attachments/assets/720168b2-8e30-413e-9d0e-78b66f6d425c)
![Screenshot (2391)](https://github.com/user-attachments/assets/d85e3a85-3922-44b5-8a6e-a021f801ca2a)
![Screenshot (2390)](https://github.com/user-attachments/assets/038d4a64-3cf9-46cf-9a06-f37ae963519a)
![Screenshot (2396)](https://github.com/user-attachments/assets/ecd0dfa8-3e1e-4b9c-803f-2ae862f0b6ad)
![Screenshot (2395)](https://github.com/user-attachments/assets/e50697cf-16e0-45c8-8d2a-862d5c84e25b)




---


## 12. Known Issues


- Some users experience logout issues due to token expiration.
- Performance slows when fetching a large volume of study materials.


---


## 13. Future Enhancements


- Implement a search feature for study materials.
- Add push notifications for task reminders.
- Expand collaborative learning features, such as real-time editing.


--- 

