export interface TokenData {
  id: string;
  name: string;
  price: number;
  type?: string;
  fundingRate: {
    apr: number;
    hourly?: number;
  };
}

export interface PositionInfo {
  token?: TokenData;
  amount?: number;
  totalValueUSD?: number;
  depositAmount?: number;
  spotAmount?: number;
  perpAmount?: number;
  leveragedPerpAmount?: number;
  projectedYield?: {
    daily?: number;
    weekly?: number;
    monthly?: number;
    yearly?: number;
  };
  entryPrice?: number;
  exitPrice?: number;
  liquidationPrice?: number;
}

export interface FundingData {
  id: string;
  date: string;
  amount: number;
  status: string;
  description: string;
}

export type AnimationType = 'deposit' | 'position' | 'success';

export interface AnimationProps {
  type: AnimationType;
  isVisible: boolean;
}

export interface TableProps {
  data: FundingData[];
  onSort?: (column: keyof FundingData) => void;
}