import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { CheckCircle, ErrorOutlineRounded } from "@material-ui/icons";

const APITable = ({ apiList, keyItem }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "32%" }}>API Name</TableCell>
            <TableCell style={{ width: "30%" }} align="left">
              API Details
            </TableCell>
            <TableCell style={{ width: "13%" }} align="left">
              Status
            </TableCell>
            <TableCell style={{ width: "12%" }} align="left">
              Extra
            </TableCell>
            <TableCell style={{ width: "12%" }} align="left">
              Extra
            </TableCell>
          </TableRow>
        </TableHead>
        {apiList
          .filter((api) => api.environment === keyItem)
          .map((apiArrayList) => (
            <TableBody key={apiArrayList.id}>
              <TableRow>
                <TableCell component="th" scope="row">
                  {apiArrayList.name}
                </TableCell>
                <TableCell align="left">
                  {apiArrayList.status
                    ? "Service is operating normally"
                    : "Service is facing issues"}
                </TableCell>
                <TableCell align="left">
                  {apiArrayList.status ? (
                    <CheckCircle style={{ color: "green" }} />
                  ) : (
                    <ErrorOutlineRounded style={{ color: "red" }} />
                  )}
                </TableCell>
                <TableCell align="left">{"Test"}</TableCell>
                <TableCell align="left">{"Test"}</TableCell>
              </TableRow>
            </TableBody>
          ))}
      </Table>
    </TableContainer>
  );
};

export default APITable;
