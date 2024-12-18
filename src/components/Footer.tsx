import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  max-width: var(--measure);
  margin-top: 2rem;
`;

const Stats = styled.pre`
  text-align: center;
  padding: 1rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  max-width: 100%;
  overflow-x: hidden;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.25rem;
  }
`;

const Meta = styled.pre`
  text-align: center;
  padding: 1rem 0;
  border-top: 2px solid var(--border-color);
  color: var(--text-color);
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Stats>
{`Total Value Locked:         $1.21M
Active Positions:           157
24h Volume:                $450.10K`}
    </Stats>
    <Meta>
      Version v0.1.1 / Updated 2024-03-14 / Author Carmen labs
    </Meta>
  </FooterContainer>
);

export default Footer; 