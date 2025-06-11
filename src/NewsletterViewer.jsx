import { motion } from "framer-motion";
import StandingInTheGap from "./StandingInTheGap";
import BorderPattern from "./BorderPattern";
import CCBLetter from "./CCB_Letter";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

function NewsletterViewer({ quarter }) {
  //   const sections = quarter === "Spring 2025" ? StandingInTheGap : [];

  return (
    <div
      style={{
        // flex: 1,
        // padding: "2rem",
        // overflowY: "scroll",
        // height: "70vh",
        position: "relative", // necessary for absolute positioning of patterns
      }}
    >
      <BorderPattern side="left" animateKey={quarter} />
      <main
        style={{
          flex: 1,
          padding: "2rem",
          overflowY: "scroll",
          height: "70vh",
          position: "relative", // necessary for absolute positioning of patterns
        }}
      >
        <CCBLetter />

        {/* {sections.map((section, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ marginBottom: "2rem" }}
        >
          <h3>{section.heading}</h3>
          <p>{section.body}</p>
        </motion.div>
      ))} */}
        <StandingInTheGap />
      </main>
      <BorderPattern side="right" animateKey={quarter} />
    </div>
  );
}

export default NewsletterViewer;
