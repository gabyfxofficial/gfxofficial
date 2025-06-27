import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMail } from "react-icons/fi";

export default function FloatingContact() {
  return (
    <ScrollLink
      to="contact"
      smooth
      offset={-70}
      duration={500}
      className="fixed bottom-6 right-6 z-50 bg-[var(--color-primary)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--color-primary-light)] transition-colors animate-pulseSlow"
    >
      <FiMail size={24} />
    </ScrollLink>
  );
}
