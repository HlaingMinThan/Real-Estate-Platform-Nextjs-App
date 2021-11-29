import { Flex } from "@chakra-ui/react";
import Property from "./Property";
export default function ({ properties }) {
  return (
    <Flex flexWrap="wrap">
      {properties.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  );
}
