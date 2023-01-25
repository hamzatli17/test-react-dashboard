import React ,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Grid } from "@mui/material";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import CardDashboard from "examples/Cards/cardDashboard";
import "./style.css"

export default function Condidats(props) {
 console.log(props.value.condidatData)
 const data =props.value.condidatData
  return (
    <Card>
      <MDBox textAlign="left">
    
        <MDTypography variant="button" fontWeight="light" color="text" pb={2} >
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "19.6785px",
              lineHeight: "24px",
            }}
          >
            {" "}
            Condidats
          </p>
        </MDTypography>
    
      </MDBox>
      <Grid container spacing={3}>
      {data.map((dat, index) => {
        return (
        <Grid item xs={12} md={6} lg={3}>
      

          <MDBox mb={1.5}>
            <CardDashboard
              color="light"
              icon="GroupIcon"
              title={dat.category}
              count={dat.count}
              percentage={{
                color: "primary",
                amount: "120",
                label: "Condidats",
              }}
            />
          </MDBox>

        </Grid>
  );
      })}
      </Grid>
    </Card>
  );
}
