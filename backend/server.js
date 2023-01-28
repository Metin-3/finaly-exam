const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json());


const { Schema } = mongoose
const cardsSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


mongoose.set("strictQuery", false);
const Cards = mongoose.model("cards", cardsSchema)


const PORT = process.env.PORT;
const DB = process.env.URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
    console.log(err)
    if (!err) {
        console.log("CONNECTED")
        app.listen(PORT, () => {
            console.log(`PORT: ${PORT}`)
        })
    }
})

app.get("/cards", (req, res) => {
    Cards.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get("/cards/:id", (req, res) => {
    const { id } = req.params
    Cards.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(400).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.post("/cards", async (req, res) => {
    const cards = req.body;
    try {
        await Cards.create(cards)
        res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error)
    }
})

app.delete("/cards/:id", (req, res) => {
    const { id } = req.params;
    Cards.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({ message: err })
        }
    })
})