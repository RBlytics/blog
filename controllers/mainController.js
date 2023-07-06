const mainController = {
    home: (req, res) => {
        res.render('index', { title: 'My blog'})
    },
    contact: (req, res) => {
        res.render('contact', { title: 'Contacto'})
    },
    about: (req, res) => {
        res.render('about', { title: 'Sobre mí'})
    },

};

module.exports = mainController;

