import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import PropertyList from "../components/PropertyList";
import fetchApi from "../utils/fetchApi";

/*--------get initial data and automatically pass as a prop to page component at server request time------------*/
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default function Search({ properties }) {
  let router = useRouter();
  let [searchFilters, setSearchFilters] = useState(false);
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevState) => !prevState)}
      >
        <Text>Search Properties By Filters</Text>
        <Icon as={BsFilter} paddingLeft="2" w="7"></Icon>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <PropertyList properties={properties} />
    </Box>
  );
}
