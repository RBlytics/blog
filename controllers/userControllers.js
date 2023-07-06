const userControllers = {
    getLogin: (req, res) => {
        res.render('login', { title: 'Login' })},

    getRegister: (req, res) => {
        res.render('register', { title: 'Registrarme' })},
};

module.exports = userControllers;
