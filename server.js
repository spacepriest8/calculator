// // server.js
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const calcRoute=require('./express-calculator')

// app.use(express.json());
// app.use(express.json());
// // app.use('/repos/', calcRoute);
// app.use('/documents/repos/express-calculator/server', calcRoute);
// //C:\Users\USER\Documents\express-calculator\calculator-api

// // Basic calculator functions
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => {
//     if (b === 0) {
//         throw new Error('Cannot divide by zero');
//     }
//     return a / b;
// };

// // Routes
// app.get('/add', (req, res) => {
//     const { a, b } = req.query;
//     const result = add(Number(a), Number(b));
//     res.json({ result });
// });

// app.get('/subtract', (req, res) => {
//     const { a, b } = req.query;
//     const result = subtract(Number(a), Number(b));
//     res.json({ result });
// });

// app.get('/multiply', (req, res) => {
//     const { a, b } = req.query;
//     const result = multiply(Number(a), Number(b));
//     res.json({ result });
// });

// app.get('/divide', (req, res) => {
//     const { a, b } = req.query;
//     try {
//         const result = divide(Number(a), Number(b));
//         res.json({ result });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Calculator API running at http://localhost:${port}`);
// });


const express = require('express');
const app = express();
// const calcRoute = require('./route/v1/user');
const calcRoute = require('./routes/calculate')
const PORT = 5000;

app.use(express.json());
// app.use('/v1/user', calcRoute);
app.use('/calculate', calcRoute);


app.get('/api/calculate', (req, res)=>{
  res.status(200).json({message: 'working'});

});

app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
});

