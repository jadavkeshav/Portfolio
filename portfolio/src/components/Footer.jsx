import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
			<div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
				<div className="flex justify-center -z-40">
					<div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
				</div>
				<div className="flex items-center justify-center">
					<p className="text-sm text-center">
						© Copyright{" "}
						<Link target="_blank" to="https://www.linkedin.com/in/jadav-keshav/" className="text-[#16f2b3]">
							Jadav Keshav
						</Link>{" "}
						2024.
					</p>
				</div>
			</div>
		</div>
	);
}
