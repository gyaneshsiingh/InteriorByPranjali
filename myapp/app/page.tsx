import Image from "next/image";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Design from "./components/Design/design";
import Stats from "./components/Stats/stats";
import ContactCTA from "./components/Contact/contact";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <Design />
            <ContactCTA />
            <Footer />

        </>
    );
}
