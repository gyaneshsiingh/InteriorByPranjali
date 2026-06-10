import Image from "next/image";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Design from "./components/Design/design";
import Stats from "./components/Stats/stats";
import ContactCTA from "./components/Contact/contact";
import Profile from "./components/Profile/profile";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <Design />
            <Profile />
            <ContactCTA />
            <Footer />

        </>
    );
}
