const blogControllers = {
    getAllPost: (req, res) => {
        const posts = [
            {
                id: 1,
                titlePost: 'Nombre del primer posteo',
                img: '/img/imagenPosteoUno.jpg',
                text: 'Texto explicativo'
            },
            {
                id: 2,
                titlePost: 'Nombre del segundo posteo',
                img: '/img/imagenPosteoDos.jpg',
                text: 'Texto explicativo'
            }
        ]
        res.render('allPost', { title: 'Posteos', posts })
    },

    getCreatePost: (req, res) => {
        res.render('createPost', { title: 'Nuevo posteo' })
    },

    getEditPost: (req, res) => {
        res.render('editPost', { title: 'Editar un posteo' })
    },

    getPost: (req, res) => {
        res.render('post', { title: 'Posteo' })
    }
};

module.exports = blogControllers;

