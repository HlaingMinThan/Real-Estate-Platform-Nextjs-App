import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";

import fetchApi from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollBar";
import Facilities from "../../components/Facilities";
import PropertyDetailBody from "../../components/PropertyDetailBody";

/*--------get initial data and automatically pass as a prop to page component at server request-----------*/
export async function getServerSideProps({ params }) {
  const data = await fetchApi(
    `/properties/detail?externalID=${params.identifier}`
  );

  return {
    props: {
      property: data,
    },
  };
}

export default function Identifier({ property }) {
  let { photos, amenities } = property;
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar images={photos} />}
      <PropertyDetailBody property={property} />
      <Facilities facilities={amenities} />
    </Box>
  );
}
