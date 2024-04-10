"use client"; // This is a client component
const UiButton: React.FC = () => {
  const scrollTo = () => {
    const section = document.getElementById("contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollTo}
      className="py-1 px-6 bg-yellow-400 dark:bg-yellow-500 uppercase font-conduit cursor-pointer"
    >
      kontakt mig
    </button>
  );
};

export default UiButton;
