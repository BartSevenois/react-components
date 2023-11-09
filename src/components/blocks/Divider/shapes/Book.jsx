const Book = ({ svgStyles, shapeStyles }) => {
  return(
    <svg className="relative block" style={svgStyles} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path style={shapeStyles} d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"></path>
    </svg>
  );
};

export default Book;