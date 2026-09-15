/**
 * Security & Anti-Inspection utility
 * Disables right-click, DevTools shortcuts, and mutes console logs in production/client browser
 */
export const initSecurity = () => {
  // 1. Disable Right Click (Context Menu)
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // 2. Block Inspect & DevTools keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // F12
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I / Cmd+Option+I (Inspect)
    // Ctrl+Shift+J / Cmd+Option+J (Console)
    // Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")
    ) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U / Cmd+Option+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
      e.preventDefault();
      return false;
    }

    // Ctrl+S / Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
      e.preventDefault();
      return false;
    }
  });

  // 3. Disable / Silence Console methods in browser
  if (typeof window !== "undefined") {
    const noop = () => {};
    window.console.log = noop;
    window.console.warn = noop;
    window.console.info = noop;
    window.console.debug = noop;
    // Keep error or silence it as well
    window.console.error = noop;
  }
};
