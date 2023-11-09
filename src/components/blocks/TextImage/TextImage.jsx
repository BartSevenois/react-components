/** Components **/
import TypoGraphy from "../../Elements/Typography/Typography";
import Container from "../Container/Container";

/** CSS **/
import styles from './TextImage.module.css';

/** Component: TextImage **/
const TextImage = ({
  className,
  fullscreen = false,
  imageHeigt = '500px',
  children,
  title,
  description
}) => {
  
  /** Variables**/
  const classes = [];
  const imgContainerClasses = [];
  const imageClasses = [];
  const textClasses = [];
  const cssVars = {};

  /** Add classname to classes when it's set **/
  if (className) classes.push(className);

  /** Add classes depending on fullsscreen prop**/
  if (fullscreen) {
    imgContainerClasses.push('lg:absolute lg:right-0');
    textClasses.push('w-full');
  } else if (!fullscreen) {
    textClasses.push('lg:w-[55%]')
  }

  if (imageHeigt) {
    cssVars['--min-height'] = imageHeigt;
    cssVars['--image-height'] = imageHeigt;
    classes.push(styles.textImageFullscreen);
    imageClasses.push(styles.image);
  }

  /** Render comonent TextImage **/
  return(
    <div style={cssVars} className={[
      'flex lg:gap-20 gap-12 flex-col lg:flex-row min-h-[500px]',
      classes.join(' ')
    ].join(' ')}>
      
      <div className={[
        'flex items-center',
        textClasses.join(' ')
      ].join(' ')}>
        {
          fullscreen ?  
            <Container className="w-full mt-20 lg:mt-0">
              <div className="lg:w-[50%]">
                {
                  children ? children :
                  <div>
                    <TypoGraphy color="primary" type="h2">{title}</TypoGraphy>
                    <TypoGraphy>{description}</TypoGraphy>
                  </div>

                }  
              </div>
            </Container>
          :
          <div>
            {
              children ? children : 
              <div>
                <TypoGraphy color="primary" type="h2">{title}</TypoGraphy>
                <TypoGraphy>{description}</TypoGraphy>
              </div>
            }
          </div>
        }
      </div>
      <div className={[
        'lg:w-[45%]',
        imgContainerClasses.join(' ')
      ].join(' ')}>
        <div style={{
          backgroundImage: 'url(./header.jpg)'
        }} className={[
          'bg-cover bg-center',
          imageClasses.join(' ')
        ].join(' ')}>

        </div>
      </div>
    </div>
  );

};

export default TextImage;