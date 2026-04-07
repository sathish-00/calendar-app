import { useRef } from "react";
import { motion } from "framer-motion";

export default function CalendarHeader({ currentDate, setCurrentDate }) {

  // 🔊 reuse audio (no delay)
  const audioRef = useRef(null);

  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/flip.mp3");
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const changeMonth = (dir) => {
    playSound();

    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + dir);
    setCurrentDate(newDate);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
      }}
    >
      {/* 🔥 Left Button */}
      <motion.button
        onClick={() => changeMonth(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: "6px 12px",
          borderRadius: 8,
          border: "1px solid #ddd",
          background: "white",
          cursor: "pointer",
        }}
      >
        <motion.span
          whileTap={{ rotate: -180 }} // 🔥 flip animation
          style={{ display: "inline-block" }}
        >
          ◀
        </motion.span>
      </motion.button>

      {/* 🔥 Month Title */}
      <h2
        style={{
          margin: 0,
          fontWeight: "600",
          color: "#111827",
        }}
      >
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h2>

      {/* 🔥 Right Button */}
      <motion.button
        onClick={() => changeMonth(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: "6px 12px",
          borderRadius: 8,
          border: "1px solid #ddd",
          background: "white",
          cursor: "pointer",
        }}
      >
        <motion.span
          whileTap={{ rotate: 180 }} // 🔥 flip animation
          style={{ display: "inline-block" }}
        >
          ▶
        </motion.span>
      </motion.button>
    </div>
  );
}