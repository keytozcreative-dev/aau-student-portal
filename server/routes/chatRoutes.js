const express = require('express');
const router = express.Router();

// @desc    معالجة رسائل الشاتبوت الذكي
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'الرجاء إدخال رسالة' });
    }

    const userMsg = message.toLowerCase();
    let botReply = "عذراً، لم أفهم استفسارك بدقة. يمكنك الاستفسار عن (التسجيل، الرسوم، النتائج، أو الجدول الدراسي).";

    if (userMsg.includes('تسجيل') || userMsg.includes('مواد')) {
      botReply = "يمكنك متابعة المقررات الدراسية عبر الانتقال إلى قسم (المقررات) في القائمة السفلية للبوابة.";
    } else if (userMsg.includes('رسوم') || userMsg.includes('سداد') || userMsg.includes('مبلغ')) {
      botReply = "الرسوم الدراسية الإجمالية 25,000 ج.س، والمبلغ المسدد 10,000 ج.س. يمكنك رفع إيصال السداد مباشرة من لوحة التحكم.";
    } else if (userMsg.includes('نتيجة') || userMsg.includes('درجات') || userMsg.includes('معدل')) {
      botReply = "معدلك التراكمي الحالي هو 3.85 (ممتاز). يمكنك الاطلاع على تفاصيل الدرجات عبر قسم (النتائج).";
    } else if (userMsg.includes('مرحبا') || userMsg.includes('السلام') || userMsg.includes('اهلا')) {
      botReply = "أهلاً بك يا زميلي العزيز في جامعة الزعيم الأزهري! كيف يمكنني مساعدتك اليوم؟";
    }

    res.json({ reply: botReply });
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ في النظام', error: error.message });
  }
});

module.exports = router;