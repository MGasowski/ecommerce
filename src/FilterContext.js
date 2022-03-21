import { createContext, useState } from "react";

const FilterContext = createContext();
const FilterContextProvider = ({ children }) => {
  const DEFAULT_FILTERS = {
    categories: [],
    price: { min: 0, max: 1000 },
  };
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const setDefault = () => setFilters(DEFAULT_FILTERS);
  return (
    <FilterContext.Provider value={{ filters, setFilters, setDefault }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext };

export default FilterContextProvider;
