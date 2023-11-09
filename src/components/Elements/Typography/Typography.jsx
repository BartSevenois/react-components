/** Theme **/
import { useGlobalData } from '../../func/UseTheme';

/** Configuration **/
import globalConfig from '../../../config/global.config';
import colorsConfig from '../../../config/colors.config';

/** CSS **/
import styles from './Typography.module.css';

/** Component: Typgraphy **/
const TypoGraphy = ({
  type = 'p',
  font,
  children,
  className,
  color = 'default'
}) => {
  /** Variables **/
  const classes = [];
  const cssVars = [];

  /**  Global data **/
  let global = useGlobalData();
  if (!global) global = globalConfig(colorsConfig);

  /** Add classname to classes if it's set **/
  if (className) classes.push(className);
  if (styles.typography) classes.push(styles.typography);

  /** Add font classes when font is given **/
  if (font === 'bold') classes.push('font-bold');
  else if (font === 'semibold') classes.push('font-semibold');
  else if (font === 'thin') classes.push('font-thin');
  else if (font === 'extralight') classes.push('font-extralight');
  else if (font === 'light') classes.push('font-light');
  else if (font === 'normal') classes.push('font-normal');
  else if (font === 'medium') classes.push('font-medium');
  else if (font === 'extrabold') classes.push('font-extrabold');
  else if (font === 'black') classes.push('font-black');

  if (color === 'default') cssVars['--text-color'] = global.colors.text.default
  else if (color === 'white') cssVars['--text-color'] = global.colors.text.white;
  else if (color === 'primary') cssVars['--text-color'] = global.colors.text.primary;
  
  /** Render typgraphy based on type **/
  if (type === 'p') {
    classes.push('mb-4')
    return <p style={cssVars} className={classes.join(' ')}>{ children }</p>;
  }
  else if (type === 'label') {
    classes.push('font-semibold')
    return <label style={cssVars} className={classes.join(' ')}>{ children }</label>;
  }
  else if (type === 'h1'){
    classes.push('text-5xl font-bold mb-10 font');
    return <h1 style={cssVars} className={classes.join(' ')}>{ children }</h1>
  }
  else if (type === 'h2'){
    classes.push('text-4xl font-bold mb-8');
    return <h2 style={cssVars} className={classes.join(' ')}>{ children }</h2>
  }
  else if (type === 'h3'){
    classes.push('text-3xl font-bold mb-6');
    return <h3 style={cssVars} className={classes.join(' ')}>{ children }</h3>
  }
  else if (type === 'h4'){
    classes.push('text-2xl font-bold mb-6');
    return <h4 style={cssVars} className={classes.join(' ')}>{ children }</h4>
  }
  else if (type === 'h5'){
    classes.push('text-xl font-bold mb-6');
    return <h5 style={cssVars} className={classes.join(' ')}>{ children }</h5>
  }
  else if (type === 'h6'){
    classes.push('text-lg font-bold mb-6');
    return <h6 style={cssVars} className={classes.join(' ')}>{ children }</h6>
  }
};

export default TypoGraphy;
