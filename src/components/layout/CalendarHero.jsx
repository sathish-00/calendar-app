export default function CalendarHero({ currentDate }) {
  const month = currentDate.getMonth();

  // ✅ EXACTLY 12 IMAGES (one per month)
  const images = [
    "https://images.unsplash.com/photo-1549887534-3ec93abae9c7?auto=format&fit=crop&w=1200&q=80", // Jan
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80", // Feb
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80", // Mar
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80", // Apr
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", // May
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", // Jun
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", // Jul
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80", // Aug
    "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1200&q=80", // Sep
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80", // Oct
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80", // Nov
    "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80", // Dec
  ];

  return (
    <div
      style={{
        position: "relative",
        height: 260,
        marginBottom: 20,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <img
        src={images[month]}
        onError={(e) => (e.target.src = images[0])} // 🔥 fallback if broken
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      />

      {/* Month text */}
      <div
        style={{
          position: "absolute",
          bottom: 15,
          left: 15,
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {currentDate.toLocaleString("default", { month: "long" })}
      </div>
    </div>
  );
}