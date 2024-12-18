import styled from 'styled-components';
import { PositionInfo as PositionInfoType } from '../types';

const InfoContainer = styled.div`
  font-family: monospace;
  padding: 1rem;
  border-top: 2px solid var(--border-color);
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  color: #ffffff;
  padding: 0.5rem 0;
  border-left: 2px solid #ffffff;
  padding-left: 1rem;
  margin: 1rem 0;
`;

const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Column = styled.div`
  border-left: 1px solid var(--border-color);
  padding-left: 1rem;
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
    padding-left: 0;
    
    &:first-child {
      border-top: none;
      padding-top: 0;
    }
  }
`;

const ColumnTitle = styled.div`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const InfoLine = styled.div`
  padding: 0.25rem 0;
  color: #cccccc;
`;

const Value = styled.span`
  color: #ffffff;
`;

export const PositionInfo: React.FC<{ info: PositionInfoType }> = ({ info }) => {
  if (!info.token) return null;

  return (
    <InfoContainer>
      <SuccessMessage>
        &gt; Position opened successfully
      </SuccessMessage>

      <ColumnsContainer>
        <Column>
          <ColumnTitle>Position Info</ColumnTitle>
          <InfoLine>Token: <Value>{info.token.name}</Value></InfoLine>
          <InfoLine>Price: <Value>${info.token.price.toFixed(2)}</Value></InfoLine>
          <InfoLine>Amount: <Value>{info.amount?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Spot Amount: <Value>{info.spotAmount?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Perp Amount: <Value>{info.perpAmount?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Leveraged Amount: <Value>{info.leveragedPerpAmount?.toFixed(2)}</Value></InfoLine>
        </Column>

        <Column>
          <ColumnTitle>Yield Info</ColumnTitle>
          <InfoLine>APR: <Value>{info.token.fundingRate.apr.toFixed(2)}%</Value></InfoLine>
          <InfoLine>Daily Yield: <Value>${info.projectedYield?.daily?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Weekly Yield: <Value>${info.projectedYield?.weekly?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Monthly Yield: <Value>${info.projectedYield?.monthly?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Yearly Yield: <Value>${info.projectedYield?.yearly?.toFixed(2)}</Value></InfoLine>
        </Column>

        <Column>
          <ColumnTitle>Risk Analysis</ColumnTitle>
          <InfoLine>Entry Price: <Value>${info.entryPrice?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Exit Price: <Value>${info.exitPrice?.toFixed(2)}</Value></InfoLine>
          <InfoLine>Liquidation Price: <Value>${info.liquidationPrice?.toFixed(2)}</Value></InfoLine>
        </Column>
      </ColumnsContainer>
    </InfoContainer>
  );
}; 