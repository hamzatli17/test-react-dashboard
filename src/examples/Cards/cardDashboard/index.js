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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import MDButton from "components/MDButton";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// @mui material components
import MDAvatar from "components/MDAvatar";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// @mui material components

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function CardDashboard({ color, title, count, percentage, icon }) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDAvatar bgColor="light">
          <PeopleAltOutlinedIcon fontSize="lg" color="info" />
        </MDAvatar>

        <MDBox textAlign="left" lineHeight={1.25}>
          <MDTypography variant="h4">{count}</MDTypography>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
        </MDBox>
      </MDBox>
      <div style={{width:"70%" ,marginLeft:"30%"}}>
        <MDBox pb={2} px={2}>
          <MDTypography component="p" variant="button" color="text" display="flex">
            <MDButton variant="gradient" color="info" fullWidth>
              voir les condidatures
            </MDButton>
            <Divider />
          </MDTypography>
        </MDBox>
      </div>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
CardDashboard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
CardDashboard.propTypes = {
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
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default CardDashboard;
