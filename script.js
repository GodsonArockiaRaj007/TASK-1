// Get elements
const enquiryBtn = document.getElementById('enquiryBtn');
const popupContainer = document.getElementById('popupContainer');
const closeBtn = document.getElementById('closeBtn');

// Show popup when enquiry button is clicked
enquiryBtn.addEventListener('click', function() {
    popupContainer.style.display = 'flex'; // Display the popup container
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', function() {
    popupContainer.style.display = 'none'; // Hide the popup container
});

// Optionally, you can close the popup by clicking outside of the popup
popupContainer.addEventListener('click', function(e) {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none'; // Hide if clicking outside
    }
});
