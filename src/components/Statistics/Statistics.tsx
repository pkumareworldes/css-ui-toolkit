import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { StatisticsCardProps } from "../../types/IStatCard";

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  hint,
  statisticNumber,
  statisticsPercentage,
  color,
  cssProps,
}) => {
  return (
    <Card
      sx={{ ...cssProps, maxWidth: 300, boxShadow: 3, backgroundColor: color }}
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
            {statisticNumber}
          </Typography>

          {/* Percentage */}
          {statisticsPercentage && (
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              ({statisticsPercentage}%)
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
