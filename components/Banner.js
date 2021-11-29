import Link from "next/link";
import Image from "next/image";
import { Button, Flex, Box, Text } from "@chakra-ui/react";
export default function ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  buttonColor,
  buttonTextColor,
  linkName,
  imageUrl,
}) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="5">
      <Image src={imageUrl} width={500} height={300} />
      <Box p="10">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl" bg={buttonColor} color={buttonTextColor}>
          <Link href={linkName}>
            <a>{buttonText}</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
}
