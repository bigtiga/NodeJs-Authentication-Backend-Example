NodeJs Authentication Backend Example

This project is a Node.js backend application for authentication purposes. It includes various features such as user registration, login, and secure database connections using MongoDB.

Project Structure
- **server.js**: The main entry point of the application. Configures the server and sets up routes.
- **database/d_base.js**: Handles MongoDB connection logic.
- **routes/authroutes.js**: Contains authentication-related API routes.
- **controllers**: Holds the business logic for different endpoints.
- **models**: Contains Mongoose schemas for user data and other entities.
- **package.json**: Lists project dependencies and scripts for running the app.
- **middleware/authMiddleware.js:** Handle Token Setup and ensure individual routes are configured and handled properly 

## Getting Started
To run the project, follow these steps:
1. Clone the repository: `git clone https://github.com/bigtiga/NodeJs-Authentication-Backend-Example.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`or `node server.js` or `npm run dev`



controllers/authController.js:

    Contains logic for handling user authentication requests, such as registering new users and logging them in.
    Hashes passwords using bcrypt before saving to the database.
    Generates JWT tokens for logged-in users for secure access to protected routes.

database/d_base.js:

    Establishes a connection to a MongoDB database using Mongoose.
    Ensures the application can communicate with the database for storing and retrieving user data.

middleware/authMiddleware.js:

    Verifies JWT tokens to protect routes.
    Ensures that only authenticated users can access certain API endpoints by checking the validity of the provided token.

models/userModel.js:

    Defines the structure of the user document in MongoDB.
    Includes fields like username, email, password, and schema-level configurations like timestamps.

routes/authroutes.js:

    Defines the endpoints for user authentication.
    Routes requests (e.g., POST /register and POST /login) to the appropriate functions in authController.js.

node_modules/:

    Contains all npm packages required by the project, managed by npm or yarn.
    This folder is auto-generated and should not be edited manually.

package-lock.json:

    Ensures that the project uses the exact dependency versions specified, which helps maintain consistency across different environments.

package.json:

    Lists the project’s dependencies (e.g., Express, Mongoose, bcrypt).
    Contains scripts to start the server (npm start), run tests, etc.
    Holds project metadata, including name, version, and author.

server.js:

    The main file that initializes the Express application.
    Configures global middleware (e.g., body parsing) and mounts the routes from authroutes.js.
    Listens for incoming HTTP requests on the specified port.
