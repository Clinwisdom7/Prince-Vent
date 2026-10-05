import heroDoorImg from '@/src/assets/images/tof4_hero_door_1791028886082.jpg';
import turkishDoorImg from '@/src/assets/images/tof4_turkish_door_1791028933878.jpg';
import oneHalfDoorImg from '@/src/assets/images/tof4_onehalf_door_1791028912022.jpg';
import woodSteelDoorImg from '@/src/assets/images/tof4_woodsteel_door_1791028948296.jpg';
import bathDoorImg from '@/src/assets/images/tof4_bath_door_1791028922448.jpg';
import redDoorImg from '@/src/assets/images/tof4_red_door_1791028899853.jpg';

export interface DoorItem {
  id: string;
  name: string;
  category: 'Turkish Doors' | 'Single & 1½ Doors' | 'Wooden Steel Doors' | 'Bathroom Doors';
  image: string;
  shortDesc: string;
  details: string;
  features: string[];
  recommendedFor: string;
  sizes: string[];
  isFeatured?: boolean;
  tag?: string;
}

export const CATEGORIES = [
  'All Doors',
  'Turkish Doors',
  'Single & 1½ Doors',
  'Wooden Steel Doors',
  'Bathroom Doors',
] as const;

export type CategoryType = (typeof CATEGORIES)[number];

export const DOORS_DATA: DoorItem[] = [
  {
    id: 'turkish-armored-grand',
    name: 'Turkish Armored Security Entrance Door',
    category: 'Turkish Doors',
    image: turkishDoorImg,
    shortDesc: 'Stylish and durable Turkish door engineered to add uncompromising security and architectural elegance to your main entrance.',
    details: 'Constructed with heavy-duty multi-layer steel plates, precision embossed exterior paneling, and high-security multi-point deadlock cylinder mechanism for ultimate home protection.',
    features: [
      'Multi-point locking security system',
      'Heavy-gauge galvanized steel core',
      'Sound & thermal insulation rubber seal',
      'Anti-drill and anti-crowbar door frame',
      'Solid architectural brass/gold pull handle'
    ],
    recommendedFor: 'Main house entrance, executive residences, luxury villas',
    sizes: ['3ft x 7ft (Single)', '3.5ft x 7ft (Wide Single)', '4ft x 7ft (1½ Leaf)'],
    isFeatured: true,
    tag: 'Best Seller'
  },
  {
    id: 'signature-carmine-red',
    name: 'Signature Carmine Red Security Door',
    category: 'Turkish Doors',
    image: redDoorImg,
    shortDesc: 'A striking statement security door in bold carmine red with vertical brushed gold accents, inspired by our flagship showroom collection.',
    details: 'Designed for homeowners who want their entrance to stand out with prestige. Features a weather-resistant baked enamel finish that resists harsh sun and rain without fading.',
    features: [
      'Striking carmine red finish with gold bar handle',
      'Multi-bolt security lockset with key-card option',
      'Heavy reinforced steel frame',
      'Weatherproof exterior protective coat',
      'Concealed security hinges'
    ],
    recommendedFor: 'Front entrance, modern duplexes, contemporary estates',
    sizes: ['3ft x 7ft', '3.5ft x 7ft', '4ft x 7ft'],
    isFeatured: true,
    tag: 'Flagship Showroom'
  },
  {
    id: 'onehalf-mother-child',
    name: 'Single & 1½ Mother-and-Child Security Door',
    category: 'Single & 1½ Doors',
    image: oneHalfDoorImg,
    shortDesc: 'Practical and stylish door option featuring an unequal double-leaf design for flexible entrance width and grand presentation.',
    details: 'The secondary leaf opens easily to allow wide furniture and appliance moving, then locks firmly in place for daily high-security single-door operation.',
    features: [
      '1½ unequal double-leaf configuration',
      'Secondary leaf dual flush security bolts',
      'Dark walnut wood grain & steel inlay',
      'Full perimeter heavy-duty weatherstrip',
      'Heavy-duty bearing hinges for smooth swing'
    ],
    recommendedFor: 'Main estate entrances, spacious home foyers, double-height entrances',
    sizes: ['4ft x 7ft (Standard 1½)', '4.5ft x 7ft', '5ft x 7ft (Grand 1½)'],
    isFeatured: true,
    tag: 'Most Practical'
  },
  {
    id: 'wooden-steel-composite',
    name: 'Wooden Steel Architectural Door',
    category: 'Wooden Steel Doors',
    image: woodSteelDoorImg,
    shortDesc: 'A seamless combination of the natural warmth and prestige of wood with the unyielding strength and durability of steel.',
    details: 'Offers the organic aesthetic of rich timber slats bonded securely over a high-tensile solid steel armor plate, providing natural beauty without compromising home safety.',
    features: [
      'Rich timber finish with heavy steel backing',
      'Termite and moisture-resistant treatment',
      'Multi-point perimeter locking bolts',
      'Long vertical brushed gold security handle',
      'Reinforced steel sub-frame'
    ],
    recommendedFor: 'Luxury modern homes, modern apartments, front and patio security entrances',
    sizes: ['3ft x 7ft', '3.5ft x 7ft', '4ft x 7ft'],
    isFeatured: true,
    tag: 'Premium Craft'
  },
  {
    id: 'modern-waterproof-bathroom',
    name: 'Modern Waterproof Bathroom Door',
    category: 'Bathroom Doors',
    image: bathDoorImg,
    shortDesc: 'Functional, attractive door solution engineered specifically for high moisture and modern bathroom aesthetics.',
    details: 'Manufactured with high-grade waterproof composite material and frosted privacy fluted panel, ensuring 100% resistance against moisture warping, steam, and swelling.',
    features: [
      '100% waterproof composite & aluminum frame',
      'Zero swelling, warping or peeling from steam',
      'Frosted fluted architectural glass for privacy',
      'Matte black ergonomic privacy latch',
      'Easy to wipe clean & hygienic'
    ],
    recommendedFor: 'Master en-suites, guest washrooms, hotel & apartment bathrooms',
    sizes: ['2.5ft x 7ft (Standard Washroom)', '2.75ft x 7ft', '3ft x 7ft'],
    isFeatured: true,
    tag: '100% Moisture Proof'
  },
  {
    id: 'hero-architectural-pivot',
    name: 'Contemporary Villa Security Pivot Door',
    category: 'Turkish Doors',
    image: heroDoorImg,
    shortDesc: 'Wide-profile modern entrance door blending dark charcoal steel and warm teak paneling with illuminated smart lock hardware.',
    details: 'An imposing grand entrance door designed for modern architectural projects, featuring reinforced multi-lock cylinders and premium gold trims.',
    features: [
      'High-tensile armored steel construction',
      'Warm architectural timber slats',
      'Smart digital lock & traditional cylinder integration',
      'Heavy-duty security frame with sub-anchors',
      'Acoustic sound dampening core'
    ],
    recommendedFor: 'Front entrance of luxury homes, modern Ghanaian villas, corporate offices',
    sizes: ['3.5ft x 7ft', '4ft x 7ft', '5ft x 7ft'],
    isFeatured: false,
    tag: 'Architectural Choice'
  }
];

export const CATEGORY_SUMMARIES = [
  {
    category: 'Turkish Doors',
    headline: 'Turkish Doors',
    description: 'Stylish and durable doors designed to add security and elegance to your entrance.',
    image: turkishDoorImg,
    badge: 'High Security'
  },
  {
    category: 'Single & 1½ Doors',
    headline: 'Single and 1½ Doors',
    description: 'Practical and stylish door options for different entrance sizes and home designs.',
    image: oneHalfDoorImg,
    badge: 'Flexible Sizes'
  },
  {
    category: 'Wooden Steel Doors',
    headline: 'Wooden Steel Doors',
    description: 'A combination of the warm appearance of wood with the strength and durability of steel.',
    image: woodSteelDoorImg,
    badge: 'Wood Warmth + Steel Armor'
  },
  {
    category: 'Bathroom Doors',
    headline: 'Bathroom Doors',
    description: 'Functional, attractive door solutions designed for modern bathrooms.',
    image: bathDoorImg,
    badge: 'Waterproof & Durable'
  }
];
