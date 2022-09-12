# MERN Ecommerce Application

<code>Currently under construction for additional features</code>

# Description

Full-stack ecommerce application built with MERN stack. This project has two features:

1. Buyers register and browse the marketplace while interacting with products across different categories.
2. Admins control and manage the marketplace items and customer acounts.

# Getting Started

## Dependencies

- Nodejs - The runtime environment of the application
- Reactjs - Component based UI library
- MongoDB - NoSQL database
- Expressjs - Framework to handle routes and requests
- Mongoose - MongoDB object modeling tool to model the database schema

## Installation

After you cloned the repository do not start the application. To run the application fully you need to create a database and collection and provide your own database URI.

### Setup

- Go to MongoDB website and create a database and a collection named 'Items' and insert the data in the <code>server/ItemsCollection.js</code> file as a document.
- Create a .env file in the server folder and type the following

```
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = mongodb+srv://<your uri from mongodb website>
```

### Running

After this you can run the project locally:

- To run the front end
  - <code>cd client</code>
  - <code>npm start</code>
- To run the back end
  - <code>cd server</code>
  - <code>npm run dev</code>
    TIP: Run both in split terminal so that you can see both ends running

# Languages and tools

- [Node](https://nodejs.org)
- [React](https://reactjs.org/)
- [Expressjs](https://expressjs.com)
- [Mongoose](https://mongoosejs.com)
- [Material UI](https://mui.com/)
