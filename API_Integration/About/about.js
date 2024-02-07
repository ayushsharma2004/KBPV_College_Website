function showContent(id) {
    // Hide all content containers
    var contentContainers = document.querySelectorAll('.content-container');
    contentContainers.forEach(function (container) {
        container.classList.remove('active');
    });

    // Show the selected content container
    var selectedContainer = document.getElementById(id);
    selectedContainer.classList.add('active');
}