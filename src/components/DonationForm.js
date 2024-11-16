import React, { useState } from 'react';

const DonationForm = ({ onAddDonation }) => {
  const [donor, setDonor] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donor && amount) {
      onAddDonation({ donor, amount: parseFloat(amount) });
      setDonor('');
      setAmount('');
      alert(`Thank you, ${donor}, for your generous donation!`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Donation</h2>
      <input
        type="text"
        placeholder="Donor Name"
        value={donor}
        onChange={(e) => setDonor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Donation Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
