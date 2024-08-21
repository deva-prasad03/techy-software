import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Homepage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Schema and Model
const homeSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Home = mongoose.model('Home', homeSchema);

// Handle POST request to save form data
app.post('/submit', async (req, res) => {
    const formData = new Home(req.body);
    try {
        await formData.save();
        res.send('Form data saved successfully');
    } catch (err) {
        res.status(500).send('Error saving form data');
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
