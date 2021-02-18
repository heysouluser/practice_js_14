let formSlider = document.querySelector('.form-slider');

document.querySelector('.read-rules').onclick = function () {
   formSlider.style.marginLeft = '-250px';
};

document.querySelectorAll('.read-rules-back').forEach(elem => {
   elem.onclick = () => formSlider.style.marginLeft = '0';
});

