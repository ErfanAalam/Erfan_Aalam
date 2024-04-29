import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import './Skills.css'


const Uppertime = ({one,two,three}) => {
  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" style={{padding:"10px"}} />
          <TimelineConnector style={{height:"150px"}}
          ></TimelineConnector>
        </TimelineSeparator>
        <TimelineContent className="attribute">
            <h3><span>{one}</span></h3>
            <h5>{two}</h5>
            <h5>{three}</h5>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default Uppertime
