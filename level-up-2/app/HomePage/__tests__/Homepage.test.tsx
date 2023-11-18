import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Homepage", () => {
  it("should render the progression bar", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const progressionBar = screen.getByTestId("progression-bar"); // test-id can be found in the ProgressionBar component.

    // ASSERT
    expect(progressionBar).toBeInTheDocument();
  });
});
