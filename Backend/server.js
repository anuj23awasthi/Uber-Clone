const http = require('http');
const app = require('./app');

// Correct variable name: Use 'port' instead of 'ports'
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Use the correct variable name and backticks for template literals
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
