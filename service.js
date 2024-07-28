document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuList = document.getElementById('menu-list');

    menu.addEventListener('click', function () {
        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
        } else {
            menuList.style.display = 'block';
        }
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuList.contains(event.target)) {
            menuList.style.display = 'none';
        }
    });
});
