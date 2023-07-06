const express = require('express');
const path = require('path');
const app = express();
const PORT=process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/blog'),
    path.join(__dirname, './views/users')
]);
app.use(express.static('public'));


const mainRoutes = require('./Routes/main');
const blogRoutes = require('./Routes/blogRoutes');
const userRoutes = require('./Routes/userRoutes');

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto 3000 🎇 ❤  - http:localhost ${PORT}` );
});

app.use('/', mainRoutes);
app.use('blog', blogRoutes);
app.use('user', userRoutes)
