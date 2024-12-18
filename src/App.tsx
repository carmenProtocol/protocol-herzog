import { useState } from 'react';
import { TokenTable } from './components/TokenTable';
import { DepositForm } from './components/DepositForm';
import { AsciiAnimation } from './components/AsciiAnimation';
import { PositionInfo } from './components/PositionInfo';
import { mockTokenData } from './data/mockData';
import { GlobalStyle } from './styles/global';
import { TokenData, PositionInfo as PositionInfoType } from './types';
import styled from 'styled-components';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--background-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: var(--measure);
  padding: 0 1rem;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DynamicContent = styled.div`
  min-height: 200px;
`;

function App() {
  const [selectedToken, setSelectedToken] = useState<TokenData | null>(null);
  const [showAnimation, setShowAnimation] = useState<'deposit' | 'position' | 'success' | null>(null);
  const [position, setPosition] = useState<PositionInfoType | null>(null);

  const handleTokenSelect = (token: TokenData) => {
    setSelectedToken(token);
    setPosition(null);
  };

  const handleDeposit = async (amount: number) => {
    // Последовательность анимаций
    setShowAnimation('deposit');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowAnimation('position');
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowAnimation('success');
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Создаем информацию о позиции
    if (selectedToken) {
      const positionInfo: PositionInfoType = {
        token: selectedToken,
        totalValueUSD: amount,
        depositAmount: amount,
        spotAmount: amount * 0.8,
        perpAmount: amount * 0.2,
        leveragedPerpAmount: amount * 0.2 * 4,
        projectedYield: {
          yearly: (amount * 0.2 * 4) * (selectedToken.fundingRate.apr / 100),
          monthly: (amount * 0.2 * 4) * (selectedToken.fundingRate.apr / 100) / 12,
          weekly: (amount * 0.2 * 4) * (selectedToken.fundingRate.apr / 100) / 52,
          daily: (amount * 0.2 * 4) * (selectedToken.fundingRate.apr / 100) / 365,
        },
        entryPrice: selectedToken.price,
        exitPrice: selectedToken.price * 1.2,
        liquidationPrice: selectedToken.price * 1.25,
      };
      setPosition(positionInfo);
    }

    setShowAnimation(null);
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <AppContainer>
        <MainContent>
          <TokenTable 
            data={mockTokenData} 
            onSelect={handleTokenSelect}
          />
          <DynamicContent>
            {selectedToken && !position && (
              <DepositForm
                token={selectedToken}
                onSubmit={handleDeposit}
                presetAmounts={[100, 200, 300, 400, 500]}
              />
            )}
            {showAnimation && (
              <AsciiAnimation 
                type={showAnimation} 
                isVisible={true}
              />
            )}
            {position && (
              <PositionInfo info={position} />
            )}
          </DynamicContent>
        </MainContent>
      </AppContainer>
      <Footer />
    </AppWrapper>
  );
}

export default App;
