import React from "react";

function PartList({
  title, // Tiêu đề hiển thị cho danh sách
  partKey, // Tên thư mục ảnh (body, eyes, hair,...)
  total, // Tổng số lượng ảnh
  value, // Index ảnh đang chọn
  onChange, // Callback
}) {
  // Tạo mảng các số thứ tự ảnh thật, từ 1 tới total
  // Ví dụ total = 6 => items = [1, 2, 3, 4, 5, 6]
  const items = Array.from({ length: total }, (_, i) => i + 1);

  const folder =
    partKey === "clothing1"
      ? "clothes/layer_1"
      : partKey === "clothing2"
      ? "clothes/layer_2"
      : partKey === "clothing3"
      ? "clothes/layer_3"
      : partKey === "glasses"
      ? "accessories/glasses"
      : partKey === "hats"
      ? "accessories/hats"
      : partKey;

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
