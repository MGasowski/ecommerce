import { createContext, useState } from "react";

const FilterContext = createContext();
const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    categories: [],
    price: { min: 0, max: 1000 },
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext };

export default FilterContextProvider;
