import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { StatisticsCardProps } from "../../types/IStatCard";

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  hint,
  number,
  percentage,
  color,
  sxStyles,
}) => {
  return (
    <Card
      sx={{ ...sxStyles, maxWidth: 300, boxShadow: 3, backgroundColor: color }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          {title}
        </Typography>

        {/* Optional Hint */}
        {hint && (
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", marginBottom: 2 }}
          >
            {hint}
          </Typography>
        )}

        {/* Value and Percentage */}
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent={"space-between"}
        >
          {/* Statistic Number */}
          <Typography variant="h4" sx={{ marginRight: 1 }}>
            {number}
          </Typography>

          {/* Percentage */}
          {percentage && (
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              ({percentage}%)
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
