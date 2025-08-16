import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
import { total } from "./total";

function App() {
  const [state, setState] = useState({
    body: 1,
    eyes: 1,
    hair: 1,
    mouths: 1,
    eyebrows: 1,
    clothing1: 1,
    clothing2: 1,
    clothing3: 1,
    glasses: 1,
    hats: 1,
  });

  // Mục đích: Cập nhật đúng một thuộc tính trong state object mà không làm mất các thuộc tính khác
  // - s là state cũ (vd { body: 1, eyes: 1, hair: 1 })
  // - { ...s, [key]: value } → sao chép toàn bộ s, rồi thay giá trị ở key bằng value
  const onChange = (key, value) => {
    setState((s) => ({ ...s, [key]: value }));
  };

  // Mục đích: Gom cấu hình của các phần (body/eyes/hair/...) vào một mảng, để có thể .map() và render nhiều PartList mà không phải lặp code
  const parts = [
    { title: "Body", partKey: "body", total: total.body },
    { title: "Mouths", partKey: "mouths", total: total.mouths },
    { title: "Eyebrows", partKey: "eyebrows", total: total.eyebrows },
    { title: "Eyes", partKey: "eyes", total: total.eyes },
    { title: "Hair", partKey: "hair", total: total.hair },
    {
      title: "Clothing 1",
      partKey: "clothing1",
      total: total.clothing1,
    },
    {
      title: "Clothing 2",
      partKey: "clothing2",
      total: total.clothing2,
    },
    {
      title: "Clothing 3",
      partKey: "clothing3",
      total: total.clothing3,
    },
    {
      title: "Glasses",
      partKey: "glasses",
      total: total.glasses,
    },
    { title: "Hats", partKey: "hats", total: total.hats },
  ];

  // Random all phần tử obj total
  // - Duyệt qua toàn bộ keys của obj total, mỗi key 1 số ngẫu nhiên
  // - Gộp lại thành 1 obj để setStatetal
  const keys = Object.keys(total); // ["body","eyes","hair",...]
  const randomize = () => {
    const next = {};
    keys.forEach((key) => {
      const max = total[key];
      const randomValue = Math.floor(Math.random() * max) + 1;
      next[key] = randomValue;
    });
    console.log("Random Obj:", next);
    setState(next);
  };

  return (
    <main className="app-container">
      <header className="site-header">
        <h1>Character Customization</h1>
        <p>
          Select parts to customize your character. Click on the images to
          change them.
        </p>
      </header>

      <section className="main-display">
        {/* PREVIEW */}
        <section id="avatar-preview">
          <h2 id="preview-heading">Avatar Preview</h2>
          <figure className="avatar">
            <Avatar
              body={state.body}
              eyes={state.eyes}
              hair={state.hair}
              mouths={state.mouths}
              eyebrows={state.eyebrows}
              clothing1={state.clothing1}
              clothing2={state.clothing2}
              clothing3={state.clothing3}
              glasses={state.glasses}
              hats={state.hats}
            />
          </figure>
          <button className="btn-random" onClick={randomize}>
            🎲 RANDOMIZE
          </button>
        </section>

        {/* LISTS */}
        <section id="parts">
          <h2 id="parts-heading">Customize Parts</h2>
          {parts.map((p) => (
            <PartList
              key={p.partKey}
              title={p.title}
              partKey={p.partKey}
              total={p.total}
              value={state[p.partKey]}
              onChange={onChange}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
