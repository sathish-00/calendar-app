import { getDaysInMonth, getStartDay } from "../../utils/dateUtils";
import DayCell from "./DayCell";
import { motion, AnimatePresence } from "framer-motion";

export default function CalendarGrid({
  currentDate,
  startDate,
  endDate,
  notes,
  onSelect,
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = getDaysInMonth(year, month);
  const startDay = getStartDay(year, month);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {/* Week Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginBottom: 8,
          fontWeight: "bold",
          textAlign: "center",
          color: "#6b7280",
        }}
      >
        {weekDays.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Animated Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDate.toISOString()}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 10,
          }}
        >
          {/* Empty slots */}
          {Array.from({ length: startDay }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {/* Days */}
          {days.map((day, index) => (
            <DayCell
              key={index}
              date={day}
              startDate={startDate}
              endDate={endDate}
              notes={notes}
              onSelect={onSelect}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}