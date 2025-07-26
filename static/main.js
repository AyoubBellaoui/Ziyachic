
/** Form */
document.querySelector('.custom-form').addEventListener('submit', function (e) {
if (!this.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
}
this.classList.add('was-validated');
});

// عند إرسال النموذج
document.querySelector('.custom-form').addEventListener('submit', function (e) {
e.preventDefault();
const fields = this.querySelectorAll('.input-field');

fields.forEach(field => {
    const group = field.closest('.field-group');
    if (!field.checkValidity() || !field.value.trim()) {
    group.classList.add('invalid');
    } else {
    group.classList.remove('invalid');
    }
});
});

// إخفاء رسالة الخطأ مباشرة عند بدء الكتابة
document.querySelectorAll('.input-field').forEach(input => {
input.addEventListener('input', function () {
    const group = this.closest('.field-group');
    if (this.value.trim() !== '') {
    group.classList.remove('invalid');
    }
});
});



document.addEventListener('DOMContentLoaded', () => {
const navbarCollapse = document.getElementById('navbarColor04');

// حدد كل الروابط داخل النافبار سواء روابط تنقل أو أزرار تواصل اجتماعي
const allNavLinks = navbarCollapse.querySelectorAll('a.nav-link, .social-btn');

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
    // إذا كانت القائمة مفتوحة (في وضع الموبايل)
    if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
        bsCollapse.hide();
        }
    }
    });
});
});

