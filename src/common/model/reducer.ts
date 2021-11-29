export type TvlInfo = { [tokenAddress: string]: string; total: string };

export type CommonState = {
  tvl: TvlInfo | null;
  tvlFetching: boolean;
};
