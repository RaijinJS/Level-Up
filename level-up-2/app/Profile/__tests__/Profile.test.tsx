import { render, screen } from "@testing-library/react";
import Profile from "../page";
import ProfileLayout from "../layout";

describe("Profile", () => {
  beforeEach(() => {
    // ARRANGE
    render(<Profile/>);
  });

  it("should contain a 'Your Progress' title", () => {
    // ACT
    const progressTitle = screen.getByText("Your Progress"); // Make sure you text match is exact! Check for uppercase

    // ASSERT
    expect(progressTitle).toBeInTheDocument();
  });


  it("should show the right progress level", () => {
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



  describe("Profile Navigation", () => {
    beforeEach(() => {
      // ARRANGE
      render(<ProfileLayout children={''} />);
    });

    it("should render home button for redirection", () => {
      // ACT
      const home = screen.getByTestId("homeButton");

      // ASSERT
      expect(home).toBeInTheDocument();
    });

    it("should render logo button for redirection", () => {
      // ACT
      const logo = screen.getByTestId("logoButton");

      // ASSERT
      expect(logo).toBeInTheDocument();
    });

    it("should render log out button", () => {
      // ACT
      const logOut = screen.getByTestId("logOutButton");

      // ASSERT
      expect(logOut).toBeInTheDocument();
    });

  });

});