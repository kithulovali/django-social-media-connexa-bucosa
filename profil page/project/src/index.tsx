import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProfilePage } from "./screens/ProfilePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProfilePage />
  </StrictMode>,
);
