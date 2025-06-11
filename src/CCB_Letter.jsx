import { Box, Grid, Typography, useTheme } from "@mui/material";
import { easeInOut, motion } from "motion/react";
import ccb1 from "./assets/ccb_1.jpg";
import signature from "./assets/signature.jpg";
import pattern1hor from "./assets/pattern1_hor.svg";

const CCBLetter = () => {
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
        // marginBottom: "1rem",
        paddingBottom: "95px",
        padding: "0 8rem 0 8rem",
        zIndex: 5,
        borderBottom: "4px #E1631D solid",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: "#157F76",
              fontWeight: 900,
              fontStyle: "italic",
              textAlign: "left",
            }}
          >
            Education Is the Promise We Must Keep.
          </Typography>
          <motion.div
            initial={{
              //   clipPath: "inset(0% 100% 0% 100%)", // from top down

              opacity: 0,
            }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            transition={{
              //   clipPath: { duration: 1.8, ease: "easeInOut" },
              opacity: { duration: 1.8, ease: "easeInOut" },
              delay: 0.4,
            }}
            style={{
              //   position: "relative",
              //   top: 0,
              //   bottom: 0,

              height: "4vw", // or however wide your pattern is
              width: "90%",
              marginLeft: "3%",

              //   overflow: "visible",
              zIndex: 1,
              //   backgroundRepeat: "repeat-y",
              backgroundImage: `url(${pattern1hor})`,
            }}
          />
        </div>
        <img
          src={ccb1}
          style={{ height: "250px", width: "auto", marginRight: "50px" }}
        />
      </div>
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "left",
          color: "#231F20",
          marginBottom: "80px",
          marginTop: "10px",
          fontSize: "larger",
        }}
      >
        I want to begin by expressing my deepest gratitude for your continued
        support of our students and the communities we call home. <br />
        <br />
        Your care, generosity, and commitment to stand with Native students in
        both the good, and especially the hard, times has always sustained our
        work – and your friendship means more than words can express. Over the
        past several months, we’ve been talking about the impact of federal
        policy changes on Native students. You may have deep knowledge of treaty
        obligations, public policy, and the relationship between Tribal Nations
        and the U.S. government. Or you may not have the same exposure to this
        history but support the College Fund because of deeply held values and a
        shared belief that education is the answer. <br />
        <br /> The relationship between Native Nations and the U.S. government
        is incredibly complex. Shaped by history, trust obligations, and treaty
        rights, we know this relationship shifts with every administration – and
        sometimes the complexities and dynamics of major policy changes have
        disproportionate and often devastating impact on Native people,
        including and especially our students. And still we hold the opportunity
        in our hands to support students in the dreams they’ve worked so hard
        for, to clear the pathways they are counting on – whether in
        agriculture, healthcare, education, STEM, federal agencies, or beyond –
        even when they are fraught with challenges. <br />
        <br /> We must still create career pathways and places our students can
        use both their educational and ancestral knowledge and skills to
        contribute meaningfully to their communities and to the world. Federal
        funding cuts – and the uncertainty surrounding them – have already led
        to the loss of critical opportunities. Internships have been canceled,
        fellowships withdrawn, and job offers rescinded. These setbacks are
        life-altering disruptions for students. <br />
        <br />
        With your support, we will find new ways to lift our students to ensure
        they do not lose hope, and to fill those gaps funding cuts have created.
        We are expanding our direct support to students in the year ahead,
        broadening the types of assistance we can provide, as support programs
        for Native students at schools are being discontinued. For those
        students who planned to move into graduate studies or careers but now
        find themselves charting a new course, we will be there – offering
        mentorship, career coaching, and guidance to help them navigate
        unexpected changes. As costs rise and more students seek financial
        assistance, collectively we will work tirelessly to expand opportunities
        by awarding more scholarships – so as many students as possible can
        continue their education without interruption. We are deeply grateful
        for the broad coalition of people who stand with us in this work – we
        know our shared commitment to education, opportunity, and the well-being
        of Native students transcends any single perspective. We are here to
        stand by our students and communities, and that means filling the
        immediate gaps and creating new pathways to access for all Native
        students in their quest to achieve higher education. As we navigate this
        uncertain and often difficult landscape, we are reminded of our
        commitments and the reason for our very existence. Native students and
        their contributions are too important to leave behind. We will continue
        to fight for every student who seeks an education to have that
        opportunity. Thank you for being on this journey with us. It is not
        always easy, but together we are stronger.
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "right",
          color: "#231F20",

          marginTop: "10px",
          fontSize: "larger",
          fontWeight: 700,
        }}
      >
        Yours in Strength and Unity,
      </Typography>
      <img
        src={signature}
        style={{ alignSelf: "end", height: "75px", width: "auto" }}
      />
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "right",
          color: "#231F20",
          marginBottom: "80px",
          marginTop: "10px",
          fontSize: "larger",
          fontWeight: 700,
        }}
      >
        Cheryl Crazy Bull (Sicangu Lakota)
      </Typography>
    </motion.div>
  );
};

export default CCBLetter;
