import { render, screen } from '@testing-library/react';
import { Feed, GET_ORGANISATIONS } from '../Feed';
import { MockedProvider } from '@apollo/client/testing'
import { GraphQLError } from 'graphql';

const mockOrganisaitons = [{
    request: {
        query: GET_ORGANISATIONS
    },
    result: {
        data: {
        organisations: [
            { id: "1", name: "org 1" },
            { id: "2", name: "org 2" },
            { id: "3", name: "org 3" }
        ]
        }
    }
}];

const mockOrganisationsNetworkError = [{
    request: {
        query: GET_ORGANISATIONS
    },
    error: new Error("A network error occurred")
}];

const mockOrganisationsGQLError = [{
    request: {
        query: GET_ORGANISATIONS
    },
    result: {
        errors: [new GraphQLError("Server error!")],
    }
}];

it("renders without error", async () => {
    render(
        <MockedProvider mocks={mockOrganisaitons} addTypename={false}>
            <Feed />
        </MockedProvider>
    );
    expect(await screen.findByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("org 1")).toBeInTheDocument();
});

it("should show error UI on network error", async () => {
    render(
        <MockedProvider mocks={mockOrganisationsNetworkError} addTypename={false}>
            <Feed />
        </MockedProvider>
    );

    expect(await screen.findByText("A network error occurred")).toBeInTheDocument();
});

it("should show error UI on graphQL server error", async () => {
    render(
        <MockedProvider mocks={mockOrganisationsGQLError} addTypename={false}>
            <Feed />
        </MockedProvider>
    );
    
    expect(await screen.findByText("Server error!")).toBeInTheDocument();
});
