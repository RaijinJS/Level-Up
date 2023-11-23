import { screen, waitFor } from "@testing-library/react";
import ProfileLayout from "../../../app/Profile/layout";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import { setupStore } from "../../../redux/store";
import { setCompletedTasks } from "../../../redux/features/tasks-slice";
import { completedTasks } from "../../../utils/tests/tasks.mocks";
import { MockResponseInitFunction } from "jest-fetch-mock";
import { act } from "react-dom/test-utils";
import ProfileCard from "../ProfileCard";

const store = setupStore();
store.dispatch(setCompletedTasks(completedTasks));

describe.skip("ProfileCard", () => {
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
      renderWithProviders(<ProfileCard />, { store });
    });
  });

  it("should contain a 'Your Progress' title", async () => {
    await waitFor(() => {
      // ACT
      const progressTitle = screen.getByText("Your Progress"); // Make sure you text match is exact! Check for uppercase

      // ASSERT
      expect(progressTitle).toBeInTheDocument();
    });
  });

  it("should show the right progress level", async () => {
    await waitFor(() => {
      // ACT
      const level = screen.getByTestId("level");
      const count = Number(screen.getByTestId("count").textContent);

      switch (true) {
        case count === 0:
          // ASSERT
          expect(level).toHaveTextContent("🎯 Set your first task! 🎯");
          break;
        case count < 5:
          // ASSERT
          expect(level).toHaveTextContent("Rookie 🌱");
          break;
        case count < 11:
          // ASSERT
          expect(level).toHaveTextContent("Amateur 🚀");
          break;
        case count < 16:
          // ASSERT
          expect(level).toHaveTextContent("Pro 🏆");
          break;
        case count < 21:
          // ASSERT
          expect(level).toHaveTextContent("Advanced ⭐");
          break;
        default:
          // ASSERT
          expect(level).toHaveTextContent("🌟 Master 🌟");
          break;
      }
    });
  });
});
