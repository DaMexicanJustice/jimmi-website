import type { Metadata } from "next";
import LegacyEmployeeRedirect from "./legacy-redirect";
import { employees } from "../lib/employees";

// Old URL format: /employee-details/?id=<index>. Kept so existing links keep
// working; forwards to the static profile page /employees/<slug>/.
export const metadata: Metadata = {
  title: "Konsulent",
  robots: { index: false, follow: true },
};

export default function EmployeeDetailsRedirect() {
  return <LegacyEmployeeRedirect slugs={employees.map((e) => e.slug)} />;
}
