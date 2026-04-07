import { useState, useEffect } from "react";

export default function useCalendarState() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});

  // 🔹 Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("calendarData"));
    if (saved) {
      setStartDate(saved.startDate ? new Date(saved.startDate) : null);
      setEndDate(saved.endDate ? new Date(saved.endDate) : null);
      setNotes(saved.notes || {});
    }
  }, []);

  // 🔹 Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "calendarData",
      JSON.stringify({
        startDate,
        endDate,
        notes,
      })
    );
  }, [startDate, endDate, notes]);

  // 🔹 Handle date selection (FIXED LOGIC)
  const selectDate = (date) => {
    setSelectedDate(date);

    // Case 1: No start → set start
    if (!startDate) {
      setStartDate(date);
      return;
    }

    // Case 2: Start exists, no end → set end
    if (startDate && !endDate) {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      return;
    }

    // Case 3: Both exist → RESET selection
    setStartDate(date);
    setEndDate(null);
  };

  // 🔹 Add note
  const addNote = (date, text) => {
    const key = date.toDateString();
    setNotes((prev) => ({
      ...prev,
      [key]: text,
    }));
  };

  return {
    startDate,
    endDate,
    selectedDate,
    notes,
    selectDate,
    addNote,
  };
}