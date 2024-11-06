"use client"; // This is a client component
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import Image from "next/image";
import { useRef } from "react";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServiceSocial() {
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    const images: HTMLElement[] = gsap.utils.toArray(".grayscale");
    images.forEach((image) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          end: "top top",
          toggleActions: "play none none reverse",
        },
        filter: "grayscale(0%)",
        x: 0,
        duration: 1,
      });
    });
  });

  return (
    <>
      <Navbar useScrollBehavior={false}></Navbar>
      <section
        id="service-employment"
        className="mt-16 overflow-hidden p-5 bg-slate-100 dark:bg-neutral-900
        lg:px-16

 lg:py-14"
      >
        <main
          className="h-full flex flex-col w-full justify-center gap-6
        lg:gap-10"
        >
          <div className="flex flex-col gap-4">
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
            lg:self-start
            xl:text-4xl"
            >
              Social indsats under § 85
            </h1>
            <p>
              Anim ipsum aute qui aliquip reprehenderit proident dolore commodo
              excepteur ipsum quis dolore. Est consectetur enim reprehenderit
              aliquip exercitation magna do officia officia et nisi id. Culpa ut
              labore enim aliqua nisi duis duis incididunt labore eiusmod non.
              Mollit pariatur nulla irure sint. Lorem aute nulla sunt irure non
              dolore sunt ut consectetur cupidatat. Minim occaecat aliquip sit
              ad occaecat consequat ut anim incididunt duis cupidatat qui. Non
              laboris non cillum id proident laborum consequat magna ut officia.
              Tempor irure veniam duis adipisicing magna velit fugiat
              exercitation labore aliqua culpa. Occaecat amet quis eiusmod
              eiusmod eiusmod. Eiusmod aliqua excepteur do proident exercitation
              eiusmod elit dolor exercitation nostrud. Qui minim ipsum voluptate
              enim magna minim duis aliquip aliquip culpa esse excepteur.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center
          lg:flex-row"
          >
            <div className="flex flex-col gap-4 xl:basis-8/12">
              <h2
                className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold
                  xl:text-4xl xl:text-left"
              >
                Aliqua est et velit culpa minim in est.
              </h2>
              <p>
                Ad ut ad excepteur incididunt nisi excepteur nostrud fugiat
                proident laboris ullamco dolor quis. Veniam fugiat excepteur
                duis commodo ex deserunt ad. Sunt dolor occaecat consequat
                officia fugiat laboris esse ipsum dolore non fugiat sit sit.
                Deserunt excepteur veniam cillum Lorem et. Nostrud consequat
                eiusmod consequat adipisicing ipsum veniam ex enim esse commodo
                veniam occaecat eu. Ut occaecat sunt nulla dolore. Pariatur
                aliqua mollit cillum do aliquip quis exercitation magna nulla
                anim pariatur eu minim. Lorem commodo et ex qui aliquip laboris
                proident. Ullamco nulla irure mollit amet commodo ipsum pariatur
                ea magna aliqua. Sunt cillum incididunt ipsum veniam voluptate
                ipsum magna do Lorem ipsum irure sint. Ad occaecat consequat
                tempor voluptate dolore consectetur voluptate dolore nisi nisi.
                Nulla irure pariatur aliquip Lorem et magna cillum ea nulla est
                minim in. Minim commodo ea do veniam qui cupidatat labore
                cupidatat et. Cupidatat ex do id qui. Consectetur in consequat
                adipisicing commodo elit enim quis esse.
              </p>
            </div>
            <Image
              src="/images/commute.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="object-cover grayscale image-right xl:basis-4/12"
            />
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center
          lg:flex-row"
          >
            <Image
              src="/images/youth.jpg"
              width={430}
              height={370}
              alt="Ydelse 1"
              className="object-cover grayscale image-left xl:basis-4/12"
            />
            <div
              className="flex flex-col items-center gap-4
            lg:items-start
             xl:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                Eiusmod quis est laboris consequat magna deserunt sint ipsum
                cillum.
              </h2>
              <p>
                Elit reprehenderit occaecat et in ea ea dolore irure laboris
                nulla. Elit consequat consequat elit culpa ut adipisicing.
                Cupidatat et commodo non fugiat aliqua enim nisi cillum do
                officia duis labore nostrud. Nostrud sint ea duis excepteur.
                Sunt labore eiusmod voluptate aliquip. Anim sit ut ipsum
                cupidatat occaecat nulla Lorem laborum. Non consequat mollit
                adipisicing incididunt amet in officia mollit. Consequat do
                deserunt aliqua ad incididunt dolore duis irure adipisicing
                ullamco incididunt elit officia amet. Incididunt aliquip
                adipisicing sunt cupidatat consequat veniam consequat
                incididunt. Qui deserunt mollit culpa reprehenderit magna eu
                culpa. Minim incididunt sint consectetur anim quis dolor. Qui
                mollit consectetur minim ad dolore dolore commodo aliquip
                exercitation et. Voluptate dolore aliquip Lorem laborum pariatur
                elit minim proident sint mollit veniam laborum consequat aute.
                Aliqua id pariatur deserunt ad cillum proident in anim duis
                dolore eu. Cupidatat veniam commodo nulla quis ut aliqua
                cupidatat ex occaecat magna proident nostrud. Amet minim
                reprehenderit proident veniam culpa adipisicing do. Aliqua et
                aliqua labore mollit.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between items-center
          lg:flex-row lg:items-start"
          >
            <div
              id="sliderTarget"
              className="flex flex-col gap-4 justify-between
            lg:basis-4/12"
            >
              <h2
                className="uppercase text-center text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl xl:text-left xl:basis-8/12"
              >
                Ipsum exercitation ad ut veniam est
              </h2>
              <p>
                Ex sunt cupidatat magna tempor elit veniam ex sunt esse. Est sit
                et qui mollit. Aliquip sunt fugiat labore laboris ad aute
                nostrud laborum est dolore sunt nostrud eiusmod ad. Veniam
                consectetur eu veniam voluptate. Consectetur veniam anim quis in
                dolor. Voluptate cupidatat eu non sint ea ea pariatur cillum do
                mollit Lorem. Nisi officia Lorem eu aliquip eiusmod mollit duis.
                Qui voluptate enim eu labore reprehenderit ad. Laborum dolore
                duis ipsum dolore cillum. Reprehenderit eu excepteur amet et
                sunt sit veniam eiusmod esse aliquip nisi amet consectetur. Duis
                labore proident officia eu incididunt culpa commodo irure
                officia cupidatat exercitation veniam.
              </p>
            </div>

            <div
              className="flex flex-col gap-4 justify-between
            lg:basis-4/12 lg:p-4"
            >
              <Image
                src="/images/commute_2.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover grayscale"
              />

              <div className="bg-yellow-400 dark:bg-yellow-500 p-3">
                <h2
                  className="uppercase text-center text-slate-900 text-2xl font-conduitbold 
                  xl:text-left xl:text-2xl
                  2xl:text-3xl "
                >
                  ”Virkeligheden virker”.
                </h2>
                <p className="font-conduitbold text-slate-900">
                  Virkeligheden virker. - virksomhedsforløb på en ordinær
                  arbejdsplads med rigtige arbejdsopgaver, kolleger og ordinære
                  timer øger tilknytningen til arbejdsmarkedet!
                </p>
              </div>
            </div>

            <div
              className="flex flex-col gap-4 justify-between items-center
            lg:basis-4/12 lg:items-start"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold 
                  xl:text-4xl"
              >
                Ex nisi consequat adipisicing cupidatat excepteur.
              </h2>
              <p>
                Dolore id veniam non ullamco sunt duis fugiat veniam eiusmod
                eiusmod. Aliquip nisi nisi minim sunt eu consectetur mollit
                consectetur ut. Tempor enim sint commodo minim irure occaecat
                est eiusmod excepteur eiusmod proident cupidatat. Anim dolor et
                commodo velit excepteur adipisicing. Consequat officia dolore
                sit cillum nulla enim aliqua nostrud aliqua cupidatat.
                Reprehenderit voluptate nisi laboris excepteur labore minim
                nostrud. Ea aliqua non culpa minim adipisicing reprehenderit non
                tempor minim laborum Lorem nostrud. Proident minim commodo ut id
                ut. Laboris irure occaecat cupidatat sunt ad aute duis
                consectetur aliqua nulla. Nostrud officia commodo ea aliquip
                sint qui minim velit. Adipisicing veniam cupidatat cupidatat
                eiusmod mollit. Sunt velit excepteur proident laborum aute
                aliquip dolore eu proident laborum. Commodo duis excepteur nulla
                labore deserunt reprehenderit minim.
              </p>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
