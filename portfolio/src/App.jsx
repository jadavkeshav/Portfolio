import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/helper/scroll-to-top";
import Footer from "./components/Footer";
import HeroSection from "./components/homepage/hero-section/HeroSection";
import AboutSection from "./components/homepage/about/AboutSection";
import Experience from "./components/homepage/experience/Experience";
import Skills from "./components/homepage/skills/Skills";
import Projects from "./components/homepage/projects/Projects";
import Education from "./components/homepage/education/Education";
import Certificates from "./components/homepage/Certificates/Certificates";
import ContactSection from "./components/homepage/contact/ContactSection";

export default function App() {
	return (
		<>
			<ToastContainer />
			<main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
				<NavBar />
				<HeroSection />
				<AboutSection />
				<Experience/>
				<Skills />
				<Projects/>
				<Education/>
				<Certificates/>
				<ContactSection/>
				<ScrollToTop />
			</main>
			<Footer />
		</>
	);
}
