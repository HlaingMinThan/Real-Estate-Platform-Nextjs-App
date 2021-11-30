import { Box, Flex, Select } from "@chakra-ui/react";
import router from "next/router";
import { useState } from "react";
import { filterData, getFilterValues } from "../utils/filterDatas";
export default function SearchFilters() {
  let [filters, setFilters] = useState(filterData);

  let filterProperties = (filterValues) => {
    let pathname = router.pathname; // '/search'
    let query = router.query;
    let values = getFilterValues(filterValues);
    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname, query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              filterProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter.items.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
}
