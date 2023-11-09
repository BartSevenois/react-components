export const isValidCssColor = (colorString) => {
  const colorRegex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^rgb\(\s*([01]?\d?\d|2[0-4]\d|25[0-5])\s*,\s*([01]?\d?\d|2[0-4]\d|25[0-5])\s*,\s*([01]?\d?\d|2[0-4]\d|25[0-5])\s*\)$)|(^rgba\(\s*([01]?\d?\d|2[0-4]\d|25[0-5])\s*,\s*([01]?\d?\d|2[0-4]\d|25[0-5])\s*,\s*([01]?\d?\d|2[0-4]\d|25[0-5])\s*,\s*(0?\.\d|1(\.0)?)\s*\)$)|(^hsl\(\s*(\d{1,3}|[0-2]\d{1,2}|3[0-5]\d)\s*,\s*\d{1,2}%\s*,\s*\d{1,2}%\s*\)$)|(^hsla\(\s*(\d{1,3}|[0-2]\d{1,2}|3[0-5]\d)\s*,\s*\d{1,2}%\s*,\s*\d{1,2}%\s*,\s*(0?\.\d|1(\.0)?)\s*\)$)|(white|silver|gray|black|red|maroon|yellow|olive|lime|green|aqua|teal|blue|navy|fuchsia|purple)/i;
  return colorRegex.test(colorString);
}

export const isValidPictureFormat = (str) => {
  // Regular expression for common image file extensions
  const imageFormatsRegex = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
  return imageFormatsRegex.test(str);
}

export const getStyleVars = (global, element, type, color, section) => {
  const cssVars = {};

  const options = [
    { prop: 'text', css: '--text-color'},
    { prop: 'textHover', css: '--hover-text-color'},
    { prop: 'hover', css: '--hover-color'},
    { prop: 'border', css: '--border-color'},
    { prop: 'borderHover', css: '--border-hover-color'},
    { prop: 'subMenu', css: '--sub-menu-color'},
    { prop: 'ring', css: '--tw-ring-color'},
    { prop: 'scrollColor', css: '--scroll-color'},
    { prop: 'scrollText', css: '--scroll-text-color'},
    { prop: 'scrollTextHover', css: '--scroll-text-hover-color'},
    { prop: 'subMenuText', css: '--sub-menu-text-color'},
    { prop: 'subMenuTextHover', css: '--sub-menu-text-hover-color'},
    { prop: 'logo', css: '--logo-color'},
    { prop: 'scrollLogo', css: '--scroll-logo-color'},
  ];

  for (var i = 0; i < options.length; i ++) {
    if (global?.[`${section}Section`]?.[element]?.[`${type}Type`]?.[color]?.[options[i].prop]) cssVars[options[i].css] = global[`${section}Section`][element][`${type}Type`][color][options[i].prop];
    else if (global?.[`${section}Section`]?.[element]?.[`${type}Type`]?.[options[i].prop]) cssVars[options[i].css] = global[`${section}Section`][element][`${type}Type`][options[i].prop];
    else if (global?.[element]?.[`${type}Type`]?.[color]?.[options[i].prop]) cssVars[options[i].css] = global[element][`${type}Type`][color][options[i].prop];
    else if (global?.[element]?.[`${type}Type`]?.[options[i].prop]) cssVars[options[i].css] = global[element][`${type}Type`][options[i].prop];
    else if (global?.[element]?.[color]?.[options[i].prop]) cssVars[options[i].css] = global[element][color][options[i].prop];
  }

  // Element color
  if (global?.[`${section}Section`]?.[element]?.[`${type}Type`]?.[color]?.color) cssVars['--background-color'] = global[`${section}Section`][element][`${type}Type`][color].color;
  else if (global?.[element]?.[`${type}Type`]?.[color]?.color) cssVars['--background-color'] = global[element][`${type}Type`][color].color;
  else if (global?.[element]?.[color]?.color) cssVars['--background-color'] = global[element][color].color;
  else if (global?.[element]?.[`${type}Type`]?.color) cssVars['--background-color'] = global[element][`${type}Type`].color;
  else if(global?.colors?.[color]) cssVars['--background-color'] = global.colors[color];
  
  return cssVars;
}
