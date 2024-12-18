import styled from 'styled-components';
import { TokenData, TokenTableProps } from '../types';
import { SystemStats } from './SystemStats';
import { FundingGraph } from './FundingGraph';

const TableContainer = styled.div`
  margin: 0.5rem 0;
`;

const MainTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const Subtitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  border: 2px solid var(--border-color);
  table-layout: fixed;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    
    th, td {
      padding: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    th:first-child { width: 30%; }
    th:nth-child(2) { width: 35%; }
    th:nth-child(3) { width: 35%; }
    
    th:nth-child(4), td:nth-child(4),
    th:nth-child(5), td:nth-child(5) {
      display: none;
    }
  }

  tr {
    cursor: pointer;
    
    &:hover {
      background-color: #111111;
    }
  }

  th, td {
    border: 2px solid var(--border-color);
  }
`;

const formatPrice = (price: number): string => {
  if (price < 1) return `$${price.toFixed(2)}`;
  if (price < 10) return `$${price.toFixed(1)}`;
  return `$${price.toFixed(0)}`;
};

const formatRate = (rate: number): string => 
  `${rate.toFixed(1).padStart(5)}%`;

const RateValue = styled.span`
  color: var(--highlight-color);
`;

const DexInfo = styled.div`
  margin-bottom: 0.25rem;
`;

const PositionsHeader = styled.div`
  margin-bottom: 0.5rem;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0;
  border-top: 2px solid var(--border-color);
  border-bottom: 2px solid var(--border-color);
  padding: 0.5rem 0;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StatsLeft = styled.div`
  flex: 1;
`;

const StatsRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const TokenTable: React.FC<TokenTableProps> = ({ data, onSelect }) => {
  return (
    <TableContainer>
      <MainTitle>PROTOCOL HERZOG</MainTitle>
      <Subtitle>A funding management system</Subtitle>
      
      <StatsContainer>
        <StatsLeft>
          <SystemStats />
        </StatsLeft>
        <StatsRight>
          <FundingGraph />
        </StatsRight>
      </StatsContainer>
      
      <DexInfo>DEX: Hyperliquid</DexInfo>
      <PositionsHeader>Available positions:</PositionsHeader>
      
      <Table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Price</th>
            <th>APR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((token: TokenData) => (
            <tr key={token.id} onClick={() => onSelect(token)}>
              <td>{token.name.padEnd(6)}</td>
              <td>{formatPrice(token.price)}</td>
              <td><RateValue>{formatRate(token.fundingRate.apr)}</RateValue></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}; 