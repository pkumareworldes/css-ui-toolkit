// calendarEventInterface.ts

export interface CalendarEventProps {
    time: string;         
    mins: number;         
    title: string;         
    location?: string;     
    color: string;         
    priority: "high" | "medium" | "low"; 
    acceptedIcon?: string; 
    acceptedIconColor?: string; 
    isLink?: Boolean;
    eleProps?: Record<string, any>; 
  }
  