import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url"
import Emogi from "./Emogi";
import { Link } from "react-router-dom";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {

  return (
    
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" alignItems="center" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((icon) => icon.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>

          <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
            <Emogi rating={game.rating_top} />
          </Heading>
          
        </CardBody>
      </Card>
  );
};

export default GameCard;
