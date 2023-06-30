import { BrowserRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { AppProvider } from 'context/appContext';
import AddJob from 'pages/dashboard/AddJob';

describe('<AddJob />', () => {
  test('should insert values into the fields', () => {
    // Arrange
    render(
      <BrowserRouter>
        <AppProvider>
          <AddJob />
        </AppProvider>
      </BrowserRouter>
    );

    const positionInput = screen.getByLabelText('Position');
    const companyInput = screen.getByLabelText('Company');
    const jobLocationInput = screen.getByLabelText('Job Location');
    const statusInput = screen.getByDisplayValue('pending');
    const jobTypeInput = screen.getByDisplayValue('full-time');

    // Act
    fireEvent.change(positionInput, { target: { value: 'Software Engineer' } });
    fireEvent.change(companyInput, { target: { value: 'Google' } });
    fireEvent.change(jobLocationInput, { target: { value: 'Dublin' } });
    fireEvent.change(statusInput, { target: { value: 'interview' } });
    fireEvent.change(jobTypeInput, { target: { value: 'remote' } });

    // Assert
    expect(positionInput).toHaveValue('Software Engineer');
    expect(companyInput).toHaveValue('Google');
    expect(jobLocationInput).toHaveValue('Dublin');
    expect(statusInput).toHaveValue('interview');
    expect(jobTypeInput).not.toHaveValue('hybrid');
  });
});
