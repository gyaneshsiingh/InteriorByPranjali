import Image from "next/image";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Design from "./components/Design/design";
import Stats from "./components/Stats/stats";
import ContactCTA from "./components/Contact/contact";
import Profile from "./components/Profile/profile";
import Included from "./components/Included/included";
import Collection from "./components/Collection/collection";
import Widget from './components/widget/widget'
import StickyNav from "./components/StickyNav/stickyNav";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Stats />
            <Design />
            <Included />
            <Collection />
            <Profile />
            <ContactCTA />
            <Footer />
            <Widget />


        </main>
    );
}
