import styled from 'styled-components';

const StatsContainer = styled.pre`
  margin: 2rem 0;
  color: var(--text-color);
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SystemStats = () => (
  <StatsContainer>
{`Token Stats ===============
AVG Funding (1h):      0.010%
AVG Funding APR:       96.432%
Total Positions:       1,245`}
  </StatsContainer>
); 