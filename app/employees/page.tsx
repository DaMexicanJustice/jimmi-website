import Image from "next/image";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { promises as fs } from "fs";

// Defining the object structure
interface Employee {
  name: string;
  role: string;
  email: string;
  phone: string;
  img: string;
}

export default async function Employees() {
  // reading local json file
  const file = await fs.readFile(
    process.cwd() + "/public/json/employees.json",
    "utf8"
  );
  // Parsing JSON string object to JS object
  const employeeData = JSON.parse(file);
  // Generating array of JS objects based on defined interface structure
  const employees: Employee[] = employeeData.employees;
  return (
    <>
      <Navbar></Navbar>
      <section
        id="Employees"
        className="px-5 min-h-[calc(100svh-6rem)] mt-24 bg-slate-300
        md:px-40"
      >
        <main className="flex h-full flex-col items-center justify-center">
          <div className="flex flex-col gap-5 py-5">
            <div className="bg-slate-100 grow p-5 flex flex-col gap-5 shadow-xl">
              <h1 className="uppercase font-bold text-3xl text-slate-900 font-conduit">
                Konsulenter
              </h1>
              <hr className="border border-solid border-slate-900"></hr>
              <p className="text-slate-700 text-xl">
                Occaecat minim irure proident cupidatat tempor et Lorem dolor.
                Ut aliquip consectetur ullamco ullamco enim. Deserunt nostrud
                sit laboris adipisicing ullamco proident eiusmod.
              </p>
              <hr className="border border-solid border-slate-900 "></hr>
            </div>
            <div className="flex flex-col gap-5">
              {employees.map((e: Employee, index: number) => (
                <div
                  key={index}
                  className="bg-slate-100 grow flex flex-col gap-1 p-5 shadow-xl"
                >
                  <div id="image-container" className="w-full h-96 mb-5">
                    <Image
                      src={e.img}
                      width={390}
                      height={260}
                      alt="Medarbejder billed"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <p className="uppercase font-bold font-conduitbold text-xl text-slate-700">
                      {e.name}
                    </p>
                    <p className="uppercase font-bold font-conduitbold text-lg text-orange-500">
                      {e.role}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-row gap-2 items-center">
                      <EnvelopeIcon className="text-slate-900 w-5"></EnvelopeIcon>
                      <p className="font-conduit text-slate-800">{e.email}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <PhoneIcon className="text-slate-900 w-5"></PhoneIcon>
                      <a
                        href={`tel:${e.phone}`}
                        className="font-conduit text-slate-800"
                      >
                        {e.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end">
                    <div className="flex flex-row justify-center items-center size-24 rounded-full border-2 bg-orange-500">
                      <Link
                        href={{
                          pathname: "/employee-details",
                          query: { id: index },
                        }}
                        className="font-conduit text-slate-100 text-lg text-center text-wrap"
                      >
                        Læs <br></br> Mere
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}
