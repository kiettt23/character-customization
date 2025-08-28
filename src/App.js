import React, { useState, useCallback } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const parts = {
  body: {
    title: "Body",
    total: 17,
  },
  eyes: {
    title: "Eyes",
    total: 17,
  },
  hair: {
    title: "Hair",
    total: 73,
  },
  mouths: {
    title: "Mouths",
    total: 24,
  },
  eyebrows: {
    title: "Eyebrows",
    total: 15,
  },
  clothing1: {
    title: "Clothing 1",
    total: 5,
  },
  clothing2: {
    title: "Clothing 2",
    total: 5,
  },
  clothing3: {
    title: "Clothing 3",
    total: 9,
  },
  glasses: {
    title: "Glasses",
    total: 17,
  },
  hats: {
    title: "Hats",
    total: 28,
  },
};

function App() {
  const [avatar, setAvatar] = useState({
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
    setAvatar((s) => ({ ...s, [key]: value }));
  };

  // Mục đích: Gom cấu hình của các phần (body/eyes/hair/...) vào một mảng, để có thể .map() và render nhiều PartList mà không phải lặp code
  const randomize = useCallback(() => {
    const next = {};
    Object.entries(parts).forEach(([key, value]) => {
      next[key] = Math.floor(Math.random() * value.total) + 1;
    });

    console.log("Random Obj:", next);
    setAvatar(next);
  }, [setAvatar]);

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
            <Avatar {...avatar} />
          </figure>
          <button className="btn-random" onClick={randomize}>
            🎲 RANDOMIZE
          </button>
        </section>

        {/* LISTS */}
        <section id="parts">
          <h2 id="parts-heading">Customize Parts</h2>
          {Object.entries(parts).map(([key, value]) => (
            <PartList
              title={value.title}
              partKey={key}
              total={value.total}
              value={avatar[key]}
              onChange={onChange}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
