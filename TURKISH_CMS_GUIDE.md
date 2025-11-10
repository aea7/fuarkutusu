# Keystatic CMS - Türkçe Kullanım Kılavuzu / Turkish Usage Guide

## 🎯 CMS'e Erişim / Accessing the CMS

CMS'e erişmek için: `/keystatic` adresine gidin
To access the CMS: Go to `/keystatic`

---

## 📝 Yeni Fuar Ekleme / Adding a New Trade Show

### Adım 1: CMS'e Giriş / Step 1: Enter CMS
1. `/keystatic` adresine gidin
2. "Trade Shows / Fuarlar" sekmesine tıklayın
3. "Create Entry" butonuna basın

### Adım 2: Zorunlu Alanlar / Step 2: Required Fields

Aşağıdaki alanlar **mutlaka** doldurulmalıdır:

**Gerekli Alanlar:**
- ✅ **Fuar Adı** / Trade Show Name
- ✅ **URL Adresi** / Slug (örnek: `istanbul-tech-summit`)
- ✅ **Başlangıç Tarihi** / Start Date
- ✅ **Bitiş Tarihi** / End Date
- ✅ **Sektör** / Sector (örn: Teknoloji, Sağlık, Otomotiv)
- ✅ **Mekan Adı** / Venue Name
- ✅ **Şehir** / City
- ✅ **Ülke** / Country

### Adım 3: İsteğe Bağlı Alanlar / Step 3: Optional Fields

**Önerilen Alanlar / Recommended Fields:**
- 📝 **Alt Başlık** / Subtitle - Fuarın kısa açıklaması
- 🏢 **Organizatör Bilgileri** / Organizer Information
  - Organizatör Adı
  - Organizatör Adresi
  - Organizatör Web Sitesi
- 📍 **Konum Bilgileri** / Location Information
  - GPS Enlemi / Latitude
  - GPS Boylamı / Longitude
- 🖼️ **Görseller** / Images
  - Logo URL
  - Kapak Görseli URL
- 🔗 **Fuar Web Sitesi** / Trade Show Website
- 🏷️ **Etiketler** / Tags (SEO için önemli)

### Adım 4: Durum Seçimi / Step 4: Status Selection

**Durum Seçenekleri / Status Options:**
- **Taslak** / Draft - Henüz yayınlanmadı
- **Yaklaşan** / Upcoming - Gelecekte gerçekleşecek
- **Devam Ediyor** / Ongoing - Şu anda aktif
- **Yayınlandı** / Published - Yayında
- **Tamamlandı** / Completed - Geçmişte kaldı

**Not:** Sadece "Published", "Upcoming" ve "Ongoing" durumundaki fuarlar web sitesinde görünür!

### Adım 5: Detaylı Açıklama / Step 5: Detailed Description

En alttaki "Detailed Description / Detaylı Açıklama" bölümünde:
- Fuarın detaylı açıklamasını yazın
- Başlıklar, listeler, linkler ekleyebilirsiniz
- Görseller ekleyebilirsiniz (public/images/fuars/ klasörüne kaydedilir)

### Adım 6: Kaydetme / Step 6: Save

1. Tüm alanları doldurun
2. "Save" butonuna basın
3. Fuar otomatik olarak `/fuars` sayfasında görünecektir

---

## 🎨 Öne Çıkan Fuar Yapma / Making a Featured Event

Bir fuarı ana sayfada göstermek için:
1. Fuar düzenleme sayfasını açın
2. "Featured Event / Öne Çıkan Etkinlik" kutucuğunu işaretleyin
3. Kaydedin

**Öne çıkan fuarlar:**
- ✨ Ana sayfada gösterilir
- 🎯 Daha büyük kartlarda görünür
- 🔝 Özel vurgulanır

---

## 📋 Alan Açıklamaları / Field Descriptions

### URL Adresi / Slug
Fuar sayfasının URL'sinde kullanılır:
- Örnek slug: `istanbul-tech-summit`
- Oluşacak URL: `/fuars/istanbul-tech-summit`
- Sadece küçük harf, rakam ve tire (-) kullanın
- Boşluk kullanmayın!

### GPS Koordinatları / GPS Coordinates

Harita gösterimi için:
- Google Maps'ten bulabilirsiniz
- Enlem örnek: `41.0082`
- Boylam örnek: `28.9784`

### Etiketler / Tags

SEO ve filtreleme için:
- Her etiketi ayrı satıra yazın
- Örnek etiketler:
  - Teknoloji
  - Yapay Zeka
  - B2B
  - Uluslararası

---

## ⚠️ Sık Karşılaşılan Sorunlar / Common Issues

### Problem: Fuar listede görünmüyor
**Çözüm:**
- Durum "Published", "Upcoming" veya "Ongoing" olarak ayarlı mı?
- Tüm zorunlu alanlar dolu mu?
- Sayfayı yenileyip tekrar deneyin

### Problem: Görsel görünmüyor
**Çözüm:**
- Görsel URL'si doğru mu?
- URL `https://` ile başlıyor mu?
- Görselin erişilebilir olduğundan emin olun

### Problem: Harita gösterilmiyor
**Çözüm:**
- GPS koordinatlarını girdiniz mi?
- Koordinatlar doğru formatta mı? (örn: `51.5074`)

---

## 🚀 Hızlı Başlangıç Şablonu / Quick Start Template

Yeni bir fuar eklerken bu şablonu kullanın:

```
Fuar Adı: İstanbul Teknoloji Zirvesi
Slug: istanbul-teknoloji-zirvesi
Alt Başlık: Türkiye'nin En Büyük Teknoloji Etkinliği
Başlangıç Tarihi: 2026-09-15
Bitiş Tarihi: 2026-09-18
Sıklık: Yıllık
Sektör: Teknoloji ve İnovasyon
Mekan: İstanbul Fuar Merkezi
Mekan Adresi: Yeşilköy Mah. Atatürk Cad. No:12
Şehir: İstanbul
Ülke: Türkiye
Durum: Yaklaşan
Öne Çıkan: ✓ (eğer ana sayfada gösterilecekse)
```

---

## 📞 Yardım / Help

Sorunlarla karşılaşırsanız:
1. Bu kılavuzu tekrar okuyun
2. Tarayıcıyı yenileyin (Ctrl+F5)
3. Farklı bir tarayıcıda deneyin

---

## 🎯 En İyi Uygulamalar / Best Practices

### ✅ Yapılması Gerekenler / Do's
- Tüm zorunlu alanları doldurun
- Kaliteli görseller kullanın
- Detaylı açıklama yazın
- Etiketleri eksiksiz girin
- GPS koordinatlarını ekleyin

### ❌ Yapılmaması Gerekenler / Don'ts
- Slug'da Türkçe karakter kullanmayın (ş, ğ, ü, vb.)
- Tarihleri yanlış girmeyin (bitiş < başlangıç)
- Boş görseller eklemeyin
- Çok fazla etiket kullanmayın (max 10)

---

**Başarılar! / Good Luck!** 🎉
