import { Flex, Text, Box } from "@chakra-ui/react";
import Property from "./Property";
import Image from "next/image";
import NoResult from "../assets/images/NoResult.svg";
export default function PropertyList({ properties }) {
  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="center">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {!properties.length && (
        <Flex justifyContent="center" marginBottom="5" alignItems="center">
          <Box>
            <Image src={NoResult} alt="image" />
            <Text marginTop="5" fontSize="xl">
              No Result Found.
            </Text>
          </Box>
        </Flex>
      )}
    </div>
  );
}
