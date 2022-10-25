import {render, screen, fireEvent} from "@testing-library/react";
import {debug} from "vitest-preview";
import {PrimaryButton} from "./Button.stories";

describe("#PrimaryButton", () => {
  it("renders a count button", () => {
    render(<PrimaryButton />);
    debug();

    const button = screen.getByRole("button", {
      name: /boopss1/i,
    });

    expect(button).toBeInTheDocument();
    // console.log(screen.logTestingPlaygroundURL());
  });
});
