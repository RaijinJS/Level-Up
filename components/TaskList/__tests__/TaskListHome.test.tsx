import { tasks } from "../../../utils/tests/tasks.mocks";
import { setupStore } from "../../../redux/store";
import { addInitialTasks } from "../../../redux/features/tasks-slice";
import TaskListHome from "../TaskListHome";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import { screen, waitFor } from "@testing-library/react";
import fetchMock, { MockResponseInitFunction } from "jest-fetch-mock";
import { act } from "react-dom/test-utils";

const store = setupStore();
store.dispatch(addInitialTasks(tasks));

describe("TaskList", () => {
  it("should render the correct amount of task cards", async () => {
    const mockResponse: MockResponseInitFunction = async () => {
      return new Promise((resolve) => {
        resolve({
          body: JSON.stringify(tasks),
        });
      });
    };

    fetchMock.mockResponseOnce(mockResponse);
    act(() => {
      renderWithProviders(<TaskListHome />, { store });
    });

    await waitFor(() => expect(screen.getAllByTestId("task-card")).toHaveLength(3)); // ACT & ASSERT
  });
});
