# 🌐 مكتبة المستقبل - دليل الرفع على GitHub Pages

## 📁 هيكل الملفات

```
مكتبة-المستقبل/
├── index.html         ← الملف الرئيسي للموقع
├── manifest.json      ← إعدادات تطبيق PWA
├── sw.js              ← Service Worker (عمل بدون إنترنت)
├── README.md          ← هذا الملف
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🚀 خطوات الرفع على GitHub Pages (مجاناً)

### الخطوة 1 — إنشاء حساب GitHub
1. اذهب إلى [github.com](https://github.com)
2. انقر على **Sign up** وأنشئ حساباً مجانياً

### الخطوة 2 — إنشاء مستودع جديد
1. بعد تسجيل الدخول، انقر على زر **+** ثم **New repository**
2. سمّ المستودع: `maktaba-almustaqbal` (أو أي اسم تريده)
3. اجعله **Public** (عام) — مهم لكي تعمل GitHub Pages مجاناً
4. انقر **Create repository**

### الخطوة 3 — رفع الملفات
1. في صفحة المستودع الفارغة، انقر على **uploading an existing file**
2. اسحب وأفلت **جميع الملفات والمجلدات** (index.html, manifest.json, sw.js, مجلد icons)
3. انقر **Commit changes**

### الخطوة 4 — تفعيل GitHub Pages
1. اذهب إلى **Settings** (الإعدادات) في المستودع
2. من القائمة الجانبية، انقر على **Pages**
3. تحت **Source**، اختر **Deploy from a branch**
4. اختر الفرع **main** والمجلد **/ (root)**
5. انقر **Save**

### الخطوة 5 — موقعك جاهز! 🎉
بعد دقيقتين، سيصبح موقعك متاحاً على:
```
https://اسم-حسابك.github.io/maktaba-almustaqbal/
```

---

## 📱 تثبيت التطبيق على الهاتف (PWA)

### على Android:
- افتح الموقع في **Chrome**
- ستظهر رسالة **"إضافة إلى الشاشة الرئيسية"** تلقائياً
- أو من قائمة Chrome (⋮) → **تثبيت التطبيق**

### على iPhone:
- افتح الموقع في **Safari**
- انقر على زر المشاركة (□↑)
- اختر **إضافة إلى الشاشة الرئيسية**

---

## 🏪 الخطوة التالية: نشر على Google Play

بعد رفع الموقع على GitHub Pages:
1. اذهب إلى [pwabuilder.com](https://www.pwabuilder.com)
2. أدخل رابط موقعك
3. انقر **Package for stores**
4. اختر **Google Play** واتبع التعليمات
5. ارفع الملف الناتج على [Google Play Console](https://play.google.com/console) (رسوم مرة واحدة: $25)

---

## ❓ مشاكل شائعة وحلولها

| المشكلة | الحل |
|---------|------|
| الموقع لا يظهر | انتظر 2-5 دقائق بعد التفعيل |
| الصور لا تظهر | تأكد من رفع مجلد `icons` كاملاً |
| الأيقونة لا تظهر عند التثبيت | تأكد من رفع `manifest.json` |
| sw.js خطأ | تأكد أن الموقع يعمل على HTTPS (GitHub Pages يوفرها تلقائياً) |
