const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    //desta forma nao precisa definir o click na postagem do doc
    click: { type: Number, default: 0 }
})
module.exports = mongoose.model("Link", linkSchema);

