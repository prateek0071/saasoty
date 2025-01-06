import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB
const uri = "mongodb://localhost:27017/saasoty_db";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Define a schema and model
const itemSchema = new mongoose.Schema({
    toolName : String,
    description : String,
    ratings : Object,
    availibility :Object, 
    icon : String
});

const Item = mongoose.model("saas_products", itemSchema);

// Routes
app.get("/api/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(Item);
    console.log(`Server running on http://localhost:${PORT}`);
});



