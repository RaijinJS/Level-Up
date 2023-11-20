import { render, screen } from "@testing-library/react";
import TaskDetail from "../TaskDetail";
import { tasks } from "../../TaskCard/__test__/TaskCard.mocks";

const mockOnClose = jest.fn();

describe("TaskDetail", () => {
  beforeEach(() => {
    render(<TaskDetail task={tasks[0]} onClose={mockOnClose} showImage={false} />); // ARRANGE
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
