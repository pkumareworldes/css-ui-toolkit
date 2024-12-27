import { IChip } from "./chipInterface";

export const DefaultChipProps: IChip[] = [
  {
    title: "234532",
    spacing: 1,
    alignRow: true,
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
];

export const MultiChip: IChip[] = [
  {
    title: "234532",
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
  {
    title: "FVI",
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
  {
    title: "Minor",
    spacing: 1,
    alignRow: false,
    variant: "filled",
    cssProps: {
      width: "",
      height: "",
      color: "#000",
      fontWeight: "600",
      backgroundColor: "#FFF4CE",
      borderColor: "#E3CC00",
      borderWidth: "0.125rem",
      borderStyle: "solid",
      padding: "0rem",
    },
  },
];
