import { Box } from "@mui/material";
import Header from "../../components/Header";
import Line from "../../components/line";

const LineChart = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <Line />
      </Box>
    </Box>
  );
};

export default LineChart;