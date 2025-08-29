import { expect, vi, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";   // ✅ extends Vitest's expect
import { cleanup } from "@testing-library/react";

// auto-cleanup after each test
afterEach(() => cleanup());

// mock next/navigation hooks (same as before)
export const mockRouterReplace = vi.fn();
export const mockSearchGet = vi.fn(() => null);

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockRouterReplace }),
  useSearchParams: () => ({ get: mockSearchGet }),
}));
