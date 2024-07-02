import { sendEmail } from "@/app/utils/mail.utils";

export async function POST() {
  const sender = {
    name: "Mentorplan",
    address: "mentorplankontaktform@outlook.com",
  };
  const recipients = [
    {
      name: "John Doe",
      address: "patrick@neobotanik.com",
    },
  ];

  try {
    //return Response.json({ message: "in here" });
    const result = await sendEmail({
      sender,
      recipients,
      subject: "Welcome to our website",
      message: "You are welcome to our platform",
    });

    return Response.json({
      accepted: result, //result.accepted,
    });
  } catch (error) {
    return Response.json(
      { message: "Unable to send email this time", error },
      { status: 500 }
    );
  }
}
