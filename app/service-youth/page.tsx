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

export default function ServiceYouth() {
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    const images: HTMLElement[] = gsap.utils.toArray(".grayscale");
    images.forEach((image) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
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
        className="min-h-[calc(100svh-3rem)] p-5 mt-16 bg-slate-50 dark:bg-neutral-950
        overflow-hidden
        lg:px-32 lg:py-14"
      >
        <main
          className="h-full flex flex-col w-full justify-center gap-6
        lg:gap-10"
        >
          <div
            className="flex flex-col gap-4
          xl:gap-10
          2xl:gap-16"
          >
            <h1
              className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
            lg:self-start
            xl:text-4xl"
            >
              Ungeindsatser
            </h1>
            <p>
              In voluptate minim ut labore ea consequat quis ea enim non
              adipisicing mollit. Incididunt enim qui deserunt incididunt elit
              consectetur ullamco laboris qui excepteur aute fugiat. Irure
              cillum velit id duis aliqua sunt. Ullamco ullamco labore
              consectetur ut tempor est dolore ut sint. Commodo esse in magna
              dolor id quis incididunt fugiat inciamet.lor fugiat ex ipsum. Id
              magna consectetur Lorem velit ullamco id exercitation fugiat et
              incididunt ut ad. Lorem aliquip ipsum deserunt exercitation veniam
              occaecat anim id. Ex Lorem nisi id ipsum.Sint magna est dolor eu
              in laboris elit proident voluptate et incididunt. Aliqua ut labore
              deserunt ipsum irure et ea aliquip. Aliqua incididunt labore irure
              sint dolor eu eiusmod ex amet non enim excepteur. Non eiusmod
              dolor veniam in.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 justify-center
            lg:flex-row
            xl:gap-10
            2xl:gap-16"
          >
            <div
              className="flex flex-col gap-4 text-justify
            lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
              lg:self-start
              xl:text-4xl"
              >
                Veniam Lorem laboris occaecat laboris
              </h2>
              <p>
                Ullamco nostrud dolore eiusmod nulla consequat sit. Aute laboris
                deserunt mollit labore incididunt exercitation culpa minim
                mollit magna occaecat. Sunt mollit et ex aliquip exercitation
                esse adipisicing est nisi ullamco dolor exercitation elit id. Do
                laborum minim exercitation ea occaecat anim cillum culpa laborum
                pariatur sint in elit. Esse officia est ipsum laboris sint Lorem
                aliquip. Reprehenderit reprehenderit nostrud do fugiat proident
                eiusmod irure ex Lorem in culpa consectetur mollit ut. Lorem in
                dolore incididunt ut amet ut minim adipisicing officia ea
                reprehenderit. Laboris ut sunt incididunt aute veniam veniam
                proident dolor ullamco tempor. Consectetur labore consequat
                proident cillum aute do dolor. Id non incididunt sint
                exercitation commodo dolor esse eiusmod. Non eiusmod ad occaecat
                fugiat enim dolore ad duis et dolore deserunt exercitation. Elit
                ut sint mollit cillum ea incididunt tempor ex sunt sint duis
                enim.
              </p>
            </div>

            <div
              className="flex flex-col gap-4 justify-center
            lg:basis-4/12"
            >
              <Image
                src="/images/barista.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full shadow-md grayscale image-right"
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-center
            lg:flex-row
            xl:gap-10
            2xl:gap-16"
          >
            <div
              className="flex flex-col gap-4 justify-center
              lg:basis-4/12"
            >
              <Image
                src="/images/counseling.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full xl:basis-4/12 shadow-md grayscale image-left"
              />
            </div>

            <div
              className="flex flex-col gap-4 text-justify
              lg:basis-8/12"
            >
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
              lg:self-start
              xl:text-4xl"
              >
                Veniam Lorem laboris occaecat laboris
              </h2>
              <p>
                Ullamco nostrud dolore eiusmod nulla consequat sit. Aute laboris
                deserunt mollit labore incididunt exercitation culpa minim
                mollit magna occaecat. Sunt mollit et ex aliquip exercitation
                esse adipisicing est nisi ullamco dolor exercitation elit id. Do
                laborum minim exercitation ea occaecat anim cillum culpa laborum
                pariatur sint in elit. Esse officia est ipsum laboris sint Lorem
                aliquip. Reprehenderit reprehenderit nostrud do fugiat proident
                eiusmod irure ex Lorem in culpa consectetur mollit ut. Lorem in
                dolore incididunt ut amet ut minim adipisicing officia ea
                reprehenderit. Laboris ut sunt incididunt aute veniam veniam
                proident dolor ullamco tempor. Consectetur labore consequat
                proident cillum aute do dolor. Id non incididunt sint
                exercitation commodo dolor esse eiusmod. Non eiusmod ad occaecat
                fugiat enim dolore ad duis et dolore deserunt exercitation. Elit
                ut sint mollit cillum ea incididunt tempor ex sunt sint duis
                enim. Esse esse laborum magna aliquip amet consectetur voluptate
                cillum laborum amet esse esse nulla nostrud. Sit nulla occaecat
                cupidatat ut officia qui et duis ipsum anim consequat. Non
                reprehenderit adipisicing reprehenderit qui sunt duis et labore.
                Fugiat consequat in est excepteur sint consequat id velit ad.
                Duis ad id nostrud nulla.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-4
            xl:flex-row xl:gap-10
            2xl:gap-16"
          >
            <div className="flex flex-col gap-4 basis-4/12 text-justify">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Ullamco eu irure quis
              </h2>
              <p>
                Sunt amet mollit ipsum incididunt quis anim cupidatat
                exercitation laborum pariatur mollit cillum consectetur. Ut in
                qui cupidatat proident in reprehenderit consequat excepteur
                cupidatat veniam in cillum. Esse nostrud ea elit adipisicing
                voluptate deserunt laboris ut commodo ipsum occaecat. Veniam
                aute sint consectetur elit in ad.
              </p>
            </div>

            <div className="flex flex-col gap-4 basis-4/12 text-justify">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Sit irure exercitation
              </h2>
              <p>
                Sunt amet mollit ipsum incididunt quis anim cupidatat
                exercitation laborum pariatur mollit cillum consectetur. Ut in
                qui cupidatat proident in reprehenderit consequat excepteur
                cupidatat veniam in cillum. Esse nostrud ea elit adipisicing
                voluptate deserunt laboris ut commodo ipsum occaecat. Veniam
                aute sint consectetur elit in ad.
              </p>
            </div>

            <div className="flex flex-col gap-4 basis-4/12 text-justify">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Consectetur veniam irure
              </h2>
              <p>
                Sunt amet mollit ipsum incididunt quis anim cupidatat
                exercitation laborum pariatur mollit cillum consectetur. Ut in
                qui cupidatat proident in reprehenderit consequat excepteur
                cupidatat veniam in cillum. Esse nostrud ea elit adipisicing
                voluptate deserunt laboris ut commodo ipsum occaecat. Veniam
                aute sint consectetur elit in ad.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-4
            xl:flex-row xl:gap-10
            2xl:gap-16"
          >
            <div className="flex flex-col gap-4 basis-4/12 text-justify">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Cupidatat culpa pariatur aliqua
              </h2>
              <p>
                Cillum aliqua id est ipsum culpa dolore incididunt non amet
                cupidatat adipisicing. Ut exercitation id cupidatat mollit culpa
                ullamco exercitation id tempor. Sit tempor ipsum proident
                deserunt quis voluptate commodo officia aute eiusmod irure
                veniam eiusmod. Ipsum et ex ad voluptate non ea adipisicing
                dolor aliqua ullamco velit. Enim ea cupidatat exercitation
                laboris exercitation minim ut est qui consequat eiusmod.
              </p>
            </div>

            <div className="flex flex-col gap-4 basis-4/12 text-justify">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Dolore culpa aliqua ex
              </h2>
              <p>
                Sit ipsum culpa amet proident quis enim minim excepteur. Mollit
                laboris sit excepteur in in non enim Lorem magna. Laborum mollit
                voluptate fugiat esse qui cupidatat voluptate duis commodo
                dolore Lorem. Deserunt in dolor sint quis sit commodo esse
                proident cillum aute do sit eu duis. Proident incididunt nostrud
                dolore duis do minim nisi aute deserunt commodo ut.
              </p>
            </div>

            <div className="flex flex-col gap-4 basis-4/12 text-justify">
              <h2
                className="uppercase text-slate-900 dark:text-slate-100 text-2xl font-conduitbold self-center
                lg:self-start
                xl:text-4xl"
              >
                Nisi enim non duis eu est
              </h2>
              <p>
                Culpa minim minim adipisicing in eiusmod excepteur do eiusmod
                sit cupidatat esse mollit. Laboris qui velit excepteur ipsum
                pariatur aliquip cupidatat duis reprehenderit dolore proident
                laborum. Laboris sint aute aute fugiat cillum ut enim nisi
                eiusmod sunt exercitation pariatur ea magna. Dolore irure sit
                esse sunt enim nisi eu commodo. Tempor fugiat esse amet aliquip
                cillum nisi veniam sint culpa.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col gap-4 justify-between
            lg:flex-row
            xl:gap-10
            2xl:gap-16"
          >
            <div
              className="flex flex-col gap-4
              lg:basis-4/12"
            >
              <Image
                src="/images/inspiration.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full xl:basis-4/12 shadow-md grayscale image-left"
              />
            </div>

            <div
              className="flex flex-col gap-4
              lg:basis-4/12"
            >
              <Image
                src="/images/youth.jpg"
                width={430}
                height={370}
                alt="Ydelse 1"
                className="object-cover w-full xl:basis-4/12 shadow-md grayscale image-right"
              />
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
