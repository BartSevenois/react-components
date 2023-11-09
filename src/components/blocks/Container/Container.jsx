const Container = ({
  children,
  className,
  childClass,
  style,
  ref
}) =>{
  const containerClasses = ['flex justify-center'];
  const classes = [
    '2xl:w-[1336px] 2xl:px-0 xl:w-[1180px] xl:px-0 lg:w-[924px] lg:px-0 md:w-[718px] md:px-0 sm:w-[600px] sm:px-0 w-full px-8'
  ];

  if (className) containerClasses.push(className);
  if (childClass) classes.push(childClass);
  
  return(
    <div style={style} ref={ref} className={containerClasses.join(' ')}>
      <div className={classes.join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default Container;