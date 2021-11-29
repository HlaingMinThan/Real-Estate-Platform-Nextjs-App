import fetchApi from "../utils/fetchApi";
import Banner from "../components/Banner";

/*--------get initial data and automatically pass as a prop to page component------------*/
export async function getStaticProps() {
  let propertiesForSale = await fetchApi(
    "/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6"
  );
  let propertiesForRent = await fetchApi(
    "/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6"
  );
  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    },
  };
}

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        buttonColor="gray.100"
        buttonTextColor="gray.800"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        buttonColor="blue.300"
        buttonTextColor="white"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </div>
  );
}
