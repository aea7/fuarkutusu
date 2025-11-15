import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER || 'aea7',
      name: process.env.NEXT_PUBLIC_GITHUB_REPO_NAME || 'fuarkutusu',
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*/',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        publishedAt: fields.date({ label: 'Published Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        author: fields.object({
          name: fields.text({ label: 'Author Name' }),
          picture: fields.text({ label: 'Author Picture URL', defaultValue: '' }),
        }),
        coverImage: fields.text({
          label: 'Cover Image URL',
          defaultValue: '',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Published', value: 'published' },
            { label: 'Draft', value: 'draft' },
          ],
          defaultValue: 'draft',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
    fuar: collection({
      label: 'Trade Shows / Fuarlar',
      path: 'content/fuar/*/',
      slugField: 'slug',
      schema: {
        title: fields.text({
          label: '📌 Trade Show Name / Fuar Adı',
          validation: { isRequired: true },
        }),
        slug: fields.text({
          label: '🔗 Slug / URL Adresi',
          description: 'Will appear as: fuarkutusu.com/fuar/YOUR-SLUG-HERE (use lowercase, no spaces) / fuarkutusu.com/fuar/BURAYA-YAZDIGINIZ şeklinde görünür (küçük harf, boşluk yok)',
          validation: { isRequired: true },
        }),
        subtitle: fields.text({
          label: '💬 Subtitle / Alt Başlık',
          description: 'Brief description of the trade show / Fuarın kısa açıklaması',
          multiline: true,
        }),
        startDate: fields.date({
          label: '📅 Start Date / Başlangıç Tarihi',
          validation: { isRequired: true },
        }),
        endDate: fields.date({
          label: '📅 End Date / Bitiş Tarihi',
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({
          label: '⭐ Featured Event / Öne Çıkan Etkinlik',
          description: 'Show on homepage / Ana sayfada göster',
          defaultValue: false,
        }),
        content: fields.document({
          label: '📝 CONTENT (English) / İÇERİK (İngilizce)',
          description: 'Main description in English / Ana açıklama İngilizce',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/fuar',
            publicPath: '/images/fuar/',
          },
        }),
        contentTr: fields.document({
          label: '📝 CONTENT (Turkish) / İÇERİK (Türkçe)',
          description: 'Main description in Turkish / Ana açıklama Türkçe',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/fuar',
            publicPath: '/images/fuar/',
          },
        }),
        sector: fields.text({
          label: '🏭 Sector/Industry / Sektör',
          description: 'e.g., Technology, Healthcare, etc. / Örn: Teknoloji, Sağlık, vb.',
          validation: { isRequired: true },
        }),
        frequency: fields.select({
          label: '🔄 Frequency / Sıklık',
          description: 'How often this event occurs / Bu etkinlik ne sıklıkla gerçekleşir',
          options: [
            { label: 'Yearly (Annual) / Yıllık', value: 'yearly' },
            { label: 'Biennial (Every 2 years) / İki Yılda Bir', value: 'biennial' },
            { label: 'One-time Event / Tek Seferlik', value: 'one-time' },
            { label: 'Other / Diğer', value: 'other' },
          ],
          defaultValue: 'yearly',
        }),
        venue: fields.text({
          label: '🏢 Venue Name / Mekan Adı',
          description: 'Name of the exhibition center / Fuar merkezi adı',
          validation: { isRequired: true },
        }),
        venueAddress: fields.text({
          label: '📍 Venue Address / Mekan Adresi',
          multiline: true,
        }),
        city: fields.text({
          label: '🌆 City / Şehir',
          validation: { isRequired: true },
        }),
        country: fields.text({
          label: '🌍 Country / Ülke',
          description: 'Country where the event takes place / Etkinliğin gerçekleşeceği ülke',
          validation: { isRequired: true },
        }),
        locationLatitude: fields.text({
          label: '📍 Latitude / Enlem',
          description: 'GPS Latitude for map (optional) / Harita için GPS enlemi (opsiyonel)',
          defaultValue: '',
        }),
        locationLongitude: fields.text({
          label: '📍 Longitude / Boylam',
          description: 'GPS Longitude for map (optional) / Harita için GPS boylamı (opsiyonel)',
          defaultValue: '',
        }),
        organizerName: fields.text({
          label: '👔 Organizer Name / Organizatör Adı',
          defaultValue: '',
        }),
        organizerAddress: fields.text({
          label: '📮 Organizer Address / Organizatör Adresi',
          multiline: true,
          defaultValue: '',
        }),
        organizerCity: fields.text({
          label: '🌆 Organizer City / Organizatör Şehri',
          defaultValue: '',
        }),
        organizerCountry: fields.text({
          label: '🌍 Organizer Country / Organizatör Ülkesi',
          defaultValue: '',
        }),
        organizerWebsite: fields.text({
          label: '🔗 Organizer Website / Organizatör Web Sitesi',
          defaultValue: '',
        }),
        logo: fields.image({
          label: '🖼️ Logo / Logo',
          description: 'Upload the event logo / Etkinlik logosunu yükleyin',
          directory: 'public/images/fuar/logos',
          publicPath: '/images/fuar/logos/',
        }),
        coverImage: fields.image({
          label: '🖼️ Cover Image / Kapak Görseli',
          description: 'Upload a cover image for the event / Etkinlik için kapak görseli yükleyin',
          directory: 'public/images/fuar/covers',
          publicPath: '/images/fuar/covers/',
        }),
        website: fields.text({
          label: '🌐 Trade Show Website / Fuar Web Sitesi',
          description: 'Official event website / Resmi etkinlik web sitesi',
          defaultValue: '',
        }),
        instagram: fields.text({
          label: '📱 Instagram / Instagram',
          description: 'Instagram profile URL / Instagram profil URL',
          defaultValue: '',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag / Etiket' }),
          {
            label: '🏷️ Tags/Keywords / Etiketler/Anahtar Kelimeler',
            description: 'Tags for SEO and filtering / SEO ve filtreleme için etiketler',
            itemLabel: props => props.value,
          }
        ),
      },
    }),
  },
});
