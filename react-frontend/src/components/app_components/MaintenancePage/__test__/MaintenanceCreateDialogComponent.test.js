import React from "react";
import { render, screen } from "@testing-library/react";

import MaintenanceCreateDialogComponent from "../MaintenanceCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders maintenance create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MaintenanceCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("maintenance-create-dialog-component")).toBeInTheDocument();
});
