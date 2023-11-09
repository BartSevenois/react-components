import { useState, useRef } from 'react';
import useClickOutside from './../../../utils/useClickOutside';

import ChevronDown from "../../icons/ChevronDown";

const NavigationLinkMobile = ({
  subLinks,
  text
}) => {
  const [showMenu, setShowMenu] = useState('hidden');
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, 'mobileMenu',(event) => {
    setShowMenu('hidden opacity-0')
  });

  const onClick = () => {
    if (showMenu.includes('hidden')) {
      setShowMenu('block opacity-100');
    } else if (showMenu.includes('block')) {
      setShowMenu('hidden opacity-0')
    }
  };

  if (!subLinks) {
    return (
      <div
        className="mb-6 last:mb-0 font-bold text-zinc-600"
      >
        <a href="">{text}</a>
      </div>
    );
  }
  else if (subLinks) {
     return (
      <div className="mb-6 last:mb-0 font-bold text-zinc-600 cursor-pointer">
        <div className="flex gap-1" onClick={onClick} id="menu">
          <div id="mobileMenu">
            {text}
          </div>
          <ChevronDown
            className={[
              'mt-1 duration-300'
            ].join(' ')}
          />
        </div>
        <div ref={wrapperRef} className={['mt-4 ml-4 duration-300', showMenu ].join(' ')}>
          {
            subLinks.map((link, index) => (
              <div 
              key={`link-mobile-${link.text}-${index}`}
                className="mb-4 last:mb-0"
              >
                { link.text }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
};

export default NavigationLinkMobile;