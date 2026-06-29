import "./new.scss";
import { SideBar } from "../../components/sidebar/SideBar";
import { NavBar } from "../../components/navbar/NavBar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
export const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  id="file"
                  onChange={(e) => setFile(e.currentTarget.files[0])}
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
                      id={input.label}
                      type={input.type}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}

              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
