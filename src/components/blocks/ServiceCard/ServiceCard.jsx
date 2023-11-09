/** Components **/
import Card from "../Card/Card";
import TypoGraphy from "../../Elements/Typography/Typography";
import Button from "../../Elements/Button/Button";

/** CSS **/
import styles from "./ServiceCard.module.css";

/** Component: ServiceCard **/
const ServiceCard = ({
  image,
  title,
  description,
  button = 'Read more',
  buttonColor = 'primary',
  type = 'default',
  to
}) => {
  
  /** Variables **/
  const overlayClasses = [];
  const btnClasses = [];

  if (type ==='overlay') {
    overlayClasses.push('lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-x-0');
    overlayClasses.push(styles.overlay);
    btnClasses.push('lg:hidden');
  }

  /** Render component: ServiceCard **/
  return(
    <Card className={[
      'last:justify-self-center flex flex-col group overflow-hidden',
      styles.serviceCard
    ].join(' ')}>
     <div className="h-[250px] bg-cover bg-center relative" style={{ backgroundImage: `url(${image})`}}>
      <div className={[
        'h-full w-full  left-0 justify-center flex items-center duration-700 transition-all -translate-x-8 invisible opacity-0',
        overlayClasses.join(' ')
      ].join(' ')}>
        <Button to={to} label={button} color={buttonColor}/>
      </div>
     </div>
      <div className="p-5 flex flex-1 flex-col">
        <TypoGraphy className="!mb-3" type="h4">{title}</TypoGraphy>
        <TypoGraphy className="lg:mb-0">{description}</TypoGraphy>
        <div className={[
          'mt-auto pt-5 block',
          btnClasses.join(' ')
        ].join(' ')}>
          <Button to={to} label={button} color={buttonColor}/>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;