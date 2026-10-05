export const PRIMARY_PHONE = '0599778578';
export const WHATSAPP_NUMBER_INTL = '233599778578';
export const SUPPORT_EMAIL = 'prince.obeng32@gmail.com';

export const SHOWROOM_LOCATION = {
  name: 'TOF4 DOORS Showroom',
  street: 'Opposite Sakafia SHS',
  area: 'Tech, Aiyigya',
  city: 'Kumasi',
  country: 'Ghana',
  fullAddress: 'Tech, Aiyigya, opposite Sakafia SHS, Kumasi, Ghana',
  hours: 'Mon – Sat: 8:00 AM – 6:00 PM',
};

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Hello TOF4 DOORS, I am interested in your doors. Please send me your available designs and prices.',
  product: (productName: string, category: string) =>
    `Hello TOF4 DOORS, I am interested in this door design: "${productName}" (${category}). Please send me the price, available sizes, and more details.`,
  custom: 'Hello TOF4 DOORS, I would like help choosing a door for my home. Please contact me.',
  visit: 'Hello TOF4 DOORS, I would like to visit your showroom at Tech, Aiyigya (opposite Sakafia SHS). Are you open today?',
  priceQuote: (doorType: string, size?: string) =>
    `Hello TOF4 DOORS, I would like to get a price quote for ${doorType}${size ? ` (Size: ${size})` : ''}. Please guide me on options.`,
};
