import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../../client";

function CertificateCard({ certificate }) {
	const { image, url, issuedDate, name, source, details } = certificate;
	return (
		<div className="relative group overflow-hidden border border-[#1d293a] rounded-lg bg-[#1b203e]">
			<img src={urlFor(certificate.image.asset._ref)} alt="Certificate" className="w-full h-auto max-h-56 object-cover transition-transform duration-300 transform group-hover:scale-110" />
			<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 p-4">
				<h3 className="text-white font-semibold text-lg mb-2">{name}</h3>
				<p className="text-gray-300 text-sm mb-2">Issued by: {source}</p>
				<p className="text-gray-400 text-xs mb-4">{details}</p>
				<Link to={url} target="_blank" className="bg-violet-500 text-white px-4 py-2 rounded-full">
					Verify Certificate
				</Link>
			</div>
			{/* Bottom Text Section */}
			<div className="p-3 text-center">
				<p className="text-sm text-[#16f2b3] group-hover:hidden">{issuedDate}</p>
				<p className="text-lg font-semibold text-[#16f2b3] hidden group-hover:block transition duration-300">{name}</p>
			</div>
		</div>
	);
}

export default CertificateCard;
