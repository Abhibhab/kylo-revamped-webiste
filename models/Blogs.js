//Will pass .toUTCString().slice(5,16) to date;
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  author: { type: String, required: true },
  avatar: { type: String},
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  date: {
    type: String,
    default: (new Date()).toLocaleDateString("en-GB"),
  },
});
mongoose.models = {};

module.exports = mongoose.model("Blogs", BlogSchema);
