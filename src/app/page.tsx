import {Banner} from "@/Components/Banner/Banner";
import {GridChildren} from "@/Components/Grid/GridChilren";
import {AboutMe} from "@/Components/AboutMe/AboutMe";
import {Instagram} from "@/Components/Instagram/instagram";
import DeveloperReference from "@/Components/Footer/Footer";

export default function Home() {
    return (
        <main className="text-white">
            <Banner/>
            <AboutMe/>
            <GridChildren/>
            <Instagram/>
            <DeveloperReference/>
        </main>
    );
}
