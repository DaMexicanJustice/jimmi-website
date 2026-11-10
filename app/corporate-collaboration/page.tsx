import type { Metadata } from "next";
import CorporateCollaborationContent from "./content";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Virksomhedssamarbejde",
  description:
    "Mentorplan søger virksomheder i Københavnsområdet, der vil hjælpe socialt udsatte borgere tilbage på arbejdsmarkedet. Vi støtter jer hele vejen.",
  path: "/corporate-collaboration/",
});

export default function CorporateCollaboration() {
  return <CorporateCollaborationContent />;
}
