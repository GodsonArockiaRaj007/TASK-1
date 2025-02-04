
const enquiryBtn = document.getElementById('enquiryBtn');
const popupContainer = document.getElementById('popupContainer');
const closeBtn = document.getElementById('closeBtn');


enquiryBtn.addEventListener('click', function() {
    popupContainer.style.display = 'flex'; 
});


closeBtn.addEventListener('click', function() {
    popupContainer.style.display = 'none'; 
});


popupContainer.addEventListener('click', function(e) {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none'; 
    }
});
