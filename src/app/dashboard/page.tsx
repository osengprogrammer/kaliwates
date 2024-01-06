import { fetchVoter, getDatabase } from "@/action/fetchingAction";
import { DataTable } from "@/components/DataTable/DataTable";

import { columns } from "../../components/DataTable/Column";

async function page() {
  const database = await getDatabase();

  return (
    <div>
      <DataTable columns={columns} data={database} />
    </div>
  );
}

export default page;
