import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "./datatablesource.jsx";
import { Link } from "react-router-dom";
const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: "200",
    renderCell: () => {
      return (
        <>
          <Link to="/users/123" style={{ textDecoration: "none" }}>
            <div className="cellAction">
              <div className="viewButton">View</div>
              <div className="deleteButton">delete</div>
            </div>
          </Link>
          ;
        </>
      );
    },
  },
];
export const DataTable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add new
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
