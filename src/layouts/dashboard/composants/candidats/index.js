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

 const data =props.value.condidatData
  return (
    <Card>
      <MDBox textAlign="left">
    
      <MDTypography variant="button" fontWeight="light" color="text" p={2} m={2}>
        <p className="candidats-name" style={{marginLeft: "1%"}}>Candidats</p>
      </MDTypography>
    
      </MDBox>
      <Grid container spacing={2} p={2}>
      {data.map((dat) => {
        return (
        <Grid item xs={12} md={6} lg={3}>
      

          <MDBox mb={1}>
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
