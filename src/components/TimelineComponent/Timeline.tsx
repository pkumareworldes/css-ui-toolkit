import React, { useState } from "react";
import {Box,Typography,Collapse,List,ListItem,ListItemText,ListItemIcon,IconButton,Card,
  CardContent,} from "@mui/material";
import {ExpandMore,ExpandLess,RadioButtonUnchecked,Warning,Done,Error} from "@mui/icons-material";
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent} from "@mui/lab";
import type { TimelineProp,SublistItem } from "./TimelineType";


const CustomTimeline: React.FC<TimelineProp> = (props) => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null); // This state determines which Phase in the timeline is expanded


  // Function for title of Phase user clicked on! // Check if the clicked phase is already expanded. If so, collapse it. Otherwise, expand it.
  const togglePhase = (title: string) => {
    setExpandedPhase(expandedPhase === title ? null : title);
  };

  //For TaskIcon Whether it is completed(Blue checked), current/in-progress(Blue open circle, NotStarted/Future(Gray open circle).
  const renderTimetaskIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Box
            sx={{
              width: 25, height: 25, border: "2px solid",  borderRadius: "50%", borderColor: "primary.main", backgroundColor: "primary.light",
              display: "flex", justifyContent: "center",alignItems: "center"
            }}>
            <Done
              sx={{
                fontSize: 20, // Size of the tick
                color:"white", // Use theme's primary color
                stroke: "currentColor", // Adds a stroke using the current color
                strokeWidth: 1.5, // Adjust the stroke thickness to make it appear bold
              }}
            />
          </Box>
        );
      case "in-progress":
        return (
          <Box
            sx={{
              width: 25, height: 25, border: "5px solid", borderRadius: "50%", borderColor: "primary.main", backgroundColor: "transparent", 
              display: "flex",justifyContent: "center",alignItems: "center"       
            }}>
          </Box>
        );
      //case "incomplete":
      default:
      return (
          <Box
            sx={{
              width: 25, height: 25, border: "5px solid", borderRadius: "50%", borderColor: "grey.500", backgroundColor: "transparent",
              display: "flex",justifyContent: "center",alignItems: "center",
            }}>
          </Box>
        );
      //default:
       // return null;
    }
  };

//For SubTaskIcon Whether it is completed(Tick Mark), current/in-progress(Blue open circle, NotStarted/Future(Gray open circle).
  const renderSubtaskIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Done
          sx={{
            fontSize: 22, // Slightly larger to mimic boldness
            fontWeight: "bold", // Although not applicable to SVG, ensures consistent intent
            stroke: "currentColor", // Add stroke for boldness
            strokeWidth: 1.5, // Thickness of the tickd
          }}
          color="primary"
        />;
       case "pending":
        return (
          <Box
            sx={{fontSize: "25px", fontWeight: "bold",color: "error.main"}}>
            !
          </Box>
        );
    }
  };

  //Check if the sublist has any pending items
  function hasIncompleteSublist(timeline: SublistItem[]): boolean {
    return timeline.some((item) =>
      item.status === "pending"
    );
  }


  return (
    <>
      <Box  //Box for Entire Timeline
        sx={{
          display: "flex", flexDirection: "column", alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: "32px",
            marginBottom: 3,
          }}
        >
          {props.Title}
        </Typography>
  
        <Timeline position="right">
          {props?.Timeline?.map((timelineItem, index) => (
            <TimelineItem key={timelineItem.Title}>
              <TimelineSeparator>
                {renderTimetaskIcon(timelineItem.status)}
                {index !== props.Timeline.length - 1 && (
                  <TimelineConnector
                    sx={{
                      backgroundColor: (theme) => theme.palette.primary.main,
                      width: 4.5,
                      height: 50,
                    }}
                  />
                )}
              </TimelineSeparator>
  
              <TimelineContent sx={{ marginTop: -3 }}>
                <Card
                  sx={{
                    width: "100%", marginBottom: 0,
                    backgroundColor:expandedPhase === timelineItem.Title && hasIncompleteSublist(timelineItem.Sublist)? "rgb(240, 240, 240)":"transparent", // No background
                    boxShadow: "none", borderRadius: 1.5
                  }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" width="290px">
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontWeight: "bold", fontSize: "20px", whiteSpace: "nowrap", marginBottom: 0,
                        }}
                      >
                        {timelineItem.Title}
                      </Typography>
  
                      <IconButton
                        onClick={() => togglePhase(timelineItem.Title)}
                          sx={{
                            padding: 0, marginLeft: "8px", width: "22px", height: "22px",
                          }}
                      >
                        {expandedPhase === timelineItem.Title ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </Box>
  
                    <Collapse in={expandedPhase === timelineItem.Title} sx={{ width: "100%" }}>
                      <Box flexDirection="column" width="100%">
                        <List>
                          {timelineItem?.Sublist?.map((sublistItem) => (
                            <ListItem
                              key={sublistItem.Title}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                paddingLeft: 0,
                                paddingRight: 0,
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: "auto",
                                  marginRight: 1,
                                }}
                              >
                                {renderSubtaskIcon(sublistItem.status)}
                              </ListItemIcon>
  
                              <ListItemText
                                primary={sublistItem.Title}
                                secondary={
                                  sublistItem.Component ? (
                                    <Box display="flex" alignItems="center">
                                      {typeof sublistItem.Component === "string" &&
                                      sublistItem.Component.includes("Due:") ? (
                                        <Typography
                                          variant="body2"
                                          component="span"
                                          sx={{ fontWeight: 900 }}
                                        >
                                          <span style={{ fontSize: "1.0rem" }}>Due:</span>{" "}
                                          <span
                                            style={{
                                              fontWeight: 600,
                                            }}
                                          >
                                            {sublistItem.Component.replace("Due:", "").trim()}
                                          </span>
                                        </Typography>
                                      ) : (
                                        <Typography variant="body2">
                                          {sublistItem.Component}
                                        </Typography>
                                      )}
                                    </Box>
                                  ) : null
                                }
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Collapse>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </>
  );
  
};



export default CustomTimeline;