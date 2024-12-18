import styled from 'styled-components';
import { PositionInfo as PositionInfoType } from '../types';

const InfoContainer = styled.pre`
  margin: 2rem 0;
  white-space: pre;
  line-height: 1.5;
`;

const formatUSD = (value: number): string => 
  `$${value.toFixed(2).padStart(12)}`;

const formatPercent = (value: number): string => 
  `${value.toFixed(2).padStart(8)}%`;

interface Props {
  info: PositionInfoType;
}

export const PositionInfo: React.FC<Props> = ({ info }) => {
  return (
    <InfoContainer>
      {`
POSITION OPENED SUCCESSFULLY
==========================

Token: ${info.token.name}
Price: ${formatUSD(info.token.price)}

Position Details
--------------
Total Value:     ${formatUSD(info.totalValueUSD)}
Spot Position:   ${formatUSD(info.spotAmount)}  (80%)
Perp Position:   ${formatUSD(info.perpAmount)}  (20%)
Leveraged Size:  ${formatUSD(info.leveragedPerpAmount)}  (4x)
Funding APR:     ${formatPercent(info.token.fundingRate.apr)}

Projected Yield (from perp position)
--------------------------------
Daily:           ${formatUSD(info.projectedYield.daily)}
Weekly:          ${formatUSD(info.projectedYield.weekly)}
Monthly:         ${formatUSD(info.projectedYield.monthly)}
Yearly:          ${formatUSD(info.projectedYield.yearly)}

Price Levels
-----------
Entry:           ${formatUSD(info.entryPrice)}
Exit Target:     ${formatUSD(info.exitPrice)}     (+20%)
Liquidation:     ${formatUSD(info.liquidationPrice)}     (+25%)
      `}
    </InfoContainer>
  );
}; 