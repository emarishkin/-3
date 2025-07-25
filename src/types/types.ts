// types.ts

export interface CryptoCurrency {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  redditUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  contractAddress?: string;
  decimals?: number;
  explorers: string[];
}

export interface CryptoData {
  result: CryptoCurrency[];
  meta: {
    page: number;
    limit: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface CryptoAsset {
  id: string;
  amount: number;
  price: number;
  date?: Date;
}

export interface CryptoDataResponse {
  cryptoData: CryptoData;
  cryptoAssets: CryptoAsset[];
}

 export interface NewAsset extends CryptoAsset {
  grow: boolean;
  currentPrice: number;
  growPercent: string;
  totalAmount: number;
  totalProfit: number;
}