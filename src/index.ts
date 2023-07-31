import express from 'express';
import revenueRouter from './routes/revenue.router';
import expensiveRouter from './routes/expensive.router';


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/revenue', revenueRouter);
app.use('/expensive', expensiveRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
