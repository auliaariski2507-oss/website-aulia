document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const detailTitle = document.getElementById("detailTitle");
  const detailText = document.getElementById("detailText");

  const detailData = {
    keahlian: {
      title: "Keahlian & Kekurangan",
      text: "Saya memiliki keahlian dalam dan dasar pengembangan web. Kekurangan saya adalah terkadang terlalu perfeksionis dalam mengerjakan sesuatu, namun hal itu juga membuat saya lebih teliti."
    },
    hard: {
      title: "Hard Skill",
      text: "HTML, CSS, JavaScript, Figma, Canva, dan dasar-dasar bahasa pemrograman seperti Python dan C++."
    },
    soft: {
      title: "Soft Skill",
      text: "Komunikatif, mampu bekerja dalam tim, kreatif, bertanggung jawab, serta memiliki kemampuan manajemen waktu yang baik."
    },
    pendidikan: {
      title: "Riwayat Pendidikan",
      text: "SDN Tempuran (2015-2021) → SMPN 3 Mojokerto (2021-2024) → SMAN 3 Mojokerto (2024-Sekarang)."
    }
  };

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.detail;
      detailTitle.textContent = detailData[key].title;
      detailText.textContent = detailData[key].text;

      // Efek animasi saat ganti isi
      const panel = document.getElementById("detailPanel");
      panel.classList.remove("fade-in");
      void panel.offsetWidth; // reset animasi
      panel.classList.add("fade-in");
    });
  });
});
