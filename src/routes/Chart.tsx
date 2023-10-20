import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <div>Chart</div>;
}
