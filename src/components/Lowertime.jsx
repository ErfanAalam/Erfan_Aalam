import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import './Skills.css'
import {motion} from 'framer-motion'

const Lowertime = ({one, two, three}) => {
  return (
    <>
      <TimelineItem className="timeline">
        <TimelineSeparator>
          <TimelineDot color="primary" className="dot" style={{padding:"10px"}} />
        </TimelineSeparator>
        <TimelineContent className="attribute">
            <h3><span>{one}</span></h3>
            <h5>{two}</h5>
            <h5>{three}</h5>
        </TimelineContent>
      </TimelineItem>
    </>
  )
}

export default Lowertime
