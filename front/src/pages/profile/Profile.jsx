import { useState } from 'react';
import PlayerAvatar from '../../components/playerAvatar/PlayerAvatar';
import GameSessionCard from '../../components/gameSessions/GameSessions';
import BoardGameCard from '../../components/boardGameCard/BoardGameCard';

import {
  AddIcon,
  AvatarWrapper,
  Button,
  ButtonOutline,
  ButtonGroup,
  Content,
  Stat,
  Stats,
  Tab,
  Tabs,
  TopSection,
  UserInfo,
  UserName,
  Sticky
} from './profile.styled';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('partidas');
  const user = {
    name: 'Laura García',
    avatar: '', // URL si tiene
    gamesPlayed: 12,
    friends: 8,
    games: 5
  };

  // Datos de las partidas
  const gameSessions = [
    {
      hostName: 'Laura García',
      hostAvatar: '',
      gameImage:
        'https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png',
      gameName: 'Catan',
      date: 'May 20, 2025',
      location: 'Madrid',
      players: [
        { name: 'Carlos', avatar: '' },
        { name: 'Ana', avatar: '' },
        { name: 'Luis', avatar: '' }
      ]
    },
    {
      hostName: 'David Pérez',
      hostAvatar: '',
      gameImage:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg',
      gameName: 'Paleo',
      date: 'May 15, 2025',
      location: 'Barcelona',
      players: [
        { name: 'María', avatar: '' },
        { name: 'Pedro', avatar: '' }
      ]
    },
    {
      hostName: 'David Pérez',
      hostAvatar: '',
      gameImage:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg',
      gameName: 'Paleo',
      date: 'May 15, 2025',
      location: 'Barcelona',
      players: [
        { name: 'María', avatar: '' },
        { name: 'Pedro', avatar: '' }
      ]
    },
    {
      hostName: 'David Pérez',
      hostAvatar: '',
      gameImage:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg',
      gameName: 'Paleo',
      date: 'May 15, 2025',
      location: 'Barcelona',
      players: [
        { name: 'María', avatar: '' },
        { name: 'Pedro', avatar: '' }
      ]
    },
    {
      hostName: 'David Pérez',
      hostAvatar: '',
      gameImage:
        'https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__itemrep/img/7AXozbOIxk5MDpn_RNlat4omAcc=/fit-in/246x300/filters:strip_icc()/pic7013651.jpg',
      gameName: 'Spirit Island',
      date: 'May 15, 2025',
      location: 'Barcelona',
      players: [
        { name: 'María', avatar: '' },
        { name: 'Pedro', avatar: '' }
      ]
    }
  ];

  const boardGames = [
    {
      title: 'Catan',
      image:
        'https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png'
    },
    {
      title: 'Paleo',
      image:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg'
    },
    {
      title: 'Catan',
      image:
        'https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png'
    },
    {
      title: 'Paleo',
      image:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg'
    },
    {
      title: 'Catan',
      image:
        'https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png'
    },
    {
      title: 'Paleo',
      image:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg'
    },
    {
      title: 'Catan',
      image:
        'https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png'
    },
    {
      title: 'Paleo',
      image:
        'https://cf.geekdo-images.com/85t1wkwgvh3d2mmjsRcDrw__itemrep/img/5Wx2IlXzKh8HmBD-_5Rm2b1YjO4=/fit-in/246x300/filters:strip_icc()/pic6039256.jpg'
    },
    {
      title: 'Spirit Island',
      image:
        'https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__itemrep/img/7AXozbOIxk5MDpn_RNlat4omAcc=/fit-in/246x300/filters:strip_icc()/pic7013651.jpg'
    }
  ];

  return (
    <>
      <Sticky>
        <TopSection>
          <AvatarWrapper>
            <PlayerAvatar
              avatar={user.avatar}
              name={user.name}
              isProfile={true}
            />
            <AddIcon>+</AddIcon>
          </AvatarWrapper>

          <UserInfo>
            <UserName>{user.name}</UserName>
            <Stats>
              <Stat>
                <strong>{user.gamesPlayed}</strong> partidas
              </Stat>
              <Stat>
                <strong>{user.friends}</strong> amigos
              </Stat>
              <Stat>
                <strong>{user.games}</strong> juegos
              </Stat>
            </Stats>
          </UserInfo>
        </TopSection>

        <ButtonGroup>
          <Button>Editar perfil</Button>
          <Button>Añadir juego</Button>
          <ButtonOutline>Cerrar sesión</ButtonOutline>
        </ButtonGroup>

        <Tabs>
          <Tab
            $isActive={activeTab === 'partidas'}
            onClick={() => setActiveTab('partidas')}
          >
            Partidas
          </Tab>
          <Tab
            $isActive={activeTab === 'juegos'}
            onClick={() => setActiveTab('juegos')}
          >
            Juegos
          </Tab>
        </Tabs>
      </Sticky>

      <Content $isPartidas={activeTab === 'partidas'}>
        {activeTab === 'partidas' ? (
          <>
            {gameSessions.map((session, index) => (
              <GameSessionCard
                key={index}
                hostName={session.hostName}
                hostAvatar={session.hostAvatar}
                gameImage={session.gameImage}
                gameName={session.gameName}
                date={session.date}
                location={session.location}
                players={session.players}
              />
            ))}
          </>
        ) : (
          <>
            {boardGames.map((game, index) => (
              <BoardGameCard
                key={index}
                title={game.title}
                image={game.image}
              />
            ))}
          </>
        )}
      </Content>
    </>
  );
};

export default Profile;
