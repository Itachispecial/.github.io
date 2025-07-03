// 移动端导航栏折叠按钮脚本
window.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');
    if (navToggle && navUl) {
        navToggle.addEventListener('click', function() {
            navUl.classList.toggle('show');
        });
        // 点击菜单项后自动收起菜单（可选）
        navUl.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('show');
            });
        });
    }
});
