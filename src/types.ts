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
}

export interface FundingData {
  id: string;
  date: string;
  amount: number;
  status: string;
  description: string;
}

export interface AnimationState {
  type: 'deposit' | 'position' | 'success';
  isVisible: boolean;
}

export type AnimationProps = {
  type: 'deposit' | 'position' | 'success';
  isVisible: boolean;
};

export interface TableProps {
  data: FundingData[];
  onSort?: (column: keyof FundingData) => void;
}