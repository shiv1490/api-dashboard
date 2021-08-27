import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore, CheckCircle, StopRounded } from "@material-ui/icons";
// import apiConfig from "../config";

const useStyles = makeStyles({
  tableContainer: {
    display: "flex",
    width: "100%",
  },
  accordion: {
    border: "1px solid rgba(0, 0, 0, .125)",
    borderBottom: "inherit !important",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  accordionSummary: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
});

const List = () => {
  const classes = useStyles();
  const [apiList, setAPIList] = useState({});

  useEffect(() => {
    const apiList = async () => {
      const res = await axios.get("http://localhost:8081/api/test");
      setAPIList(res.data.result);
    };
    apiList();
  }, []);

  return (
    <Container>
      <Box mt={2}>
        {Object.keys(apiList).map((key) => {
          return (
            <Accordion className={classes.accordion} square key={key}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.accordionSummary}
              >
                <Typography variant="h6">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box mt={3} className={classes.tableContainer}>
                  <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>API Name</TableCell>
                          <TableCell align="left">API Details</TableCell>
                          <TableCell align="left">Status</TableCell>
                          <TableCell align="left">Extra</TableCell>
                          <TableCell align="left">Extra</TableCell>
                        </TableRow>
                      </TableHead>
                      {apiList[key].map((apiArrayList) => (
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
                                <CheckCircle color="primary" />
                              ) : (
                                <StopRounded color="secondary" />
                              )}
                            </TableCell>
                            <TableCell align="left">{"Test"}</TableCell>
                            <TableCell align="left">{"Test"}</TableCell>
                          </TableRow>
                        </TableBody>
                      ))}
                    </Table>
                  </TableContainer>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
};

export default List;
