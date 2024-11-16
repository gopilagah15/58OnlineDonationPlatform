import React, { useState, useEffect } from 'react';
import DonationForm from './components/DonationForm';
import DonationList from './components/DonationList';
import DonationReports from './components/DonationReports';

const App = () => {
  const [donations, setDonations] = useState([]);

  // Load donations from LocalStorage
  useEffect(() => {
    const savedDonations = JSON.parse(localStorage.getItem('donations')) || [];
    setDonations(savedDonations);
  }, []);

  // Save donations to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('donations', JSON.stringify(donations));
  }, [donations]);

  const addDonation = (donation) => {
    setDonations([...donations, donation]);
  };

  return (
    <div>
      <h1>Online Donation Platform</h1>
      <DonationForm onAddDonation={addDonation} />
      <DonationList donations={donations} />
      <DonationReports donations={donations} />
    </div>
  );
};

export default App;
