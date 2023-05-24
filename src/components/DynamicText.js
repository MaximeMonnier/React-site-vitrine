import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["simple", "clear", "smart", "strong"];
    let worldIndex = 0;
    let letterIndex = 0;

    const creatLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[worldIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (worldIndex >= array.length) {
          worldIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[worldIndex].length) {
          creatLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          worldIndex++;
          setTimeout(loop, 2000);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <div>
      <span className="dynamic-text">
        <span>simply</span>
        <span id="text-target"></span>
      </span>
    </div>
  );
};

export default DynamicText;
