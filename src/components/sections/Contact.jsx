// src/components/sections/Contact.jsx
import React, { useEffect, useRef } from "react";
import Card from "../ui/Card";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const ref = useRef();

  useEffect(() => {
    const section = ref.current;
    const obs = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        section.classList.toggle("visible", isIntersecting);
      },
      { threshold: 0.3 }
    );
    section.classList.add("animate-inview");
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 lg:px-0 text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Let’s Work Together
        </h2>
        <p className="text-[var(--color-text)]/70">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </div>
      <div className="container mx-auto grid gap-8 md:grid-cols-3 px-6 lg:px-0">
        <Card className="flex items-center space-x-4 p-6">
          <FiMail size={24} className="text-[var(--color-primary)]" />
          <div>
            <h4 className="font-semibold text-[var(--color-text)]">
              Email Address
            </h4>
            <p className="text-[var(--color-text)]/70">office@yourdomain.com</p>
          </div>
        </Card>
        <Card className="flex items-center space-x-4 p-6">
          <FiPhone size={24} className="text-[var(--color-primary)]" />
          <div>
            <h4 className="font-semibold text-[var(--color-text)]">
              Phone Number
            </h4>
            <p className="text-[var(--color-text)]/70">+40 712 345 678</p>
          </div>
        </Card>
        <Card className="flex items-center space-x-4 p-6">
          <FiMapPin size={24} className="text-[var(--color-primary)]" />
          <div>
            <h4 className="font-semibold text-[var(--color-text)]">Location</h4>
            <p className="text-[var(--color-text)]/70">Bucharest, Romania</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
