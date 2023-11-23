import { MockResponseInitFunction } from "jest-fetch-mock";
import { completedTasks } from "../../../utils/tests/tasks.mocks";
import { act } from "react-dom/test-utils";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import ProfileLayout from "../layout";
import { screen, waitFor } from "@testing-library/react";
import { setCompletedTasks } from "../../../redux/features/tasks-slice";
import { setupStore } from "../../../redux/store";

const store = setupStore();
store.dispatch(setCompletedTasks(completedTasks));

describe.skip("Profile Navigation", () => {
  beforeEach(() => {
    const mockResponse: MockResponseInitFunction = async () => {
      return new Promise((resolve) => {
        resolve({
          body: JSON.stringify(completedTasks),
        });
      });
    };
    fetchMock.mockResponseOnce(mockResponse);
    // ARRANGE
    act(() => {
      renderWithProviders(<ProfileLayout children={""} />, { store });
    });
  });

  it("should render home button for redirection", async () => {
    await waitFor(() => {
      // ACT
      const home = screen.getByTestId("homeButton");

      // ASSERT
      expect(home).toBeInTheDocument();
    });
  });

  it("should render log out button", async () => {
    await waitFor(() => {
      // ACT
      const logOut = screen.getByTestId("logOutButton");

      // ASSERT
      expect(logOut).toBeInTheDocument();
    });
  });
});
