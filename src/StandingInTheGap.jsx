import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "motion/react";
import Students1 from "./assets/students_1.jpg";

const StandingInTheGap = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible:
      ("ul > li",
      {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
      }),
  };

  const theme = useTheme();

  return (
    <motion.div
      sx={{ px: 4, py: 6 }}
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{
        marginTop: "75px",
        marginBottom: "2rem",

        padding: "0 8rem 0 8rem",
        zIndex: 5,
        borderTop: "4px #E1631D solid",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#E1631D", fontWeight: 900, textAlign: "left" }}
        >
          Standing in the Gap for Native Students
        </Typography>
        <img
          src={Students1}
          style={{ height: "250px", width: "auto", marginRight: "50px" }}
        />
      </div>
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "left",
          color: "#231F20",
          marginBottom: "20px",
          marginTop: "10px",
          fontSize: "larger",
        }}
      >
        Across the country, colleges are responding to recent policy decisions
        at both the state and federal level aimed at eliminating race-based
        policies and programs. While American Indians are citizens of sovereign
        nations and not a race, schools are seeking to avoid scrutiny and
        penalty by making broad cuts that are impacting Indigenous students.
        <span style={{ fontWeight: 700 }}>
          While some institutions are pulling back in the face of uncertainty,
          we are stepping forward – and we are able to do that because of your
          persistent care and consideration for Native students.
        </span>
      </Typography>

      <Grid container alignItems="stretch" spacing={2}>
        {/* Column 1 */}
        <Grid
          size={{ lg: 6, md: 12 }}
          display="flex"
          flexDirection="column"
          //   alignItems="stretch"
          columns={3}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "#BC1E30", mb: 2, textAlign: "left" }}
          >
            Policy Impacts on Native Students
          </Typography>

          <Box sx={{ height: "35%" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: "#023854", textAlign: "left" }}
            >
              Cuts to funding students relied on:
            </Typography>
            <Typography
              variant="ul"
              component="ul"
              textAlign="left"
              sx={{
                color: "#111111",
                textAlign: "left",
                paddingBottom: "15px",
              }}
            >
              <li>School-administered scholarships for Native students</li>
              <li>Government grants or programs that included internships</li>
              <li>Paid fellowship programs for graduate students</li>
            </Typography>
          </Box>
          <Box sx={{ height: "35%" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: "#023854", textAlign: "left" }}
            >
              Celebrations of culture cancelled:
            </Typography>
            <Typography
              variant="ul"
              component="ul"
              textAlign="left"
              sx={{
                color: "#111111",
                textAlign: "left",
                paddingBottom: "15px",
              }}
            >
              <li>Native convocation ceremonies</li>
              <li>Native American Heritage Month</li>
              <li>Events celebrating Native culture</li>
            </Typography>
          </Box>
          <Box sx={{ height: "35%" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: "#023854", textAlign: "left" }}
            >
              Resources for students shut down:
            </Typography>
            <Typography
              variant="ul"
              component="ul"
              textAlign="left"
              sx={{
                color: "#111111",
                textAlign: "left",
                paddingBottom: "15px",
              }}
            >
              <li>Native student organizations</li>
              <li>Culturally relevant support services</li>
              <li>
                STEM and other career pathways for underrepresented students
              </li>
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid
          display="flex"
          flexDirection="column"
          size={{ lg: 6, md: 12 }}
          //   alignItems="stretch"
          columns={3}
          columnSpacing={4}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ color: "#BC1E30", mb: 2, textAlign: "left" }}
          >
            How We are Helping
          </Typography>

          <Box sx={{ height: "35%" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: "#023854", textAlign: "left" }}
            >
              Replacing lost funding sources:
            </Typography>
            <Typography
              variant="ul"
              component="ul"
              textAlign="left"
              sx={{
                color: "#111111",
                textAlign: "left",
                paddingBottom: "15px",
              }}
            >
              <li>
                Increasing direct financial support to students, awarding more
                total scholarships in 2025 than ever before
              </li>
              <li>
                Providing temporary emergency funding for sudden program gaps at
                Tribal Colleges
              </li>
              <li>
                Offering fellowship opportunities for Native students and
                faculty
              </li>
            </Typography>
          </Box>
          <Box sx={{ height: "35%" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: "#023854", textAlign: "left" }}
            >
              Creating space for celebration:
            </Typography>
            <Typography
              variant="ul"
              component="ul"
              textAlign="left"
              sx={{
                color: "#111111",
                textAlign: "left",
                paddingBottom: "15px",
              }}
            >
              <li>
                Hosting virtual and in person opportunities for scholars to be
                heard and celebrate their cultures
              </li>
              <li>
                Supporting Tribal Colleges where curriculum and instruction is
                centered in culture
              </li>
            </Typography>
          </Box>
          <Box sx={{ height: "35%" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: "#023854", textAlign: "left" }}
            >
              Creating new resources:
            </Typography>
            <Typography
              variant="ul"
              component="ul"
              textAlign="left"
              sx={{
                color: "#111111",
                textAlign: "left",
                paddingBottom: "15px",
              }}
            >
              <li>Student success coaching opportunities</li>
              <li>Career path counseling</li>
              <li>Summer first-year college preparation programs</li>
              <li>Developing new partnerships with corporate employers</li>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default StandingInTheGap;
