import "./home.scss"
import { SideBar } from "../../components/sidebar/SideBar"
import { NavBar } from "../../components/navbar/NavBar"
export const Home = () => {
  return (
    <div className="home">
      <SideBar/>
      <div className="homeContainer">
        <NavBar/>
      </div>
    </div>
  )
}
