// Comprueba que el id de post es un número
const checkPostId = (req, res, next) => {
    const { postId } = req.params;
    if (isNaN(parseInt(postId))) {
        return res.json({ fatal: 'El id debe ser un número' });
    }
    next();
}

// Comprueba que el id de autor es un número
const checkAutorId = (req, res, next) => {
    const { id } = req.query;
    if (isNaN(parseInt(id))) {
        return res.json({ fatal: 'El id de autor debe ser un número' });
    }
    next();
}

module.exports = { checkPostId, checkAutorId };