/** Configuration **/
import globalConfig from "../../../config/global.config";
import colorsConfig from "../../../config/colors.config";

/** Utils **/
import { useGlobalData } from "../../func/UseTheme";
import { isValidCssColor, getStyleVars } from "../../../utils/styleHelpers";

/** CSS **/
import styles from './TextInput.module.css';

/** Component: TextInput **/
const TextInput = ({
  // Class props
  labelClass,
  inputClass,
  errorClass,
  // Text props
  value,
  label,
  error,
  // Styling props
  type = 'default',
  color = 'default',
  width,
  section,
  // "Standard" props
  name,
  className,
  onChange,
  onClick,
  placeholder,
}) => {
  
  /** Variables **/
  const labelClasses = ['block mb-2 font-bold'];
  const errorClasses = ['absolute text-red-500 font-bold'];
  const inputClasses = [''];
  let cssVars = {}

  /** Global **/
  let global = useGlobalData();
  if (!global) global = globalConfig(colorsConfig);

  /** Set color to default when its not a valid color **/
  if (!isValidCssColor(color) && !['default', 'primary', 'secondary'].includes(color)) color = 'default';
  
  /** Add element classes **/
  if(labelClass) labelClasses.push(labelClass);
  if(inputClass) inputClasses.push(inputClass);
  if(errorClass) errorClasses.push(errorClass);

  /** Add full width when asked **/
  if (width === 'full') inputClasses.push('w-full');

  /** Set type classes **/
  if (type === 'default') inputClasses.push(`focus:ring hover:ring ${styles.textInput}`);
  else if (type === 'underline') inputClasses.push(`border-b-2 ${styles.borderInput}`);
  else if (type === 'border') inputClasses.push(`border-2 ${styles.borderInput}`);
  
  /** CSS vars: valid css color  **/
  if (isValidCssColor(color)) {

    cssVars['--background-color'] = color;

    let hoverVar = '--hover-color';
    if (type === 'default') {

      cssVars['--text-color'] = 'white';
      hoverVar = '--tw-ring-color'

    }

    cssVars[hoverVar] = global.colors.default;

  }
  /** CSS vars: default colors **/
  else if (['default', 'primary', 'secondary'].includes(color)) {

    const vars = getStyleVars(global, 'textInput', type, color, section);

    cssVars = {
      ...cssVars,
      ...vars
    }

  }
  
  /** Event listeners **/
  const onChangeInput = (e) => onChange(e);
  const onClickInput = (e) => onClick(e);

  /** Render error **/
  function Error({ text, className }) {
    if (text) return <p className={className}>{text}</p>;
  }
 
  /** Render Component **/
  return(
    <div className={className}>
      {/** Label **/}
      <label className={labelClasses.join(' ')}>
        { label }
      </label>
      {/** Text input**/}
      <input
        style={cssVars}
        className={[
          'py-1.5 px-4 outline-none duration-300',
          inputClasses.join(' ')
        ].join(' ')}
        name={name}
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={ onChange ? onChangeInput : undefined }
        onClick={ onClick ? onClickInput : undefined }
      />
      {/** Error **/}
      
      <Error className={errorClasses.join(' ')} text={error}/>
    </div>
  );

};

export default TextInput;