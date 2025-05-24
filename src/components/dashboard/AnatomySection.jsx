import { useRef, useState } from "react";
import humanBody from "../../../src/assets/Body.png";

export default function AnatomySection() {
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    const bgX = (x / imgWidth) * 100;
    const bgY = (y / imgHeight) * 100;

    setLensPos({
      left: x - 50,
      top: y - 50,
      backgroundPosition: `${bgX}% ${bgY}%`,
    });
    setShowLens(true);
  };

  const handleMouseLeave = () => {
    setShowLens(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center h-fit">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 w-full text-left">
        Anatomy Overview
      </h2>

      <div
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* 👇 Apply blur conditionally to the image */}
        <img
          ref={imgRef}
          src={humanBody}
          alt="Human Body"
          className={`w-72 md:w-96 object-contain transition duration-200 ease-in-out`}
        />
        {showLens && (
          <div
            className="absolute w-24 h-24 rounded-full border-2 border-blue-500 shadow-lg pointer-events-none z-10"
            style={{
              left: lensPos.left,
              top: lensPos.top,
              backgroundImage: `url(${humanBody})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imgRef.current.offsetWidth * 2}px ${
                imgRef.current.offsetHeight * 2
              }px`,
              backgroundPosition: lensPos.backgroundPosition,
            }}
          />
        )}
      </div>
    </div>
  );
}
