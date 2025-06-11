import { motion } from "motion/react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

function HeaderBar({ newsletters, selected, onSelect }) {
  return (
    <>
      <motion.div>
        <Box
          sx={{
            maxHeight: "30vh",
            top: 0,
            left: 0,
            backgroundColor: "#E1631D",
            border: "2px solid #f1faf2",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 300,
              fontSize: 30,
              textAlign: "left",
              paddingTop: "25px",
              //   paddingBottom: "25px",
              paddingLeft: "20px",
            }}
          >
            | {selected} |
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontWeight: 600,
              fontSize: 120,
              textAlign: "right",
              paddingTop: "50px",
              marginBottom: "50px",
              paddingRight: "20px",
            }}
          >
            Circle of Hope
          </Typography>
        </Box>
      </motion.div>
    </>
  );
}

export default HeaderBar;
