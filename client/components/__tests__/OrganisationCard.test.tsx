import { render, screen } from '@testing-library/react'
import { OrganisationCard } from '../OrganisationCard';

describe('render', () => {
    it('should have organisation name', () => {
        const mockOrganisation = {
            name: 'mockorg',
            id: '1'
        }

        render(<OrganisationCard organisation={mockOrganisation}/>)

        const orgName = screen.getByText('mockorg')

        expect(orgName).toBeInTheDocument()
    })
})