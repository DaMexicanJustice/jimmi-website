// Single source of truth for company details used across the site
// (navbar, footer, contact page, contact form, metadata and structured data).

export const SITE = {
  name: "Mentorplan",
  url: "https://mentorplan.dk",
  locale: "da_DK",
  description:
    "Mentorplan tilbyder ungeindsatser, beskæftigelsesindsatser, social støtte under § 85 og virksomhedssamarbejde i Københavnsområdet.",
  phone: {
    href: "tel:+4542955969",
    e164: "+4542955969",
    display: "+45 42 95 59 69",
  },
  email: "jl@mentorplan.dk",
  cvr: "37923850",
  foundingYear: 2016,
  address: {
    street: "Flæsketorvet 68, 1. sal",
    postalCode: "1711",
    city: "København V",
    building: "SOHO",
    country: "DK",
    lat: 55.666653,
    lng: 12.559371,
    mapsUrl:
      "https://www.google.com/maps/place/SOHO/@55.666656,12.5567907,17z/data=!3m1!4b1!4m6!3m5!1s0x46525373da1d5b59:0x8bc8cd4d0c582aa4!8m2!3d55.666653!4d12.559371!16s%2Fg%2F1td9ccch",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.2844839745385!2d12.559370999999999!3d55.666653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525373da1d5b59%3A0x8bc8cd4d0c582aa4!2sSOHO!5e0!3m2!1sen!2sdk!4v1720696588850!5m2!1sen!2sdk",
  },
  linkedIn: "https://www.linkedin.com/company/mentorplan/",
  ogImage: "/images/og-mentorplan.jpg",
} as const;

export const SERVICES = [
  {
    href: "/service-employment/",
    title: "Beskæftigelsesindsatser",
    image: "/images/beskæftigelsesindsatser.jpg",
    alt: "Beskæftigelsesindsatser - individuelle forløb for tilbagevenden til arbejdsmarkedet",
    summary:
      "Mentorplan tilbyder individuelle beskæftigelsesforløb med fokus på at hjælpe borgere tilbage på arbejdsmarkedet. Vores 360-graders metode sikrer en omfattende vurdering af borgerens situation for at skabe det bedste match.",
  },
  {
    href: "/service-youth/",
    title: "Ungeindsatser",
    image: "/images/ungeindsatser.jpg",
    alt: "Ungeindsatser - støtte til unge op til 23 år med fokus på stabilitet og udvikling",
    summary:
      "Mentorplan tilbyder ungeindsatser rettet mod unge op til 23 år, der har brug for hjælp til at skabe stabilitet og retning i deres liv. Vores team består af erfarne fagfolk, der arbejder med relationer, fritidsjob, beskæftigelse og kriminalitetsforebyggelse.",
  },
  {
    href: "/service-social/",
    title: "Social indsats under § 85",
    image: "/images/udsatte_services.jpg",
    alt: "Social indsats under § 85 - bostøtte og helhedsorienteret støtte til udsatte borgere",
    summary:
      "Mentorplan tilbyder bostøtte i henhold til Servicelovens § 85, der hjælper voksne med psykiske, fysiske eller sociale udfordringer. Vi tilbyder 24/7 fleksibel helhedsorienteret støtte, herunder ADL-træning, udendørsaktiviteter og tværfagligt samarbejde.",
  },
  {
    href: "/corporate-collaboration/",
    title: "Virksomhedssamarbejde",
    image: "/images/virksomhedssamarbejde.jpg",
    alt: "Virksomhedssamarbejde - hjælp socialt udsatte borgere tilbage på arbejdsmarkedet",
    summary:
      "Mentorplan søger virksomheder i Københavnsområdet til at hjælpe socialt udsatte borgere tilbage på arbejdsmarkedet. Kontakt Mentorplan for at aftale et møde og diskutere mulighederne.",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Forside" },
  { href: "/employees/", label: "Konsulenter" },
  {
    label: "Ydelser",
    children: SERVICES.slice(0, 3).map(({ href, title }) => ({ href, label: title })),
  },
  { href: "/corporate-collaboration/", label: "Virksomhedssamarbejde" },
  { href: "/social-feed/", label: "Den Gode Historie" },
  { href: "/contact/", label: "Kontakt" },
] as const;

/** Absolute URL for a site path, e.g. absoluteUrl("/contact/"). */
export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();
