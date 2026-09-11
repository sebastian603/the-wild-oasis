import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(function () {
    async function fetchData() {
      const data = await getCabins();
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <img src="https://vtlerfvjsqcchokdsfkh.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg"></img>
    </Row>
  );
}

export default Cabins;
