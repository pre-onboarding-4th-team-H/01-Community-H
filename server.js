const app = require("./app");

const PORT = process.env.PORT;

app.listen(app.get("port"), () => {
  console.log(`Server is running on port ${PORT}.`);
});
