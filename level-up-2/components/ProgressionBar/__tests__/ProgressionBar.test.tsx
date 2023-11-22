import { screen } from "@testing-library/react";
import ProgressionBar from "../ProgressionBar";
import { setupStore } from "../../../redux/store";
import { addInitialTasks } from "../../../redux/features/tasks-slice";
import { tasks } from "../../../utils/tests/tasks.mocks";
import { renderWithProviders } from "../../../utils/tests/test.utils";

const store = setupStore();
store.dispatch(addInitialTasks(tasks));

describe("ProgressionBar", () => {
  beforeEach(() => {
    // ARRANGE
    renderWithProviders(<ProgressionBar />, { store });
  });

  it("should contain a progress title", () => {
    // ACT
    const progressTitle = screen.getByText("Progress"); // Make sure you text match is exact! Check for uppercase

    // ASSERT
    expect(progressTitle).toBeInTheDocument();
  });

  it("should display correct percentage", () => {
    // ACT & ASSERT
    expect(screen.getByText("33%")).toBeInTheDocument();

    // // ARRANGE, ACT & ASSERT
    // render(<ProgressionBar totalTasks={3} completedTasks={2} />);
    // expect(screen.getByText("67%")).toBeInTheDocument();

    // // ARRANGE, ACT & ASSERT
    // render(<ProgressionBar totalTasks={9} completedTasks={4} />);
    // expect(screen.getByText("44%")).toBeInTheDocument();

    // We have multiple tests to ensure that the progression value is not hardcoded, and rounds correctly.
  });
});
