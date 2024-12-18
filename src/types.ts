export interface TokenData {
  id: string;
  name: string;
  price: number;
  fundingRate: {
    apr: number;
  };
}

export interface TokenTableProps {
  data: TokenData[];
  onSelect: (token: TokenData) => void;
}

export interface TableProps {
  data?: any[];
}

export interface FundingData {
  // ... поля для данных финансирования
}

export interface TrendBarProps {
  // ... props для компонента тренда
} 