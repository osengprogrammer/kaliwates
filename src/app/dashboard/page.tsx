
import {fetchVoter, getDatabase } from "@/action/fetchingAction";
import { DataTable } from "@/components/DataTable/DataTable";
// import PageContentForm from "@/components/Form/PageContent";
// import ParentComponent from "@/components/Form/ParentForm";
import { columns } from "../../components/DataTable/Column";
import { payments } from "@/components/DataTable/Data";
import fetchDB from "@/action/fetchDbOne";


async function page() {
  // const voters = await fetchVoter()

  // console.log(DBONE)
  // console.log(voters)

const database =  await getDatabase()
// console.log(database)

  return (
    <div>
      {/* <PageContentForm /> */}
      {/* <ParentComponent/> */}
     
      <DataTable columns={columns} data={database} />
      </div>
  );
}

export default page;
