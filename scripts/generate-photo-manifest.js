const fs = require('fs');
const path = require('path');

const PHOTO_DIR = path.join(process.cwd(), 'public', 'photo-gallery');
const OUTPUT_FILE = path.join(process.cwd(), 'app', 'gallery', 'photo-manifest.ts');

// Define photographer links for each event/directory
const PHOTOGRAPHER_LINKS = {
  'obedience-july-20': {
    photographerName: 'Kelly Iannello Photography',
    url: 'https://kellyiannellophotography.pixieset.com/gsdcgnhakcobediencetrial/',
    description: 'GSDCGNH AKC Obedience Trial'
  },
  'akc-rally-trial-july-20': {
    photographerName: 'Kelly Iannello Photography',
    url: 'https://kellyiannellophotography.pixieset.com/gsdcgnhakcrallytrial/',
    description: 'GSDCGNH AKC Rally Trial'
  },
  "october-2025-scent-work": {
    "photographerName": "Kelly Iannello Photography",
    "url": "https://kellyiannellophotography.pixieset.com/gsdcgnhscentwebpics/",
    "description": "October 2025 Scent Work"
  }
};

function getAllPhotos(dir, baseDir = '') {
  const photos = [];
  
  if (!fs.existsSync(dir)) {
    console.log('Photo directory does not exist:', dir);
    return photos;
  }

  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(baseDir, item);
    
    if (fs.statSync(fullPath).isDirectory()) {
      // Recursively get photos from subdirectories
      photos.push(...getAllPhotos(fullPath, relativePath));
    } else if (item.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
      // It's an image file
      const pathParts = relativePath.split(path.sep);
      const fileName = pathParts[pathParts.length - 1];
      const directory = pathParts.length > 1 ? pathParts[pathParts.length - 2] : 'general';
      
      photos.push({
        src: `/photo-gallery/${relativePath.replace(/\\/g, '/')}`,
        alt: fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '), // Remove extension and replace dashes/underscores
        eventId: directory !== 'general' ? directory : undefined,
        eventTitle: directory !== 'general' ? formatEventTitle(directory) : undefined,
        category: getCategoryFromDirectory(directory)
      });
    }
  }
  
  return photos;
}

function formatEventTitle(directory) {
  // Convert directory names like "conformation-oct-2024" to "Conformation Oct 2024"
  return directory
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getCategoryFromDirectory(directory) {
  // Map directory names to categories
  if (directory.includes('conformation')) return 'conformation';
  if (directory.includes('obedience') || directory.includes('rally')) return 'obedience';
  if (directory.includes('scent') || directory.includes('trial')) return 'trial';
  if (directory.includes('meeting')) return 'meeting';
  if (directory.includes('seminar')) return 'seminar';
  return 'general';
}

function generateManifest() {
  const photos = getAllPhotos(PHOTO_DIR);
  
  const manifest = `// Auto-generated file - do not edit manually
// Generated on ${new Date().toISOString()}

export interface GalleryPhoto {
  src: string;
  alt: string;
  eventId?: string;
  eventTitle?: string;
  category?: string;
}

export interface PhotographerLink {
  photographerName: string;
  url: string;
  description?: string;
}

export const allPhotos: GalleryPhoto[] = ${JSON.stringify(photos, null, 2)};

export const photographerLinks: Record<string, PhotographerLink> = ${JSON.stringify(PHOTOGRAPHER_LINKS, null, 2)};
`;

  // Ensure the directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, manifest);
  console.log(`Generated photo manifest with ${photos.length} photos and ${Object.keys(PHOTOGRAPHER_LINKS).length} photographer links`);
}

generateManifest();