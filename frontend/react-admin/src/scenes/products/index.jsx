import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Preço",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "status",
      headerName: "Status",
      type: "boolean",
    },
  ];

  return (
    <Box m="20px">
      <Header title={"Produtos"} subtitle={"Listagem dos produtos"} />

      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;
