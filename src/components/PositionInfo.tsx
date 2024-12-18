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
  if (!info.token) return null; // Early return if no token

  const formatNumber = (num: number | undefined) => {
    return num?.toFixed(2) ?? '0.00';
  };

  return (
    <div>
      <div>Token: {info.token.name}</div>
      <div>Price: ${info.token.price.toFixed(2)}</div>
      
      {/* Amounts */}
      <div>Amount: {formatNumber(info.amount)}</div>
      <div>Spot Amount: {formatNumber(info.spotAmount)}</div>
      <div>Perp Amount: {formatNumber(info.perpAmount)}</div>
      <div>Leveraged Amount: {formatNumber(info.leveragedPerpAmount)}</div>
      <div>APR: {info.token.fundingRate.apr.toFixed(2)}%</div>
      
      {/* Projected Yield */}
      <div>Daily Yield: {formatNumber(info.projectedYield?.daily)}</div>
      <div>Weekly Yield: {formatNumber(info.projectedYield?.weekly)}</div>
      <div>Monthly Yield: {formatNumber(info.projectedYield?.monthly)}</div>
      <div>Yearly Yield: {formatNumber(info.projectedYield?.yearly)}</div>
      
      {/* Prices */}
      <div>Entry Price: {formatNumber(info.entryPrice)}</div>
      <div>Exit Price: {formatNumber(info.exitPrice)}</div>
      <div>Liquidation Price: {formatNumber(info.liquidationPrice)}</div>
    </div>
  );
}; 