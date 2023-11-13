import { Box, Typography, useTheme,useMediaQuery  } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import { styled } from "@mui/system";
const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));
const Contacts=()=>{
const theme = useTheme();
 const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
const colors = tokens(theme.palette.mode);
 const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
   
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
        
    
  ];

  return (
     <ResponsiveBox>
      <Header title="Contacts" subtitle="Managing the Contacts Members" />
      <Box m={isSmallScreen ? "20px 0" : "40px 0 0 0"} height="75vh">
        <DataGrid checkboxSelection rows={mockDataContacts} columns={columns} />
      </Box>
    </ResponsiveBox>
  );
};
export default Contacts;