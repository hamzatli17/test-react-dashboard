import { useMemo } from "react";
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
// react-chartjs-2 components
import { Bar } from "react-chartjs-2";
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";// VerticalBarChart configurations
import configs from "examples/Charts/BarCharts/VerticalBarChart/configs";// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import { FormControl, Grid, InputLabel, NativeSelect } from "@mui/material";function VerticalBarChart({ icon, title, description, height, chart }) {
  const chartDatasets = chart.datasets
    ? chart.datasets.map((dataset) => ({
        ...dataset,
        weight: 5,
        borderWidth: 0,
        borderRadius: 4,
        backgroundColor: colors[dataset.color]
          ? colors[dataset.color || "dark"].main
          : colors.dark.main,
        fill: false,
        maxBarThickness: 35,
      }))
    : [];  const { data, options } = configs(chart.labels || [], chartDatasets);  const renderChart = (
    <MDBox py={2} pr={2} pl={icon.component ? 1 : 2}>
      {title || description ? (
        <Grid container spacing={2}>
        <Grid  item xs={6} md={10}>
           <MDBox display="flex" px={description ? 1 : 0} pt={description ? 1 : 0}>
          {icon.component && (
            <MDBox
              width="4rem"
              height="4rem"
              bgColor={icon.color || "info"}
              variant="gradient"
              coloredShadow={icon.color || "info"}
              borderRadius="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              mt={-5}
              mr={2}
            >
              <Icon fontSize="medium">{icon.component}</Icon>
            </MDBox>
          )}
          <MDBox mt={icon.component ? -2 : 0}>
            {title && <MDTypography variant="h6">{title}</MDTypography>}
            <MDBox mb={2}>
              <MDTypography component="div" variant="button" color="text">
                {description}
              </MDTypography>            </MDBox>
          </MDBox>
        </MDBox>
        </Grid>
        <Grid  item xs={6} md={2}>
        <FormControl >
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Semaine</option>
                  <option value={20}>Jour</option>
                  <option value={30}>Mois</option>
                </NativeSelect>
              </FormControl>
              </Grid>
              </Grid>      ) : null}
      {useMemo(
        () => (
          <MDBox height={height}>
            <Bar data={data} options={options} />
          </MDBox>
        ),
        [chart, height]
      )}
      <Grid container px={2} rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item xs={6}>
          <MDTypography component="div" variant="button" color="success">
            <h5>5</h5>
          </MDTypography>
          <p>Candidats en mission</p>
        </Grid>        <Grid item xs={6}>
          <h5>34</h5>
          <p>Candidats en mission</p>
        </Grid>        <Grid item xs={6}>
          <h5>12</h5>
          <p>Commandes en ligne</p>
        </Grid>        <Grid item xs={6}>
          <h5>4</h5>
          <p>Annonces en ligne</p>
        </Grid>
      </Grid>
    </MDBox>
  );  return title || description ? <Card>{renderChart}</Card> : renderChart;
}// Setting default values for the props of VerticalBarChart
VerticalBarChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};// Typechecking props for the VerticalBarChart
VerticalBarChart.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ]),
    component: PropTypes.node,
  }),
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};export default VerticalBarChart;