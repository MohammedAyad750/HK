// =================== بيانات الشركة ===================
const companyInfo = {
    phone: "07710666646",
    location_ar: "النجف الأشرف - شارع الروان",
    location_ku: "نەجەفی ئەشرەف - شەقامی ڕەوان",
    location_en: "Najaf Al-Ashraf - Al-Rawan Street",
};

// =================== المحتوى متعدد اللغات (سيتم تحميله من data.json) ===================
let multilingualData = {};

// =================== بيانات احتياطية في حال فشل تحميل data.json ===================
const fallbackData = {
    ar: {
        title: "HK", home: "الرئيسية", products: "أقسام العطور", contact: "اتصل بنا",
        hero_title: "أرقى العطور العالمية",
        hero_sub: "وكالة HK تقدم لكم عطور و بخور بأعلى جودة في العراق.",
        btn_browse: "تصفح الأقسام والمنتجات",
        btn_order: "اطلب أو استفسر عبر الواتساب",
        contact_title: "معلومات الاتصال والزيارة",
        address_label: "موقع الشركة", phone_label: "رقم الهاتف الفعلي",
        hours_label: "أوقات العمل", hours_val: "أهلاً وسهلاً بكم في جميع الأوقات",
        footer_text: "شركة HK - الفخامة والتميز في عالم العطور",
        all_categories: "كل الأقسام",
        whatsapp_pretext: "سلام عليكم، أريد طلب هذا العطر:",
        sections: []
    },
    ku: {
        title: "HK", home: "سەرەکی", products: "بەشەکانی عەتار", contact: "پەیوەندیمان پێوە بکە",
        hero_title: "ناوازەترین عەتارەکانی جیهان",
        hero_sub: "کۆمپانیای HK بەرزترین کوالیتی عەتار و بخوورتان پێشکەش دەکات لە عێراق.",
        btn_browse: "گەڕان لە بەشەکان و بەرهەمەکان",
        btn_order: "داواکردن یان پرسیارکردن لەڕێگەی واتسئەپەوە",
        contact_title: "زانیاری پەیوەندی و سەردانکردن",
        address_label: "شوێنی کۆمپانیا", phone_label: "ژمارەی تەلەفۆنی ڕاستەقینە",
        hours_label: "کاتەکانی کارکردن", hours_val: "بەخێرهاتنتان دەکەین لە هەموو کاتێکدا",
        footer_text: "کۆمپانیای HK - ڕازاوەیی و ناوازەیی لە جیهانی عەتاردا",
        all_categories: "هەموو بەشەکان",
        whatsapp_pretext: "سڵاو، دەمەوێ ئەم عەتارە داوا بکەم:",
        sections: []
    },
    en: {
        title: "HK Perfumes", home: "Home", products: "Perfume Sections", contact: "Contact Us",
        hero_title: "The Finest World Fragrances",
        hero_sub: "HK Company offers you perfumes and incense with the highest quality in Iraq.",
        btn_browse: "Browse Sections & Products",
        btn_order: "Order or Inquire via WhatsApp",
        contact_title: "Contact & Visit Information",
        address_label: "Company Location", phone_label: "Phone Number",
        hours_label: "Working Hours", hours_val: "Welcome at All Times",
        footer_text: "HK Company - Luxury & Excellence in the World of Fragrances",
        all_categories: "All Sections",
        whatsapp_pretext: "Hello, I would like to order this perfume:",
        sections: []
    }
};

// =================== تحميل البيانات من data.json ===================
async function loadJSONData() {
    try {
        const response = await fetch('js/data.json');
        if (!response.ok) throw new Error('فشل تحميل data.json');
        const data = await response.json();
        // دمج البيانات المحملة مع البيانات الاحتياطية (للحفاظ على النصوص الثابتة إن لزم)
        for (let lang in fallbackData) {
            if (data[lang]) {
                multilingualData[lang] = { ...fallbackData[lang], ...data[lang] };
            } else {
                multilingualData[lang] = { ...fallbackData[lang] };
            }
        }
    } catch (error) {
        console.warn('تعذر تحميل data.json، استخدام البيانات الاحتياطية:', error);
        multilingualData = JSON.parse(JSON.stringify(fallbackData));
    }
}

// =================== بدء الموقع ===================
(async function init() {
    await loadJSONData();
    const lang = getLanguageFromURL();
    applyDirection(lang);
    fillContent(lang);
})();

// =================== الدوال الأساسية ===================
function getLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    let lang = params.get('lang') || 'ar';
    if (!multilingualData[lang]) lang = 'ar';
    return lang;
}

function applyDirection(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ku') ? 'rtl' : 'ltr';
}

function fillContent(lang) {
    const content = multilingualData[lang];
    if (!content) return;

    document.title = content.title;
    const homeLink = document.getElementById('homeLink');
    if (homeLink) homeLink.textContent = content.home;
    const productsLink = document.getElementById('productsLink');
    if (productsLink) productsLink.innerHTML = content.products + ' <i class="fa-solid fa-chevron-down" style="font-size:11px; margin-right:4px;"></i>';
    const contactLink = document.getElementById('contactLink');
    if (contactLink) contactLink.textContent = content.contact;
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) heroTitle.textContent = content.hero_title;
    const heroSub = document.getElementById('heroSub');
    if (heroSub) heroSub.textContent = content.hero_sub;
    const btnBrowse = document.getElementById('btnBrowse');
    if (btnBrowse) btnBrowse.textContent = content.btn_browse;
    const btnOrder = document.getElementById('btnOrder');
    if (btnOrder) btnOrder.textContent = content.btn_order;
    const contactTitle = document.getElementById('contactTitle');
    if (contactTitle) contactTitle.textContent = content.contact_title;
    const addressLabel = document.getElementById('addressLabel');
    if (addressLabel) addressLabel.textContent = content.address_label;
    const phoneLabel = document.getElementById('phoneLabel');
    if (phoneLabel) phoneLabel.textContent = content.phone_label;
    const hoursLabel = document.getElementById('hoursLabel');
    if (hoursLabel) hoursLabel.textContent = content.hours_label;
    const hoursVal = document.getElementById('hoursVal');
    if (hoursVal) hoursVal.textContent = content.hours_val;
    const footerText = document.getElementById('footerText');
    if (footerText) footerText.textContent = content.footer_text;

    const locElem = document.getElementById('officeLocation');
    const phoneElem = document.getElementById('officePhone');
    if (locElem) {
        if (lang === 'ar') locElem.textContent = companyInfo.location_ar;
        else if (lang === 'ku') locElem.textContent = companyInfo.location_ku;
        else locElem.textContent = companyInfo.location_en;
    }
    if (phoneElem) phoneElem.textContent = companyInfo.phone;

    fillDropdown(content);
    fillLangSwitcher(lang);
    renderSections(content);
}

function fillDropdown(content) {
    const dropdown = document.getElementById('dropdownContent');
    if (!dropdown) return;
    dropdown.innerHTML = '';
    if (content.sections && content.sections.length > 0) {
        content.sections.forEach(section => {
            const a = document.createElement('a');
            a.href = `#${section.id}`;
            a.textContent = section.title;
            a.addEventListener('click', () => {
                if (typeof closeDropdown === 'function') closeDropdown();
            });
            dropdown.appendChild(a);
        });
    }
}

function fillLangSwitcher(lang) {
    const container = document.getElementById('langSwitcher');
    if (!container) return;
    const langs = [
        { code: 'ar', label: 'العربية' },
        { code: 'ku', label: 'کوردی' },
        { code: 'en', label: 'English' }
    ];
    container.innerHTML = '';
    langs.forEach((l, index) => {
        const a = document.createElement('a');
        a.href = `?lang=${l.code}`;
        a.textContent = l.label;
        if (l.code === lang) a.classList.add('active-lang');
        a.addEventListener('click', (e) => {
            e.preventDefault();
            changeLanguage(l.code);
        });
        container.appendChild(a);
        if (index < langs.length - 1) {
            container.appendChild(document.createTextNode(' | '));
        }
    });
}

function renderSections(content) {
    const container = document.getElementById('sectionsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (!content.sections || content.sections.length === 0) return;

    content.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('decor-section');
        sectionDiv.id = section.id;

        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerHTML = `<i class="fa-solid fa-spray-can-sparkles"></i> ${section.title}`;
        sectionDiv.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'products-grid';

        if (section.items && section.items.length > 0) {
            section.items.forEach(item => {
                const card = document.createElement('div');
                card.className = item.images && item.images.length > 0 ? 'product-card multi-image' : 'product-card single-image';

                const imageBox = document.createElement('div');
                imageBox.className = 'image-box';
                const mainImg = document.createElement('img');
                mainImg.src = item.placeholder;
                mainImg.alt = item.name;
                mainImg.className = 'main-product-img';
                imageBox.appendChild(mainImg);

                if (item.images && item.images.length > 0) {
                    const thumbGrid = document.createElement('div');
                    thumbGrid.className = 'thumbnails-grid';
                    item.images.forEach((imgSrc, idx) => {
                        const thumb = document.createElement('img');
                        thumb.src = imgSrc;
                        thumb.className = 'thumb-img';
                        if (idx === 0) thumb.classList.add('active-thumb');
                        thumb.alt = 'thumbnail';
                        thumbGrid.appendChild(thumb);
                    });
                    imageBox.appendChild(thumbGrid);
                }
                card.appendChild(imageBox);

                const details = document.createElement('div');
                details.className = 'card-details';
                const pretext = content.whatsapp_pretext || "طلب عطر:";
                const whatsappMsg = encodeURIComponent(pretext + " " + item.name);
                details.innerHTML = `
                    <h3 class="product-name">${item.name}</h3>
                    <p class="product-features">${item.features}</p>
                    ${item.note ? `<span class="product-note"><i class="fa-solid fa-circle-info"></i> ${item.note}</span>` : ''}
                    <div class="card-actions">
                        <a href="https://wa.me/964${companyInfo.phone.slice(1)}?text=${whatsappMsg}" class="btn-order" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i> ${content.btn_order}
                        </a>
                    </div>
                `;
                card.appendChild(details);
                grid.appendChild(card);
            });
        }

        sectionDiv.appendChild(grid);

        if (section.items && section.items.length > 3) {
            const showMoreBox = document.createElement('div');
            showMoreBox.className = 'show-more-box';
            const lang = document.documentElement.lang;
            const showMoreText =
                lang === 'ar' ? 'عرض المزيد' :
                lang === 'ku' ? 'بینینی زیاتر' :
                'Show More';
            showMoreBox.innerHTML = `
                <button class="btn-show-more">
                    ${showMoreText} <i class="fa-solid fa-chevron-down"></i>
                </button>
            `;
            sectionDiv.appendChild(showMoreBox);
        }

        container.appendChild(sectionDiv);
    });
}

function changeLanguage(lang) {
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
}