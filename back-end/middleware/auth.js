import jwt from 'jsonwebtoken'

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    //check for token
    if(!token) res.status(401).json({msg: 'No token, authorization denied'})
    
    // verify token
    const decoded = jwt.verify(token, )
}