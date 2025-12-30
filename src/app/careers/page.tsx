import Navigation from "@/components/Navigation";
import BackgroundEffects from "@/components/BackgroundEffects";
import Footer from "@/components/Footer";
import CareersSection from "@/components/CareersSection";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
            <BackgroundEffects />
            <Navigation />
            <CareersSection />
            <Footer />
        </main>
    );
}
