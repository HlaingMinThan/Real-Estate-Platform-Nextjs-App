import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
export default function Facilities({ facilities }) {
  return (
    <Box>
      {facilities.length && (
        <Text fontSize="2xl" fontWeight="black" marginTop="5">
          Facilites:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {facilities?.map((facility) =>
          facility?.amenities?.map((amenity) => (
            <Text
              key={amenity.text}
              fontWeight="bold"
              color="blue.400"
              fontSize="l"
              p="2"
              bg="gray.200"
              m="1"
              borderRadius="5"
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  );
}
