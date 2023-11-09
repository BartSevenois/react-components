import React, { useState, useRef, useEffect } from "react";
import { useGlobalData } from "../../func/UseTheme";
import { isValidCssColor, getStyleVars, isValidPictureFormat } from "../../../utils/styleHelpers";

import globalConfig from "../../../config/global.config";
import colorsConfig from "../../../config/colors.config";

import styles from './NavigationBar.module.css';

/** Components */
import Container from "./../../blocks/Container/Container";
import NavigationLink from "../NavigationLink/NavigationLink";
import NavigationLinkMobile from "./../NavigationLinkMobile/NavigationLinkMobile";
import useClickOutside from "./../../../utils/useClickOutside";

/** Icons */
import Hamburger from "../../icons/Hamburger";

const NavigationBar = ({
  color = 'default',
  type = 'default',
  logo = 'Logo',
  fixed = false,
  className,
  links = [ 
    { text: 'Home' }
  ]
}) => {
  /** Variables **/
  const classes = [];
  const [scrollClass, setScrollClass] = useState();
  let navCssVars = {};

  /** Global data **/
  let global = useGlobalData();
  if (!global) global = globalConfig(colorsConfig);

  /** Add scrollclass to classes **/
  classes.push(scrollClass);

  /** Set color to default when its not a valid color **/
  if (!isValidCssColor(color) && !['default', 'primary', 'secondary', 'transparent'].includes(color)) color = 'default';
  
  /** Add classname when its set **/
  if (className) classes.push(className);

  /**Add fixed class when fixed is true **/
  if (fixed) classes.push('fixed');
  
  /** Add shadow class when color is not transparent **/
  if (color !== 'transparent') classes.push('shadow-md');
  
  /** CSS vars: valid css color  **/
  if (isValidCssColor(color)) {
    navCssVars['--background-color'] = color;
    navCssVars['--text-color'] = global.colors.text.white;
    navCssVars['--hover-text-color'] = global.colors.gray[200];
    navCssVars['--sub-menu-color'] = global.colors.default;
    navCssVars['--sub-menu-text-color'] = global.colors.text.default;
    navCssVars['--sub-menu-text-hover-color'] = color;
  }
  /** CSS vars: default colors **/
  else if (['default', 'primary', 'secondary', 'transparent'].includes(color)) {

    const vars = getStyleVars(global, 'navigationBar', type, color);

    navCssVars = {
      ...navCssVars,
      ...vars
    }
  } 

  /** Event handler variables */
  const [showMenu, setShowMenu] = useState('hidden');
  const [ scroll, setScroll] = useState(false);
  const wrapperRef = useRef(null);

  /** Event handlers **/

  // Handle hide show menu
  const onClick = () => {
    if (showMenu.includes('hidden')) {
      setShowMenu('block opacity-100');
    } else if (showMenu.includes('block')) {
      setShowMenu('hidden opacity-0')
    }
  };

  useClickOutside(wrapperRef, 'menu', () => {
    setShowMenu('hidden opacity-0')
  });

  // Handle scroll (for transparent color)
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80 && color === 'transparent') {
      setScrollClass(styles.navigationBarScroll + ' shadow-md');
      setScroll(true);
    }
    else if (currentScrollY < 80 && color === 'transparent') {
      setScrollClass(styles.navigationBarTransparent);
      setScroll(false);
    }
    else if (color !== 'transparent') {
      setScrollClass('shadow-md');
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [color]);

  /** Render logo **/
  let Logo;
  if (isValidPictureFormat(logo)) {
    Logo = (
      <img className="h-14" src={logo} />
    );
  } else if (!isValidPictureFormat(logo)) {
    Logo = (<div>{logo}</div>)
  }

  /** Render component **/
  return (
    <Container 
      style={navCssVars}
      className={[
        'h-20 w-full duration-300 z-40',
        styles.navigationBar,
        classes.join(' '),
      ].join(' ')}
      childClass="flex items-center"
    >
      <div className="mr-5 mt-0.5 md:hidden block" onClick={onClick} id="menu">
        <Hamburger id="menu" />
      </div>
      <div className={[
        'lg:mr-28 md:mr-14 mr-auto text-2xl font-bold uppercase duration-300',
        styles.logo
      ].join(' ')}>
        {Logo}
      </div>
      <div className="md:flex gap-10 h-full mr-auto hidden">
        {
          links.map((link, index) => (
            <NavigationLink scroll={scroll} key={`link-${link.text}-${index}`} text={link.text} subLinks={link?.subLinks} />
          ))
        }
      </div>
      <div ref={wrapperRef}>
        <Container className={
          [
            'absolute left-0 w-full top-20 z-50 bg-zinc-200 py-8 md:hidden',
            showMenu
          ].join(' ')
        }>
          {
            links.map((link, index) => (
              <NavigationLinkMobile key={`link-${link.text}-${index}`} text={link.text} subLinks={link?.subLinks} />
            ))
          }
        </Container>
      </div>
    </Container>
  )
}

export default NavigationBar;