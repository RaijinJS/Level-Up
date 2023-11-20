import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskCard from "../TaskCard";
import { tasks } from "./TaskCard.mocks";

const mockSetTasks = jest.fn();

describe("TaskCard", () => {
  describe("Render", () => {
    it("should render the correct amount of task cards", () => {
      const { rerender } = render(<TaskCard tasks={tasks} setTasks={mockSetTasks} />);
      expect(screen.getAllByTestId("task-card")).toHaveLength(3); // ACT & ASSERT

      // Test only with the first 2 tasks
      rerender(<TaskCard tasks={[tasks[0], tasks[1]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getAllByTestId("task-card")).toHaveLength(2); // ACT & ASSERT

      // We check twice to see if the .map function is working as we expect it to
    });

    it("should render a title on the task card", () => {
      render(<TaskCard tasks={tasks} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByText("task 1")).toBeInTheDocument(); // ACT & ASSERT
      expect(screen.getByText("task 2")).toBeInTheDocument(); // ACT & ASSERT
      expect(screen.getByText("task 3")).toBeInTheDocument(); // ACT & ASSERT
      // Reason why we check twice is to know that the title is not hardcoded
    });

    it("should render the description on the task card", () => {
      render(<TaskCard tasks={tasks} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByText("task 1 description")).toBeInTheDocument(); // ACT & ASSERT
      expect(screen.getByText("task 2 description")).toBeInTheDocument(); // ACT & ASSERT
      expect(screen.getByText("task 3 description")).toBeInTheDocument(); // ACT & ASSERT
    });

    it("should render an image on each task card", () => {
      const { rerender } = render(<TaskCard tasks={[tasks[0]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByRole("img")).toHaveAttribute("src", tasks[0].image); // ACT & ASSERT

      rerender(<TaskCard tasks={[tasks[1]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByRole("img")).toHaveAttribute("src", tasks[1].image); // ACT & ASSERT

      rerender(<TaskCard tasks={[tasks[2]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByRole("img")).toHaveAttribute("src", tasks[2].image); // ACT & ASSERT
    });

    it("should render a button with text 'In Progress' or 'Completed'", () => {
      const { rerender } = render(<TaskCard tasks={[tasks[0]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByRole("button", { name: "In Progress" })).toBeInTheDocument(); // ACT & ASSERT

      rerender(<TaskCard tasks={[tasks[1]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByRole("button", { name: "Completed" })).toBeInTheDocument(); // ACT & ASSERT
    });

    it("should render a button/buttons with title 'tips'", () => {
      const { rerender } = render(<TaskCard tasks={[tasks[0]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByTestId("tips-button")).toBeInTheDocument(); // ACT & ASSERT

      rerender(<TaskCard tasks={tasks} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getAllByTestId("tips-button")).toHaveLength(3); // ACT & ASSERT
    });

    it("should render delete button/buttons", () => {
      const { rerender } = render(<TaskCard tasks={[tasks[0]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByTestId("delete-button")).toBeInTheDocument(); // ACT & ASSERT

      rerender(<TaskCard tasks={tasks} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getAllByTestId("delete-button")).toHaveLength(3); // ACT & ASSERT
    });
  });

  describe("Behaviour", () => {
    it("should change complete button text to 'Completed' when clicked", async () => {
      const { rerender } = render(<TaskCard tasks={[tasks[0]]} setTasks={mockSetTasks} />); // ARRANGE
      expect(screen.getByTestId("complete-button")).toHaveTextContent("In Progress");
      await userEvent.click(screen.getByTestId("complete-button"));
      rerender(<TaskCard tasks={[tasks[0]]} setTasks={mockSetTasks} />)
      expect(mockSetTasks).toHaveBeenCalled();
      expect(screen.getByTestId("complete-button")).toHaveTextContent("Completed");
    });
  });
});
