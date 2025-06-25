// ===============================================
//   PUSAT KONTEN WEBSITE SANDEX
//   Edit file ini untuk menambah atau mengubah postingan.
// ===============================================

// --- Ganti data banner di sini ---
const bannerData = {
    imageUrl: 'https://placehold.co/1200x675/1e293b/ffffff?text=Banner+Iklan+Anda',
    linkUrl: '#' // Ganti '#' dengan link tujuan iklan Anda
};


// --- Tambah/ubah data postingan foto di sini ---
// Cukup salin satu blok {...}, paste di paling atas, lalu ganti isinya.
// Pastikan "id" selalu unik (tidak boleh ada yang sama).
const postsData = [
    { 
        id: 1, 
        title: 'Judul Postingan 1', 
        category: 'Kategori 1', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+1', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+1' 
    },
    { 
        id: 2, 
        title: 'Judul Postingan 2', 
        category: 'Kategori 2', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+2', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+2' 
    },
    { 
        id: 3, 
        title: 'Judul Postingan 3', 
        category: 'Kategori 1', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+3', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+3' 
    },
    { 
        id: 4, 
        title: 'Judul Postingan 4', 
        category: 'Kategori 3', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+4', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+4' 
    },
];


// --- (Opsional) Data untuk Kategori yang Disarankan di Halaman Pencarian ---
const suggestedCategories = [
    'Animasi', 
    'Asia/Global random', 
    'Japanese', 
    'Lifestyle', 
    'Teknologi'
];
