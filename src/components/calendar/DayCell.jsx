import { isSameDay, isInRange } from "../../utils/dateUtils";
import { motion } from "framer-motion"; // 🔥 ADD THIS

export default function DayCell({
  date,
  startDate,
  endDate,
  notes,
  onSelect,
}) {
  const isSelected =
    isSameDay(date, startDate) || isSameDay(date, endDate);

  const inRange = isInRange(date, startDate, endDate);

  const hasNote = notes[date.toDateString()];

  return (
    <motion.div   // 🔥 CHANGE div → motion.div
      onClick={() => onSelect(date)}

      // 🔥 ADD THESE 2 LINES
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.85 }}

      style={{
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        background: isSelected
          ? "linear-gradient(135deg, #3b82f6, #2563eb)"
          : inRange
          ? "#dbeafe"
          : "white",
        color: isSelected ? "white" : "#111827",
        fontWeight: isSelected ? "600" : "400",
        position: "relative",
        transition: "all 0.2s ease",
        boxShadow: isSelected
          ? "0 6px 14px rgba(37,99,235,0.3)"
          : "0 1px 2px rgba(0,0,0,0.05)",
      }}

      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.background = "#f3f4f6";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isSelected
          ? "linear-gradient(135deg, #3b82f6, #2563eb)"
          : inRange
          ? "#dbeafe"
          : "white";
      }}
    >
      {date.getDate()}

      {/* Note Indicator */}
      {hasNote && (
        <span
          style={{
            position: "absolute",
            bottom: 6,
            width: 7,
            height: 7,
            background: "#ef4444",
            borderRadius: "50%",
          }}
        />
      )}
    </motion.div>
  );
}