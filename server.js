import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

// Middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
