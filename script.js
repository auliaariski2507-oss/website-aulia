// === INTERAKSI PANEL DETAIL ===
const cards = document.querySelectorAll(".card");
const detailPanel = document.getElementById("detailPanel");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
const cardsContainer = document.querySelector(".cards-container");

const detailContent = {
  keahlian: {
    title: "Keahlian & Kekurangan",
    text: `
      <ul>
        <li><strong>Keahlian:</strong> Desain UI/UX, Pemrograman Web, Public Speaking.</li>
        <li><strong>Kekurangan:</strong> Kadang terlalu perfeksionis dan overthinking 😅.</li>
      </ul>
    `
  },
  hard: {
    title: "Hard Skill",
    text: `
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Figma, Canva, Photoshop</li>
        <li>Microsoft Office</li>
      </ul>
    `
  },
  soft: {
    title: "Soft Skill",
    text: `
      <ul>
        <li>Komunikasi Efektif</li>
        <li>Kerja Tim</li>
        <li>Kreatif & Adaptif</li>
      </ul>
    `
  },
  pendidikan: {
    title: "Riwayat Pendidikan",
    text: `
      <ul>
        <li>SD Negeri 1 Contoh (2010–2016)</li>
        <li>SMP Negeri 2 Contoh (2016–2019)</li>
        <li>SMA Negeri 3 Mojokerto (2019–2022)</li>
        <li>Universitas Contoh - Informatika (2022–Sekarang)</li>
      </ul>
    `
  }
};

cards.forEach(card => {
  card.addEventListener("click", () => {
    const type = card.getAttribute("data-detail");
    const content = detailContent[type];

    // Tampilkan panel dengan isi
    detailPanel.classList.add("show");
    cardsContainer.classList.add("shift-left");

    detailTitle.textContent = content.title;
    detailText.innerHTML = content.text;
  });
});

// Klik di luar panel untuk menutup
document.addEventListener("click", (e) => {
  if (!e.target.closest(".card") && !e.target.closest(".detail-panel")) {
    detailPanel.classList.remove("show");
    cardsContainer.classList.remove("shift-left");
  }
});
