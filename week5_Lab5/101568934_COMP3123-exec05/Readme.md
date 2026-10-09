# Express.js Basics with Routing

## Section A: Practical Coding Tasks

### 1. Creating an Express.js Route for Home Page

Write a route in Express.js that serves a `home.html` file. Create a new HTML file called `home.html` that contains an `<h1>` tag with the message "Welcome to ExpressJs Tutorial". Ensure that the home page is served to the client when the `/home` route is accessed.

Example implementation:

```javascript
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});
```

The `home.html` file contains:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ExpressJS Tutorial</title>
  </head>
  <body>
    <h1>Welcome to ExpressJs Tutorial</h1>
  </body>
</html>
```

---

### 2. Serving JSON Data from a User File

Modify the route `/profile` to return all details from a `user.json` file in JSON format. The file should be sent as a response when a client makes a request to the `/profile` route.

Example implementation:

```javascript
const users = require('../user.json');

routerUser.get('/profile', (req, res) => {
    res.json(users);
});
```

The route can be accessed using:

```text
GET /api/v1/user/profile
```

---

### 3. Implementing User Authentication

Modify the `/login` route to accept `username` and `password` as JSON body parameters.

Read user data from the `user.json` file.

If the `username` and `password` are valid, return:

```json
{
    "status": true,
    "message": "User Is valid"
}
```

If the `username` is invalid, return:

```json
{
    "status": false,
    "message": "User Name is invalid"
}
```

If the `password` is invalid, return:

```json
{
    "status": false,
    "message": "Password is invalid"
}
```

Example implementation:

```javascript
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body || {};

    const user = users;

    if (user.username !== username) {
        return res.json({
            status: false,
            message: "User Name is invalid"
        });
    }

    if (user.password !== password) {
        return res.json({
            status: false,
            message: "Password is invalid"
        });
    }

    return res.json({
        status: true,
        message: "User Is valid"
    });
});
```

The route can be accessed using:

```text
POST /api/v1/user/login
```

---

### 4. Creating a Logout Route

Modify the `/logout` route to accept a `username` as a parameter.

Return a message in HTML format that displays:

```html
<b>{username} successfully logged out.</b>
```

Example implementation:

```javascript
routerUser.get('/logout/:username', (req, res) => {
    const username = req.params.username;

    res.send(`<b>${username} successfully logged out.</b>`);
});
```

For example:

```text
GET /api/v1/user/logout/bret
```

returns:

```html
<b>bret successfully logged out.</b>
```

---

### 5. Add Error Handling Middleware

Add error-handling middleware that returns HTTP status code `500` with the message:

```text
Server Error
```

Example implementation:

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});
```

This middleware handles errors that are passed to Express and prevents the application from failing without an appropriate response.

---

## Section B: Short Answer Questions

### 6. Explain the Purpose of `express.Router()` in the Code Above

**Question:** Why is `express.Router()` used in Express.js applications, and how does it benefit the code structure?

**Answer:**

`express.Router()` is used in Express.js to create a separate router for handling related routes. It helps organize the application by keeping routes in separate files instead of putting every route inside the main `index.js` file.

In this exercise, `express.Router()` is used inside `routes/users.js`:

```javascript
const express = require('express');
const routerUser = express.Router();
```

The user-related routes such as `/profile`, `/login`, and `/logout/:username` are added to this router.

For example:

```javascript
routerUser.get('/profile', (req, res) => {
    res.json(users);
});
```

At the end of `users.js`, the router is exported:

```javascript
module.exports = routerUser;
```

It is then imported into `index.js`:

```javascript
const userRouter = require('./routes/users');
```

The router is connected to the application using:

```javascript
app.use('/api/v1/user', userRouter);
```

Therefore, the `/profile` route becomes:

```text
/api/v1/user/profile
```

Using `express.Router()` provides several benefits:

- It keeps the application organized.
- It separates related routes into different files.
- It makes the code easier to read.
- It makes the application easier to maintain.
- It makes it easier to add more routes in the future.
- It prevents the main `index.js` file from becoming too large.

---

### 7. Error Handling in Express.js

**Question:** How would you implement error handling in the Express routes to ensure that any issues, such as file not found or server errors, are appropriately handled? Provide an example.

**Answer:**

Error handling is used to handle unexpected problems that occur while the application is running. Examples include server errors, invalid operations, or problems while processing a request.

Express provides error-handling middleware. Error-handling middleware contains four parameters:

```javascript
(err, req, res, next)
```

For example:

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});
```

If an error occurs and is passed to `next(err)`, Express sends an HTTP `500` response with the message:

```text
Server Error
```

For example, an error can be passed from a route like this:

```javascript
app.get('/example', (req, res, next) => {
    try {
        throw new Error('Something went wrong');
    } catch (err) {
        next(err);
    }
});
```

The following statement passes the error to the Express error-handling middleware:

```javascript
next(err);
```

The middleware then handles the error and returns an appropriate response instead of allowing the application to fail unexpectedly.

A `404 Not Found` response can also be used when a requested route or resource does not exist.

For example:

```javascript
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});
```

This makes the application more reliable because errors are handled properly and appropriate HTTP status codes and messages are returned to the client.

---

## Section C: Bonus

### 7. Dynamic Port Binding in Express.js

**Question:** Explain how the `app.listen(process.env.port || 8081)` line works and why it is useful in production environments.

**Answer:**

The `app.listen()` method starts the Express web server and tells it which port it should listen on for incoming requests.

For example:

```javascript
app.listen(process.env.port || 8081);
```

The expression:

```javascript
process.env.port
```

checks whether a port number has been provided through an environment variable.

The `||` operator means "OR". Therefore, if an environment port is available, the application uses that port. If an environment port is not available, the application uses port `8081`.

In this exercise, the server is implemented as:

```javascript
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log('Web Server is listening at port ' + PORT);
});
```

When running locally, the application uses:

```text
8081
```

and can be accessed using:

```text
http://localhost:8081
```

Dynamic port binding is useful in production because hosting environments may assign their own port number to an application. The application should use the port supplied by the environment instead of always requiring a fixed port.

Therefore:

```javascript
process.env.PORT || 8081
```

allows the same application to work both locally and in a production environment without changing the source code.

---

# Testing

The application was tested using Postman.

The following routes were tested successfully:

### Home Page

```text
GET /home
```

Expected output:

```text
Welcome to ExpressJs Tutorial
```

### User Profile

```text
GET /api/v1/user/profile
```

Returns the user information stored in `user.json`.

### Valid Login

```text
POST /api/v1/user/login
```

Example request:

```json
{
    "username": "bret",
    "password": "bret@123"
}
```

Response:

```json
{
    "status": true,
    "message": "User Is valid"
}
```

### Invalid Username

Example request:

```json
{
    "username": "wronguser",
    "password": "bret@123"
}
```

Response:

```json
{
    "status": false,
    "message": "User Name is invalid"
}
```

### Invalid Password

Example request:

```json
{
    "username": "bret",
    "password": "wrongpassword"
}
```

Response:

```json
{
    "status": false,
    "message": "Password is invalid"
}
```

### Logout

```text
GET /api/v1/user/logout/bret
```

Response:

```html
<b>bret successfully logged out.</b>
```

---

# MongoDB Atlas

A MongoDB Atlas account was created and the Atlas dashboard was accessed successfully as required for this exercise.

A screenshot of the MongoDB Atlas account/dashboard is included with the exercise screenshots.

---

# How to Run the Project

Install the required dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

For development using Nodemon:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:8081
```

---

# Submission Guidelines

## Step 1: Complete the Exercise

1. Complete all Node.js, Express.js, and routing requirements.
2. Fix any errors found in the provided source code.
3. Run and test the application using Postman.
4. Capture screenshots showing the successful API responses.
5. Include a screenshot showing successful MongoDB Atlas login.

---

## Step 2: Create ZIP File

Before creating the ZIP file:

- Make sure all required source files are included.
- Include the Postman and MongoDB Atlas screenshots.
- Remove the `node_modules` folder to reduce the ZIP file size.

The ZIP file should be named:

```text
101568934_COMP3123-exec05.zip
```

---

## Step 3: Create GitHub Repository

Create a GitHub repository named:

```text
101568934_COMP3123-exec05
```

The project can be committed using:

```bash
git init
git add .
git commit -m "Complete COMP3123 Exercise 05"
git branch -M main
```

Add the GitHub repository as the remote repository and push the project to GitHub.

---

## Step 4: Upload Screenshots

Include the required screenshots in the GitHub repository.

Screenshots should demonstrate:

- Home page
- User profile
- Valid login
- Invalid username
- Invalid password
- Logout
- MongoDB Atlas account/login

---

## Step 5: Submission

Submit:

1. GitHub repository URL
2. `101568934_COMP3123-exec05.zip`
3. Required screenshots

---

# Student Information

**Student ID:** 101568934  
**Course:** COMP3123  
**Exercise:** Exercise 05 - Express.js Basics with Routing