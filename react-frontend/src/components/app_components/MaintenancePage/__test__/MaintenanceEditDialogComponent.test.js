import React from "react";
import { render, screen } from "@testing-library/react";

import MaintenanceEditDialogComponent from "../MaintenanceEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders maintenance edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MaintenanceEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("maintenance-edit-dialog-component")).toBeInTheDocument();
});
