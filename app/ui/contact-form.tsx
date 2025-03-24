"use client" // This is a client component
import TextField from "@mui/material/TextField"
import type React from "react"

import { useRef, useState } from "react"
import toast from "react-hot-toast"
import Spinner from "./spinner"
// GSAP
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ButtonBase } from "@mui/material"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ContactFormProps {
  useSliderAnimation: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ useSliderAnimation }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const parsedValue = Math.max(0, Number.parseInt(value, 10))
    e.target.value = parsedValue.toString().slice(0, 8)
  }
  const useSlider = useSliderAnimation ? "image-right" : ""

  useGSAP(() => {
    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
      x: 0,
      duration: 1,
    })
  })

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {}
    const requiredFields = ["name", "phone", "email", "message"]

    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        newErrors[field] = `${field} is required`
      } else if (formData.get("flytrap")) newErrors[field] = `${field} is not allowed. Begone from here bot.`
    })
    return newErrors
  }

  const sendEmail = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error("Mail blev ikke afsendt. Udfyld alle felter")
      return
    }

    setLoading(true)
    if (formData.get("flytrap") !== "") {
      return
    } else {
      console.log("Sending mail")
      fetch("/api/contact", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          formRef.current?.reset()
          toast.success("Din besked er afsendt!")
          setLoading(false)
          console.log("Data: " + data)
        })
        .catch((error) => {
          console.log("Error: " + error)
          setLoading(false)
          toast.error("Din besked kunne ikke afsendes")
        })
    }
  }

  const sendEmailWeb3Form = (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("access_key", "82f48998-eb77-44d4-973e-61bb16756382")
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error("Mail blev ikke afsendt. Udfyld alle felter")
      return
    }

    setLoading(true)
    if (formData.get("antibot") !== "") {
      toast.error("Bekræft du ikke er en robot")
      return
    } else {
      console.log("Sending mail")
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          formRef.current?.reset()
          toast.success("Din besked er afsendt!")
          setLoading(false)
          console.log("Data: " + data)
        })
        .catch((error) => {
          console.log("Error: " + error)
          setLoading(false)
          toast.error("Din besked kunne ikke afsendes")
        })
    }
  }

  return (
    <>
      <div
        id="contact-form"
        className={`flex flex-col w-full items-center bg-slate-50 gap-1 dark:bg-slate-200 py-8 rounded slider ${useSlider}
          border-0 border-t-4 border-solid border-t-yellow-400 shadow-md shadow-slate-950/50 order-3`}
      >
        <h3
          className="text-3xl font-conduit text-slate-950 font-bold hidden
            lg:block"
        >
          +45 4295 5969
        </h3>
        <a
          href="tel:+4542955969"
          className="text-xl font-conduit text-slate-950 font-bold 
            lg:hidden lg:text-3xl"
        >
          +45 4295 5969
        </a>
        <h2
          className="text-lg text-slate-700 font-semibold font-conduit
            lg:text-lg lg:text-3xl"
        >
          Ring eller udfyld formularen
        </h2>
        <p
          className="text-slate-500 text-base text-center w-11/12
            lg:text-base lg:w-9/12"
        >
          Har du spørgsmål? Kontakt os i dag. Vi besvarer alle hverdage indenfor 24 timer
        </p>
        <form
          onSubmit={sendEmailWeb3Form}
          ref={formRef}
          className="flex flex-col gap-4 w-11/12
            lg:gap-4 lg:w-9/12"
        >
          <TextField
            required
            id="form-name"
            name="name"
            label="Dit fulde navn"
            variant="standard"
            color="warning"
            InputLabelProps={{
              style: {
                color: "#000000",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              },
            }}
            InputProps={{
              sx: {
                color: "#000000",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
              },
            }}
          />
          <div
            className="flex flex-col
              xl:flex-row xl:gap-5"
          >
            <TextField
              required
              id="form-email"
              name="email"
              label="Din e-mail"
              variant="standard"
              type="email"
              color="warning"
              className="basis-8/12"
              InputLabelProps={{
                style: {
                  color: "#000000",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                },
              }}
              InputProps={{
                sx: {
                  color: "#000000",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                },
              }}
            />
            <TextField
              required
              id="form-phone-number"
              name="phone"
              label="Telefon"
              variant="standard"
              type="number"
              color="warning"
              className="basis-4/12"
              onInput={handleInput}
              InputLabelProps={{
                style: {
                  color: "#000000",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                },
              }}
              InputProps={{
                sx: {
                  color: "#000000",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
                },
              }}
            />
          </div>
          <TextField
            required
            id="form-message"
            name="message"
            label="Besked"
            variant="outlined"
            color="warning"
            multiline
            minRows={3}
            maxRows={9}
            InputLabelProps={{
              style: {
                color: "#000000",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              },
            }}
            InputProps={{
              sx: {
                color: "#000000",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                "&.MuiOutlinedInput-notchedOutline": { fontSize: "28px" },
              },
            }}
          />
          <input
            className="p-0 m-0 size-0"
            id="antibot"
            name="antibot"
            type="text"
            placeholder="Confirm that you are human, what is 4+4"
            defaultValue=""
          />
          <ButtonBase
            className="self-center w-fit py-4 px-8 uppercase font-conduitbold text-sm bg-yellow-400 rounded-xs
            hover:shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 
            active:translate-y-0 active:shadow-md
            transition-all duration-300 ease-in-out
            lg:text-base"
            type="submit"
          >
            Send Besked
          </ButtonBase>
        </form>
        {loading ? <Spinner /> : ""}
      </div>
    </>
  )
}

export default ContactForm

