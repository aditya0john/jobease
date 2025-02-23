"use client";
import Hero from "@/components/Hero";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] select-none">
      <Hero />
      <Recommendations/>
    </main>
  );
}
