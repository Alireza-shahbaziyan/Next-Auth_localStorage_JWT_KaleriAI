
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import LoginForm from "@/components/auth/LoginForm";
import { mockRouterReplace, mockSearchGet } from "./setup";

describe("LoginForm (phone-based)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    mockRouterReplace.mockReset();
    mockSearchGet.mockReturnValue(null);
    vi.spyOn(window.localStorage.__proto__, "setItem"); // spy فقط
  });

  it("renders inputs and submit button", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i) ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows validation error for invalid Iranian phone", async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/phone/i), "093"); // invalid
    await userEvent.type(screen.getByLabelText(/^password$/i) , "secret123");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/invalid iranian phone number/i)).toBeInTheDocument();
  });

  it("shows shadcn Alert when API returns 404 (unregistered user)", async () => {
    // mock fetch -> 404
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ message: "User not found" }),
    } as any);

    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/phone/i), "09121234567");
    await userEvent.type(screen.getByLabelText(/^password$/i) , "secret123");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/user not found/i)).toBeInTheDocument();
  });

  it("shows root error when API returns other error", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({ message: "Invalid credentials" }),
    } as any);

    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/phone/i), "09121234567");
    await userEvent.type(screen.getByLabelText(/^password$/i) , "badpass");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
  });

  it("stores token and redirects to /dashboard on success (no redirectedFrom)", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ token: "JWT_TOKEN" }),
    } as any);

    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/phone/i), "09121234567");
    await userEvent.type(screen.getByLabelText(/^password$/i) , "secret123");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith("token", "JWT_TOKEN");
      expect(mockRouterReplace).toHaveBeenCalledWith("/dashboard");
    });
  });

  it("redirects to redirectedFrom when present", async () => {
    mockSearchGet.mockReturnValue("/profile"); // simulate ?redirectedFrom=/profile

    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ token: "JWT_TOKEN" }),
    } as any);

    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/phone/i), "09121234567");
    await userEvent.type(screen.getByLabelText(/^password$/i) , "secret123");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockRouterReplace).toHaveBeenCalledWith("/profile");
    });
  });
});
