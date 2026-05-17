// DAFTAR KOLEKSI: BISA FOTO ATAU VIDEO
// CARA ISI:
// - Kalau FOTO: isi tipe: 'foto', url: 'link_foto_akhirnya_.jpg/.png'
// - Kalau VIDEO: isi tipe: 'video', url: 'link_video_akhirnya_.mp4'
// - Semua link ambil dari Catbox.moe ya!

const daftarKoleksi = [
    {
        tipe: 'foto',
        url: 'https://files.catbox.moe/ajvxsp.jpg', // GANTI LINK FOTO DARI CATBOX
        keterangan: 'Foto Bersama Seluruh Kelas XII RPL Saat Kunjungan Industri'
    },
    {
        tipe: 'foto',
        url: 'https://files.catbox.moe/4b1rfr.jpg', // GANTI LINK FOTO DARI CATBOX
        keterangan: 'Berkunjung Kerumah Miss Dewi Tercinta'
    },
    {
        tipe: 'video', // TANDA INI ADALAH VIDEO
        url: 'https://files.catbox.moe/xyz789.mp4', // GANTI LINK VIDEO (.mp4) DARI CATBOX
        keterangan: 'Video Kegiatan Perpisahan Kelas'
    },
    {
        tipe: 'video',
        url: 'https://files.catbox.moe/qwe456.mp4', // GANTI LINK VIDEO DARI CATBOX
        keterangan: 'Video Dokumentasi Pentas Seni'
    },
    {
        tipe: 'foto',
        url: 'https://files.catbox.moe/lkj012.jpg', // GANTI LINK FOTO DARI CATBOX
        keterangan: 'Kenangan Berbagi Makan Siang'
    }
    // Tambahkan baris di atas kalau mau nambah foto/video lagi
];

// PROSES MENAMPILKAN KE HALAMAN
const galeriContainer = document.getElementById('galeriContainer');

daftarKoleksi.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'foto-item';

    // Mengecek apakah isinya Video atau Foto
    if (item.tipe === 'video') {
        // TAMPILAN UNTUK VIDEO
        itemElement.innerHTML = `
            <video controls preload="metadata" poster="https://files.catbox.moe/abc123.jpg">
                <source src="${item.url}" type="video/mp4">
                Browser kamu tidak mendukung pemutaran video.
            </video>
            <p>🎥 ${item.keterangan}</p>
        `;
        // *Keterangan: Bagian "poster" bisa diisi link foto biasa sebagai sampul video sebelum diputar
    } else {
        // TAMPILAN UNTUK FOTO
        itemElement.innerHTML = `
            <img src="${item.url}" alt="${item.keterangan}">
            <p>📸 ${item.keterangan}</p>
        `;
    }

    galeriContainer.appendChild(itemElement);
});

// EFEK GULIR HALUS KETIKA KLIK MENU NAVIGASI
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tujuan = document.querySelector(this.getAttribute('href'));
        tujuan.scrollIntoView({ behavior: 'smooth' });
    });
});
