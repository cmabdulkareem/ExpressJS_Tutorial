const isAdmin = false
export const authMiddleware = (req, res, next) => {
    if (isAdmin) {
        next();
    } else {
        res.send('You are not authorized to access this page');
    }
}