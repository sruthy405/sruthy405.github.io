"use client";

import { useState, useEffect } from "react";

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Already shown? Don't show again.
    if (sessionStorage.getItem("exitShown") === "true") return;

    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Only trigger when user moves upward
      const movingUpward = e.clientY < lastY;

      // Trigger ONLY when cursor reaches top 5–10px of screen
      const nearTopBar = e.clientY <= 10;

      if (movingUpward && nearTopBar) {
        setShow(true);
        sessionStorage.setItem("exitShown", "true");

        // Stop tracking after showing once
        document.removeEventListener("mousemove", handleMouseMove);
      }

      lastY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!show) return null;

  return (
    <div className="exit-overlay">
      <div className="exit-modal">
        <div className="exit-header">
          <img src="/goodbye.gif" className="exit-gif" alt="Goodbye" />
          <button className="exit-x" onClick={() => setShow(false)}>×</button>
        </div>

        <div className="exit-content">
          <h2>Thank you!</h2>
          <p>Thank you for visiting my portfolio. Have a nice day! 😊</p>

          <button
            className="exit-button"
            onClick={() => {
              setShow(false);
              window.location.href = "/";
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
