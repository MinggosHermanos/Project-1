// --- STATE & DATA ---
const appState = {
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    isMenuOpen: false,
    isSearchOpen: false,
};

// --- RENDER FUNCTIONS ---
function renderHeader() {
    const { theme, isMenuOpen, isSearchOpen } = appState;
    let html = '';
    if (isSearchOpen) {
        html = `<div class="sticky top-0 z-20 flex items-center justify-between p-3 sm:p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-slate-800"><input id="search-input" type="text" placeholder="Cari dan tekan Enter..." onkeydown="handleSearchKey(event)" class="w-full bg-transparent text-gray-800 dark:text-slate-200 placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none text-lg" autofocus /><button onclick="toggleSearch(false)" class="p-2 rounded-full text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button></div>`;
    } else {
        html = `<div class="relative"><header class="sticky top-0 z-20 flex items-center justify-between p-3 sm:p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200 dark:border-slate-800"><div class="flex items-center space-x-3"><button onclick="toggleMenu()" class="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 dark:bg-blue-600 text-white shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">${isMenuOpen ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`}</button><h1 class="text-2xl font-bold text-gray-800 dark:text-slate-200 tracking-tight">Sandex</h1></div><div class="flex items-center space-x-1 sm:space-x-2"><button onclick="toggleSearch(true)" class="p-2 rounded-full text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button><button onclick="toggleTheme()" class="p-2 rounded-full text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700">${theme === 'light' ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`}</button></div></header><div class="absolute top-full left-0 right-0 z-10 p-2 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}"><div class="bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-100 dark:border-slate-700 p-2"><nav class="flex flex-col space-y-1"><a href="index.html" class="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors">Halaman utama</a><a href="about.html" class="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors">About Us</a></nav></div></div></div>`;
    }
    document.getElementById('header-container').innerHTML = html;
}

function getFooterHTML() {
    return `<footer class="bg-slate-800 dark:bg-black text-slate-400 mt-auto"><div class="max-w-6xl mx-auto py-10 px-4 sm:px-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h3 class="text-sm font-bold tracking-wider uppercase text-slate-300 mb-4">SUPPORT</h3><a href="#" class="block text-lg hover:text-white transition-colors">Saweria</a></div><div><h3 class="text-sm font-bold tracking-wider uppercase text-slate-300 mb-4">ABOUT</h3><a href="about.html" class="block text-lg hover:text-white transition-colors">About Us</a></div></div><div class="mt-8 pt-8 border-t border-slate-700 dark:border-slate-600 text-center text-slate-500"><p>&copy; ${new Date().getFullYear()} Sandex. All rights reserved.</p></div></div></footer>`;
}

// --- EVENT HANDLERS ---
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    appState.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', appState.theme);
    renderHeader(); // Cukup render ulang header untuk ikonnya
}

function toggleMenu() {
    appState.isMenuOpen = !appState.isMenuOpen;
    renderHeader();
}

function toggleSearch(open) {
    appState.isSearchOpen = open;
    appState.isMenuOpen = false;
    renderHeader();
}

function handleSearchKey(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        if(query.trim()) {
            // Logika untuk redirect ke halaman pencarian di masa depan
            console.log("Mencari:", query);
        }
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Render bagian yang sama di semua halaman
    renderHeader();
    document.getElementById('footer-container').innerHTML = getFooterHTML();

    // Jalankan fungsi spesifik halaman jika ada
    if (typeof initHomePage === 'function') {
        initHomePage();
    }
    if (typeof initAboutPage === 'function') {
        initAboutPage();
    }
});
