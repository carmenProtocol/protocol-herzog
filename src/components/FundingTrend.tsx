import styled from 'styled-components';

const TrendContainer = styled.div`
  margin: 0.5rem 0;
`;

const TrendBar = styled.div<{ progress: number }>`
  font-family: var(--font-mono);
  color: ${props => props.progress > 0 ? 'var(--highlight-color)' : '#ff4444'};
`;

export const FundingTrend = ({ weeklyChange }: { weeklyChange: number }) => {
  const progress = Math.abs(weeklyChange) / 10; // 10% max
  const bar = '[' + '='.repeat(Math.floor(progress * 10)) + '>' + ' '.repeat(10 - Math.floor(progress * 10)) + ']';
  
  return (
    <TrendContainer>
      Funding Trend (7d) {bar} {weeklyChange > 0 ? '+' : ''}{weeklyChange}%
    </TrendContainer>
  );
}; 