/** Components **/
import Grid from "../Grid/Grid";
import ServiceCard from "../ServiceCard/ServiceCard";

/** Component: Cards **/
const Cards = ({
  data = [],
  mq,
  type,
  gap,
  gapX
}) => {
  return(
    <>
      <Grid
        mq={mq}
        gap={gap}
        gapX={gapX}
      >
        {
          data.map((card, index) => (
            <ServiceCard
              type={type}
              key={`card-${card.title}-${index}`}
              title={card.title}
              description={card.description}
              image={card.image}
              to={card.to}
            />
          ))
        }
      </Grid>
    </>
  );
};

export default Cards;