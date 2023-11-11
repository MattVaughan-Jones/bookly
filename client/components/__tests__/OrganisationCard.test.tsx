import { render, screen } from '@testing-library/react'
import { OrganisationCard } from '../OrganisationCard';

describe('render', () => {
    it('should have organisation text', () => {
        const mockOrganisation = {
            name: 'mockorg',
            id: '1'
        }

        render(<OrganisationCard organisation={mockOrganisation}/>) // ARANGE

        const orgName = screen.getByText('mockorg') // ACT

        expect(orgName).toBeInTheDocument(); // ASSERT
    })
})