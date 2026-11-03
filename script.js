// DEMO TEXT WITH SYNTAX ~ AND ~~
const SAMPLE_TEXT = `~ Kura-Kura dan Kelinci
~~
Di sebuah hutan yang lebat dan asri, hiduplah berbagai macam hewan dengan rukun. Di antara mereka, ada seekor kelinci yang terkenal sangat sombong karena kehebatannya berlari cepat. Kelinci itu selalu membual kepada setiap hewan yang ditemuinya bahwa tidak ada satupun yang bisa mengalahkannya dalam hal berlari.
~~
Suatu hari, ketika sang kelinci sedang memamerkan kecepatan berlarinya di hadapan para hewan, seekor kura-kura tua yang berjalan sangat lambat melintas di dekatnya. Melihat kura-kura berjalan tertatih-tatih, kelinci langsung tertawa terbahak-bahak mengejeknya. "Wahai kura-kura yang lambat, bagaimana bisa kau hidup dengan cara berjalan seperti itu? Apakah kakimu tidak merasa lelah?" ejek kelinci dengan nada meremehkan.
~~
Kura-kura berhenti sejenak, lalu menatap kelinci dengan tenang. Meskipun diejek di depan banyak hewan lain, kura-kura sama sekali tidak marah. Dengan suara pelan namun tegas, kura-kura berkata, "Memang benar aku berjalan lambat, Kelinci. Namun, jika kau berani, bagaimana kalau kita adakan perlombaan lari? Aku tantang kau untuk beradu cepat sampai ke puncak bukit sana."
~~
Mendengar tantangan itu, kelinci tertawa semakin kencang hingga memegang perutnya. Ia merasa tertantang sekaligus terhibur karena menganggap kura-kura sudah hilang akal. "Haikusuma! Kau menantangku berlari? Baiklah, aku terima tantangan konyolmu itu! Kapan pun kau siap, aku akan menunggu di garis finish sambil tidur siang," jawab kelinci sombong.

~ Bab 1: Garis Start Dimulai
~~
Keesokan paginya, seluruh penghuni hutan berkumpul di tepi lapangan untuk menyaksikan perlombaan yang dianggap paling tidak masuk akal sepanjang sejarah hutan tersebut. Rubah bertindak sebagai hakim garis dan memberikan aba-aba hitungan mundur. "Satu... Dua... Tiga... Mulai!" teriak sang rubah.
~~
Dalam sekejap, kelinci melesat bagaikan anak panah yang lepas dari busurnya. Kakinya yang kuat membawanya berlari sangat kencang meninggalkan debu di belakang. Dalam hitungan detik, kelinci sudah berada jauh di depan, sementara kura-kura baru melangkah beberapa langkah pertama dengan konsisten dan perlahan.
~~
Kelinci berlari dengan penuh gaya, sesekali menengok ke belakang sambil tersenyum mengejek. Ketika ia melihat bayangan kura-kura bahkan sudah tidak terlihat lagi karena terlalu jauh tertinggal, kelinci memutuskan untuk berhenti sejenak di bawah pohon yang rindang.
~~
"Huh, kura-kura itu benar-benar lambat sekali. Jaraknya masih sangat jauh di belakang," gumam kelinci dalam hati. "Lebih baik aku tidur siang dulu sebentar di sini. Anginnya sangat sejuk. Toh, nanti saat aku bangun dan berlari sedikit saja, aku pasti sudah bisa menyentuh garis finish mendahuluinya."

~ Bab 2: Kemenangan Ketekunan
~~
Kelinci pun merebahkan tubuhnya di atas rerumputan yang empuk dan tertidur pulas dengan sangat nyenyak. Ia benar-benar lupa bahwa sebuah perlombaan sedang berlangsung.
~~
Sementara itu, di belakang sana, kura-kura tidak berhenti sedetik pun. Ia terus melangkah maju, perlahan tapi pasti. Langkah kakinya kecil, namun ia tidak pernah menoleh ke belakang atau mengeluh lelah. Semangatnya untuk terus bergerak maju menjadi satu-satunya tujuan yang ia pikirkan.
~~
Jam demi jam berlalu. Tanpa disadari oleh kelinci yang masih mendengkur kencang dalam tidurnya, kura-kura akhirnya berhasil melewati tempat di mana kelinci sedang tidur. Kura-kura melihat kelinci tertidur pulas, namun ia tidak berhenti. Ia terus melangkah melewati kelinci dengan tenang.
~~
Menjelang sore hari, hembusan angin mulai terasa dingin. Kelinci tiba-tiba terbangun dari tidurnya dengan kaget. Ia meregangkan kedua tangannya dan mengucek matanya, lalu melirik ke arah matahari yang mulai condong ke barat. "Wah, gawat! Aku sudah tidur terlalu lama!" serunya panik.

~ Bab 3: Garis Akhir
~~
Kelinci langsung bangkit dan melompat berlari secepat kilat menuju puncak bukit tempat garis finish berada. Jantungnya berdegup kencang karena takut kalah taruhan. Namun, setibanya ia di dekat garis finish, pemandangan di sana membuatnya terpaku dan terbelalak tak percaya.
~~
Seluruh hewan hutan sedang bersorak-sorai meriah. Dan yang berdiri tepat di garis akhir dengan senyuman tenang adalah sang kura-kura. Kura-kura telah sampai terlebih dahulu, jauh sebelum kelinci sempat menginjakkan kakinya di sana.
~~
Kelinci terengah-engah, terduduk lemas karena malu dan kelelahan. Ia tidak menyangka bahwa kesombongannya membuat ia dikalahkan oleh hewan yang selama ini ia remehkan. Kura-kura mendekati kelinci dan berkata dengan ramah, "Ketekunan dan konsistensi akan mengalahkan kesombongan dan kemalasan, Kelinci."
~~
Sejak hari itu, kelinci tidak pernah lagi menyombongkan kemampuannya kepada hewan-hewan lain di hutan. Ia belajar untuk menghargai usaha setiap makhluk, sekecil apa pun kemampuan yang mereka miliki.`;

// STATE MANAGEMENT
let rawContent = SAMPLE_TEXT;
let parsedBlocks = []; // Structured parsed elements ({type: 'chapter'|'paragraph', text: ''})
let pages = []; // Array of content blocks per rendered page
let currentPageIndex = 0; // 0-based index for current visible left page
let isSpreadLayout = true; // true = 2 pages, false = 1 page
let currentFontSize = 16;
let currentFontFamily = 'font-merriweather';
let currentTheme = 'theme-sepia';
let chapters = []; // List of chapters with titles and page locations

// DOM ELEMENTS
const bookWrapper = document.getElementById('book-wrapper');
const pagesContainer = document.getElementById('pages-container');
const contentLeft = document.getElementById('content-left');
const contentRight = document.getElementById('content-right');
const pageLeft = document.getElementById('page-left');
const pageRight = document.getElementById('page-right');
const pageNumLeft = document.getElementById('page-num-left');
const pageNumRight = document.getElementById('page-num-right');
const bookSpine = document.getElementById('book-spine');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const pageIndicator = document.getElementById('page-indicator');
const progressBar = document.getElementById('progress-bar');

const btnLayout = document.getElementById('btn-layout');
const layoutText = document.getElementById('layout-text');
const btnSettings = document.getElementById('btn-settings');
const settingsPanel = document.getElementById('settings-panel');

const btnToc = document.getElementById('btn-toc');
const tocDrawer = document.getElementById('toc-drawer');
const tocBackdrop = document.getElementById('toc-backdrop');
const btnCloseToc = document.getElementById('btn-close-toc');
const tocList = document.getElementById('toc-list');

const btnImport = document.getElementById('btn-import');
const importModal = document.getElementById('import-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnProcessText = document.getElementById('btn-process-text');
const btnLoadDemo = document.getElementById('btn-load-demo');
const fileInput = document.getElementById('file-input');
const rawTextInput = document.getElementById('raw-text-input');

const fontSizeRange = document.getElementById('font-size-range');
const fontSizeLabel = document.getElementById('font-size-label');
const fontFamilySelect = document.getElementById('font-family-select');
const bookTitle = document.getElementById('book-title');

// INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    // Check initial responsive layout
    if (window.innerWidth < 768) {
        isSpreadLayout = false;
        updateLayoutUI();
    }

    processRawText(rawContent);

    // Event Listeners
    window.addEventListener('resize', debounce(paginate, 250));
});

// PARSING TEXT LOGIC (~ FOR CHAPTER, ~~ FOR PARAGRAPH BREAK)
function processRawText(text) {
    parsedBlocks = [];
    chapters = [];

    const lines = text.split('\n');
    let currentParagraph = "";

    lines.forEach(line => {
        const trimmed = line.trim();

        if (trimmed.startsWith('~') && !trimmed.startsWith('~~')) {
            if (currentParagraph.trim().length > 0) {
                parsedBlocks.push({ type: 'paragraph', text: currentParagraph.trim(), wordCount: countWords(currentParagraph) });
                currentParagraph = "";
            }
            const chapterTitle = trimmed.replace(/^~\s*/, '').trim();
            parsedBlocks.push({ type: 'chapter', text: chapterTitle, wordCount: 0 });
        }
        else if (trimmed === '~~' || trimmed.startsWith('~~')) {
            if (currentParagraph.trim().length > 0) {
                parsedBlocks.push({ type: 'paragraph', text: currentParagraph.trim(), wordCount: countWords(currentParagraph) });
                currentParagraph = "";
            }
            const remainingText = trimmed.replace(/^~~\s*/, '').trim();
            if (remainingText.length > 0) {
                currentParagraph = remainingText + " ";
            }
        }
        else if (trimmed.length > 0) {
            currentParagraph += trimmed + " ";
        }
    });

    if (currentParagraph.trim().length > 0) {
        parsedBlocks.push({ type: 'paragraph', text: currentParagraph.trim(), wordCount: countWords(currentParagraph) });
    }

    const firstChapter = parsedBlocks.find(b => b.type === 'chapter');
    bookTitle.innerText = firstChapter ? firstChapter.text : "Novel Tanpa Judul";

    paginate();
}

function countWords(str) {
    return str.trim().split(/\s+/).filter(Boolean).length;
}

// PAGINATION ALGORITHM (Calculates how much content fits into each page DOM container)
function paginate() {
    pages = [];
    chapters = [];

    let currentPageBlocks = [];
    let currentWordCount = 0;
    const TARGET_WORDS_PER_PAGE = 300;

    parsedBlocks.forEach((block) => {
        // Jika menemukan judul bab baru, paksa pindah ke halaman baru
        if (block.type === 'chapter') {
            if (currentPageBlocks.length > 0) {
                pages.push(currentPageBlocks);
                currentPageBlocks = [];
                currentWordCount = 0;
            }

            chapters.push({
                title: block.text,
                pageIndex: pages.length
            });

            currentPageBlocks.push(block);
            return;
        }

        // Pecah teks paragraf menjadi array kata-kata
        let words = block.text.split(/\s+/);
        let currentChunk = [];

        words.forEach(word => {
            currentChunk.push(word);
            currentWordCount++;

            // Jika jumlah kata dalam halaman saat ini sudah mencapai 300 kata, potong!
            if (currentWordCount >= TARGET_WORDS_PER_PAGE) {
                currentPageBlocks.push({
                    type: 'paragraph',
                    text: currentChunk.join(' '),
                    wordCount: currentChunk.length
                });
                pages.push(currentPageBlocks);
                currentPageBlocks = [];
                currentChunk = [];
                currentWordCount = 0;
            }
        });

        // Masukkan sisa kata dari paragraf jika belum penuh satu halaman
        if (currentChunk.length > 0) {
            if (currentWordCount + currentChunk.length > TARGET_WORDS_PER_PAGE && currentPageBlocks.length > 0) {
                pages.push(currentPageBlocks);
                currentPageBlocks = [{
                    type: 'paragraph',
                    text: currentChunk.join(' '),
                    wordCount: currentChunk.length
                }];
                currentWordCount = currentChunk.length;
            } else {
                currentPageBlocks.push({
                    type: 'paragraph',
                    text: currentChunk.join(' '),
                    wordCount: currentChunk.length
                });
            }
        }
    });

    if (currentPageBlocks.length > 0) {
        pages.push(currentPageBlocks);
    }

    if (currentPageIndex >= pages.length) {
        currentPageIndex = Math.max(0, pages.length - 1);
    }

    renderTOC();
    renderPages();
}

// RENDER CONTENT TO PAGES
function renderPages(animationDirection = null) {
    if (pages.length === 0) {
        contentLeft.innerHTML = '<p class="text-center italic opacity-60">Tidak ada konten untuk ditampilkan.</p>';
        contentRight.innerHTML = '';
        return;
    }

    // Apply turn animation if requested
    if (animationDirection === 'next') {
        pagesContainer.classList.remove('page-turn-prev', 'page-turn-next');
        void pagesContainer.offsetWidth; // Trigger reflow
        pagesContainer.classList.add('page-turn-next');
    } else if (animationDirection === 'prev') {
        pagesContainer.classList.remove('page-turn-prev', 'page-turn-next');
        void pagesContainer.offsetWidth;
        pagesContainer.classList.add('page-turn-prev');
    }

    // Render Left Page Content
    const leftBlocks = pages[currentPageIndex] || [];
    contentLeft.innerHTML = renderBlocksHTML(leftBlocks);
    pageNumLeft.innerText = currentPageIndex + 1;

    // Render Right Page Content (if Spread Layout)
    if (isSpreadLayout) {
        const rightIndex = currentPageIndex + 1;
        if (rightIndex < pages.length) {
            const rightBlocks = pages[rightIndex];
            contentRight.innerHTML = renderBlocksHTML(rightBlocks);
            pageNumRight.innerText = rightIndex + 1;
            pageRight.style.visibility = 'visible';
        } else {
            contentRight.innerHTML = '';
            pageNumRight.innerText = '';
            pageRight.style.visibility = 'hidden';
        }
    }

    // Update Page indicator & Progress bar
    const totalPages = pages.length;
    const currentDisplayNum = isSpreadLayout ? `${currentPageIndex + 1}-${Math.min(currentPageIndex + 2, totalPages)}` : `${currentPageIndex + 1}`;
    pageIndicator.innerText = `Halaman ${currentDisplayNum} dari ${totalPages}`;

    const progressPercent = Math.min(100, Math.round(((currentPageIndex + (isSpreadLayout ? 2 : 1)) / totalPages) * 100));
    progressBar.style.width = `${progressPercent}%`;

    // Navigation Button States
    btnPrev.disabled = currentPageIndex === 0;
    btnNext.disabled = isSpreadLayout ? (currentPageIndex + 2 >= totalPages) : (currentPageIndex + 1 >= totalPages);
}

// HELPER TO CONVERT BLOCK OBJECTS TO HTML
function renderBlocksHTML(blocks) {
    return blocks.map(block => {
        if (block.type === 'chapter') {
            return `<h2 class="novel-chapter-title text-xl font-bold">${escapeHTML(block.text)}</h2>`;
        } else {
            return `<p class="novel-paragraph" style="font-size: ${currentFontSize}px;">${escapeHTML(block.text)}</p>`;
        }
    }).join('');
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// RENDER TABLE OF CONTENTS
function renderTOC() {
    tocList.innerHTML = '';
    if (chapters.length === 0) {
        tocList.innerHTML = '<p class="text-xs italic text-gray-500 p-2">Tidak ditemukan penanda Bab (~)</p>';
        return;
    }

    chapters.forEach((ch, idx) => {
        const item = document.createElement('button');
        item.className = 'w-full text-left p-3 rounded-xl hover:bg-black/5 text-sm transition-colors flex justify-between items-center group';
        item.innerHTML = `
                    <span class="font-medium truncate mr-2 group-hover:text-amber-700">${escapeHTML(ch.title)}</span>
                    <span class="text-xs text-opacity-50 font-mono" style="color: var(--text-muted)">Hal ${ch.pageIndex + 1}</span>
                `;
        item.onclick = () => {
            // Navigate to chapter page
            currentPageIndex = ch.pageIndex;
            // If in spread mode and page is odd, adjust to even left page
            if (isSpreadLayout && currentPageIndex % 2 !== 0) {
                currentPageIndex -= 1;
            }
            renderPages();
            toggleTOC(false);
        };
        tocList.appendChild(item);
    });
}

// NAVIGATION LOGIC
function nextPage() {
    const step = isSpreadLayout ? 2 : 1;
    if (currentPageIndex + step < pages.length) {
        currentPageIndex += step;
        renderPages('next');
    }
}

function prevPage() {
    const step = isSpreadLayout ? 2 : 1;
    if (currentPageIndex - step >= 0) {
        currentPageIndex -= step;
        renderPages('prev');
    } else if (currentPageIndex > 0) {
        currentPageIndex = 0;
        renderPages('prev');
    }
}

btnNext.addEventListener('click', nextPage);
btnPrev.addEventListener('click', prevPage);

// Keyboard Navigation (Arrow Keys)
document.addEventListener('keydown', (e) => {
    if (importModal.classList.contains('hidden') && tocDrawer.classList.contains('-translate-x-full')) {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            prevPage();
        }
    }
});

// LAYOUT TOGGLE (Single / 2-Page Spread)
btnLayout.addEventListener('click', () => {
    isSpreadLayout = !isSpreadLayout;
    updateLayoutUI();
    paginate();
});

function updateLayoutUI() {
    if (isSpreadLayout) {
        pageRight.classList.remove('hidden');
        pageRight.classList.add('flex');
        pagesContainer.classList.add('md:grid-cols-2');
        bookSpine.classList.remove('hidden');
        layoutText.innerText = "2 Halaman";
    } else {
        pageRight.classList.add('hidden');
        pageRight.classList.remove('flex');
        pagesContainer.classList.remove('md:grid-cols-2');
        bookSpine.classList.add('hidden');
        layoutText.innerText = "1 Halaman";
    }
}

// THEME SETTINGS
function setTheme(themeName) {
    document.body.className = `${themeName} min-h-screen flex flex-col justify-between overflow-x-hidden select-none`;
    currentTheme = themeName;

    // Update Checkmark Icons
    document.querySelectorAll('.theme-check').forEach(icon => icon.classList.add('hidden'));
    if (themeName === 'theme-sepia') document.getElementById('check-sepia').classList.remove('hidden');
    if (themeName === 'theme-parchment') document.getElementById('check-parchment').classList.remove('hidden');
    if (themeName === 'theme-light') document.getElementById('check-light').classList.remove('hidden');
    if (themeName === 'theme-dark') document.getElementById('check-dark').classList.remove('hidden');
}

// FONT FAMILY SELECT
fontFamilySelect.addEventListener('change', (e) => {
    const newFont = e.target.value;
    pageLeft.classList.remove(currentFontFamily);
    pageRight.classList.remove(currentFontFamily);
    pageLeft.classList.add(newFont);
    pageRight.classList.add(newFont);
    currentFontFamily = newFont;
    paginate();
});

// FONT SIZE RANGE
fontSizeRange.addEventListener('input', (e) => {
    currentFontSize = e.target.value;
    fontSizeLabel.innerText = `${currentFontSize}px`;
    paginate();
});

// SETTINGS PANEL TOGGLE
btnSettings.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle('hidden');
});
document.addEventListener('click', (e) => {
    if (!settingsPanel.contains(e.target) && e.target !== btnSettings) {
        settingsPanel.classList.add('hidden');
    }
});

// DRAWER TOC TOGGLE
function toggleTOC(open) {
    if (open) {
        tocDrawer.classList.remove('-translate-x-full');
        tocBackdrop.classList.remove('hidden');
    } else {
        tocDrawer.classList.add('-translate-x-full');
        tocBackdrop.classList.add('hidden');
    }
}
btnToc.addEventListener('click', () => toggleTOC(true));
btnCloseToc.addEventListener('click', () => toggleTOC(false));
tocBackdrop.addEventListener('click', () => toggleTOC(false));

// IMPORT MODAL LOGIC
btnImport.addEventListener('click', () => {
    rawTextInput.value = rawContent;
    importModal.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', () => {
    importModal.classList.add('hidden');
});

// Read .txt file
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (evt) {
            let content = evt.target.result;

            // Deteksi apakah file teks memiliki penanda khusus (~ atau ~~)
            // Jika tidak ada sama sekali, kita format otomatis barisnya agar tidak kacau
            if (!content.includes('~')) {
                content = autoFormatPlainText(content);
            }

            rawTextInput.value = content;
        };
        reader.readAsText(file);
    }
});

function autoFormatPlainText(text) {
    // Pisahkan teks berdasarkan baris kosong ganda atau enter
    const paragraphs = text.split(/\r?\n\s*\r?\n/);

    let formatted = "~ Bab 1: Pengantar Novel\n~~ ";

    paragraphs.forEach((p, index) => {
        const cleanParagraph = p.replace(/\r?\n/g, ' ').trim();
        if (cleanParagraph.length > 0) {
            if (index > 0) {
                formatted += "\n~~\n" + cleanParagraph + " ";
            } else {
                formatted += cleanParagraph + " ";
            }
        }
    });

    return formatted;
}

// Process Text from Modal Input
btnProcessText.addEventListener('click', () => {
    const text = rawTextInput.value.trim();
    if (text.length > 0) {
        rawContent = text;
        currentPageIndex = 0;
        processRawText(rawContent);
        importModal.classList.add('hidden');
    }
});

// Load Demo Text
btnLoadDemo.addEventListener('click', () => {
    rawTextInput.value = SAMPLE_TEXT;
});

// UTILITY DEBOUNCE FUNCTION
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
// --- KONTROL MUSIK LATAR ---
const btnMusic = document.getElementById('btn-music');
const bgMusic = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const musicPulse = document.getElementById('music-pulse');

let isMusicPlaying = false;

btnMusic.addEventListener('click', () => {
    if (isMusicPlaying) {
        // Matikan Musik (ikon kembali transparan/redup)
        bgMusic.pause();
        musicIcon.className = "fa-solid fa-music opacity-50";
        musicPulse.classList.add('hidden');
        isMusicPlaying = false;
    } else {
        // Nyalakan Musik (ikon berubah jadi warna amber/emas dan berdenyut)
        bgMusic.play().then(() => {
            musicIcon.className = "fa-solid fa-music text-amber-700 opacity-100";
            musicPulse.classList.remove('hidden');
            isMusicPlaying = true;
        }).catch(error => {
            console.log("Gagal memutar audio otomatis:", error);
            alert("Tidak dapat memutar audio, Boss!");
        });
    }
});