import GameSessionCard from '../../components/gameSessions/GameSessions';
import { GameSessions, HomeHeader, LogoContainer, Logo } from './home.styled';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <>
      <HomeHeader>
        <LogoContainer>
          <Logo
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSLu5GdCt2cUnw_z4EstbHTZi5eIrV6XufA&s"
            alt=""
          />
          <span>Boardify</span>
        </LogoContainer>
        <FontAwesomeIcon icon={faBellRegular} />
      </HomeHeader>
      <GameSessions>
        <GameSessionCard
          hostName="Laura García"
          hostAvatar=""
          gameImage="https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png"
          gameName="Catan"
          date="May 20, 2025"
          location="Madrid"
          players={[
            { name: 'Carlos', avatar: '' },
            { name: 'Ana', avatar: '' },
            { name: 'Luis', avatar: '' }
          ]}
        />
        <GameSessionCard
          hostName="Laura García"
          hostAvatar=""
          gameImage="https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png"
          gameName="Catan"
          date="May 20, 2025"
          location="Madrid"
          players={[
            { name: 'Carlos', avatar: '' },
            { name: 'Ana', avatar: '' },
            { name: 'Luis', avatar: '' }
          ]}
        />
        <GameSessionCard
          hostName="Laura García"
          hostAvatar=""
          gameImage="https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png"
          gameName="Catan"
          date="May 20, 2025"
          location="Madrid"
          players={[
            { name: 'Carlos', avatar: '' },
            { name: 'Ana', avatar: '' },
            { name: 'Luis', avatar: '' }
          ]}
        />
        <GameSessionCard
          hostName="Laura García"
          hostAvatar=""
          gameImage="https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png"
          gameName="Catan"
          date="May 20, 2025"
          location="Madrid"
          players={[
            { name: 'Carlos', avatar: '' },
            { name: 'Ana', avatar: '' },
            { name: 'Luis', avatar: '' }
          ]}
        />
        <GameSessionCard
          hostName="Laura García"
          hostAvatar=""
          gameImage="https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png"
          gameName="Catan"
          date="May 20, 2025"
          location="Madrid"
          players={[
            { name: 'Carlos', avatar: '' },
            { name: 'Ana', avatar: '' },
            { name: 'Luis', avatar: '' }
          ]}
        />
        <GameSessionCard
          hostName="Laura García"
          hostAvatar=""
          gameImage="https://cf.geekdo-images.com/PyUol9QxBnZQCJqZI6bmSA__original/img/g11AF48C6pLizxWPAq9dUEeKltQ=/0x0/filters:format(png)/pic8632666.png"
          gameName="Catan"
          date="May 20, 2025"
          location="Madrid"
          players={[
            { name: 'Carlos', avatar: '' },
            { name: 'Ana', avatar: '' },
            { name: 'Luis', avatar: '' }
          ]}
        />
      </GameSessions>
    </>
  );
};

export default Home;
