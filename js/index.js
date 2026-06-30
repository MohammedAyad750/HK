// =================== بيانات الشركة ===================
const companyInfo = {
    phone: "07710666646",
    location_ar: "النجف الأشرف - شارع الروان",
    location_ku: "نەجەفی ئەشرەف - شەقامی ڕەوان",
    location_en: "Najaf Al-Ashraf - Al-Rawan Street",
};

// =================== المحتوى متعدد اللغات ===================
let multilingualData = {
    ar: {
        title: "HK",
        home: "الرئيسية",
        products: "أقسام العطور",
        contact: "اتصل بنا",
        hero_title: "أرقى العطور العالمية",
        hero_sub: "وكالة HK تقدم لكم عطور و بخور بأعلى جودة في العراق.",
        btn_browse: "تصفح الأقسام والمنتجات",
        btn_order: "اطلب أو استفسر عبر الواتساب",
        contact_title: "معلومات الاتصال والزيارة",
        address_label: "موقع الشركة",
        phone_label: "رقم الهاتف الفعلي",
        hours_label: "أوقات العمل",
        hours_val: "أهلاً وسهلاً بكم في جميع الأوقات",
        footer_text: "شركة HK - الفخامة والتميز في عالم العطور",
        all_categories: "كل الأقسام",
        sections: [
            {
                id: "agency",
                title: "قسم العطور الخاصة بوكالتنا",
                items: [
                    {
                        name: " عبق",
                        features: "الجنس : يونيسكس | النوتات العطرية :- حمضيات - خشبي - سويت - توابل -فاكهي - عنبر -  اروماتك  | الفوحان عالي جداً |الثبات اقل مدة لثاني يوم",
                        placeholder: "images/water1.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل"
                    },
                    {
                        name: "العنود",
                        features: "الجنس : يونيسكس | النوتات العطرية :- زهري - اروماتك - فريش - ناعم - فاكهي - خشبي - منعش - حمضيات | الفوحان  عالي جداً | الثبات اقل مده الثاني يوم",
                        placeholder: "images/water2.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل"
                    },
                    {
                        name: "بلو آيريس",
                        features: "الجنس : يونيسكس | النوتات العطرية :- زهري - فاكهي - باتشولي - ناعم - فريش | الفوحان  عالي جداً | الثبات اقل مده 24 ساعة",
                        placeholder: "images/water3.jpg",
                        note: "سعر 45 د.ع للزجاجة 50 مل"
                    },
                    {
                        name: "سويت وورلد",
                        features: "الجنس : يونيسكس | النوتات العطرية :- زهر البرتقال - فانيلا - حلوي - لوز - مسك - اروماتك - حمضيات - قهوة | الفوحان  عالي جداً | الثبات اقل مده 24 ساعة",
                        placeholder: "images/water4.jpg",
                        note: "سعر 45 د.ع للزجاجة 50 مل"
                    },
                    {
                        name: "جيفورا",
                        features: "الجنس : يونيسكس | النوتات العطرية :- حمضيات - خشبي - اروماتك - حلو - زهري - ترابي - فانيلا| الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water5.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل"
                    },
                    {
                        name: "هيلتون عود",
                        features: " الجنس : يونيسكس | النوتات العطرية :- باودر - فانيلا - خشب بارد - عنبر - صندل  | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water7.jpg",
                        note: "سعر 50 د.ع للزجاجة 50 مل"
                    },
                    {
                        name: "يزار",
                        features: "الجنس : يونيسكس | النوتات العطرية :- فاكهي - زهري - فريش - ناعم - صنوبر - خشبي - منعش - عنبر - اشجار   | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water8.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل"
                    }
                ]
            },
            {
                id: "french",
                title: "قسم العطور الفرنسية",
                items: [
                    {
                        name: "انجيلز شير",
                        features: "الجنس : يونيسكس | النوتات العطرية :- تابلي دافئ - خشبي - حلو - فانيلا - قرفة - عنبر - ناعم   | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water9.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water9.jpg", "images/water10.jpg"]
                    },
                    {
                        name: "تيري دي هيرميس",
                        features: "الجنس : للرجال | النوتات العطرية :- حمضيات - خشبي - تابلي منعش - اروماتك - ترابي - تابلي دافئ    | الفوحان  عالي  | الثبات اقل مده 12 ساعة",
                        placeholder: "images/water11.jpg",
                        note: "سعر 25 د.ع للزجاجة 50 مل",
                        images: ["images/water11.jpg", "images/water12.jpg"]
                    },
                    {
                        name: "سكاندل گولد",
                        features: "الجنس : للنساء | النوتات العطرية :- تابلي دافئ - خشبي - جلود - ترابي - عسل - باتشولي - حيواني - زهري - حلو - الزهور البيضاء    | الفوحان  عالي  | الثبات اقل مده 12 ساعة",
                        placeholder: "images/water13.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water13.jpg", "images/water14.jpg"]
                    },
                    {
                        name: "الين مان",
                        features: "الجنس : للرجال | النوتات العطرية :- تابلي منعش - خشبي - اروماتك - العنبر - عشبي - مسكي - الينسون - توابل ناعم - جلود - زهري    | الفوحان  عالي  | الثبات اقل مده 12 ساعة",
                        placeholder: "images/water15.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water15.jpg", "images/water16.jpg"]
                    },
                    {
                        name: "ماي سيلف",
                        features: "الجنس : للرجال | النوتات العطرية :- حمضيات - الزهور البيضاء - الباتشولي - تابلي منعش - خشبي - حلو      | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water25.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water25.jpg", "images/water26.jpg"]
                    },
                    {
                        name: "بيبي كات",
                        features: "الجنس : يونيسكس | النوتات العطرية :- فانيلا - تابلي منعش - جلود - تابلي دافئ - عنبر - ناعم - مسكي - اروماتك - بلسمي - خشبي    | الفوحان  عالي جداً | الثبات اقل مده الثاني يوم",
                        placeholder: "images/water27.jpg",
                        note: "سعر 45 د.ع للزجاجة 50 مل",
                        images: ["images/water27.jpg", "images/water28.jpg"]
                    },
                    {
                        name: "كوير انتينس",
                        features: "الجنس : يونيسكس | النوتات العطرية :- الجلود - خشبي - التبغ - حيواني - فاكهي - حلو - زهري - مدخن - ناعم    | الفوحان  عالي جداً | الثبات اقل مده الثاني يوم",
                        placeholder: "images/water29.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water29.jpg", "images/water30.jpg"]
                    }
                ]
            },
            {
                id: "italian",
                title: "قسم العطور الايطالية",
                items: [
                    {
                        name: "ايتاليكا",
                        features: "الجنس : يونيسكس | النوتات العطرية :- حلو - اللوز - الفانيلا - لاكتوني - خشبي - تابلي دافئ - ناعم - الجوز - فاكهي - الكراميل    | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water17.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water17.jpg", "images/water18.jpg"]
                    },
                    {
                        name: "كود بارفيوم",
                        features: "الجنس : للرجال | النوتات العطرية :- السوسن - اروماتك - ناعم - خشبي - حمضيات - فانيلا - ترابي - الدهيد - البنفسج - تابلي منعش     | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water21.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water21.jpg", "images/water22.jpg"]
                    },
                    {
                        name: "انتينس عود",
                        features: "الجنس : يونيسكس | النوتات العطرية :-  عنبر - عود - جلود - تابلي منعش - تابلي دافئ - حيواني - فاكهي - مدخن - حلو - خشبي     | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water33.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water33.jpg", "images/water34.jpg"]
                    },
                    {
                        name: "اومو انتينيس",
                        features: "الجنس : للرجال | النوتات العطرية :-  فانيلا - سوسن - ناعم - جلود - بنفسج - حلو - ترابي - اروماتك - حيواني - عنبر       | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water39.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water39.jpg", "images/water40.jpg"]
                    }
                ]
            },
            {
                id: "american",
                title: "قسم العطور الامريكية",
                items: [
                    {
                        name: "عود وود",
                        features: "الجنس : يونيسكس | النوتات العطرية :- خشبي - تابلي دافئ - العود - اروماتك - الفانيلا - بلسمي - تابلي منعش - العنبر - ناعم - حلو     | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water23.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water23.jpg", "images/water24.jpg"]
                    },
                    {
                        name: "فيري گود گيرل",
                        features: "الجنس : للنساء | النوتات العطرية :- فاكهي - ورد - منعش - فانيلا - استوائي - توابل ناعم - حلو - حامض     | الفوحان  عالي جداً | الثبات اقل مده الثاني يوم",
                        placeholder: "images/water31.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water31.jpg", "images/water32.jpg"]
                    },
                    {
                        name: "هير سكرت",
                        features: "الجنس : للنساء | النوتات العطرية :-خشبي - فاكهي - فانيلا - حلو - الزهور البيضاء - حمضيات - عنبر - ناعم - اروماتك - مسك الروم      | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water35.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water35.jpg", "images/water36.jpg"]
                    },
                    {
                        name: "سترونك ويذ يو توباكو",
                        features: "الجنس : للرجال | النوتات العطرية :- تابلي دافئ - عنبر - تبغ - فانيلا - حلو - اروماتك - توابل ناعم - بلسمي - تابلي منعش - خشبي      | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water35.jpg",
                        note: "سعر 35 د.ع للزجاجة 50 مل",
                        images: ["images/water35.jpg", "images/water36.jpg"]
                    }
                ]
            },
            {
                id: "qatari",
                title: "قسم العطور القطرية",
                items: [
                    {
                        name: "ديماسكوس",
                        features: "الجنس : يونيسكس | النوتات العطرية :- الزهور البيضاء - ورد - مسك الروم - ناعم - زهري - الفانيلا - مسكي - فاكهي - حلو - حيواني     | الفوحان  عالي جداً | الثبات اقل مده ثاني يوم",
                        placeholder: "images/water19.jpg",
                        note: "سعر 45 د.ع للزجاجة 50 مل",
                        images: ["images/water19.jpg", "images/water20.jpg"]
                    }
                ]
            }
        ]
    },
    ku: {
        title: "HK",
        home: "سەرەکی",
        products: "بەشەکانی عەتار",
        contact: "پەیوەندیمان پێوە بکە",
        hero_title: "ناوازەترین عەتارەکانی جیهان",
        hero_sub: "کۆمپانیای HK بەرزترین کوالیتی عەتار و بخوورتان پێشکەش دەکات لە عێراق.",
        btn_browse: "گەڕان لە بەشەکان و بەرهەمەکان",
        btn_order: "داواکردن یان پرسیارکردن لەڕێگەی واتسئەپەوە",
        contact_title: "زانیاری پەیوەندی و سەردانکردن",
        address_label: "شوێنی کۆمپانیا",
        phone_label: "ژمارەی تەلەفۆنی ڕاستەقینە",
        hours_label: "کاتەکانی کارکردن",
        hours_val: "بەخێرهاتنتان دەکەین لە هەموو کاتێکدا",
        footer_text: "کۆمپانیای HK - ڕازاوەیی و ناوازەیی لە جیهانی عەتاردا",
        all_categories: "هەموو بەشەکان",
        sections: [
            {
                id: "agency",
                title: "بەشی عەتارە تایبەتەکانی بریکاریەتەکەمان",
                items: [
                    {
                        name: " عەبق",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: citrus - woody - sweet - spices - fruity - amber - aromatic | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water1.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل"
                    },
                    {
                        name: " عەنوود",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: floral - aromatic - fresh - soft - fruity - woody - refreshing - citrus | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water2.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل"
                    },
                    {
                        name: "بلو ئایریس",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: floral - fruity - patchouli - soft - fresh | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ٢٤ کاتژمێر",
                        placeholder: "images/water3.jpg",
                        note: "نرخ: ٤٥ د.ع بۆ شوشەی ٥٠ مل"
                    },
                    {
                        name: "سوویت وۆرڵد",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: orange blossom - vanilla - sweet - almond - musk - aromatic - citrus - coffee | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ٢٤ کاتژمێر",
                        placeholder: "images/water4.jpg",
                        note: "نرخ: ٤٥ د.ع بۆ شوشەی ٥٠ مل"
                    },
                    {
                        name: "جیفۆرا",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: citrus - woody - aromatic - sweet - floral - earthy - vanilla | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water5.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل"
                    },
                    {
                        name: "هێڵتۆن عود",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: powder - vanilla - cool wood - amber - sandalwood | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water7.jpg",
                        note: "نرخ: ٥٠ د.ع بۆ شوشەی ٥٠ مل"
                    },
                    {
                        name: "یزار",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: fruity - floral - fresh - soft - pine - woody - refreshing - amber - trees | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water8.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل"
                    }
                ]
            },
            {
                id: "french",
                title: "بەشی عەتارە فەرەنسییەکان",
                items: [
                    {
                        name: "ئەنجێلز شیر",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: warm spicy - woody - sweet - vanilla - cinnamon - amber - soft | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water9.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water9.jpg", "images/water10.jpg"]
                    },
                    {
                        name: "تێری دی هێرمێس",
                        features: "ڕەگەز: پیاوان | نۆتەکانی عەتار: citrus - woody - fresh spicy - aromatic - earthy - warm spicy | بڵاوبوونەوە: بەرز | مانەوە: کەمتری ١٢ کاتژمێر",
                        placeholder: "images/water11.jpg",
                        note: "نرخ: ٢٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water11.jpg", "images/water12.jpg"]
                    },
                    {
                        name: "سکاندڵ گۆڵد",
                        features: "ڕەگەز: ئافرەتان | نۆتەکانی عەتار: warm spicy - woody - leather - earthy - honey - patchouli - animalic - floral - sweet - white flowers | بڵاوبوونەوە: بەرز | مانەوە: کەمتری ١٢ کاتژمێر",
                        placeholder: "images/water13.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water13.jpg", "images/water14.jpg"]
                    },
                    {
                        name: "ئەلین مان",
                        features: "ڕەگەز: پیاوان | نۆتەکانی عەتار: fresh spicy - woody - aromatic - amber - herbal - musky - anise - soft spices - leather - floral | بڵاوبوونەوە: بەرز | مانەوە: کەمتری ١٢ کاتژمێر",
                        placeholder: "images/water15.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water15.jpg", "images/water16.jpg"]
                    },
                    {
                        name: "مای سێلف",
                        features: "ڕەگەز: پیاوان | نۆتەکانی عەتار: citrus - white flowers - patchouli - fresh spicy - woody - sweet | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water25.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water25.jpg", "images/water26.jpg"]
                    },
                    {
                        name: "بەیبی کات",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: vanilla - fresh spicy - leather - warm spicy - amber - soft - musky - aromatic - balsamic - woody | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water27.jpg",
                        note: "نرخ: ٤٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water27.jpg", "images/water28.jpg"]
                    },
                    {
                        name: "کویر ئینتێنس",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: leather - woody - tobacco - animalic - fruity - sweet - floral - smoky - soft | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water29.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water29.jpg", "images/water30.jpg"]
                    }
                ]
            },
            {
                id: "italian",
                title: "بەشی عەتارە ئیتاڵییەکان",
                items: [
                    {
                        name: "ئیتالیکا",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: sweet - almond - vanilla - lactonic - woody - warm spicy - soft - walnut - fruity - caramel | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water17.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water17.jpg", "images/water18.jpg"]
                    },
                    {
                        name: "کۆد پەرفیوم",
                        features: "ڕەگەز: پیاوان | نۆتەکانی عەتار: iris - aromatic - soft - woody - citrus - vanilla - earthy - aldehydes - violet - fresh spicy | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water21.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water21.jpg", "images/water22.jpg"]
                    },
                    {
                        name: "ئینتێنس عود",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: amber - oud - leather - fresh spicy - warm spicy - animalic - fruity - smoky - sweet - woody | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water33.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water33.jpg", "images/water34.jpg"]
                    },
                    {
                        name: "ئۆمۆ ئینتێنیس",
                        features: "ڕەگەز: پیاوان | نۆتەکانی عەتار: vanilla - iris - soft - leather - violet - sweet - earthy - aromatic - animalic - amber | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water39.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water39.jpg", "images/water40.jpg"]
                    }
                ]
            },
            {
                id: "american",
                title: "بەشی عەتارە ئەمریکییەکان",
                items: [
                    {
                        name: "عود وود",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: woody - warm spicy - oud - aromatic - vanilla - balsamic - fresh spicy - amber - soft - sweet | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water23.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water23.jpg", "images/water24.jpg"]
                    },
                    {
                        name: "ڤێری گود گێرڵ",
                        features: "ڕەگەز: ئافرەتان | نۆتەکانی عەتار: fruity - rose - refreshing - vanilla - tropical - soft spices - sweet - sour | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water31.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water31.jpg", "images/water32.jpg"]
                    },
                    {
                        name: "هێر سیکرێت",
                        features: "ڕەگەز: ئافرەتان | نۆتەکانی عەتار: woody - fruity - vanilla - sweet - white flowers - citrus - amber - soft - aromatic - roman musk | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water35.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water35.jpg", "images/water36.jpg"]
                    },
                    {
                        name: "سترۆنگ ویذ یو تۆباکۆ",
                        features: "ڕەگەز: پیاوان | نۆتەکانی عەتار: warm spicy - amber - tobacco - vanilla - sweet - aromatic - soft spices - balsamic - fresh spicy - woody | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water35.jpg",
                        note: "نرخ: ٣٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water35.jpg", "images/water36.jpg"]
                    }
                ]
            },
            {
                id: "qatari",
                title: "بەشی عەتارە قەتەرییەکان",
                items: [
                    {
                        name: "دیماسکۆس",
                        features: "ڕەگەز: یونیسێکس | نۆتەکانی عەتار: white flowers - rose - roman musk - soft - floral - vanilla - musky - fruity - sweet - animalic | بڵاوبوونەوە: زۆر بەرز | مانەوە: کەمتری ڕۆژی دواتر",
                        placeholder: "images/water19.jpg",
                        note: "نرخ: ٤٥ د.ع بۆ شوشەی ٥٠ مل",
                        images: ["images/water19.jpg", "images/water20.jpg"]
                    }
                ]
            }
        ]
    },
    en: {
        title: "HK Perfumes",
        home: "Home",
        products: "Perfume Sections",
        contact: "Contact Us",
        hero_title: "The Finest World Fragrances",
        hero_sub: "HK Company offers you perfumes and incense with the highest quality in Iraq.",
        btn_browse: "Browse Sections & Products",
        btn_order: "Order or Inquire via WhatsApp",
        contact_title: "Contact & Visit Information",
        address_label: "Company Location",
        phone_label: "Phone Number",
        hours_label: "Working Hours",
        hours_val: "Welcome at All Times",
        footer_text: "HK Company - Luxury & Excellence in the World of Fragrances",
        all_categories: "All Sections",
        sections: [
            {
                id: "agency",
                title: "Agency Special Perfumes",
                items: [
                    {
                        name: "baq",
                        features: "Gender: Unisex | Notes: Citrus - Woody - Sweet - Spices - Fruity - Amber - Aromatic | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water1.jpg",
                        note: "Price: 35 IQD / 50ml bottle"
                    },
                    {
                        name: " Al Anoud",
                        features: "Gender: Unisex | Notes: Floral - Aromatic - Fresh - Soft - Fruity - Woody - Refreshing - Citrus | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water2.jpg",
                        note: "Price: 35 IQD / 50ml bottle"
                    },
                    {
                        name: "Blue Iris",
                        features: "Gender: Unisex | Notes: Floral - Fruity - Patchouli - Soft - Fresh | Projection: Very High | Longevity: At least 24 hours",
                        placeholder: "images/water3.jpg",
                        note: "Price: 45 IQD / 50ml bottle"
                    },
                    {
                        name: "Sweet World",
                        features: "Gender: Unisex | Notes: Orange Blossom - Vanilla - Sweet - Almond - Musk - Aromatic - Citrus - Coffee | Projection: Very High | Longevity: At least 24 hours",
                        placeholder: "images/water4.jpg",
                        note: "Price: 45 IQD / 50ml bottle"
                    },
                    {
                        name: "Jivora",
                        features: "Gender: Unisex | Notes: Citrus - Woody - Aromatic - Sweet - Floral - Earthy - Vanilla | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water5.jpg",
                        note: "Price: 35 IQD / 50ml bottle"
                    },
                    {
                        name: "Hilton Oud",
                        features: "Gender: Unisex | Notes: Powdery - Vanilla - Cool Woods - Amber - Sandalwood | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water7.jpg",
                        note: "Price: 50 IQD / 50ml bottle"
                    },
                    {
                        name: "Yazar",
                        features: "Gender: Unisex | Notes: Fruity - Floral - Fresh - Soft - Pine - Woody - Refreshing - Amber - Trees | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water8.jpg",
                        note: "Price: 35 IQD / 50ml bottle"
                    }
                ]
            },
            {
                id: "french",
                title: "French Perfumes",
                items: [
                    {
                        name: "Angels' Share",
                        features: "Gender: Unisex | Notes: Warm Spicy - Woody - Sweet - Vanilla - Cinnamon - Amber - Soft | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water9.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water9.jpg", "images/water10.jpg"]
                    },
                    {
                        name: "Terre d'Hermès",
                        features: "Gender: Men | Notes: Citrus - Woody - Fresh Spicy - Aromatic - Earthy - Warm Spicy | Projection: High | Longevity: At least 12 hours",
                        placeholder: "images/water11.jpg",
                        note: "Price: 25 IQD / 50ml bottle",
                        images: ["images/water11.jpg", "images/water12.jpg"]
                    },
                    {
                        name: "Scandal Gold",
                        features: "Gender: Women | Notes: Warm Spicy - Woody - Leather - Earthy - Honey - Patchouli - Animalic - Floral - Sweet - White Flowers | Projection: High | Longevity: At least 12 hours",
                        placeholder: "images/water13.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water13.jpg", "images/water14.jpg"]
                    },
                    {
                        name: "Alien Man",
                        features: "Gender: Men | Notes: Fresh Spicy - Woody - Aromatic - Amber - Herbal - Musky - Anise - Soft Spices - Leather - Floral | Projection: High | Longevity: At least 12 hours",
                        placeholder: "images/water15.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water15.jpg", "images/water16.jpg"]
                    },
                    {
                        name: "My Self",
                        features: "Gender: Men | Notes: Citrus - White Flowers - Patchouli - Fresh Spicy - Woody - Sweet | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water25.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water25.jpg", "images/water26.jpg"]
                    },
                    {
                        name: "Baby Cat",
                        features: "Gender: Unisex | Notes: Vanilla - Fresh Spicy - Leather - Warm Spicy - Amber - Soft - Musky - Aromatic - Balsamic - Woody | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water27.jpg",
                        note: "Price: 45 IQD / 50ml bottle",
                        images: ["images/water27.jpg", "images/water28.jpg"]
                    },
                    {
                        name: "Cuir Intense",
                        features: "Gender: Unisex | Notes: Leather - Woody - Tobacco - Animalic - Fruity - Sweet - Floral - Smoky - Soft | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water29.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water29.jpg", "images/water30.jpg"]
                    }
                ]
            },
            {
                id: "italian",
                title: "Italian Perfumes",
                items: [
                    {
                        name: "Italica",
                        features: "Gender: Unisex | Notes: Sweet - Almond - Vanilla - Lactonic - Woody - Warm Spicy - Soft - Walnut - Fruity - Caramel | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water17.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water17.jpg", "images/water18.jpg"]
                    },
                    {
                        name: "Code Parfum",
                        features: "Gender: Men | Notes: Iris - Aromatic - Soft - Woody - Citrus - Vanilla - Earthy - Aldehydes - Violet - Fresh Spicy | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water21.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water21.jpg", "images/water22.jpg"]
                    },
                    {
                        name: "Intense Oud",
                        features: "Gender: Unisex | Notes: Amber - Oud - Leather - Fresh Spicy - Warm Spicy - Animalic - Fruity - Smoky - Sweet - Woody | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water33.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water33.jpg", "images/water34.jpg"]
                    },
                    {
                        name: "Uomo Intense",
                        features: "Gender: Men | Notes: Vanilla - Iris - Soft - Leather - Violet - Sweet - Earthy - Aromatic - Animalic - Amber | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water39.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water39.jpg", "images/water40.jpg"]
                    }
                ]
            },
            {
                id: "american",
                title: "American Perfumes",
                items: [
                    {
                        name: "Oud Wood",
                        features: "Gender: Unisex | Notes: Woody - Warm Spicy - Oud - Aromatic - Vanilla - Balsamic - Fresh Spicy - Amber - Soft - Sweet | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water23.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water23.jpg", "images/water24.jpg"]
                    },
                    {
                        name: "Very Good Girl",
                        features: "Gender: Women | Notes: Fruity - Rose - Refreshing - Vanilla - Tropical - Soft Spices - Sweet - Sour | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water31.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water31.jpg", "images/water32.jpg"]
                    },
                    {
                        name: "Her Secret",
                        features: "Gender: Women | Notes: Woody - Fruity - Vanilla - Sweet - White Flowers - Citrus - Amber - Soft - Aromatic - Roman Musk | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water35.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water35.jpg", "images/water36.jpg"]
                    },
                    {
                        name: "Strong With You Tobacco",
                        features: "Gender: Men | Notes: Warm Spicy - Amber - Tobacco - Vanilla - Sweet - Aromatic - Soft Spices - Balsamic - Fresh Spicy - Woody | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water35.jpg",
                        note: "Price: 35 IQD / 50ml bottle",
                        images: ["images/water35.jpg", "images/water36.jpg"]
                    }
                ]
            },
            {
                id: "qatari",
                title: "Qatari Perfumes",
                items: [
                    {
                        name: "Damascus",
                        features: "Gender: Unisex | Notes: White Flowers - Rose - Roman Musk - Soft - Floral - Vanilla - Musky - Fruity - Sweet - Animalic | Projection: Very High | Longevity: At least until the next day",
                        placeholder: "images/water19.jpg",
                        note: "Price: 45 IQD / 50ml bottle",
                        images: ["images/water19.jpg", "images/water20.jpg"]
                    }
                ]
            }
        ]
    }
};

// =================== تحميل البيانات من Supabase ===================
async function loadDataFromSupabase() {
    try {
        // جلب الأقسام
        const { data: categories, error: catError } = await supabaseClient
            .from('categories')
            .select('*');

        if (catError) {
            console.error('خطأ في جلب الأقسام:', catError);
            return;
        }

        // جلب المنتجات
        const { data: products, error: prodError } = await supabaseClient
            .from('products')
            .select('*');

        if (prodError) {
            console.error('خطأ في جلب المنتجات:', prodError);
            return;
        }

        // دالة مساعدة لبناء sections حسب اللغة
        function buildSections(lang) {
            if (!categories || categories.length === 0) return null;
            return categories.map(cat => ({
                id: cat.id,
                title: cat['title_' + lang] || cat.title_ar,
                items: (products || [])
                    .filter(p => p.category_id === cat.id)
                    .map(p => ({
                        name: p['name_' + lang] || p.name_ar,
                        features: p['features_' + lang] || p.features_ar || '',
                        placeholder: p.placeholder,
                        note: p['note_' + lang] || p.note_ar,
                        images: p.images || []
                    }))
            }));
        }

        // تحديث sections فقط إذا توجد بيانات من Supabase
        const arSections = buildSections('ar');
        if (arSections && arSections.length > 0) {
            multilingualData.ar.sections = arSections;
            multilingualData.ku.sections = buildSections('ku') || multilingualData.ku.sections;
            multilingualData.en.sections = buildSections('en') || multilingualData.en.sections;
        }
        // إذا لم توجد بيانات، تبقى البيانات الافتراضية كما هي

    } catch (error) {
        console.error('فشل تحميل البيانات من Supabase:', error);
        // في حال فشل الاتصال، تبقى البيانات الافتراضية
    }
}

// بدء التشغيل: تحميل البيانات ثم بناء الصفحة
(async function init() {
    await loadDataFromSupabase();
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
    document.getElementById('homeLink').textContent = content.home;
    document.getElementById('productsLink').innerHTML =
        content.products +
        ' <i class="fa-solid fa-chevron-down" style="font-size:11px; margin-right:4px;"></i>';
    document.getElementById('contactLink').textContent = content.contact;
    document.getElementById('heroTitle').textContent = content.hero_title;
    document.getElementById('heroSub').textContent = content.hero_sub;
    document.getElementById('btnBrowse').textContent = content.btn_browse;
    document.getElementById('btnOrder').textContent = content.btn_order;
    document.getElementById('contactTitle').textContent = content.contact_title;
    document.getElementById('addressLabel').textContent = content.address_label;
    document.getElementById('phoneLabel').textContent = content.phone_label;
    document.getElementById('hoursLabel').textContent = content.hours_label;
    document.getElementById('hoursVal').textContent = content.hours_val;
    document.getElementById('footerText').textContent = content.footer_text;

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

        section.items.forEach(item => {
            const card = document.createElement('div');
            card.className =
                item.images && item.images.length > 0
                    ? 'product-card multi-image'
                    : 'product-card single-image';

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
            details.innerHTML = `
                <h3 class="product-name">${item.name}</h3>
                <p class="product-features">${item.features}</p>
                ${item.note ? `<span class="product-note"><i class="fa-solid fa-circle-info"></i> ${item.note}</span>` : ''}
                <div class="card-actions">
                    <a href="https://wa.me/964${companyInfo.phone.slice(1)}" class="btn-order">
                        <i class="fa-brands fa-whatsapp"></i> ${content.btn_order}
                    </a>
                </div>
            `;
            card.appendChild(details);
            grid.appendChild(card);
        });

        sectionDiv.appendChild(grid);

        if (section.items.length > 3) {
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