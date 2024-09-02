document.querySelectorAll('.hadith').forEach(hadith => {
    hadith.addEventListener('click', function() {
        const hadithId = this.getAttribute('data-id');
        window.location.href = `hadith.html?id=${hadithId}`;
    });
});
