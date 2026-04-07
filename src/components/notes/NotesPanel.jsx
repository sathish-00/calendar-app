import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NotesPanel({ selectedDate, notes, addNote }) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      const savedNote = notes[selectedDate.toDateString()];
      setText(savedNote || "");
    }
  }, [selectedDate, notes]);

  if (!selectedDate) {
    return (
      <div style={{ marginTop: 20, color: "#6b7280" }}>
        Select a date to add notes
      </div>
    );
  }

  const handleSave = () => {
    addNote(selectedDate, text);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        marginTop: 20,
        padding: 16,
        background: "white",
        borderRadius: 14,
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ marginBottom: 10 }}>
        Notes for {selectedDate.toDateString()}
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          minHeight: 100,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ddd",
          outline: "none",
        }}
      />

      <motion.button
        onClick={handleSave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          marginTop: 12,
          padding: "10px 16px",
          background: saved ? "#16a34a" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
        }}
      >
        {saved ? "Saved ✓" : "Save Note"}
      </motion.button>
    </motion.div>
  );
}