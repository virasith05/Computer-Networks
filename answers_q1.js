// Optional: Add any interactive JS later if needed
console.log("Q1 Answers page loaded.");

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    // Toggle sidebar
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
        toggleBtn.classList.add('active');
        mainContent.classList.add('sidebar-active');
    });

    // Close sidebar
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
        toggleBtn.classList.remove('active');
        mainContent.classList.remove('sidebar-active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleBtn = toggleBtn.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggleBtn) {
            sidebar.classList.remove('active');
            toggleBtn.classList.remove('active');
            mainContent.classList.remove('sidebar-active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            mainContent.classList.remove('sidebar-active');
        }
    });
});
