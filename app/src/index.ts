import express, { Request, Response } from 'express';
import actuator from 'express-actuator';

const app = express();
const port = process.env.PORT || 3000;

app.use(actuator());

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});