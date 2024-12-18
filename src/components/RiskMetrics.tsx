import styled from 'styled-components';

const MetricsContainer = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
`;

interface Props {
  volatility: number;
  liquidations: number;
}

export const RiskMetrics = ({ volatility, liquidations }: Props) => (
  <MetricsContainer>
    Risk Level: {volatility > 5 ? 'High' : volatility > 2 ? 'Medium' : 'Low'}
    Volatility (24h): ±{volatility}%
    Liquidations (24h): {liquidations}
  </MetricsContainer>
); 