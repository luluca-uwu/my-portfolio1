<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website đã load xong!');

    // Alert chào mừng (chỉ hiện ở trang chủ)
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        alert('Chào mừng bạn đến với portfolio của mình!');
    }

    // Xử lý form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gửi thành công! (demo thôi nha 😄)');
        });
    }
=======
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website đã load xong!');

    // Alert chào mừng (chỉ hiện ở trang chủ)
    if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
        alert('Chào mừng bạn đến với portfolio của mình!');
    }

    // Xử lý form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gửi thành công! (demo thôi nha 😄)');
        });
    }
>>>>>>> b0965bb (done portfolio)
});