import React from "react";

const CookiePolicy = () => (
  <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
    <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4">
      <span className="text-muted-foreground font-normal">Cookie </span>
      <span className="font-bold text-black dark:text-white">Policy</span>
    </h2>
    <p className="mb-4 sm:mb-6 text-base sm:text-lg text-muted-foreground">
      This Cookie Policy explains how we use cookies and similar technologies on our website.
    </p>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">What Are Cookies?</h3>
      <p className="text-sm sm:text-base">Cookies are small text files stored on your device when you visit a website.</p>
    </div>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">How We Use Cookies</h3>
      <ul className="list-disc list-inside space-y-1 pl-4 text-sm sm:text-base">
        <li>To remember your preferences</li>
        <li>To analyze site traffic and usage</li>
      </ul>
    </div>
    <div className="mb-5 sm:mb-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-primary">Managing Cookies</h3>
      <p className="text-sm sm:text-base">You can control and manage cookies through your browser settings.</p>
    </div>
    <div className="bg-muted rounded-lg p-3 sm:p-4 mt-6 sm:mt-8">
      <h3 className="text-base sm:text-lg font-semibold mb-1 text-primary">Contact Us</h3>
      <p className="text-sm sm:text-base">If you have any questions about our Cookie Policy, please contact us.</p>
    </div>
  </div>
);

export default CookiePolicy;
