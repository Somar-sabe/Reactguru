import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assests/expenseListing'

const ExpenseListing = ({ userId }) => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    fetchExpenses();
  }, [selectedMonth, selectedYear]);

  const fetchExpenses = async () => {
    try {
      if (selectedMonth && selectedYear) {
        const response = await axios.get(`http://localhost:5000/expenses/monthly/${userId}?year=${selectedYear}&month=${selectedMonth}`);
        setExpenses(response.data.expenses);
        setFilteredExpenses(response.data.expenses);
      } else {
        const response = await axios.get(`http://localhost:5000/expenses`, {
          params: { userId },
        });
        setExpenses(response.data.expenses);
        setFilteredExpenses(response.data.expenses);
      }
    } catch (error) {
      console.error('Fetch expenses error:', error);
    }
  };

  const handleFilter = (searchTerm) => {
    const filtered = expenses.filter(
      (expense) =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExpenses(filtered);
  };

  const handlePDFDownload = async () => {
    try {
      // Implement your logic for PDF download using Axios or other methods
    } catch (error) {
      console.error('PDF download error:', error);
    }
  };

  return (
    <div>
       <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
        <option value="">Select Month</option>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Select Year</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        {/* Add more years as needed */}
      </select>
      <button onClick={handlePDFDownload}>Download PDF</button>
      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            <p>Description: {expense.description}</p>
            <p>Amount: {expense.amount}</p>
            <p>Category: {expense.category}</p>
            <p>Date: {expense.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseListing;
