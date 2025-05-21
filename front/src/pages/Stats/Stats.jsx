import {
  Container,
  Title,
  TopSection,
  Card,
  StatValue,
  MiddleSection,
  GameCard,
  GameImage,
  ChartSection,
  ChartContainer,
  BarGroup,
  Bar,
  Legend,
  LegendItem,
  ColorBox
} from './stats.styled';

const Stats = () => {
  const stats = {
    totalPlayed: 124,
    gamesThisMonth: 12,
    gamesWon: 45,
    topGame: {
      name: 'Catan',
      image:
        'https://upload.wikimedia.org/wikipedia/en/b/b0/Catan-2015-boxart.jpg',
      played: 40
    },
    topPartner: {
      name: 'Ana',
      gamesTogether: 60
    },
    monthlyStats: [
      { month: 'Ene', played: 10, won: 4 },
      { month: 'Feb', played: 12, won: 6 },
      { month: 'Mar', played: 8, won: 5 },
      { month: 'Abr', played: 14, won: 7 },
      { month: 'May', played: 20, won: 10 },
      { month: 'Jun', played: 15, won: 8 }
    ]
  };
  const maxBar = Math.max(
    ...stats.monthlyStats.map(m => Math.max(m.played, m.won))
  );

  return (
    <Container>
      <Title>Tus estadísticas</Title>

      <TopSection>
        <Card $direction="column-reverse">
          <h2>Partidas jugadas</h2>
          <StatValue>{stats.totalPlayed}</StatValue>
        </Card>
        <div>
          <Card $bg="#d1e7dd">
            <h3>Juegos este mes</h3>
            <StatValue>{stats.gamesThisMonth}</StatValue>
          </Card>
          <Card $bg="#cfe2ff">
            <h3>Partidas ganadas</h3>
            <StatValue>{stats.gamesWon}</StatValue>
          </Card>
        </div>
      </TopSection>

      <MiddleSection>
        <GameCard $bg="#fff3cd">
          <GameImage src={stats.topGame.image} alt={stats.topGame.name} />
          <div>
            <h3>Juego más jugado</h3>
            <p>
              <strong>{stats.topGame.name}</strong>
            </p>
            <p>{stats.topGame.played} partidas</p>
          </div>
        </GameCard>

        <Card $bg="#f8d7da">
          <h3>Con quien más has jugado</h3>
          <p>
            <strong>{stats.topPartner.name}</strong>
          </p>
          <p>{stats.topPartner.gamesTogether} partidas juntos</p>
        </Card>
      </MiddleSection>

      <ChartSection>
        <h2>Juegos por mes</h2>
        <ChartContainer>
          {stats.monthlyStats.map(month => {
            const playedHeight = (month.played / maxBar) * 100;
            const wonHeight = (month.won / maxBar) * 100;
            return (
              <BarGroup key={month.month}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    alignItems: 'flex-end'
                  }}
                >
                  <Bar color="#4caf50" height={playedHeight} />
                  <Bar color="#2196f3" height={wonHeight} />
                </div>
                <p style={{ marginTop: 5, fontSize: 14 }}>{month.month}</p>
              </BarGroup>
            );
          })}
        </ChartContainer>
        <Legend>
          <LegendItem>
            <ColorBox color="#4caf50" /> Jugadas
          </LegendItem>
          <LegendItem>
            <ColorBox color="#2196f3" /> Ganadas
          </LegendItem>
        </Legend>
      </ChartSection>
    </Container>
  );
};

export default Stats;
