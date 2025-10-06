// Jalankan script setelah semua elemen termuat
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const detailPanel = document.getElementById("detailPanel");
  const detailTitle = document.getElementById("detailTitle");
  const detailContent = document.getElementById("detailContent");
  const boxList = document.getElementById("boxList");

  // Pastikan semua elemen ada
  if (!boxes.length || !detailPanel || !detailTitle || !detailContent || !boxList) {
    console.error("Elemen antarmuka tidak ditemukan. Periksa kembali ID atau class HTML-nya.");
    return;
  }

  // Data detail
  const details = {
    keahlian: {
      title: "Keahlian",
      text: "Saya memiliki kemampuan dalam desain UI/UX, coding front-end (HTML, CSS, JS), dan analisis data sederhana."
    },
    kekurangan: {
      title: "Kekurangan",
      text: "Terkadang terlalu perfeksionis dalam pekerjaan, sehingga memakan waktu lebih lama untuk menyelesaikan suatu tugas."
    },
    hard: {
      title: "Hard Skill",
      text: "HTML, CSS, JavaScript, Microsoft Excel, Figma, Canva, dan analisis data dasar."
    },
    soft: {
      title: "Soft Skill",
      text: "Komunikasi yang baik, kerja sama tim, adaptif terhadap lingkungan baru, dan problem solving."
    },
    pendidikan: {
      title: "Riwayat Pendidikan",
      text: "Lulusan SMA Negeri 3 Mojokerto, jurusan IPA. Saat ini melanjutkan studi di bidang Teknologi Informasi."
    }
  };

  // Klik setiap box → tampilkan panel detail
  boxes.forEach(box => {
    box.addEventListener("click", (e) => {
      e.stopPropagation(); // Supaya klik tidak ikut event body

      const type = box.dataset.detail;
      const detail = details[type];

      if (detail) {
        detailTitle.textContent = detail.title;
        detailContent.textContent = detail.text;
        boxList.classList.add("shift-left");
        detailPanel.classList.add("active");
      } else {
        console.warn(`Detail untuk tipe '${type}' tidak ditemukan.`);
      }
    });
  });

  // Klik di luar area box & panel → tutup panel
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".box") && !detailPanel.contains(e.target)) {
      detailPanel.classList.remove("active");
      boxList.classList.remove("shift-left");
    }
  });
});
