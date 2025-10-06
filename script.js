const boxes = document.querySelectorAll('.box');
const detailPanel = document.getElementById('detailPanel');
const detailTitle = document.getElementById('detailTitle');
const detailContent = document.getElementById('detailContent');
const boxList = document.getElementById('boxList');

const details = {
  keahlian: {
    title: 'Keahlian',
    text: 'Saya memiliki kemampuan dalam desain UI/UX, coding front-end (HTML, CSS, JS), dan analisis data sederhana.'
  },
  kekurangan: {
    title: 'Kekurangan',
    text: 'Terkadang terlalu perfeksionis dalam pekerjaan, sehingga memakan waktu lebih lama untuk menyelesaikan suatu tugas.'
  },
  hard: {
    title: 'Hard Skill',
    text: 'HTML, CSS, JavaScript, Microsoft Excel, Figma, Canva, dan analisis data dasar.'
  },
  soft: {
    title: 'Soft Skill',
    text: 'Komunikasi yang baik, kerja sama tim, adaptif terhadap lingkungan baru, dan problem solving.'
  },
  pendidikan: {
    title: 'Riwayat Pendidikan',
    text: 'Lulusan SMA Negeri 3 Mojokerto, jurusan IPA. Saat ini melanjutkan studi di bidang Teknologi Informasi.'
  }
};

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const type = box.dataset.detail;
    detailTitle.textContent = details[type].title;
    detailContent.textContent = details[type].text;

    boxList.classList.add('shift-left');
    detailPanel.classList.add('active');
  });
});

// Klik area kosong untuk menutup panel
document.body.addEventListener('click', (e) => {
  if (!e.target.classList.contains('box') && !detailPanel.contains(e.target)) {
    detailPanel.classList.remove('active');
    boxList.classList.remove('shift-left');
  }
});
