import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Code, ExternalLink } from 'lucide-react';

interface CodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeViewerModal: React.FC<CodeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeFile, setActiveFile] = useState<string>('App.tsx');

  if (!isOpen) return null;

  const files: Record<string, { path: string; description: string; code: string }> = {
    'App.tsx': {
      path: 'src/App.tsx',
      description: 'Main layout assembly containing all sections, states, and responsive wrappers',
      code: `import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { CatalogSection } from './components/CatalogSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoorGuideSection } from './components/DoorGuideSection';
import { AboutSection } from './components/AboutSection';
import { CallToAction } from './components/CallToAction';
import { ShowroomContact } from './components/ShowroomContact';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { DoorModal } from './components/DoorModal';
import { DoorItem, CategoryType } from './data/doorsData';

export default function App() {
  const [selectedDoor, setSelectedDoor] = useState<DoorItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All Doors');

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-zinc-900 flex flex-col selection:bg-[#E5B83B] selection:text-zinc-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductsSection onSelectCategory={(cat) => setActiveCategory(cat)} />
        <CatalogSection
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onSelectDoor={(door) => setSelectedDoor(door)}
        />
        <WhyChooseUs />
        <DoorGuideSection />
        <AboutSection />
        <CallToAction />
        <ShowroomContact />
      </main>
      <Footer />
      <MobileBottomBar />
      <DoorModal door={selectedDoor} onClose={() => setSelectedDoor(null)} />
    </div>
  );
}`
    },
    'whatsapp.ts': {
      path: 'src/utils/whatsapp.ts',
      description: 'Primary contact details, phone 0599778578, email prince.obeng32@gmail.com, and WhatsApp links',
      code: `export const PRIMARY_PHONE = '0599778578';
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
  return \`https://wa.me/\${WHATSAPP_NUMBER_INTL}?text=\${encoded}\`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Hello TOF4 DOORS, I am interested in your doors. Please send me your available designs and prices.',
  product: (productName: string, category: string) =>
    \`Hello TOF4 DOORS, I am interested in this door design: "\${productName}" (\${category}). Please send me the price, available sizes, and more details.\`,
  custom: 'Hello TOF4 DOORS, I would like help choosing a door for my home. Please contact me.',
  visit: 'Hello TOF4 DOORS, I would like to visit your showroom at Tech, Aiyigya (opposite Sakafia SHS). Are you open today?',
  priceQuote: (doorType: string, size?: string) =>
    \`Hello TOF4 DOORS, I would like to get a price quote for \${doorType}\${size ? \` (Size: \${size})\` : ''}. Please guide me on options.\`,
};`
    },
    'ShowroomContact.tsx': {
      path: 'src/components/ShowroomContact.tsx',
      description: 'Showroom location, phone 0599778578, email prince.obeng32@gmail.com, map and enquiry form',
      code: `// Key contact snippet from src/components/ShowroomContact.tsx
// Phone: 0599778578
// Email: prince.obeng32@gmail.com
// Location: Tech, Aiyigya, opposite Sakafia SHS, Kumasi, Ghana
// Fully wired with WhatsApp and mailto links.`
    },
    'doorsData.ts': {
      path: 'src/data/doorsData.ts',
      description: 'Door catalog specifications, sizes (3ft, 4ft, 5ft), security features, and categories',
      code: `// Complete specifications for Turkish Doors, Single & 1.5 Doors, Wooden Steel, and Bathroom Doors
// Each door item includes name, category, features, available sizes, and pricing inquiry hooks.`
    }
  };

  const handleCopy = (codeText: string, key: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const activeFileData = files[activeFile] || files['App.tsx'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#121316] text-white border-2 border-amber-400/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-[#17181c]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-[#E5B83B] border border-amber-500/30">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-cinzel">
                TOF4 DOORS — Source Code Viewer
              </h3>
              <p className="text-xs text-zinc-400">
                Inspect and copy the source code directly from here
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions banner on how to find it in AI Studio */}
        <div className="px-6 py-3 bg-amber-500/10 border-b border-amber-500/20 text-xs text-amber-200 flex items-center justify-between gap-3">
          <p>
            💡 <strong className="text-white">In Google AI Studio:</strong> Look at the top bar above the preview and click the <strong className="text-amber-300">"Code"</strong> tab (or the <strong className="text-amber-300">&lt;/&gt;</strong> icon) to open the built-in file tree!
          </p>
        </div>

        {/* File Tabs */}
        <div className="flex overflow-x-auto px-6 pt-3 pb-2 border-b border-zinc-800 bg-[#141518] gap-2">
          {Object.keys(files).map((fileName) => (
            <button
              key={fileName}
              type="button"
              onClick={() => setActiveFile(fileName)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeFile === fileName
                  ? 'bg-[#E5B83B] text-zinc-950 font-bold shadow-sm'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{fileName}</span>
            </button>
          ))}
        </div>

        {/* Code Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#0c0d0f] relative font-mono text-xs">
          <div className="flex items-center justify-between mb-3 text-zinc-400 text-[11px] pb-2 border-b border-zinc-800">
            <span>Path: <strong className="text-amber-300">{activeFileData.path}</strong> — {activeFileData.description}</span>
            <button
              type="button"
              onClick={() => handleCopy(activeFileData.code, activeFile)}
              className="px-3 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 flex items-center gap-1.5 transition-colors font-sans text-xs font-bold"
            >
              {copiedKey === activeFile ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy File Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-zinc-200 overflow-x-auto p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 leading-relaxed whitespace-pre-wrap select-all">
            {activeFileData.code}
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 border-t border-zinc-800 bg-[#17181c] flex items-center justify-between text-xs">
          <span className="text-zinc-400">All files are saved in the project root.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#E5B83B] text-zinc-950 font-bold hover:bg-amber-400 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
