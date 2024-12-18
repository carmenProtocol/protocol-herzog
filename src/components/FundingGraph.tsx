import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

const GraphContainer = styled.pre`
  margin: 2rem 0;
  color: var(--highlight-color);
  animation: ${blink} 2s ease-in-out infinite;
`;

export const FundingGraph = () => (
  <GraphContainer>
{`Funding Rate (24h) --------
    ╭─╮ ╭─
    ───╯ ╰╯`}
  </GraphContainer>
); 