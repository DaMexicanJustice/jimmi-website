import { sendEmail } from "@/app/utils/mail.utils";

export async function POST(request: any) {
  const formData = await request.formData();
  const sender = {
    name: "Mentorplan",
    address: "mentorplankontaktform@outlook.com", // DO NOT CHANGE
  };
  const recipients = [
    {
      name: formData.get("name"),
      address: "patrick@neobotanik.com",
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      recipients,
      subject: "Ny besked fra kontaktform",
      message: `<p> <b>Navn:</b> ${formData.get("name")} <br>
      <b>Telefon:</b> ${formData.get("phone")} <br>  
      <b>Email:</b> ${formData.get("email")} <br>    
      <b>Besked:</b> ${formData.get("message")}</p>`,
    });

    return Response.json({
      accepted: result.accepted,
    });
  } catch (error) {
    return Response.json(
      { message: "Unable to send email this time", error },
      { status: 500 }
    );
  }
}
