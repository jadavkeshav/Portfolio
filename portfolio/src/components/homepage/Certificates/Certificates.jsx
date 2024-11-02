import React from 'react';
import CertificateCard from './CertificateCard';
import { certificates } from '../../../../utils/data/certificates';
function Certificates() {
  return (
    <div id='certificates' className="my-12 lg:my-24">
      <h2 className="text-2xl font-bold text-center text-white mb-6">My Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
