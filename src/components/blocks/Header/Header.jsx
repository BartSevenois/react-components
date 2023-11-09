import Container from "../Container/Container";

const Header = ({
  className,
  children,
  height = '600px',
  image
}) => {
  return(
    <div 
      className={[
        'bg-cover bg-center text-center',
        className
      ].join(' ')}
      style={{
        backgroundImage: `url(${image})`,
        height: height
      }}
    >
      <Container className="py-20 bg-[rgba(0,0,0,0.4)] text-white flex items-center" style={{height: height}}>
        {children}
      </Container>
    </div>
  );
};

export default Header;