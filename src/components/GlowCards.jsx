import { useRef } from "react";

const GlowCards = ({ card, children, index }) => {
  const cardRef = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //* calculating the angle of mouse from the center

    let angle = Math.atan2(mouseX, mouseY) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };
  return (
    <div
      className="card timeline-card card-border rounded-xl p-10 "
      ref={(el) => (cardRef.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
    >
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt="star" key={i} />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};

export default GlowCards;
