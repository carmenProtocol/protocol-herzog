import { useState } from 'react';
import styled from 'styled-components';
import { DepositFormProps } from '../types';

const FormContainer = styled.div`
  margin: 2rem 0;
  font-family: monospace;
`;

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 0.5rem;
`;

const Separator = styled.div`
  border-bottom: 1px solid #333;
  margin: 1rem 0;
  opacity: 0.5;
`;

const TokenInfo = styled.div`
  margin: 1rem 0;
`;

const InputContainer = styled.div`
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  padding: 0.5rem;
  font-family: monospace;
  font-size: 1rem;
  width: 200px;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0 0 0;
    display: block;
  }
`;

const SuggestedAmounts = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const AmountButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  padding: 0.5rem 1rem;
  font-family: monospace;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #fff;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const ConfirmButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.8rem 2rem;
  font-family: monospace;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem;
  }
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const DepositForm: React.FC<DepositFormProps> = ({
  token,
  onSubmit,
  presetAmounts = [1000]
}) => {
  const [amount, setAmount] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount)) {
      await onSubmit(numAmount);
    }
  };

  return (
    <FormContainer>
      <Title>DEPOSIT CONFIGURATION</Title>
      <Separator />
      
      <TokenInfo>Selected token: {token.name}</TokenInfo>
      
      <InputContainer>
        <Label>Enter amount (USDC):</Label>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
        />
      </InputContainer>

      <Label>Suggested amounts:</Label>
      <SuggestedAmounts>
        {presetAmounts.map((preset) => (
          <AmountButton
            key={preset}
            onClick={() => setAmount(preset.toString())}
          >
            [ ${preset.toLocaleString()} ]
          </AmountButton>
        ))}
      </SuggestedAmounts>

      <ConfirmButton onClick={handleSubmit}>
        [ CONFIRM DEPOSIT ]
      </ConfirmButton>
    </FormContainer>
  );
}; 