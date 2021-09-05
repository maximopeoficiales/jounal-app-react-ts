import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JournalScreen from './JournalScreen';

describe('<JournalScreen />', () => {
  test('it should mount', () => {
    render(<JournalScreen />);
    
    const journalScreen = screen.getByTestId('JournalScreen');

    expect(journalScreen).toBeInTheDocument();
  });
});