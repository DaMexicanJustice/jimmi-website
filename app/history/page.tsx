import ContactForm from "../ui/contact-form";

export default function History() {
  return (
    <>
      <section
        id="History"
        className="p-5 bg-slate-50 dark:bg-neutral-900
      lg:px-16"
      >
        <main
          className="flex flex-col items-center justify-evenly gap-6 py-6 h-full
          xl:gap-10 xl:flex-row xl:justify-between xl:items-center"
        >
          {/* <Image
            src="/images/Jimmi2.jpg"
            width={280}
            height={328}
            alt="Jimmi billed"z
            className="drop-shadow-md
            xl:order-3 xl:w-full
            xl:basis-3/12"
          /> */}

          {/* Left panel / Top Panel */}
          <div
            className="flex flex-col gap-10 items-center
            lg:basis-6/12
            xl:items-start xl:justify-evenly xl:basis-8/12"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
          xl:text-4xl"
            >
              Om Mentorplan
            </h1>
            <p className="text-slate-900 dark:text-slate-100 text-lg text-left leading-6">
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Mentorplan
              </span>
              <br></br> Mentorplan blev etableret i 2016 med en kerneværdi: at
              hjælpe borgerne med at opnå vedvarende resultater og føre et
              meningsfuldt liv. Vi har altid været dedikeret til at tilpasse
              vores støtte og rådgivning til den enkelte borgers unikke behov.
              Når vi indleder et samarbejde med en borger, lægger vi særlig vægt
              på at opbygge en professionel relation, hvor der er ligeværdighed,
              respekt og tillid. <br></br>
              <br></br>
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Beliggenhed
              </span>
              <br></br> Mentorplans kontor er beliggende i SOHO på Vesterbro i
              Kødbyen. SOHO er et kontorfællesskab med forskelligartede
              virksomheder, der sammen skaber et pulserende og inspirerende
              arbejdsfællesskab. I vores møde med borgeren er disse rammer med
              til at skabe en positiv og energisk atmosfære, som gør at borgeren
              kan blive inspireret til at tage skridtet mod beskæftigelse og
              personlig udvikling. Derfor arbejder vi hårdt på at skabe en
              atmosfære, der udstråler muligheder og positivitet. <br></br>
              <br></br>
              <span
                className="uppercase text-slate-900 dark:text-slate-100 text-lg font-conduitbold
          xl:text-xl"
              >
                Tredje Punkt
              </span>
              <br></br>
              Nulla dolore consequat qui laboris sint tempor. Sit deserunt
              laborum officia consectetur tempor nisi eiusmod duis culpa. Velit
              enim nostrud nulla velit voluptate adipisicing aliqua pariatur
              mollit. Sit occaecat tempor Lorem reprehenderit do elit laborum
              occaecat. Occaecat anim sit incididunt culpa dolore. Excepteur
              commodo ut sit occaecat deserunt occaecat minim incididunt.
            </p>
          </div>
          <ContactForm></ContactForm>
        </main>
      </section>
    </>
  );
}
