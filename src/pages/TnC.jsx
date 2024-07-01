import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto bg-white p-8 shadow-md">
        <h1 className="text-center text-3xl font-bold text-gray-800">Terms and Conditions</h1>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">1. Scope of Services</h2>
          <p className="text-gray-600 mt-2">The software agency ('Agency') provides web development, app development, social media management, and video editing services ('Services').</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">2. Client Meetings</h2>
          <p className="text-gray-600 mt-2">Clients are required to attend scheduled meetings to discuss project details, progress, and any necessary approvals. All meetings will be recorded for documentation and reference purposes.</p>
        </section>

        {/* Repeat the above pattern for each section */}

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">18. Project Confirmation Deposit</h2>
          <p className="text-gray-600 mt-2">A non-refundable deposit of 10% of the total project amount is required from the client to confirm and initiate the project.</p>
        </section>

        <div className="text-center mt-8">
          <p className="font-bold">By engaging the Agency's services, the client acknowledges and agrees to these terms and conditions.</p>
        </div>

        <p className="text-center mt-4">Thank You</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
