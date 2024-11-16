import React from 'react';

const DonationReports = ({ donations }) => {
  const totalDonations = donations.reduce((total, donation) => total + donation.amount, 0);
  const averageDonation = donations.length ? (totalDonations / donations.length).toFixed(2) : 0;

  return (
    <div>
      <h2>Donation Report</h2>
      <p>Total Donations: ${totalDonations.toFixed(2)}</p>
      <p>Average Donation: ${averageDonation}</p>
    </div>
  );
};

export default DonationReports;
