import { makeStyles } from "@material-ui/core";

export const useListStyle = makeStyles((theme) => ({
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
  tableCell: {
    width: ({ apiNameWidth }) => apiNameWidth,
  },
}));

export const useSearchStyle = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));
