import * as jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    const token = req.cookies.authcookie;
    const jwtSecret = process.env.JWT_SECRET;
    if (!token || !jwtSecret) {
        return res.status(401).json({ error: 'No session.' });
    }

    try {
        const decodedToken = jwt.verify(token, jwtSecret);
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'No session.' });
    }
};

export default auth;
