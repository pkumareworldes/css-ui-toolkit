export interface SublistItem {
  Title: string;
  Code: string;
  status: "pending" | "completed" | "in-progress";
  Component?: React.ReactNode; // Optional, allows sending any component (like a button)
}

export interface TimelineItems {
  Title: string;
  Code: string;
  Color:string;
  status: "pending" | "completed" | "in-progress";
  Sublist: SublistItem[];
}


export interface TimelineProp {
  Title: string;
  Timeline: TimelineItems[];
  primaryColor?: string;
  secondaryColor?: string;
}




