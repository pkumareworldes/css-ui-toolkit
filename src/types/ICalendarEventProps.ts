import { SxProps } from "@mui/material";
export interface CalendarEventProps {
  time: string;
  mins: string;
  title: string;
  location?: string;
  color: string;
  priority: "high" | "medium" | "low";
  isLink?: boolean;
  onClickHandler: () => void;
  sxStyles?: SxProps;
}
