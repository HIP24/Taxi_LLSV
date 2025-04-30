// Function to switch to German
function switchToGerman() {
    document.getElementById('deButton').classList.add('active');
    document.getElementById('enButton').classList.remove('active');
    window.location.href = "index.html"; // Redirect to German version
}

// Function to switch to English
function switchToEnglish() {
    document.getElementById('enButton').classList.add('active');
    document.getElementById('deButton').classList.remove('active');
    window.location.href = "index_en.html"; // Redirect to English version
}

// Automatically set the active button based on the current page
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current file name
    if (currentPage === "index_en.html") {
        document.getElementById('enButton').classList.add('active');
        document.getElementById('deButton').classList.remove('active');
    } else {
        document.getElementById('deButton').classList.add('active');
        document.getElementById('enButton').classList.remove('active');
    }
});