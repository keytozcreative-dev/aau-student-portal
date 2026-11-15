const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id, studentId) => {
  return jwt.sign({ id, studentId }, process.env.JWT_SECRET || 'AAU_SUPER_SECRET_KEY_2026', {
    expiresIn: '7d',
  });
};

// @desc    تسجيل دخول الطالب
const loginStudent = async (req, res) => {
  try {
    const { studentId, password } = req.body;

    if (!studentId || !password) {
      return res.status(400).json({ message: 'يرجى إدخال الرقم الجامعي وكلمة المرور' });
    }

    // بيانات الطالب التجريبية المتكاملة
    if (studentId === '2026001' && password === '123456') {
      res.json({
        studentId: '2026001',
        name: 'أحمد محمد',
        faculty: 'كلية علوم الحاسوب وتقانة المعلومات',
        gpa: 3.85,
        financials: { totalRequired: 25000, paid: 10000 },
        token: generateToken('1', '2026001'),
      });
    } else {
      res.status(401).json({ message: 'الرقم الجامعي أو كلمة المرور غير صحيحة' });
    }
  } catch (error) {
    res.status(500).json({ message: 'خطأ في السيرفر', error: error.message });
  }
};

// @desc    جلب بيانات الطالب الحالي
const getStudentProfile = async (req, res) => {
  try {
    res.json({
      studentId: '2026001',
      name: 'أحمد محمد',
      faculty: 'كلية علوم الحاسوب وتقانة المعلومات',
      gpa: 3.85,
      financials: { totalRequired: 25000, paid: 10000 }
    });
  } catch (error) {
    res.status(500).json({ message: 'خطأ في السيرفر', error: error.message });
  }
};

module.exports = { loginStudent, getStudentProfile };