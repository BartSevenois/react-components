import UseTheme from "../../func/UseTheme";
import colorsConfig from "../../../config/colors.config";

/** Components **/
import NavigationBar from "../../navigation/NavigationBar/NavigationBar";
import Cards from "../../blocks/Cards/Cards";
import Container from "../../blocks/Container/Container";
import EmailForm from './../../forms/Email/EmailForm';
import Header from "../../blocks/Header/Header";
import Typography from './../../Elements/Typography/Typography';
import TextImage from "../../blocks/TextImage/TextImage";
import Footer from "../../navigation/Footer/Footer";

const links = [
  { text: 'Home'},
  { text: 'About' },
  {
    text: 'Services',
    subLinks: [
      { text: 'Service 100'},
      { text: 'Service 101'}
    ]
  }
];

const colors = {
  primary: '#79AC78',
  text: {
    primary: '#79AC78'
  }
}

const config = {
  navigationBar: {
    defaultType: {
      transparent: {
        subMenu: colors.primary,
        subMenuText: colorsConfig.text.white,
        subMenuTextHover: colorsConfig.text.default
      }
    }
  }
};

const services = [
  {
    title: 'Adipiscing',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc netus varius. Mus tempor. Nisl inceptos. Consequat suscipit ultricies nulla. Imperdiet mauris ultrices dapibus. Nunc id class ante.',
    image: './snoeien.jpg',
    to: '/adipiscing'
  },
  {
    title: 'Consectetuer',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl inceptos. Consequat suscipit ultricies nulla. Nunc id class ante.',
    image: './maaien.jpg',
    to: '/consectetuer'
  },
  {
    title: 'Consequat',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc netus varius. Mus tempor. Nisl inceptos. Consequat suscipit ultricies nulla. Imperdiet mauris ultrices dapibus. Nunc id class ante.',
    image: './struiken.jpg',
    to: '/consequat'
  },
  {
    title: 'Dapibus',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc netus varius. Mus tempor. Nisl inceptos. Consequat suscipit ultricies nulla. Imperdiet mauris ultrices dapibus. Nunc id class ante.',
    image: './trimmen.jpg',
    to: '/dapibus'
  }
];

const HomePage = () => {
  return(
    <>
      <UseTheme config={config} colors={colors}>
        <NavigationBar links={links} color="transparent" fixed logo="Evergreen" />
        <Header height="650px" image="./header-garden.jpg">
          <Typography color="white" className="mt-26" type="h1"><span style={{color: colors.primary}}>Lorem ipsum</span> odor amet!</Typography>
          <div className="flex justify-center">
            <Typography color="white" className="w-[85%]" font="bold">Lorem ipsum odor amet, consectetuer adipiscing elit. Cras penatibus posuere cras. Hendrerit non commodo porttitor? Laoreet potenti aenean. Mollis a per eu. Lorem nibh viverra ante. Purus sit mi phasellus eros. Dignissim purus curabitur mi.</Typography>
          </div>
        </Header>
        <Container className="py-20">
          <Typography color="primary" type="h2">Services</Typography>
          <Typography className="!mb-10 md:w-[70%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Cras penatibus posuere cras. Hendrerit non commodo porttitor? Laoreet potenti aenean. Mollis a per eu. Lorem nibh viverra ante. Purus sit mi phasellus eros.</Typography>
          <Cards 
            data={services}
            type="overlay"
            mq={{
              cols: {
                xl: 4,
                lg: 2
              },
              gap: {
                xl: 4
              }
            }} 
          />
        </Container>
        <TextImage 
          title="About me"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique fames gravida viverra auctor eget aptent. Maximus cras mollis porta, posuere vestibulum finibus. Consectetur arcu rhoncus enim sed placerat. Blandit sed ipsum sed quam est sapien. Augue fames fusce sem, nostra inceptos primis aptent odio nunc. Dui bibendum dictum feugiat himenaeos ligula varius malesuada! Inceptos sed donec nunc viverra dolor. Vestibulum donec placerat donec augue vivamus risus, egestas dictum orci."
          className="bg-zinc-100"
          fullscreen
          />
        <Container className="py-20">
          <EmailForm title="Contact form" type="border" color="primary" description="Lorem ipsum odor amet, consectetuer adipiscing elit. Cras penatibus posuere cras. Hendrerit non commodo porttitor?" />
        </Container>
        <Footer></Footer>
      </UseTheme>
    </>
  );
};

export default HomePage;