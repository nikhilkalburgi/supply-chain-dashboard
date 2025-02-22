import React, { createContext, useContext, useReducer } from "react";
import { useFetchData } from "../hooks/useFetchData";

const initialState = {
  data: [],
  filters: {
    dateRange: ['2023-01-01', '2023-01-30'],
    region: 'All',
    supplier: 'All',
    amountRange: { min: '', max: '' },
    dimension: 'region'
  }
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, ...action.payload };
    case "UPDATE_DATA":
      return { ...state, data: [...state.data, action.payload] };
    case "FETCH_DATA":
      return { ...state, filters: action.payload };
    default:
      return state;
  }
}

const DashboardContext = createContext(undefined);

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const { data, error, isLoading } = useFetchData(state.filters);

  React.useEffect(() => {
    dispatch({ type: "SET_DATA", payload: { data: data || [], error: error, isLoading: isLoading } });
  }, [data, error, isLoading]);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboardContext must be used within DashboardProvider");
  }
  return context;
};