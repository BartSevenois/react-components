const Split = ({ svgStyles, shapeStyles }) => {
  return(
    <svg className="relative block" style={svgStyles} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path style={shapeStyles} d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"></path>
    </svg>
  );
};

export default Split;