import { useState } from 'react';
import styled from 'styled-components';
import { DepositFormProps } from '../types';

const FormContainer = styled.div`
  margin: 2rem 0;
  border-top: 1px solid var(--text-color);
  padding-top: 2rem;
`;

const FormHeader = styled.div`
  font-size: 1rem;
  white-space: pre;
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  margin: 1rem 0;
  white-space: pre;
  
  input {
    font-family: var(--font-mono);
    background: none;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    padding: 0.5rem;
    margin-left: 1rem;
    width: 150px;
  }
`;

const PresetAmounts = styled.div`
  margin: 1rem 0;
  white-space: pre;
  
  button {
    font-family: var(--font-mono);
    background: none;
    border: none;
    color: var(--text-color);
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DistributionInfo = styled.pre`
  margin: 2rem 0;
`;

const SubmitButton = styled.button`
  font-family: var(--font-mono);
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 2rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: none;
      border-color: var(--border-color);
      color: var(--text-color);
    }
  }
  
  &:hover {
    background-color: var(--highlight-color);
    color: var(--background-color);
    border-color: var(--highlight-color);
  }
`;

const presetAmounts = [1000, 10000, 30000];

export const DepositForm: React.FC<DepositFormProps> = ({ token, onSubmit }) => {
  const [amount, setAmount] = useState<number>(0);

  if (!token) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(amount);
  };

  const spotAmount = amount * 0.8;
  const perpAmount = amount * 0.2;
  const leveragedPerpAmount = perpAmount * 4;

  return (
    <FormContainer>
      <FormHeader>
        {`DEPOSIT CONFIGURATION
--------------------
Selected token: ${token.name}`}
      </FormHeader>
      
      <form onSubmit={handleSubmit}>
        <InputGroup>
          Enter amount (USDC):{' '}
          <input
            type="number"
            value={amount || ''}
            onChange={(e) => setAmount(Number(e.target.value))}
            min="0"
            step="0.01"
          />
        </InputGroup>

        <PresetAmounts>
          {`Suggested amounts:   `}
          {presetAmounts.map((preset) => (
            <button 
              key={preset} 
              type="button"
              onClick={() => setAmount(preset)}
            >
              {`[ $${preset.toLocaleString()} ]`}
            </button>
          ))}
        </PresetAmounts>

        {amount > 0 && (
          <DistributionInfo>
            {`Position Distribution:
--------------------
Spot:      $${spotAmount.toFixed(2).padStart(10)} (80%)
Perp:      $${perpAmount.toFixed(2).padStart(10)} (20%)
Leveraged: $${leveragedPerpAmount.toFixed(2).padStart(10)} (4x)`}
          </DistributionInfo>
        )}

        <SubmitButton type="submit" disabled={amount <= 0}>
          [ CONFIRM DEPOSIT ]
        </SubmitButton>
      </form>
    </FormContainer>
  );
}; 