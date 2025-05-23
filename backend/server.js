const express = require('express');
const connectDB = require('./db/connection.js');
const authRouter = require('./router/router.js');
const cors = require('cors');

const app = express();

app.use(cors());           // <-- CORS first!
app.use(express.json());
app.use('/api', authRouter);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

async function startServer() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}



startServer();
