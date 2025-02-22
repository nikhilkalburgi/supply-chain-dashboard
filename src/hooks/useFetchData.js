import { useQuery } from "@tanstack/react-query";
import { procurementData } from "../data/procurementData";

// Simulate API call with a delay and filter application
const fetchProcurementData = ({ queryKey }) => {
  const [, filters] = queryKey;
  const { dateRange, region, supplier, amountRange } = filters;

  // Simulate filtering logic
  const filteredData = procurementData.filter(item => {
    const dateInRange = dateRange
      ? (new Date(item.date) >= new Date(dateRange[0]) || !dateRange[0]) && (new Date(item.date) <= new Date(dateRange[1]) || !dateRange[1])
      : true;
    const regionMatches = region !== 'All' ? item.region === region : true;
    const supplierMatches = supplier !== 'All' ? item.supplier === supplier : true;
    const amountInRange = (amountRange.min === "" || item.amount >= amountRange.min) &&
                          (amountRange.max === "" || item.amount <= amountRange.max);

    return dateInRange && regionMatches && supplierMatches && amountInRange;
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve(filteredData), 1000); // Simulates network latency of 1s
  });
};

export function useFetchData(filters) {
  return useQuery({
    queryKey: ["procurementData", filters],
    queryFn: fetchProcurementData,
    staleTime: 5000, // Data remains fresh for 5 seconds
    keepPreviousData: true
  });
}