const express = require ("express");
require ("./db.js")

//intialise this app
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hey!");
});

const port = 5000;

app.listen(port, () => console.log(`Server runnning on port: ${port}`))