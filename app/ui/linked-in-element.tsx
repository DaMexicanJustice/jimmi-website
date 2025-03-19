import { Linkedin } from "lucide-react"
import Link from "next/link"

interface LinkedInElementProps {
    url: string
    text?: string
}

export default function LinkedInElement({ url, text = "Connect on LinkedIn" }: LinkedInElementProps) {
    return (
        <div className="absolute bottom-4 left-4">
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
                <Linkedin className="h-4 w-4 text-blue-500" />
                <span className="uppercase font-conduitbold">{text}</span>
            </Link>
        </div>
    )
}

