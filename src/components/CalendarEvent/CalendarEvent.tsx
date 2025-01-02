import { Box, Card, CardContent, Typography } from "@mui/material";

import { CalendarEventProps } from "./ICalendarEventProps";
import { Link } from "react-router-dom";

const CalendarEvent = ({
  time,
  mins,
  title,
  location,
  isLink = false,
  ...rest
}: CalendarEventProps) => {
  const content = (
    <Card sx={rest.sxStyles}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          padding: "0.5rem",
        }}
      >
        {/* Time and Duration */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {time}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {mins} min
          </Typography>
        </Box>

        {/* Event Name and Location */}
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "0.3125rem" }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "1rem", lineHeight: 1.2 }}
          >
            {title}
          </Typography>
          {location && (
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.875rem" }}
            >
              {location}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );

  // If isLink is true, wrap the entire card with a Link component to make it clickable
  if (isLink) {
    return <Link to="/link-target-url">{content}</Link>; // We have to replace with actual link target
  }

  return content;
};

export default CalendarEvent;
