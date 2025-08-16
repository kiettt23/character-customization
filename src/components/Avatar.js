import React from "react";

function Avatar({
  body,
  eyes,
  hair,
  mouths,
  eyebrows,
  clothing1,
  clothing2,
  clothing3,
  glasses,
  hats,
}) {
  return (
    <div className="canvas bg-checker">
      <img
        style={{ zIndex: 1 }}
        src={`/images/body/${body}.png`}
        alt={`body-${body}`}
      />
      <img
        style={{ zIndex: 2 }}
        src={`/images/clothes/layer_1/${clothing1}.png`}
        alt={`clothing1-${clothing1}`}
      />
      <img
        style={{ zIndex: 3 }}
        src={`/images/clothes/layer_2/${clothing2}.png`}
        alt={`clothing2-${clothing2}`}
      />
      <img
        style={{ zIndex: 4 }}
        src={`/images/clothes/layer_3/${clothing3}.png`}
        alt={`clothing3-${clothing3}`}
      />
      <img
        style={{ zIndex: 5 }}
        src={`/images/mouths/${mouths}.png`}
        alt={`mouths-${mouths}`}
      />
      <img style={{ zIndex: 5.5 }} src={`/images/noses/1.png`} alt="nose" />
      <img
        style={{ zIndex: 6 }}
        src={`/images/eyes/${eyes}.png`}
        alt={`eyes-${eyes}`}
      />
      <img
        style={{ zIndex: 7 }}
        src={`/images/eyebrows/${eyebrows}.png`}
        alt={`eyebrows-${eyebrows}`}
      />
      <img
        style={{ zIndex: 8 }}
        src={`/images/hair/${hair}.png`}
        alt={`hair-${hair}`}
      />
      <img
        style={{ zIndex: 9 }}
        src={`/images/accessories/glasses/${glasses}.png`}
        alt={`glasses-${glasses}`}
      />
      <img
        style={{ zIndex: 10 }}
        src={`/images/accessories/hats/${hats}.png`}
        alt={`hats-${hats}`}
      />
    </div>
  );
}

export default Avatar;
