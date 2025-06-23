// ===================================================================
// DATABASE POSTINGAN
// CUKUP EDIT FILE INI UNTUK MENAMBAH ATAU MENGUBAH POSTINGAN
// ===================================================================

const postsData = [
    { 
        id: 1, 
        title: 'Judul Postingan 1', 
        category: 'Kategori 1', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+1', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+1',
        // Tautan video untuk postingan ini
        videoLinks: [
            { title: 'Tonton Video 1 (Kualitas HD)', url: '#' },
            { title: 'Tonton Video 1 (Kualitas SD)', url: '#' }
        ] 
    },
    { 
        id: 2, 
        title: 'Judul Postingan 2', 
        category: 'Kategori 2', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+2', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+2',
        // Cukup satu tautan video untuk postingan ini
        videoLinks: [
            { title: 'Tonton Video Sekarang', url: '#' }
        ]
    },
    { 
        id: 3, 
        title: 'Judul Postingan 3', 
        category: 'Kategori 1', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+3', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+3',
        videoLinks: [
            { title: 'Tonton Video 3', url: '#' }
        ] 
    },
    { 
        id: 4, 
        title: 'Judul Postingan 4', 
        category: 'Kategori 3', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+4', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+4',
        videoLinks: [
            { title: 'Tonton Video 4', url: '#' }
        ]
    },
    {
        id: 5, 
        title: 'Judul Postingan 5', 
        category: 'Kategori 4', 
        imageUrl: 'https://placehold.co/400x400/eeeeee/333333?text=Foto+5', 
        detailImage: 'https://placehold.co/400x600/eeeeee/333333?text=Foto+Detail+5',
        videoLinks: [
            { title: 'Tonton Video 5', url: '#' }
        ]
    },

    // ===================================================================
    // CONTOH MENAMBAH POSTINGAN BARU:
    // Salin (copy) salah satu blok di atas, tempel (paste) di sini,
    // lalu ubah isinya. JANGAN LUPA ganti 'id' nya.
    // ===================================================================
    /*
    { 
        id: 6, // <-- Ganti ID
        title: 'Judul Postingan BARU', // <-- Ganti Judul
        category: 'Teknologi', // <-- Ganti Kategori
        imageUrl: 'URL_GAMBAR_ANDA_DISINI.jpg', // <-- Ganti URL Gambar
        detailImage: 'URL_GAMBAR_DETAIL_ANDA.jpg', // <-- Ganti URL Gambar Detail
        videoLinks: [
            { title: 'Tonton Video Baru (720p)', url: 'URL_VIDEO_ANDA_1' },
            { title: 'Tonton Video Baru (1080p)', url: 'URL_VIDEO_ANDA_2' }
        ] 
    },
    */
];
