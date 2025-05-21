import PlayerAvatar from '../playerAvatar/PlayerAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  Header,
  HostName,
  Content,
  GameInfoLeft,
  GameImage,
  GameDetails,
  GameName,
  GameDate,
  GameLocation,
  Players,
  ExtraPlayers
} from './gameSession.styled';

const GameSessionCard = ({
  hostName,
  hostAvatar,
  gameImage,
  gameName,
  date,
  location,
  players
}) => {
  return (
    <Card>
      <Header>
        <PlayerAvatar avatar={hostAvatar} name={hostName} isLarge={true}/>
        <HostName>{hostName}</HostName>
      </Header>

      <Content>
        <GameInfoLeft>
          <GameImage src={gameImage} alt={gameName} />
          <GameDetails>
            <GameName>{gameName}</GameName>
            <GameDate>
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ marginRight: '6px' }}
              />
              {date}
            </GameDate>
            <GameLocation>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: '6px' }}
              />
              {location}
            </GameLocation>
          </GameDetails>
        </GameInfoLeft>

        <Players>
          {players.slice(0, 2).map((player, index) => (
            <PlayerAvatar
              key={index}
              avatar={player.avatar}
              name={player.name}
              index={index}
            />
          ))}

          {players.length > 2 && (
            <ExtraPlayers>+{players.length - 2}</ExtraPlayers>
          )}
        </Players>
      </Content>
    </Card>
  );
};

export default GameSessionCard;
