import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconBriefcase,
  } from '@tabler/icons-react';
  import React, { useState } from 'react';
  import Data from '../Data/Data';
  import { useLocation } from 'react-router-dom';
import FooterModal from './FooterModal';
  
  
  const Footer = () => {
    const location = useLocation();
    const { footerLinks } = Data();
  
    const [opened, setOpened] = useState(false);
    const [activeLink, setActiveLink] = useState('');
  
    const handleClick = (link: string) => {
      setActiveLink(link);
      setOpened(true);
    };
  
    return location.pathname !== '/signup' && location.pathname !== '/login' ? (
      <div className="pt-20 pb-5 flex gap-8 justify-around bg-mine-shaft-950 font-['poppins'] flex-wrap p-4">
        <div className="w-1/4 sm-mx:w-1/3 xs-mx:w-1/2 xsm-mx:w-full flex flex-col gap-4">
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconBriefcase className="h-6 w-6" stroke={2.5} />
            <div className="text-xl font-semibold">DreamHire</div>
          </div>
          <div className="text-sm text-mine-shaft-300">
            Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
          </div>
          <div className="flex gap-3 text-bright-sun-400 [&>a]:bg-mine-shaft-900 [&>a]:p-2 [&>a]:rounded-full [&>a]:cursor-pointer hover:[&>a]:bg-mine-shaft-700">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <IconBrandFacebook />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <IconBrandInstagram />
  </a>
  <a href="https://wa.me/9563885151" target="_blank" rel="noopener noreferrer">
    <IconBrandWhatsapp />
  </a>
</div>

        </div>
  
        {footerLinks.map((item, index) => (
          <div key={index}>
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
            {item.links.map((link, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(link)}
                className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
  
        <FooterModal opened={opened} onClose={() => setOpened(false)} title={activeLink} />
      </div>
    ) : null;
  };
  
  export default Footer;
  