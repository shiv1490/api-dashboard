/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSearchStyle } from "../styles";
import TextField from "@material-ui/core/TextField";

export default function SearchApi({ apiList, filterAccordionData }) {
  const classes = useSearchStyle();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={apiList}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        onChange={filterAccordionData}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Search"
            placeholder="Search API Name"
          />
        )}
      />
    </div>
  );
}
