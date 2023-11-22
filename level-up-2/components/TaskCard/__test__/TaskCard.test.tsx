import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCard from "../TaskCard";
import { tasks } from "../../../utils/tests/tasks.mocks";
import { setupStore } from "../../../redux/store";
import { addInitialTasks } from "../../../redux/features/tasks-slice";
import { renderWithProviders } from "../../../utils/tests/test.utils";

const store = setupStore();
store.dispatch(addInitialTasks(tasks));

describe("TaskCard", () => {
  describe("Render", () => {
    it("should render a title on the task card", () => {
      renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
      expect(screen.getByText("task 1")).toBeInTheDocument(); // ACT & ASSERT

      // expect(screen.getByText("task 2")).toBeInTheDocument(); // ACT & ASSERT
      // expect(screen.getByText("task 3")).toBeInTheDocument(); // ACT & ASSERT
      // Reason why we check twice is to know that the title is not hardcoded
    });

    it("should render the description on the task card", () => {
      renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
      expect(screen.getByText("task 1 description")).toBeInTheDocument(); // ACT & ASSERT

      // expect(screen.getByText("task 2 description")).toBeInTheDocument(); // ACT & ASSERT
      // expect(screen.getByText("task 3 description")).toBeInTheDocument(); // ACT & ASSERT
    });

    it("should render an image on each task card", () => {
      const { rerender } = renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
      expect(screen.getByRole("img")).toHaveAttribute("src", tasks[0].image); // ACT & ASSERT

      // rerender(<TaskCard tasks={[tasks[1]]} setTasks={mockSetTasks} />); // ARRANGE
      // expect(screen.getByRole("img")).toHaveAttribute("src", tasks[1].image); // ACT & ASSERT

      // rerender(<TaskCard tasks={[tasks[2]]} setTasks={mockSetTasks} />); // ARRANGE
      // expect(screen.getByRole("img")).toHaveAttribute("src", tasks[2].image); // ACT & ASSERT
    });

    it("should render a button with text 'In Progress' or 'Completed'", () => {
      const { rerender } = renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
      expect(screen.getByRole("button", { name: "In Progress" })).toBeInTheDocument(); // ACT & ASSERT

      // rerender(<TaskCard tasks={[tasks[1]]} setTasks={mockSetTasks} />); // ARRANGE
      // expect(screen.getByRole("button", { name: "Completed" })).toBeInTheDocument(); // ACT & ASSERT
    });

    it("should render a button/buttons that shows the task details", () => {
      const { rerender } = renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
      expect(screen.getByTestId("tips-button")).toBeInTheDocument(); // ACT & ASSERT

      // rerender(<TaskCard tasks={tasks} setTasks={mockSetTasks} />); // ARRANGE
      // expect(screen.getAllByTestId("tips-button")).toHaveLength(3); // ACT & ASSERT
    });

    it("should render delete button/buttons", () => {
      const { rerender } = renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
      expect(screen.getByTestId("delete-button")).toBeInTheDocument(); // ACT & ASSERT

      // rerender(<TaskCard tasks={tasks} setTasks={mockSetTasks} />); // ARRANGE
      // expect(screen.getAllByTestId("delete-button")).toHaveLength(3); // ACT & ASSERT
    });
  });

  // describe("Behaviour", () => {
  //   it("should change complete button text to 'Completed' when clicked", async () => {
  //     const { rerender } = renderWithProviders(<TaskCard task={tasks[0]} />); // ARRANGE
  //     expect(screen.getByTestId("complete-button")).toHaveTextContent("In Progress");
  //     await userEvent.click(screen.getByTestId("complete-button"));
  //     expect(screen.getByTestId("complete-button")).toHaveTextContent("Completed");
  //   });
  // });
});
