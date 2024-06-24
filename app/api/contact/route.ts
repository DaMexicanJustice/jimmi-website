import { sendEmail } from "@/app/utils/mail.utils"

export async function POST() {
    console.log("Ping from route.ts");
    const sender = {
        name: 'Mentorplan',
        address: 'no-reply@mentorplan.dk'
    }
    const recipients = [{
        name: 'John Doe',
        address: 'john.doe@example.com'
    }]

    try {
        const result = await sendEmail({
            sender,
            recipients,
            subject: "Welcome to our website",
            message: "You are welcome to our platform"
        })

        return Response.json({
            accepted: result.accepted,
        })
    } catch (error) {
        return Response.json({ message: 'Unable to send email this time'}, {status: 500})
    }
}