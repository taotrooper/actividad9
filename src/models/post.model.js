const selectAllPosts = () => {
    return db.query(
        'SELECT p.*, a.nombre AS nombre_autor, a.email AS email_autor, a.imagen AS imagen_autor FROM practica9.posts AS p JOIN practica9.autores AS a ON p.idautor = a.idautor'
        );
}

const selectPostById = (postId) => {
    return db.query(
        'SELECT p.*, a.nombre AS nombre_autor, a.email AS email_autor, a.imagen AS imagen_autor FROM practica9.posts AS p JOIN practica9.autores AS a ON p.idautor = a.idautor WHERE idpost = ?', 
        [postId]);
}

const selectPostsbyAuthorId = (authorId) => {
    return db.query(
        'SELECT p.*, a.nombre AS nombre_autor, a.email AS email_autor, a.imagen AS imagen_autor FROM practica9.posts AS p JOIN practica9.autores AS a ON p.idautor = a.idautor WHERE p.idautor = ?',
        [authorId]
    );
}

const insertPost = ({titulo, descripcion, categoria, idautor}) => {
    return db.query(
        'insert into posts (titulo, descripcion, categoria, idautor) values (?, ?, ?, ?)',
        [titulo, descripcion, categoria, idautor]
    );
}

module.exports = { selectAllPosts, selectPostById, selectPostsbyAuthorId, insertPost };