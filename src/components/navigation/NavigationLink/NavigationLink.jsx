import ChevronDown from "../../icons/ChevronDown";
import styles from './NavigationLink.module.css';

const NavigationLink = ({
  text,
  subLinks,
  scroll
}) => {
  let Link;
  const classes = [];

  if (scroll) classes.push(styles.linkScroll);
  else if (!scroll) classes.push(styles.link);

  if (!subLinks) {
    Link = (
      <div className={[
        'hover h-full flex items-center cursor-pointer font-bold',
        classes.join(' ')
      ].join(' ')}>
        <a className="duration-300">{text}</a>
      </div>
    )
  } else if(subLinks) {
    Link = (
      <div className={[
        'h-full cursor-pointer group z-50',
        classes.join()
      ].join(' ')}>
        <div className={[
          'h-full flex items-center font-bold'
        ].join(' ')}>
          <div className="duration-300">Services</div>
          <ChevronDown className="ml-1.5 mt-0.5 group-hover:rotate-180 duration-300" />
        </div>
        <div className="absolute top-20 text-black invisible group-hover:visible -ml-5 duration-300 opacity-0 group-hover:opacity-100">
          <div className={['mt-4 p-5', styles.subMenu].join(' ')}>
            {subLinks.map((item, index) => (
              <div 
                className="mb-4 last:mb-0 font-bold"
                key={`nav-link-${index}`}
              >
                <a className="duration-300 py-2">{item.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return(
    <>
      {Link}
    </>
  );
};

export default NavigationLink;