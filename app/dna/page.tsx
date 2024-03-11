import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Call, Email, Person, Business, Notes } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

export default function Dna() {
  const divElements = [];

  for (let i = 0; i < 5; i++) {
    divElements.push(
      <div key={i}>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon className="size-6 text-blue-5  00"></CheckCircleIcon>
          <p className="text-black text-sm">
            Quis fugiat dolore aliqua officia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="DNA"
        className="px-5 lg:px-20 min-h-[calc(100svh-4rem)] bg-slate-300"
      >
        <main className="flex h-full flex-col items-center justify-center">
          {/* Left Panel / Top Panel */}
          <div className="flex flex-col gap-5 py-5 items-center">
            <h1 className="text-black text-xl font-bold ">Mollit ea</h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-black text-lg font-bold">
                Exercitation eu sint aliqua
              </h2>
              {divElements}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-xs">
                Laboris minim nulla eu dolor et magna veniam exercitation
                exercitation minim. Ad deserunt aliqua est quis dolor
                consectetur nulla aute.
              </p>
              <Button variant="contained" color="primary">
                Labore excepteur
              </Button>
            </div>
          </div>

          {/* Right panel / Bottom Panel */}
          <div className="flex flex-col items-center gap-2 bg-slate-100 p-5 border-4 border-t-blue-500 mb-10  drop-shadow-lg">
            <h1 className="text-lg text-blue-500 font-bold">
              Ring: +4542955969
            </h1>
            <h2 className="text-base text-black font-semibold">
              Anim et duis ad eu ut.
            </h2>
            <p className="text-slate-700 text-xs text-center">
              Ad eiusmod nisi qui ullamco aliquip pariatur non velit ex irure
              occaecat.
            </p>
            <form className="flex flex-col gap-3">
              <TextField
                id="standard-basic"
                label="Dit fulde navn"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="standard-basic"
                label="Firma navn"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="standard-basic"
                label="Din e-mail"
                variant="standard"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="standard-basic"
                label="Telefonnummer"
                variant="standard"
                type="tel"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Call />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic"
                label="Besked"
                variant="outlined"
                multiline
              />
              <Button variant="contained" color="primary">
                Send Besked
              </Button>
            </form>
            <p className="text-slate-500 text-xs font-semibold">
              Jobansøgninger sendes til:{" "}
              <span className="text-blue-700">sej@email.dk</span>
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
