import React from "react";

const TermsOfService = () => (
  <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
    <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">
      <span className="text-muted-foreground font-normal">Terms of </span>
      <span className="font-bold text-black dark:text-white">Service</span>
    </h2>
    <p className="mb-4 sm:mb-6 text-base sm:text-lg text-muted-foreground">
      By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
    </p>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">Use of Service</h3>
      <ul className="list-disc list-inside space-y-1 pl-4 text-sm sm:text-base">
        <li>You must follow all policies made available to you within the service.</li>
        <li>Do not misuse our services.</li>
      </ul>
    </div>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">Termination</h3>
      <p className="text-sm sm:text-base">We may suspend or terminate your access to the service at any time, without prior notice or liability.</p>
    </div>
    <div className="bg-muted rounded-lg p-3 sm:p-4 mt-6 sm:mt-8">
      <h3 className="text-base sm:text-lg font-semibold mb-1 text-primary">Contact Us</h3>
      <p className="text-sm sm:text-base">If you have any questions about these Terms, please contact us.</p>
    </div>
  </div>
);

export default TermsOfService;
