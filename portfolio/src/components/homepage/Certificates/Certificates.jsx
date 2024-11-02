import React from "react";
import GlowCard from "../../helper/glow-card";
import section from "../../../assets/section.svg";
import blur from "../../../assets/blur-23.svg";
import { urlFor } from "../../../client";
import { formatDate } from "../../../../utils/formatDate";

function Certificates({ data }) {
	return (
		<div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
			<img
				src={section}
				alt="Hero"
				width={1572}
				height={795}
				className="absolute top-0 -z-10"
			/>
			<div className="flex justify-center -translate-y-[1px]">
				<div className="w-3/4">
					<div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
				</div>
			</div>

			<div className="flex justify-center my-5 lg:py-8">
				<div className="flex items-center">
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
					<span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
						My Certificates
					</span>
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
				</div>
			</div>

			<div className="py-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
					{data?.map((certificate, index) => (
						<GlowCard key={index} identifier={`certificate-${index}`}>
							<div className="p-3 relative text-white">
								<img
									src={blur}
									alt="Blur Effect"
									width={1080}
									height={200}
									className="absolute bottom-0 opacity-80"
								/>
								<div className="flex justify-center mb-4">
									<img
										src={urlFor(certificate.image.asset._ref)}
										alt={`${certificate.title} Certificate`}
										className="rounded-lg shadow-lg w-full h-50 object-cover"
									/>
								</div>
								<div className="flex justify-center">
									<p className="text-xs sm:text-sm text-[#16f2b3]">
										{formatDate(certificate.issuedDate)}
									</p>
								</div>
								<div className="flex flex-col items-center gap-y-2 px-3 py-5">
									<div>
										<p className="text-base sm:text-xl mb-2 font-medium uppercase text-center">
											{certificate.title}
										</p>
									</div>
									<a
										href={certificate.url}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
									>
										Verify Certificate
									</a>
								</div>
							</div>
						</GlowCard>
					))}
				</div>
			</div>
		</div>
	);
}

export default Certificates;
