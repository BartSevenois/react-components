/** Configuration **/
import globalConfig from "../../../config/global.config";
import colorsConfig from "../../../config/colors.config";

/** Utils **/
import { useGlobalData } from "../../func/UseTheme";
import { isValidCssColor, getStyleVars } from "../../../utils/styleHelpers";

/** CSS **/
import styles from './Button.module.css';

/** Component: Button **/
const Button = ({
  label,
  className,
  color = 'default',
  type = 'default',
  to,
  onClick
}) => {
  
  /** Variables */
  let btnCssVars = {};
  const classes = [];

  /**  Global data **/
  let global = useGlobalData();
  if (!global) global = globalConfig(colorsConfig);
  
  /** Set color to default when its not a valid color **/
  if (!isValidCssColor(color) && !['default', 'primary', 'secondary'].includes(color)) color = 'default';

  /** Add classname when its set **/
  if (className) classes.push(className);

  /** CSS vars: valid css color  **/
  if (isValidCssColor(color)) {

    if (type === 'default') {

      btnCssVars['--background-color'] = color;
      btnCssVars['--hover-text-color'] = color;
      btnCssVars['--text-color'] = 'white';
      btnCssVars['--border-color'] = color;

    }

    else if (type == 'border') {

      btnCssVars['--background-color'] = 'transparent';
      btnCssVars['--text-color'] = color;
      btnCssVars['--hover-color'] = color;
      btnCssVars['--hover-text-color'] = 'white';
      btnCssVars['--border-color'] = color;
      btnCssVars['--border-hover-color'] = color;

    }

  }
  /** CSS vars: default colors **/
  else if (['default', 'primary', 'secondary'].includes(color)) {

    const vars = getStyleVars(global, 'button', type, color);

    btnCssVars = {
      ...btnCssVars,
      ...vars
    }

  }

  /** Set type classes **/
  switch (type) {

    case 'border':
      classes.push('border-2 py-1.5');
      classes.push(styles.btnBorder)
      break;

    case 'default':
     default:
      classes.push('py-1.5 border-2');
      classes.push(styles.btnDefault);
      break;

  }

  /** Event handelers **/
  const onClickButton = (e) => {

    setTimeout(() => e.target.blur(),  100);

    if (to) window.location.href = to;
    if (onClick) onClick();

  }
  
  /** Returned component: Button **/
  return(
    <button
      className={[
        'px-4 font-semibold duration-500 focus:translate-y-1',
        classes.join(' ')
      ].join(' ')} 
      style={{...btnCssVars}}
      onClick={ onClickButton }
    >
      {label}
    </button>
  );

};

export default Button;