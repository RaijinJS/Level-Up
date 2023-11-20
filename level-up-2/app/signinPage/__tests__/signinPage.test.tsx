import { render, screen } from "@testing-library/react";
import SignIn from "../page";

describe("SignIn", () => {
  beforeEach(() => {
    // ARRANGE
    render(<SignIn/>);
  });

  it("should contain a 'Your Progress' title", () => {
    // ACT
    const signInButton = screen.getByText("Sign In"); // Make sure you text match is exact! Check for uppercase

    // ASSERT
    expect(signInButton).toBeInTheDocument();
  });
});