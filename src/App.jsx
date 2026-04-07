import { useState } from "react";
import useCalendarState from "./hooks/useCalendarState";

import CalendarHeader from "./components/calendar/CalendarHeader";
import CalendarGrid from "./components/calendar/CalendarGrid";
import CalendarHero from "./components/layout/CalendarHero";
import NotesPanel from "./components/notes/NotesPanel";

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const {
    startDate,
    endDate,
    selectedDate,
    notes,
    selectDate,
    addNote,
  } = useCalendarState();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb", // light clean background
        padding: "20px 10px",
      }}
    >
      <div
        style={{
          maxWidth: 420,
          margin: "auto",
        }}
      >
        {/* 🔥 Image */}
        <CalendarHero currentDate={currentDate} />

        {/* 🔥 Clean Card */}
        <div
          style={{
            marginTop: -30,
            background: "white",
            borderRadius: 16,
            padding: 16,
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)", // light shadow
          }}
        >
          <CalendarHeader
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />

          <CalendarGrid
            currentDate={currentDate}
            startDate={startDate}
            endDate={endDate}
            notes={notes}
            onSelect={selectDate}
          />
        </div>
      

        {/* Notes */}
        <div style={{ marginTop: 16 }}>
          <NotesPanel
            selectedDate={selectedDate}
            notes={notes}
            addNote={addNote}
          />
        </div>
      </div>
    </div>
  );
}