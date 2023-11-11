// Comprueba que el id de autor es un número 
const checkAutorId = (req, res, next) => {
    const { autorId } = req.params;
    if (isNaN(parseInt(autorId))) {
        return res.json({ fatal: 'El id debe ser un número' });
    }
    next();
}

module.exports = { checkAutorId };