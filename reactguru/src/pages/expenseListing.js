import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        const response = await axios.get(`https://your-backend.com/expenses/monthly/${userId}?year=${selectedYear}&month=${selectedMonth}`);
        setExpenses(response.data.expenses);
        setFilteredExpenses(response.data.expenses);
      } else {
        const response = await axios.get(`https://your-backend.com/expenses`, {
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
        {/* Options for selecting month */}
      </select>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        {/* Options for selecting year */}
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
