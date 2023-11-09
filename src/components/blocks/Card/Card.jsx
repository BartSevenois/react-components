const Card = ({
  children,
  className
}) => {
  return(
    <div className={['shadow-md bg-white', className].join(' ')}>
      { children }
    </div>
  );
};

export default Card;