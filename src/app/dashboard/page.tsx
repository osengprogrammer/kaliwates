
import {fetchVoter } from "@/action/fetchingAction";
import Accordion from "@/components/Accordion/Accordion";
import { DataTable } from "@/components/DataTable/DataTable";
// import PageContentForm from "@/components/Form/PageContent";
// import ParentComponent from "@/components/Form/ParentForm";
import { columns } from "../../components/DataTable/Column";
import { payments } from "@/components/DataTable/Data";
import fetchDB from "@/action/fetchDbOne";


async function page() {

 

  const voters = await fetchVoter()
  const DBONE = await fetchDB()
  // console.log(DBONE)
  // console.log(voters)


  // console.log(voters)
 

  return (
    <div>
      <Accordion />
      {/* <PageContentForm /> */}
      {/* <ParentComponent/> */}
     
      <DataTable columns={columns} data={DBONE} />
      </div>
  );
}

export default page;
