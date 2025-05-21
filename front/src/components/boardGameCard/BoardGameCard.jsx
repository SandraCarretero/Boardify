import { Card, GameImage, GameTitle } from './boardGameCard.styled';

const BoardGameCard = ({ title, image }) => {
  return (
    <Card>
      <GameImage src={image} alt={title} />
      <GameTitle>{title}</GameTitle>
    </Card>
  );
};

export default BoardGameCard;
