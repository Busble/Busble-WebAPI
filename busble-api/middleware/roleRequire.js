module.exports = (requiredRole) => {
    return (req, res, next) => {
        if (req.currentUser.roles === requiredRole) {
            return next();
        } else {
            return res.status(401).send('Action not allowed');
        }
    }
}