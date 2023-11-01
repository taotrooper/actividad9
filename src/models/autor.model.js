const selectAllAutores = () => {
    return db.query('select * from autores');
}

const selectAutorById = (autorId) => {
    return db.query('select * from autores where idautor = ?', [autorId]);
}

const insertAlumno = ({nombre, email, imagen}) => {
    return db.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)',
        [nombre, email, imagen]
    );
}

module.exports = { selectAllAutores, selectAutorById, insertAlumno };