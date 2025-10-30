import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function SocialBar() {
  return (
    <header className="bg-[#f6f6f6] py-2 md:py-4 px-4 md:px-40">

      <div className="flex items-center text-[#0d486b] space-x-4 md:space-x-6">

        <div className="flex items-center space-x-2">

          <PhoneIcon fontSize="small" className="text-[#0d486b]" />
          <a
            href="tel:+573235806796"
            className="text-sm md:text-base hover:text-cyan-400 transition-colors"
          >
            +57 3235806796
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <EmailIcon fontSize="small" className="text-[#0d486b]" />
          <a
            href="mailto:contacto@vitccel.com"
            className="text-sm md:text-base hover:text-cyan-400 transition-colors"
          >
            contacto@vitccel.com
          </a>
        </div>

      </div>
    </header>
  );
}