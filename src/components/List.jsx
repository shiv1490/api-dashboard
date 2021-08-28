import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchApi from "./SearchComponent";
import APITable from "./Table";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useListStyle } from "../styles";
import { getUniqueKeyListfromObject } from "../utils";

const List = () => {
  const props = {
    apiNameWidth: "32%",
  };
  const classes = useListStyle(props);
  const [apiList, setAPIList] = useState([]);
  const [originalApiList, setOriginalApiList] = useState([]);
  const [expandedAcc, setExpandAcc] = useState({});
  const [expandAccordionPlug, setExpandAccordionPlug] = useState(false);

  const setAccordionExpansion = (data, flag) => {
    const keys = getUniqueKeyListfromObject(data);
    const newExpand = {};
    keys.forEach((key) => {
      newExpand[key] = flag;
    });

    return setExpandAcc(newExpand);
  };

  useEffect(() => {
    try {
      const apiList = async () => {
        const res = await axios.get("data.json");
        setAPIList(res.data);
        setOriginalApiList(res.data);
        setAccordionExpansion(res.data, false);
      };
      apiList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filterAccordionData = (e, values) => {
    if (values.length) {
      setAPIList(values);
      setAccordionExpansion(values, true);
    } else {
      setExpandAcc({});
      setAPIList(originalApiList);
      setExpandAccordionPlug(false);
    }
  };

  const expandCollapseAccordion = () => {
    setAccordionExpansion(apiList, !expandAccordionPlug);
    setExpandAccordionPlug(!expandAccordionPlug);
  };

  return (
    <Container>
      <Box mt={2}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <SearchApi
            apiList={originalApiList}
            filterAccordionData={filterAccordionData}
          ></SearchApi>

          <FormControlLabel
            control={
              <Switch
                checked={expandAccordionPlug}
                disabled={apiList.length !== originalApiList.length}
                onChange={expandCollapseAccordion}
                name="expandSwitch"
              />
            }
            label={"Expand All"}
          />
        </Box>
        {getUniqueKeyListfromObject(apiList).map((key) => {
          return (
            <Box key={key}>
              <Accordion
                expanded={expandedAcc[key] || false}
                onChange={(e, v) => setExpandAcc({ ...expandedAcc, [key]: v })}
                className={classes.accordion}
                square
                key={key}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.accordionSummary}
                >
                  <Typography variant="h6">{key}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box mt={3} className={classes.tableContainer}>
                    <APITable apiList={apiList} keyItem={key}></APITable>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default List;
