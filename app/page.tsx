import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <div className="h-screen w-full" />
    </main>
  );
}