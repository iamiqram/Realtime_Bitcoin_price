import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;;

app.set("view engine", "ejs");


app.get("/", async (req,res) => {
    try {
        const response = await axios.get("https://blockchain.info/ticker");
        res.render("index", { content: response.data.USD.last });
    } catch (error) {
        console.error("Failed to fetch Bitcoin data:", error.message);
        res.status(500).send("Failed to fetch bitcoin price.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});