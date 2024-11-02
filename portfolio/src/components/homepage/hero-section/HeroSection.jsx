import { personalData } from "../../../../utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import hero from "../../../assets/hero.svg";

function HeroSection() {
	return (
		<section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
			<img src={hero} alt="Hero" width={1572} height={795} className="absolute -top-[98px] -z-10" />
			<div className="flex items-center justify-center grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
				<div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
					<h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
						Hello, <br />
						This is <span className=" text-pink-500">{personalData.name}</span>
						{` , I'm a Passionate `}
						<span className=" text-[#16f2b3]">{personalData.designation}</span>.
					</h1>

					<div className="my-12 flex items-center gap-5">
						<Link to={personalData.github} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
							<BsGithub size={30} />
						</Link>
						<Link to={personalData.linkedIn} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
							<BsLinkedin size={30} />
						</Link>

						<Link to={personalData.leetcode} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
							<SiLeetcode size={30} />
						</Link>
						<Link to={personalData.stackOverflow} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
							<FaStackOverflow size={30} />
						</Link>
					</div>

					<div className="flex items-center gap-3">
						<Link to="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
							<button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
								<span>Contact me</span>
								<RiContactsFill size={16} />
							</button>
						</Link>

						<Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" to={personalData.resume}>
							<span>Get Resume</span>
							<MdDownload size={16} />
						</Link>
					</div>
				</div>
				<div className="order-1 lg:order-2 relative h-auto w-auto from-[#0d1224] border-[#1b2c68a0] rounded-full border bg-gradient-to-r to-[#0a0d37] overflow-hidden">
					{/* Pseudo-element for gradient effect */}
					<div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600 opacity-70" style={{ zIndex: -1 }}></div>

					<div className="overflow-hidden px-2 h-full lg:px-4 py-2 lg:py-4 flex items-center justify-center relative">
						<img src="../../../../src/assets/images/rem2.png" className="max-w-full max-h-full rounded-full object-cover" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
