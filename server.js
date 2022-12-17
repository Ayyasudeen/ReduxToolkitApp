import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(json());


app.post("/api/users/:id/update", (req, res) => {
    setTimeout(() => {
        res.send(req.body);
    }, 2000);
});

app.listen(8800, () => {
    console.log("backend Server is running...")
});