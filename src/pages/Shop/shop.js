import { Grid } from "@material-ui/core";
import React from "react";
import Main from "../../components/ShopComponent/Main";
import Sidebar from "../../components/ShopComponent/Sidebar";
import "./Shop.scss";

const Shop = () => {
  return (
    <div className="shopouterbox">
      <Grid container spacing={3}>
        <Grid container item md={3} xs={0} className="sideside">
          <div className="secondside">
            <Sidebar />
          </div>
        </Grid>
        <Grid ocntainer item md={9} xs={12} className="mainmain">
          <div className="secondmain">
            <Main />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shop;
