import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png"

export default function NavBar() {
	return (
		<nav className="bg-transparent">
			<div className="flex items-center justify-between py-5">
				<div className="flex flex-shrink-0 items-center">
					<Link to="/" className=" text-[#16f2b3] text-3xl font-bold">
						{/* <img width="20%" height="90px" src={logo} alt="logo" /> */}
                        Jadav Keshav
					</Link>
				</div>

				<ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
					<li>
						<Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#about">
							<div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
						</Link>
					</li>
					<li>
						<Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#experience">
							<div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
						</Link>
					</li>
					<li>
						<Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#skills">
							<div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
						</Link>
					</li>
					<li>
						<Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#education">
							<div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
						</Link>
					</li>
					
					<li>
						<Link className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#projects">
							<div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
