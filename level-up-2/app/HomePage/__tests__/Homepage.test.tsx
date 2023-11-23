import { screen, waitFor } from "@testing-library/react";
import Home from "../page";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import fetchMock, { MockResponseInitFunction } from "jest-fetch-mock";
import { act } from "react-dom/test-utils";
import { tasks } from "../../../utils/tests/tasks.mocks";

describe("Homepage", () => {
  it("should render the progression bar", async () => {
    const mockResponse: MockResponseInitFunction = async () => {
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
});
