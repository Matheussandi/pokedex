import { Container, Row, BarStatus } from './styles';

export interface PokemonProps {
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  color: string;
}

export function Stats({ stats, color }: PokemonProps) {
  const statsContent: { title: string; field: keyof typeof stats }[] = [
    { title: 'HP', field: 'hp' },
    { title: 'Attack', field: 'attack' },
    { title: 'Defense', field: 'defense' },
    { title: 'Special Attack', field: 'specialAttack' },
    { title: 'Special Defense', field: 'specialDefense' },
    { title: 'Speed', field: 'speed' },
  ];

  return (
    <Container>
      {statsContent &&
        statsContent.map(stat => (
          <Row key={stat.field}>
            <strong>{stat.title}</strong>
            <span>{stats[stat.field] || 1}</span>
            <BarStatus
              percentage={stats[stat.field] < 100 ? stats[stat.field] : 100}
              color={color}
            >
              <span />
            </BarStatus>

          </Row>
        ))}
    </Container>
  );
};