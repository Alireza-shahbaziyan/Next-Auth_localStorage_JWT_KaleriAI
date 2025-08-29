// test/setup.ts
import { afterEach, vi, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => cleanup());


export const mockRouterReplace = vi.fn();
export const mockSearchGet = vi.fn(() => null);

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockRouterReplace }),
  useSearchParams: () => ({ get: mockSearchGet }),
}));
