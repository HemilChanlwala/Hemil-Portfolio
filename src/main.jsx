import { StrictMode, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App.jsx";
import "./index.css";

const initParticles = async (engine) => {
  await loadSlim(engine);
};

function Root() {
  const init = useCallback(initParticles, []);

  return (
    <StrictMode>
      <ThemeProvider>
        <ParticlesProvider init={init}>
          <App />
        </ParticlesProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
