const urlParams = new URLSearchParams(window.location.search);
const hadithId = urlParams.get('id');

// Example data, replace with actual data source
const hadithData = {
    1: { title: "Хадис о доброте", subtitle: "Subtitle 1", content: "Content of Hadith 1" },
    2: { title: "Хадис о знаниях", subtitle: "Subtitle 2", content: "Content of Hadith 2" },
    // ... other hadith data ...
};

const hadith = hadithData[hadithId];
if (hadith) {
    document.getElementById('hadith-title').textContent = hadith.title;
    document.getElementById('hadith-subtitle').textContent = hadith.subtitle;
    document.getElementById('hadith-content').textContent = hadith.content;
}
