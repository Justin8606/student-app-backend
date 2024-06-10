const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "rollNo":String,
        "admNo":String,
        "college":String
    }
)

mongoose.Model("students",schema)