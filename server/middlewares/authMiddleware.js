const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.student = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'غير مصرح بالدخول، التوكن غير صالح' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'غير مصرح بالدخول، لا يوجد توكن' });
  }
};

module.exports = { protect };
