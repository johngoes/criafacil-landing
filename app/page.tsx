import { AppPreview } from "@/components/app-preview";
import { Features } from "@/components/features";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative isolate flex-1 overflow-x-clip">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        />
        <Hero />
        <AppPreview />
        <HowItWorks />
        <Features />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
