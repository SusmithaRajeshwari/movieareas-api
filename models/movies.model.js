import { Schema, model } from "mongoose";

const schema = new Schema({
    title:String,
    desc:String
})

const Model = model("Movie",schema)

export default Model