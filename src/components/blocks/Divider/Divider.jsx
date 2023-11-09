import Waves from './shapes/Waves';
import Curve from './shapes/Curve';
import Triangle from './shapes/Triangle';
import TriangleAsym from './shapes/TriangleAsym';
import Arrow from './shapes/Arrow';
import Tilt from './shapes/Tilt';
import Split from './shapes/Split';
import Book from './shapes/Book';
import WavesOpacity from './shapes/WavesOpacity';
import CurveAsym from './shapes/CurveAsym';


const Divider = ({ 
  shapeWidth = '100',
  shapeHeight = '150',
  shape = 'waves',
  color = '#eee',
  flip = false,
  top = false,
  className,
  childrenClass,
  children
}) => {
  const containerClasses = ['relative'];
  const classes = [
    'absolute left-0 w-full overflow-hidden leading-0'
  ];

  const childrenStyles = {};
  const childrenClasses = [];

  const svgStyles = {
    width: `${shapeWidth}%`,
    height: `${shapeHeight}px`
  };

  const shapeStyles = {
    fill: color
  }

  let Shape;
  if(shape === 'waves') {
    Shape = <Waves shapeStyles={shapeStyles} svgStyles={svgStyles}  />;
    if (!top) classes.push('rotate-180');
  }
  else if (shape === 'curve') {
    Shape = <Curve shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }
  else if (shape === 'triangle') {
    Shape = <Triangle shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }
  else if (shape === 'triangle-asym') {
    Shape = <TriangleAsym shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }
  else if (shape === 'arrow') {
    Shape = <Arrow shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }
  else if (shape === 'tilt') {
    Shape = <Tilt shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (!top) classes.push('rotate-180');
  }
  else if (shape === 'split') {
    Shape = <Split shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }
  else if (shape === 'book') {
    Shape = <Book shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }
  else if (shape === 'waves-opacity') {
    Shape = <WavesOpacity shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (!top) classes.push('rotate-180');
  }
  else if (shape === 'curve-asym') {
    Shape = <CurveAsym shapeStyles={shapeStyles} svgStyles={svgStyles} />;
    if (top) classes.push('rotate-180');
  }


  if (flip) {
    classes.push('scale-x-[-1]')
  }

  if (top) {
    classes.push('top-0');
    childrenStyles.paddingTop = `${shapeHeight}px`;
  }  else if (!top) {
    classes.push('bottom-0');
    childrenStyles.paddingBottom = `${shapeHeight}px`;
  }

  if (className) containerClasses.push(className);
  if (childrenClass) childrenClasses.push(childrenClass);
  return(
    <div className={containerClasses.join(' ')}>
      <div className='h-fit'>
        <div style={childrenStyles} className={childrenClasses.join(' ')}>
          {children}
        </div>
        <div className={classes.join(' ')}>
          { Shape }
        </div>
      </div>
    </div>
  );

};

export default Divider;