export interface TokenData {
  id: string;
  name: string;
  price: number;
  fundingRate: {
    hourly: number;
    apr: number;
  };
  type: 'spot + perp';
}

export interface TokenTableProps {
  data: TokenData[];
  onSelect: (token: TokenData) => void;
}

export interface DepositFormProps {
  token: TokenData | null;
  presetAmounts: number[];
  onSubmit: (amount: number) => void;
  isLoading?: boolean;
}

export interface PositionInfo {
  token: TokenData;
  totalValueUSD: number;
  depositAmount: number;
  spotAmount: number;
  perpAmount: number;
  leveragedPerpAmount: number;
  projectedYield: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  entryPrice: number;
  liquidationPrice: number;
  exitPrice: number;
}

export interface AnimationProps {
  type: 'deposit' | 'position' | 'success';
  isVisible: boolean;
}
