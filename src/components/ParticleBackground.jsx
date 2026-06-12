import Particles from "@tsparticles/react";
import { useTheme } from "../context/ThemeContext";

export default function ParticleBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true, width: 900, height: 900 },
          },
          color: {
            value: isDark
              ? ["#6366f1", "#8b5cf6", "#06b6d4"]
              : ["#818cf8", "#a78bfa", "#22d3ee"],
          },
          shape: { type: "circle" },
          opacity: { value: { min: 0.2, max: 0.6 } },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: isDark ? "#6366f1" : "#818cf8",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.4 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
