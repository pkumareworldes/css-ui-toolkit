import { SxProps } from '@mui/material';
export interface CalendarEventProps {
    dateTime: string;   
    title: string;
    subTitle?: string;
    color: string;
    priority: "high" | "medium" | "low";
    link?: boolean;
    onClickHandler: () => void;
    sxStyles?: SxProps;
  }
  