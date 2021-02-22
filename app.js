const toggleBtn = document.getElementById('toggleBtn');
let monthly = document.querySelector('.pricing__monthly');
let anually = document.querySelector('.pricing__annually');
toggleBtn.addEventListener('change', function () {
    if (toggleBtn.checked) {
        monthly.style.display = 'block';
        anually.style.display = 'none';
    } else {
        monthly.style.display = 'none';
        anually.style.display = 'block';
    }
})

