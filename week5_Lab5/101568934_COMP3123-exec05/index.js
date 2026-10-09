
const express = require('express');
const path = require('path');

const app = express();
const userRouter = require('./routes/users');

// Middleware to parse JSON requests
app.use(express.json());

// Add User Router
app.use('/api/v1/user', userRouter);

/*
- Create new html file named home.html
- Add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
Error handling middleware
- Return status 500 with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

// Start server
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
