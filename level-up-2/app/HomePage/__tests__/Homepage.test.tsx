import { render, screen } from "@testing-library/react";
import Home from "../page";
import userEvent from "@testing-library/user-event";

describe("Homepage", () => {
  it("should render the progression bar", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const progressionBar = screen.getByTestId("progression-bar"); // test-id can be found in the ProgressionBar component.

    // ASSERT
    expect(progressionBar).toBeInTheDocument();
  });

  it("should change complete button text to 'Completed' when clicked", async () => {
    const screen = render(<Home />); // ARRANGE
    expect(screen.getByTestId("complete-button")).toHaveTextContent("In Progress");
    await userEvent.click(screen.getByTestId("complete-button"));
    expect(screen.getByTestId("complete-button")).toHaveTextContent("Completed");
  });
});
