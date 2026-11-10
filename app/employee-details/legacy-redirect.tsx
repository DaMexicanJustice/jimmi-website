"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function LegacyEmployeeRedirect({ slugs }: { slugs: string[] }) {
  useEffect(() => {
    const id = Number.parseInt(new URLSearchParams(window.location.search).get("id") ?? "", 10);
    const slug = slugs[id];
    window.location.replace(slug ? `/employees/${slug}/` : "/employees/");
  }, [slugs]);

  return (
    <main className="mt-16 p-10 text-center">
      <Link href="/employees/" className="underline">
        Gå til vores konsulenter
      </Link>
    </main>
  );
}
