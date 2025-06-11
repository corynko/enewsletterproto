import { motion } from "framer-motion";
import pattern1 from "./assets/pattern2_vert.svg";

const BorderPattern = ({ side, animateKey }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      key={animateKey} // forces re-animation when newsletter changes
      initial={{
        clipPath:
          side === "left"
            ? "inset(100% 0% 0% 0%)" // from top down
            : "inset(0% 0% 100% 0%)", // from bottom up
        opacity: 0,
      }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      transition={{
        clipPath: { duration: 2.2, ease: "easeOut" },
        opacity: { duration: 0.5, ease: "easeInOut" },
      }}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: "50px", // or however wide your pattern is
        overflow: "visible",
        zIndex: 1,
        backgroundImage: `url(${pattern1})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain", // ensures pattern scales as designed
        backgroundPosition: "top center", // left side grows down, right grows up
      }}
    />
  );
};

export default BorderPattern;
