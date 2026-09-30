const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON body
app.use(express.json());
// Static middleware to serve files from public folder
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// GET /user using query parameters
app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Pritesh";
    const lastname = req.query.lastname || "Patel";

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /user using path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

// POST /users using body
app.post("/users", (req, res) => {
    res.json(req.body);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});