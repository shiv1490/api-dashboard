import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
} from "@material-ui/core";
import { CheckCircle, ErrorOutlineRounded } from "@material-ui/icons";

const APITable = ({ apiList, keyItem }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "22%" }}>API Name</TableCell>
            <TableCell style={{ width: "20%" }} align="left">
              API Details
            </TableCell>
            <TableCell style={{ width: "7%" }} align="left">
              Status
            </TableCell>
            <TableCell style={{ width: "7%" }} align="left">
              Git Repo
            </TableCell>
            <TableCell style={{ width: "7%" }} align="left">
              Build
            </TableCell>
            <TableCell style={{ width: "7%" }} align="left">
              Logs
            </TableCell>
          </TableRow>
        </TableHead>
        {apiList
          .filter((api) => api.environment === keyItem)
          .map((apiArrayList) => (
            <TableBody key={apiArrayList.id}>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Link href={apiArrayList.swaggerURL} target="_blank">
                    {apiArrayList.name}
                  </Link>
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
                <TableCell align="left">
                  <Link href={apiArrayList.gitRepoURL} target="_blank">
                    Link
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Link href={apiArrayList.buildURL} target="_blank">
                    Link
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Link href={apiArrayList.logsURL} target="_blank">
                    Link
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
      </Table>
    </TableContainer>
  );
};

export default APITable;
