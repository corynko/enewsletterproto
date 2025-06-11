function Sidebar({ newsletters, selected, onSelect }) {
  return (
    <aside
      style={{
        width: "200px",
        background: "#E1631D",
        padding: "1rem",
        border: "2px solid #f1faf2",
      }}
    >
      <h2>Newsletters</h2>
      {newsletters.map((qtr) => (
        <div
          key={qtr}
          style={{
            padding: ".5rem",
            cursor: "pointer",
            background: qtr === selected ? "#ccc" : "transparent",
          }}
          onClick={() => onSelect(qtr)}
        >
          {qtr}
        </div>
      ))}
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() =>
            window.open("https://collegefund.org/donate", "_blank")
          }
          style={{
            padding: "0.5rem",
            background: "#BC1E30",
            color: "white",

            border: "none",
          }}
        >
          Give Now
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
