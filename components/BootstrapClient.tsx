"use client";

/**
 * BootstrapClient
 * Loads Bootstrap's JavaScript bundle on the client only (prevents SSR issues).
 */
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only in the browser
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
