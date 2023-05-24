const burger = document.querySelector('.burger');
if (burger) {
    const menuBody = document.querySelector('.menu');
    burger.addEventListener('click', function () {
        document.body.classList.toggle('_locked')
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}   