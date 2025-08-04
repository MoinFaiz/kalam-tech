import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
    <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">
      <span className="text-muted-foreground font-normal">Privacy </span>
      <span className="font-bold text-black dark:text-white">Policy</span>
    </h2>
    <p className="mb-4 sm:mb-6 text-base sm:text-lg text-muted-foreground">
      Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
    </p>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">Information We Collect</h3>
      <ul className="list-disc list-inside space-y-1 pl-4 text-sm sm:text-base">
        <li>Personal identification information <span className="text-muted-foreground">(Name, email address, etc.)</span></li>
        <li>Usage data and cookies</li>
      </ul>
    </div>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">How We Use Information</h3>
      <ul className="list-disc list-inside space-y-1 pl-4 text-sm sm:text-base">
        <li>To provide and maintain our service</li>
        <li>To improve our website and services</li>
        <li>To communicate with you</li>
      </ul>
    </div>
    <div className="bg-muted rounded-lg p-3 sm:p-4 mt-6 sm:mt-8">
      <h3 className="text-base sm:text-lg font-semibold mb-1 text-primary">Contact Us</h3>
      <p className="text-sm sm:text-base">If you have any questions about this Privacy Policy, please contact us.</p>
    </div>
  </div>
);

export default PrivacyPolicy;
