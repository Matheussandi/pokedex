import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;

  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  height: 100%;
  padding: 15px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 500;
    line-height: 22px;
    color: black;
    width: 130px;
    text-align: center;
  }

  > span {
    line-height: 25px;
    color: black;
    width: 100px;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    font-size: small;
    strong {
      font-weight: 500;
      line-height: 22px;
      color: black;
      width: 100px;
      text-align: center;
    }
  }
`;

interface BarStatusProps {
  percentage: number;
  color: string;
}

export const BarStatus = styled.div<BarStatusProps>`
  flex: 1;
  width: 100%;
  height: 4px;

  span {
    display: block;
    width: ${props => props.percentage}%;
    height: inherit;
    background: ${props => props.color};
    border-radius: 2px;
  }
`;
