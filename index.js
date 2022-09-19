const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

const { json } = require('body-parser');
const consola = require('consola');
const morgan = require('morgan');

const { notFound, errorHandler } = require('./middlewares/asyncHandler');
const { PORT } = require('./constants');

// import tableApi from './routes/table.route';
const tableApi = require('./routes/table.route');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(json());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

app.use('/api/v1/table', tableApi);
app.get('/', async (req, res) => {
  res.status(200).json({ message: 'Welcome to Node.js & Express' });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  consola.success(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
