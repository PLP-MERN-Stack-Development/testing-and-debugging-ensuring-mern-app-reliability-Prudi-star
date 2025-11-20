import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../../components/BugForm";

test("renders bug form and submits", () => {
  render(<BugForm onBugAdded={() => {}} />);
  fireEvent.change(screen.getByPlaceholderText(/Bug title/i), { target: { value: "Bug1" } });
  fireEvent.click(screen.getByText(/Report Bug/i));
});
