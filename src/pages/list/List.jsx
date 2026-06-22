import "./list.scss"
import {SideBar} from "../../components/sidebar/SideBar"
import {NavBar} from "../../components/navbar/NavBar"
import { DataTable } from "../../components/datatable/DataTable"
export const List = () => {
  return (
    <div className="list">
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        <DataTable/>
      </div>
    </div>
  )
}
