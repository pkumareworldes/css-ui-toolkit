import { IReadOnlyFeild } from "./readOnlyFieldInterface";
import { TickSvg } from "../Icon/TickSvg";
import { OverdueSvg } from "../Icon/Overdue";
import BasicChips from "../Chip/index";
export const defaultROFProps: IReadOnlyFeild = {
  fieldName: "Date of birth",
  fieldColor: "#666", // Blue color for the text
  fieldFontWeight: "400",
  fieldValue: "02/04/1990",
  valueFontWeight: "600",
  valueColor: "#000",
  link: "",
  underline: "none", // Underline on hover for the link
  alignRow: true, // Display in grid layout
  iconComp: null, // Icon to be displayed in the beginning
  cssProps: {
    fontSize: "0.875rem",
  },
};

export const LinkROFProps: IReadOnlyFeild = {
  fieldName: "Email",
  fieldValue: "mariajohnson@gmail.com",
  fieldColor: "#666", // Blue color for the text
  valueColor: "#0078D4",
  fieldFontWeight: "400",
  valueFontWeight: "600",
  link: "https://example.com",
  underline: "always", // Underline on hover for the link
  alignRow: true, // Display in grid layout
  cssProps: {
    fontSize: "0.875rem",
  },
};

export const IconROFProps: IReadOnlyFeild = {
  fieldName: "Subtask 1",
  fieldColor: "#000", // Blue color for the text
  fieldFontWeight: "400",
  alignRow: false, // Display in grid layout
  iconComp: TickSvg, // Icon to be displayed in the beginning
  iconSpacing: "5px", // Icon spacing
  cssProps: {
    fontSize: "0.875rem",
  },
};
export const ChipROFProps: IReadOnlyFeild = {
  fieldName: "Case processing status",
  fieldColor: "#666", // Blue color for the text
  fieldFontWeight: "400",
  alignRow: false, // Display in grid layout
  chipComp: {
    component: BasicChips,
    props: [
      {
        title: "Intake",
        spacing: 1,
        alignRow: false,
        variant: "filled",
        cssProps: {
          width: "",
          height: "",
          color: "#000",
          fontWeight: "600",
          backgroundColor: "#F4F4F4",
          borderColor: "#D2D2D2",
          borderWidth: "0.125rem",
          borderStyle: "solid",
          padding: "0rem",
        },
      },
    ],
  },
  cssProps: {
    fontSize: "0.875rem",
  },
};
export const IconChipROFProps: IReadOnlyFeild = {
  fieldName: "Subtask 2",
  fieldColor: "#AA3238", // Blue color for the text
  fieldFontWeight: "700",
  alignRow: false, // Display in grid layout
  iconComp: OverdueSvg, // Icon to be displayed in the beginning
  iconSpacing: "5px", // Icon spacing
  chipComp: {
    component: BasicChips,
    props: [
      {
        title: "60 days late",
        spacing: 1,
        alignRow: false,
        variant: "filled",
        cssProps: {
          width: "",
          height: "",
          color: "#000",
          fontWeight: "600",
          backgroundColor: "#FDE7E9",
          borderColor: "#AA3238",
          borderWidth: "0.125rem",
          borderStyle: "solid",
          padding: "0rem",
        },
      },
    ],
  },
  cssProps: {
    fontSize: "0.875rem",
  },
};
