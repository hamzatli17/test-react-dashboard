/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import React ,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import Condidats from "./composants/candidats";
import Annonce from "./composants/annonces";
import Multiposting from "./composants/multiposting";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import Notification from "./composants/notifications";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import data from '../../data/candidatsData.json'
import { setCondidatsData } from "redux/actions/candidatsActions";
function Dashboard() {
 
  console.log('data',data)
  const candidatsData = useSelector((state) => state.candidatData);

 
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setCondidatsData(data))
    }, 1000)
  }, [])
console.log('hi sanfour',candidatsData)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Condidats value={candidatsData}/>
      </MDBox>
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={4}>
                <Annonce />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Multiposting />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={4}>
              <VerticalBarChart
            description="Statistiques"
            chart={{
              labels: ["8/12", "8/12", "8/12", "8/12", "8/12", "48/12"],
              datasets: [
                {
                  label: "Stats",
                  color: "success",
                  data: [15, 20, 12, 60, 20, 15],
                },
              ],
            }}
          />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Notification />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
            <GradientLineChart
            title="Ma base CV"
            description="Total des nouveaux profils :  3616"
            chart={{
              labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],              datasets: [
                {                  color: "info",
                  data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                },
              ],
            }}
          />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
