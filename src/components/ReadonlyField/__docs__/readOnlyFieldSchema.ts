import { IReadOnlyFeild } from "../IReadOnlyField";
export const defaultROFProps: IReadOnlyFeild = {
  fieldName: "Date of birth",
  mode: "light",
  direction: "row",
  fieldValue: "02/04/1990",
  link: "",
  underline: "none", // Underline on hover for the link
  iconComp: null, // Icon to be displayed in the beginning
  cssProps: {
    fontSize: "0.875rem",
  },
};

export const LinkROFProps: IReadOnlyFeild = {
  fieldName: "Email",
  fieldValue: "mariajohnson@gmail.com",
  mode: "bold",
  link: "https://example.com",
  underline: "always", // Underline on hover for the link
  cssProps: {
    fontSize: "0.875rem",
  },
};

export const IconROFProps: IReadOnlyFeild = {
  fieldName: "Subtask 1",
  fieldValue: "02/04/1990",
  mode: "light",
  iconSpacing: "5px", // Icon spacing
  cssProps: {
    fontSize: "0.875rem",
  },
};
// export const ChipROFProps: IReadOnlyFeild = {
//   fieldName: "Case processing status",
//   fieldColor: "#666", // Blue color for the text
//   fieldFontWeight: "400",
//   alignRow: false, // Display in grid layout
//   chipComp: {
//     component: BasicChips,
//     props: [
//       {
//         title: "Intake",
//         spacing: 1,
//         alignRow: false,
//         variant: "filled",
//         cssProps: {
//           width: "",
//           height: "",
//           color: "#000",
//           fontWeight: "600",
//           backgroundColor: "#F4F4F4",
//           borderColor: "#D2D2D2",
//           borderWidth: "0.125rem",
//           borderStyle: "solid",
//           padding: "0rem",
//         },
//       },
//     ],
//   },
//   cssProps: {
//     fontSize: "0.875rem",
//   },
// };
// export const IconChipROFProps: IReadOnlyFeild = {
//   fieldName: "Subtask 2",
//   fieldColor: "#AA3238", // Blue color for the text
//   fieldFontWeight: "700",
//   alignRow: false, // Display in grid layout
//   iconComp: OverdueSvg, // Icon to be displayed in the beginning
//   iconSpacing: "5px", // Icon spacing
//   chipComp: {
//     component: BasicChips,
//     props: [
//       {
//         title: "60 days late",
//         spacing: 1,
//         alignRow: false,
//         variant: "filled",
//         cssProps: {
//           width: "",
//           height: "",
//           color: "#000",
//           fontWeight: "600",
//           backgroundColor: "#FDE7E9",
//           borderColor: "#AA3238",
//           borderWidth: "0.125rem",
//           borderStyle: "solid",
//           padding: "0rem",
//         },
//       },
//     ],
//   },
//   cssProps: {
//     fontSize: "0.875rem",
//   },
// };
