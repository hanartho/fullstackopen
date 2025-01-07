const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit();
}

const password = process.argv[2];

const url = `mongodb+srv://hanart:${password}@cluster0.rvdjox8.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const blogSchema = new mongoose.Schema({
  author: String,
  title: String,
  url: String,
  rating: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const blog = new Blog({
  author: "MONGODB TESTI 2",
});

blog.save().then((res) => {
  console.log("blog saved");
  mongoose.connection.close();
});
