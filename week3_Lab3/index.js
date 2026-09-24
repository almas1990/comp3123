var http = require("http");
const employees = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        else if (req.url === '/employee')  {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(employees));
        }

        else if (req.url === '/employee/names')  {
            res.setHeader("Content-Type", "application/json");
           const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`).sort();
           res.end(JSON.stringify(names));
        }

        else if (req.url === '/employee/totalsalary') {
            res.setHeader("Content-Type", "application/json");
            const totalSalary = employees.reduce((total, emp) => total + emp.Salary, 0);
            res.end(JSON.stringify({ total_salary: totalSalary }));
    }
    else {
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
}
}
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})