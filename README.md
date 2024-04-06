# Project Management System

This is a project management system built with React, Bootstrap, Apollo Client, Nodejs, Express.js, MongoDB, and GraphQL. It allows users to manage clients and projects.

## Key Features

- **Client Management:** Users can add, view, and delete client records, including details such as name, email, and phone number.
- **Project Management:** Users can add, view, update, and delete projects associated with clients. Each project can have a name, description, and status (e.g., Not Started, In Progress, Completed).
- **User-Friendly Interface:** The application offers an intuitive user interface built with React and Bootstrap, ensuring a smooth and responsive user experience across devices.
- **GraphQL Integration:** Data manipulation and querying are handled through GraphQL, providing a flexible and efficient way to interact with the backend data layer.
- **Real-Time Updates:** The use of Apollo Client enables real-time data updates, ensuring that users always have access to the latest project and client information without needing to manually refresh the page.

## Technologies Used

- **Frontend**:
  - **React:** A JavaScript library for building user interfaces.
  - **Apollo Client:** A fully-featured caching GraphQL client.
  - **React Icons:** A collection of popular icons for React projects.
  - **Bootstrap:** A front-end framework for developing responsive and mobile-first websites.

- **Backend**:
  - **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
  - **MongoDB:** A NoSQL database for storing data (clients and projects).
  - **GraphQL:** A query language for APIs and a runtime for executing those queries.
  - **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.

## Installation

1. Clone the repository: `git clone https://github.com/KumaarBalbir/project-management` 
2. Navigate to the project directory: `cd project-management`
3. Install dependencies: `npm install` 
4. Create a .env file and include variable (`MONGO_URI` as connection string for your mongodb database and `NODE_ENV` as "development").
5. Start the development server: `npm run dev` (see `package.json` for starting the server).
6. Open a new terminal and change directory to client `cd client` and start client by `npm start`.

## Usage
- Visit the homepage to manage clients and projects.
- Use the "Add Client" and "Add Project" buttons to add new clients and projects.
- Click on projects to view details or perform actions such as deletion or updating.

## Contributing

🙂 Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
