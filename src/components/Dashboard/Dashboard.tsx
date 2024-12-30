import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import StatisticsCard from "../Statistics/Statistics";
import CalendarEvent from "../CalendarEvent/CalendarEvent";

const Dashboard: React.FC = () => {
  // Mock data for KPI cards
  const kpiData = [
    {
      title: "Total Cases Established",
      statisticNumber: 26,
      statisticsPercentage: '',
      color: "#e3f2fd",
    },
    {
      title: "Cases Established On Time",
      statisticNumber: 24,
      statisticsPercentage: 92,
      color: "#e8f5e9",
    },
    {
      title: "Cases Established Late",
      statisticNumber: 2,
      statisticsPercentage: 8,
      color: "#ffebee",
    },
  ];

  // Mock data for Calendar events
  const calendarEvents = [
    {
      time: "9:30 AM",
      mins: 30,
      title: "Harold Black",
      location: "Call: (808) 489-12039",
      acceptedIconColor: "#1976d2",
    },
    {
      time: "10:30 AM",
      mins: 30,
      title: "Alfredo Dias",
      location: "In Person",
      acceptedIconColor: "#1976d2",
    },
    {
      time: "1:00 PM",
      mins: 30,
      title: "Miracle Horwitz",
      location: "Call: (808) 239-2409",
      acceptedIconColor: "#1976d2",
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
        Dashboard
      </Typography>

      {/* KPI and MyWork Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              KPI
            </Typography>
            <Grid container spacing={3}>
              {kpiData.map((kpi, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <StatisticsCard
                    title={kpi.title}
                    statisticNumber={kpi.statisticNumber}
                    statisticsPercentage={kpi.statisticsPercentage}
                    color={kpi.color}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Calendar
            </Typography>
            <Grid container spacing={2}>
              {calendarEvents.map((event, index) => (
                <Grid item xs={12} key={index}>
                  <CalendarEvent
                    time={event.time}
                    mins={event.mins}
                    title={event.title}
                    location={event.location}
                    acceptedIconColor={event.acceptedIconColor}
                    color={""}
                    priority={"high"}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Placeholder for MyWork Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            MyWork (Placeholder)
          </Typography>
          {/* Add components or placeholders for MyWork content here */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
