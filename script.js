// Data foto kenangan - Kamu bisa ganti URL dan keterangannya nanti
const daftarFoto = [
    {
        url: "https://via.placeholder.com/400x300/3498db/ffffff?text=Foto+Kelas",
        keterangan: "Foto Bersama Seluruh Kelas XII RPL"
    },
    {
        url: "https://via.placeholder.com/400x300/e74c3c/ffffff?text=Praktik+Sekolah",
        keterangan: "Momen Praktik Pemrograman Web"
    },
    {
        url: "https://via.placeholder.com/400x300/2ecc71/ffffff?text=Kegiatan+Sekolah",
        keterangan: "Kegiatan Hari Pendidikan Nasional"
    },
    {
        url: "https://via.placeholder.com/400x300/f39c12/ffffff?text=Istirahat",
        keterangan: "Momen Istirahat dan Bercanda Bersama"
    },
    {
        url: "https://via.placeholder.com/400x300/9b59b6/ffffff?text=Karya+Siswa",
        keterangan: "Pameran Hasil Karya Proyek Akhir"
    },
    {
        url: "https://via.placeholder.com/400x300/1abc9c/ffffff?text=Foto+Berdua",
        keterangan: "Kenangan Bersama Teman Dekat"
    }
];

// Memasukkan foto ke dalam halaman
const galeriContainer = document.getElementById('galeriContainer');

daftarFoto.forEach(foto => {
    const fotoElement = document.createElement('div');
    fotoElement.className = 'foto-item';
    fotoElement.innerHTML = `
        <img src="${foto.url}" alt="${foto.keterangan}">
        <p>${foto.keterangan}</p>
    `;
    galeriContainer.appendChild(fotoElement);
});

// Efek gulir halus saat klik menu navigasi
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tujuan = document.querySelector(this.getAttribute('href'));
        tujuan.scrollIntoView({ behavior: 'smooth' });
    });
});
