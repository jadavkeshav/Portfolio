import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";

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
import { useEffect, useState } from "react";
import { client } from "./client";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const target = document.getElementById(hash.replace("#", ""));
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);

	return null;
}

export default function App() {
	const [certificates, setCertificates] = useState([]);
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);
	const [projects, setProjects] = useState([]);
	const [educations, setEducations] = useState([]);
	const [socialLinks, setSocialLinks] = useState([]);

	useEffect(() => {
		const fetchDocuments = async () => {
			const query = "*[]"; // Fetch all documents
			try {
				const data = await client.fetch(query);

				// setCertificates(data.filter((doc) => doc._type === "certificate"));
				// setExperiences(data.filter((doc) => doc._type === "experience"));
				// setSkills(data.filter((doc) => doc._type === "skills"));
				// setProjects(data.filter((doc) => doc._type === "project"));
				// setEducations(data.filter((doc) => doc._type === "education"));
				const sortedCertificates = data.filter((doc) => doc._type === "certificate").sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
				setCertificates(sortedCertificates);

				const sortedExperiences = data.filter((doc) => doc._type === "experience").sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
				setExperiences(sortedExperiences);

				const sortedSkills = data.filter((doc) => doc._type === "skills").sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
				setSkills(sortedSkills);

				const sortedProjects = data.filter((doc) => doc._type === "project").sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
				setProjects(sortedProjects);

				const sortedEducations = data.filter((doc) => doc._type === "education").sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
				setEducations(sortedEducations);

				setSocialLinks(data.filter((doc) => doc._type === "SocialLinks"));
			} catch (error) {
				console.error("Error fetching documents:", error);
			}
		};

		fetchDocuments();
	}, []);

	return (
		<>
			<main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
				<ToastContainer />
				<NavBar />
				<HeroSection />
				<AboutSection />
				<Experience experiences={experiences} />
				<Skills skillsData={skills} />
				<Projects projectsData={projects} />
				<Education educations={educations} />
				<Certificates data={certificates} />
				<ContactSection />
				<ScrollToSection />
				<ScrollToTop />
				<Analytics />
			</main>
			<Footer />
		</>
	);
}
