import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getAllFuars() {
  try {
    const fuars = await reader.collections.fuar.all();

    return fuars
      .map(fuar => ({
        slug: fuar.slug,
        title: fuar.entry.title,
        subtitle: fuar.entry.subtitle,
        startDate: fuar.entry.startDate,
        endDate: fuar.entry.endDate,
        frequency: fuar.entry.frequency,
        sector: fuar.entry.sector,
        venue: fuar.entry.venue,
        venueAddress: fuar.entry.venueAddress,
        city: fuar.entry.city,
        country: fuar.entry.country,
        locationLatitude: fuar.entry.locationLatitude,
        locationLongitude: fuar.entry.locationLongitude,
        organizerName: fuar.entry.organizerName,
        organizerAddress: fuar.entry.organizerAddress,
        organizerCity: fuar.entry.organizerCity,
        organizerCountry: fuar.entry.organizerCountry,
        organizerWebsite: fuar.entry.organizerWebsite,
        logo: fuar.entry.logo,
        coverImage: fuar.entry.coverImage,
        website: fuar.entry.website,
        instagram: fuar.entry.instagram,
        tags: fuar.entry.tags,
        featured: fuar.entry.featured,
      }))
      .sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateA - dateB; // Sort by start date ascending (upcoming first)
      });
  } catch (error) {
    console.error('Error reading fuars:', error);
    return [];
  }
}

export async function getFuarBySlug(slug, language = 'en') {
  try {
    const fuar = await reader.collections.fuar.read(slug);

    if (!fuar) {
      throw new Error(`Fuar not found: ${slug}`);
    }

    // Convert Keystatic document to HTML - use Turkish content if language is 'tr'
    let content;
    if (language === 'tr' && fuar.contentTr) {
      content = await fuar.contentTr();
    } else {
      content = await fuar.content();
    }

    return {
      slug,
      title: fuar.title,
      subtitle: fuar.subtitle,
      startDate: fuar.startDate,
      endDate: fuar.endDate,
      frequency: fuar.frequency,
      sector: fuar.sector,
      venue: fuar.venue,
      venueAddress: fuar.venueAddress,
      city: fuar.city,
      country: fuar.country,
      locationLatitude: fuar.locationLatitude,
      locationLongitude: fuar.locationLongitude,
      organizerName: fuar.organizerName,
      organizerAddress: fuar.organizerAddress,
      organizerCity: fuar.organizerCity,
      organizerCountry: fuar.organizerCountry,
      organizerWebsite: fuar.organizerWebsite,
      logo: fuar.logo,
      coverImage: fuar.coverImage,
      website: fuar.website,
      instagram: fuar.instagram,
      tags: fuar.tags,
      featured: fuar.featured,
      content: content, // Keystatic document content in selected language
    };
  } catch (error) {
    console.error(`Error reading fuar ${slug}:`, error);
    throw error;
  }
}

export async function getFuarBySlugWithBothLanguages(slug) {
  try {
    const fuar = await reader.collections.fuar.read(slug);

    if (!fuar) {
      throw new Error(`Fuar not found: ${slug}`);
    }

    // Load both English and Turkish content
    const contentEn = await fuar.content();
    const contentTr = fuar.contentTr ? await fuar.contentTr() : null;

    return {
      slug,
      title: fuar.title,
      subtitle: fuar.subtitle,
      startDate: fuar.startDate,
      endDate: fuar.endDate,
      frequency: fuar.frequency,
      sector: fuar.sector,
      venue: fuar.venue,
      venueAddress: fuar.venueAddress,
      city: fuar.city,
      country: fuar.country,
      locationLatitude: fuar.locationLatitude,
      locationLongitude: fuar.locationLongitude,
      organizerName: fuar.organizerName,
      organizerAddress: fuar.organizerAddress,
      organizerCity: fuar.organizerCity,
      organizerCountry: fuar.organizerCountry,
      organizerWebsite: fuar.organizerWebsite,
      logo: fuar.logo,
      coverImage: fuar.coverImage,
      website: fuar.website,
      instagram: fuar.instagram,
      tags: fuar.tags,
      featured: fuar.featured,
      contentEn: contentEn,
      contentTr: contentTr,
    };
  } catch (error) {
    console.error(`Error reading fuar ${slug}:`, error);
    throw error;
  }
}

export async function getAllFuarSlugs() {
  try {
    const fuars = await reader.collections.fuar.all();
    return fuars.map(fuar => ({ slug: fuar.slug }));
  } catch (error) {
    console.error('Error reading fuar slugs:', error);
    return [];
  }
}

export async function getFuarsByCountry(country) {
  try {
    const allFuars = await getAllFuars();
    return allFuars.filter(fuar => fuar.country.toLowerCase() === country.toLowerCase());
  } catch (error) {
    console.error(`Error reading fuars by country ${country}:`, error);
    return [];
  }
}

export async function getFuarsBySector(sector) {
  try {
    const allFuars = await getAllFuars();
    return allFuars.filter(fuar => fuar.sector.toLowerCase().includes(sector.toLowerCase()));
  } catch (error) {
    console.error(`Error reading fuars by sector ${sector}:`, error);
    return [];
  }
}
