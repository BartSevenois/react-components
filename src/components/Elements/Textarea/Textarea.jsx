import { inputTypeClasses } from './../../../utils/propsUtils';
import globalConfig from "../../../config/global.config";
import colorsConfig from "../../../config/colors.config";
import styles from './Textarea.module.css';
import { getStyleVars, isValidCssColor } from '../../../utils/styleHelpers';
import { useGlobalData } from "../../func/UseTheme";

const TextInput = ({
  labelClass,
  label,
  inputClass,
  value,
  name,
  errorClass,
  error,
  type = 'default',
  className,
  onChange,
  color = 'default',
  onClick,
  section
}) => {

  let global = useGlobalData();
  if (!global) global = globalConfig(colorsConfig);

  // Variables
  const labelClasses = ['block mb-2 font-bold'];
  let inputClasses = ['py-1.5 px-4 outline-none duration-300 w-full'];
  const errorClasses = ['absolute text-red-500 font-bold'];
  let cssVars = {};

  if (!isValidCssColor(color) && !['default', 'primary', 'secondary'].includes(color)) color = 'default';
  // Elements classes
  if(labelClass) labelClasses.push(labelClass);
  if(inputClass) inputClasses.push(inputClass);
  if(errorClass) errorClasses.push(errorClass);
  let typeStyle = '';

  if (type === 'default') {
    typeStyle = styles.textInput;
    inputClasses.push(`focus:ring hover:ring`);
  }
  else if (type === 'underline') {
    typeStyle = styles.borderInput;
    inputClasses.push('border-b-2');
  }
  else if (type === 'border') {
    typeStyle = styles.borderInput;
    inputClasses.push('border-2');
  }

  if (isValidCssColor(color)) {
    cssVars['--background-color'] = color;
    let hoverVar = '--hover-color';
    if (type === 'default') {
      cssVars['--text-color'] = 'white';
      hoverVar = '--tw-ring-color'
    }
    cssVars[hoverVar] = global.colors.default;
  }
  else if (['default', 'primary', 'secondary'].includes(color)) {
    const vars = getStyleVars(global, 'textarea', type, color, section);
    cssVars = {
      ...cssVars,
      ...vars
    }
  }

  // Render error
  function Error({ text, className }) {
    if (text) return <p className={className}>{text}</p>;
  }

  // Render TextInput
  return(
    <div className={className}>
      <label className={labelClasses.join(' ')}>
        { label }
      </label>
      <textarea
        style={cssVars}
        rows={5}
        className={[
          inputClasses.join(' '),
          typeStyle
        ].join(' ')}
        name={name}
        value={value}
        onChange={ onChange ? onChange : undefined }
        onClick={ onClick ? onClick : undefined }
      ></textarea>
      <Error className={errorClasses.join(' ')} text={error}/>
    </div>
  );
};

export default TextInput;