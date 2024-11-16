import React from 'react';

const DonationList = ({ donations }) => {
  return (
    <div>
      <h2>Donation List</h2>
      {donations.length === 0 ? (
        <p>No donations yet. Be the first to donate!</p>
      ) : (
        <ul>
          {donations.map((donation, index) => (
            <li key={index}>
              <strong>{donation.donor}</strong> donated ${donation.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonationList;
