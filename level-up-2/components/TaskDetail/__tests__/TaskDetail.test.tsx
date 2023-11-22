import { render, screen } from "@testing-library/react";
import TaskDetail from "../TaskDetail";
import { tasks } from "../../../utils/tests/tasks.mocks";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import { setupStore } from "../../../redux/store";
import { setSelectedTask } from "../../../redux/features/tasks-slice";

describe("TaskDetail", () => {
  beforeEach(() => {
    const store = setupStore();
    store.dispatch(
      setSelectedTask({
        _id: "1",
        title: "task 1",
        description: "task 1 description",
        image: "../../../public/portrait-perfection.png",
        completed: false,
        more: "task 1 bigger description",
        added: true,
      }),
    );
    renderWithProviders(<TaskDetail />, { store }); // ARRANGE
  });

  it("should render a title", () => {
    const title = screen.getByText(tasks[0].title);
    expect(title).toBeInTheDocument();
  });

  it("should render a description", () => {
    const description = screen.getByText(tasks[0].more);
    expect(description).toBeInTheDocument();
  });
});
