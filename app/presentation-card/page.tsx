'use client'
import Footer from "../ui/footer"
import Navbar from "../ui/navbar"
import Image from "next/image"
import pageOne from "/public/images/A4_page_1.jpg"
import pageTwo from "/public/images/A4_page_2.jpg"

import Link from "next/link"

export default function PresentationCard() {

    return (
        <>
            <Navbar useScrollBehavior={false} />
            <section className="p-5 mt-12 bg-slate-50 dark:bg-neutral-900 sm:px-32 lg:px-16 lg:mt-16">
                <main className="flex flex-col gap-6 h-full justify-center items-left cursor-default">
                    <div>
                        <h1 className="uppercase font-conduitbold text-2xl xl:text-4xl text-black">Konsulent presentation</h1>
                        <div className="w-24 h-1 bg-yellow-400"></div>
                    </div>
                    <p>
                        Du kan downloade teampræsentationen som PDF eller gemme linket til denne side, så du altid har en oversigt
                        over MD Partners konsulenter og kompetencer.
                    </p>
                    <div className="flex flex-row gap-6 justify-center items-center">
                        <Link href="/pdf/a4_page_1.pdf" passHref>
                            <Image
                                src={pageOne || "/placeholder.svg"}
                                width={512}
                                height={512}
                                alt="Medarbejder billed"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </Link>
                        <Link href="/pdf/a4_page_2.pdf" passHref>
                            <Image
                                src={pageTwo || "/placeholder.svg"}
                                width={512}
                                height={512}
                                alt="Medarbejder billed"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </Link>
                    </div>
                </main>
            </section>
            <Footer />
        </>
    )
}

