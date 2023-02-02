
// Dependencies
const express = require('express')
const app = express()
const methodOverride = require('method-override');

const port  = process.env.PORT

// Middleware
// set folder for static files
app.use(express.static('public'))
app.use(methodOverride('_method'));  
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    next();
});

// Listener
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(port, () => {
})



