import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "./datatablesource.jsx";
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: "200",
    renderCell: () => {
      return (
        <>
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">delete</div>
          </div>
          ;
        </>
      );
    },
  },
];
export const DataTable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
