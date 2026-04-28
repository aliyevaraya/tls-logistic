document.addEventListener('click', function (e) {

    const block = e.target.closest('.form__form-block');

    // bütün block-ları yoxla
    document.querySelectorAll('.form__form-block').forEach(item => {
        const input = item.querySelector('input, textarea, select');
        const label = item.querySelector('label');

        // əgər value boşdursa → active sil
        if (label && (!input || !input.value.trim())) {
            label.classList.remove('active');
        }
    });

    // klik block daxilindədirsə
    if (block) {
        const label = block.querySelector('label');
        if (label) {
            label.classList.add('active');
        }
    }

});


// ///////////
const checkboxes = document.querySelectorAll('.av-form input[type="checkbox"]');
const button = document.querySelector('.form-block-submit button');

function updateButtonStyle() {
    const checkedCount = document.querySelectorAll('.av-form input[type="checkbox"]:checked').length;
    const total = checkboxes.length;

    // alpha 0.4 → 1 arası artsın
    const alpha = 0.4 + (checkedCount / total) * 0.6;

    button.style.backgroundColor = `rgba(225, 37, 27, ${alpha})`;
    button.style.color = `rgba(225, 255, 255, ${alpha})`;
}

checkboxes.forEach(cb => {
    cb.addEventListener('change', updateButtonStyle);
});

// initial
updateButtonStyle();


/////////////
const servicesBtn = document.querySelector('.header-body__services');
const headerMenu = document.querySelector('.header-menu');
const body = document.body;

servicesBtn.addEventListener('click', () => {
  servicesBtn.classList.toggle('open');
  headerMenu.classList.toggle('open');
  body.classList.toggle('lock');
});