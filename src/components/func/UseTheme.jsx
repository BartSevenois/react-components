/** Imports **/
import { useContext, createContext } from 'react';

/** Utils **/
import { deepMergeObjects } from '../../utils/object.utils';

/** Configuration **/
import globalConfig from '../../config/global.config';
import colorsConfig from '../../config/colors.config';

const ThemeContext = createContext();

const UseTheme = ({
  config,
  colors,
  children
}) => {
  let configGlobal;
  let allColors = colorsConfig;
  if (colors) {
    allColors = deepMergeObjects(allColors, colors)

    configGlobal = globalConfig(allColors);
  }
  else if(!colors) {
    configGlobal = globalConfig(colorsConfig);
  }
  
  const configuration = deepMergeObjects(configGlobal, config);

  return(
    <ThemeContext.Provider value={configuration}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useGlobalData = () => {
  return useContext(ThemeContext);
}
export default UseTheme;