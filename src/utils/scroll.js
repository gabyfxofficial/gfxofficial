// src/utils/scroll.js
export default function scrollToHash() {
  if (typeof window === "undefined") return;
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.scrollBy(0, -70);
    }
  }
}
