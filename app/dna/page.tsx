import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Call, Email, Person, Business, Notes } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Dna() {
  const divElements = [];
  const paragraphs = [
    "Ullamco commodo elit cupidatat amet esse dolor.",
    "Magna cillum nisi minim ipsum ex labore.",
    "Non sint enim eiusmod elit dolore proident nisi anim.",
    "Laborum laborum minim ipsum cillum.",
    "Excepteur laborum qui sit aliquip.",
  ];

  for (let i = 0; i < 5; i++) {
    divElements.push(
      <div key={i}>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon className="size-6 text-blue-500"></CheckCircleIcon>
          <p className="text-black text-2xl">{paragraphs[i]}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        id="DNA"
        className="px-5 lg:px-20 min-h-[calc(100svh-6rem)] bg-slate-300"
      >
        <main className="flex h-full flex-col items-center justify-center">
          {/* Left Panel / Top Panel */}
          <div className="flex flex-col gap-10 py-10 items-center">
            <h1 className="text-black text-5xl font-bold ">Mollit ea</h1>
            <div className="flex flex-col gap-5">
              <h2 className="text-blue-500 text-4xl font-bold text-center">
                Est enim cillum cupidatat ut cupidatat dolor
              </h2>
              <div className="flex flex-col gap-2">{divElements}</div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-black text-xl text-justify">
                Occaecat amet esse sit do officia deserunt laboris veniam
                eiusmod ipsum. Anim exercitation nisi nostrud ut aute. Occaecat
                consequat eu eiusmod consequat laborum laboris ullamco nulla.
              </p>
              <Button
                className="p-5 uppercase font-bold text-xl"
                variant="contained"
                color="primary"
              >
                Quis veniam anim nulla
              </Button>
            </div>
          </div>

          {/* Right panel / Bottom Panel */}
          <div className="flex flex-col items-center gap-2 bg-slate-100 p-5 mb-10 border-0 border-t-4 border-solid border-t-blue-500 shadow-xl shadow-blue-500/50">
            <a
              className="no-underline text-4xl text-blue-500 font-bold"
              href="tel:+4542955969"
            >
              Ring: +4542955969
            </a>
            <h2 className="text-3xl text-black font-semibold">
              Anim et duis ad eu ut.
            </h2>
            <p className="text-slate-700 text-xl text-justify w-11/12">
              Elit amet veniam anim esse sint do pariatur nisi. Et quis officia
              ea do irure consequat sit cillum.
            </p>
            <form className="flex flex-col gap-3 w-11/12">
              <TextField
                id="standard-basic"
                label="Dit fulde navn"
                variant="standard"
                InputLabelProps={{
                  style: {
                    fontSize: "16px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "20px",
                    lineHeight: "28px",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Firma navn"
                variant="standard"
                InputLabelProps={{
                  style: {
                    fontSize: "16px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "20px",
                    lineHeight: "28px",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Din e-mail"
                variant="standard"
                type="email"
                InputLabelProps={{
                  style: {
                    fontSize: "16px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "20px",
                    lineHeight: "28px",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Telefonnummer"
                variant="standard"
                type="tel"
                InputLabelProps={{
                  style: {
                    fontSize: "16px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "20px",
                    lineHeight: "28px",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <TextField
                id="standard-basic"
                label="Besked"
                variant="standard"
                multiline
                InputLabelProps={{
                  style: {
                    fontSize: "16px",
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: "20px",
                    lineHeight: "28px",
                    "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                  },
                }}
              />
              <Button
                className="p-5 uppercase font-bold text-xl"
                variant="contained"
                color="primary"
              >
                Send Besked
              </Button>
            </form>
            <p className="text-slate-500 text-xl font-semibold">
              Jobansøgninger sendes til:{" "}
              <span className="text-blue-700">kontakt@mentorplan.dk</span>
            </p>
          </div>
        </main>
      </section>
    </>
  );
}
