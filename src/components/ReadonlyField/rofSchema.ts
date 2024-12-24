import { ROFInterface } from "./rofInterface";

export const rofProps: ROFInterface = {
  fieldName: "name",
  fieldValue: "john",
  link: "http://localhost",
  underline: "always",
  isLink: true,
  alignRow: true,
  fieldColor: "blue",
  valueColor: "blue",
  iconComp: null,
  cssProps: {
    width: 100, // Can be a string (e.g., '500px') or a number (e.g., 500)
    height: 100, // Can be a string (e.g., '300px') or a number (e.g., 300)
    color: "red", // Optional color for the buttons, e.g., 'blue' or '#FF0000'
  },
};
