import React, { useMemo } from "react";

function PartList({ title, partKey, total, value, onChange }) {
  const items = Array.from({ length: total }, (_, i) => i + 1);

  const folder = useMemo(() => {
    switch (partKey) {
      case "clothing1":
        return "clothes/layer_1";
      case "clothing2":
        return "clothes/layer_2";
      case "clothing3":
        return "clothes/layer_3";
      case "glasses":
        return "accessories/glasses";
      case "hats":
        return "accessories/hats";
      default:
        return partKey;
    }
  }, [partKey]);

  return (
    <div className="list-option">
      <h2>{title}</h2>
      <div className="list-grid">
        {items.map((n) => (
          <button
            key={n}
            className={`tile ${value === n ? "selected" : ""}`}
            onClick={() => onChange(partKey, n)}
          >
            <img src={`/images/${folder}/${n}.png`} alt={`${folder}-${n}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default PartList;
