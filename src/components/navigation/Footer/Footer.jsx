/** Components **/
import Container from "../../blocks/Container/Container";

/** Component: Footer**/
const Footer = ({
  className,
  color
}) => {

  /** Variables **/
  const classes = [];

  /** Add classname to classes if it's set **/
  if (className) classes.push(className);

  /** Render component: Footer **/
  return(
    <Container className="bg-zinc-800 text-white py-8">
      Footer
    </Container>
  );

};

export default Footer;