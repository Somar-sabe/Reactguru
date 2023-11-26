import React, { useState } from 'react';
import axios from 'axios';

const ExpenseManagement = () => {
  const [expenseData, setExpenseData] = useState({
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleInputChange = (field, value) => {
    setExpenseData({ ...expenseData, [field]: value });
  };

  
  const handleAddExpense = async () => {
    try {
      if (
        expenseData.description === '' ||
        expenseData.amount === '' ||
        expenseData.category === '' ||
        expenseData.date === ''
      ) {
        alert('Error: Please fill in all fields');
        return;
      }

      const response = await axios.post('https://your-backend.com/expenses', expenseData);

      console.log('Added Expense:', response.data);
      
      alert('Success: Expense added successfully!');
      setExpenseData({
        description: '',
        amount: '',
        category: '',
        date: '',
      });
    } catch (error) {
      console.error('Add expense error:', error);
      alert('Error: Failed to add expense. Please try again.');
    }
  };

  const handleEditExpense = async () => {
    try {
      const response = await axios.put('https://your-backend.com/expenses/:id', expenseData);

      console.log('Updated Expense:', response.data);
      alert('Success: Expense updated successfully!');
    } catch (error) {
      console.error('Edit expense error:', error);
      alert('Error: Failed to edit expense. Please try again.');
    }
  };

  const handleDeleteExpense = async () => {
    try {
      const response = await axios.delete('https://your-backend.com/expenses/:id', {
        data: expenseData,
      });

      console.log('Deleted Expense:', response.data);
      alert('Success: Expense deleted successfully!');
    } catch (error) {
      console.error('Delete expense error:', error);
      alert('Error: Failed to delete expense. Please try again.');
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Description"
        value={expenseData.description}
        onChange={(e) => handleInputChange('description', e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={expenseData.amount}
        onChange={(e) => handleInputChange('amount', e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={expenseData.category}
        onChange={(e) => handleInputChange('category', e.target.value)}
      />
      <input
        type="text"
        placeholder="Date"
        value={expenseData.date}
        onChange={(e) => handleInputChange('date', e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
      <button onClick={handleEditExpense}>Edit Expense</button>
      <button onClick={handleDeleteExpense}>Delete Expense</button>
    </div>
  );
};

export default ExpenseManagement;
