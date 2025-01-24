'use client'
import Footer from "../ui/footer"
import Navbar from "../ui/navbar"
import Image from "next/image"
import pageOne from "/public/images/A4_page_1.jpg"
import pageTwo from "/public/images/A4_page_2.jpg"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PresentationCard() {
    const router = useRouter()

    const handleImageClick = (pdfName: string) => {
        router.push(`/public/pdf/${pdfName}`)
    }

    return (
        <>
            <Navbar useScrollBehavior={false} />
            <section className="p-5 mt-12 bg-slate-50 dark:bg-neutral-900 sm:px-32 lg:px-16 lg:mt-16">
                <main className="flex flex-col gap-6 h-full justify-between items-left cursor-default">
                    <div>
                        <h1 className="uppercase font-conduitbold text-2xl xl:text-4xl text-black">Konsulent presentation</h1>
                        <div className="w-24 h-1 bg-yellow-400"></div>
                    </div>
                    <p>
                        Du kan klikke på billederne for at få adgang til PDF-filerne, som er designet til at være lette at udskrive. Formålet med disse PDF-filer er at gøre det nemt at printe kontaktinformationerne, så du kan have dem ved hånden eller hænge dem op på en opslagstavle.
                    </p>
                    <div className="flex flex-col gap-6 justify-center items-center
                    lg:flex-row">
                        <Link href="/pdf/a4_page_1.pdf" passHref>
                            <Image
                                src={pageOne || "/placeholder.svg"}
                                width={512}
                                height={512}
                                alt="Medarbejder billed"
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => handleImageClick("a4_page_1.pdf")}
                            />
                        </Link>
                        <Link href="/pdf/a4_page_2.pdf" passHref>
                            <Image
                                src={pageTwo || "/placeholder.svg"}
                                width={512}
                                height={512}
                                alt="Medarbejder billed"
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => handleImageClick("a4_page_2.pdf")}
                            />
                        </Link>
                    </div>
                </main>
            </section>
            <Footer />
        </>
    )
}

