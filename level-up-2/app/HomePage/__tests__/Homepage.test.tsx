import { screen, waitFor } from "@testing-library/react";
import Home from "../page";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import fetchMock, { MockResponseInitFunction } from "jest-fetch-mock";
import { act } from "react-dom/test-utils";
import { tasks } from "../../../utils/tests/tasks.mocks";

describe("Homepage", () => {
  it("should render the progression bar", async () => {
    const mockResponse: MockResponseInitFunction = async (req) => {
      return new Promise((resolve) => {
        resolve({
          body: JSON.stringify(tasks),
        });
      });
    };
    fetchMock.mockResponseOnce(mockResponse);

    // ARRANGE
    act(() => renderWithProviders(<Home />));

    await waitFor(() => {
      // ACT
      const progressionBar = screen.getByTestId("progression-bar"); // test-id can be found in the ProgressionBar component.
      // ASSERT
      expect(progressionBar).toBeInTheDocument();
    });
  });

  // it("should change complete button text to 'Completed' when clicked", async () => {
  //   const screen = render(<Home />); // ARRANGE
  //   expect(screen.getByTestId("complete-button")).toHaveTextContent("In Progress");
  //   await userEvent.click(screen.getByTestId("complete-button"));
  //   expect(screen.getByTestId("complete-button")).toHaveTextContent("Completed");
  // });
});
