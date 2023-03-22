import { render, screen } from '@testing-library/react';
import { AppProvider } from 'context/appContext';
import Notification from 'components/Notification';

test('if alert is active', async () => {
  // Arrange
  render(
    <AppProvider>
      <Notification />
    </AppProvider>
  );

  // Act
  const alert = screen.getByRole('alert', { hidden: false });

  // Assert
  expect(alert).toBeVisible();
});
