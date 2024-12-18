export interface TokenData {
  id: string;
  name: string;
  price: number;
  fundingRate: {
    apr: number;
    hourly?: number;
  };
}

export interface PositionInfo {
  token?: TokenData;
  amount?: number;
}

export interface FundingData {
  status: string;
}

export interface TableProps {
  data: FundingData[];
  onSort?: (column: string) => void;
}

export type AnimationProps = 'deposit' | 'position' | 'success'; 