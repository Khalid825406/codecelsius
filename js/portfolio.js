// Filtering logic
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Highlight active button
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-emerald-600', 'text-white', 'hover:bg-emerald-50');
            btn.classList.add('bg-gray-100', 'text-gray-700');
        });

        button.classList.remove('bg-gray-100', 'text-gray-700');
        button.classList.add('bg-emerald-600', 'text-white');

        // Show/Hide items based on filter
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.classList.add('block');
            } else {
                item.classList.remove('block');
                item.classList.add('hidden');
            }
        });
    });
});
