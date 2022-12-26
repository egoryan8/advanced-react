import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('SideBar to be in the DOM', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
