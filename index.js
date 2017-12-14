const express = require('express');
const fs = require('fs');

const app = express();
const template = fs.readFileSync('index.html', 'utf-8');

function replace(str, tag, value) {
	return str.replace(`[${tag}]`, value);
}
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.send(template);
});

app.listen(3000, () => {
	console.log("2048 loaded!");
});

