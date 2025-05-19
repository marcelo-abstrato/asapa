import React from "react"
import {Award, Calendar, FileText, HeartHandshake, Home, Info, Mail, UserPlus, Users, Users2} from "lucide-react"

/**
 * Returns the appropriate icon component based on the link label
 */
export function getIconForLink(label: string): React.ReactElement | null {
    const iconProps = {className: "h-5 w-5 mr-2", "aria-hidden": true as const};

    switch (label.toLowerCase()) {
        case "início":
        case "home":
            return <Home {...iconProps} />;
        case "quem somos":
        case "sobre":
        case "história":
            return <Info {...iconProps} />;
        case "eventos":
            return <Calendar {...iconProps} />;
        case "associados":
        case "membros":
            return <Users {...iconProps} />;
        case "conquistas":
        case "prêmios":
            return <Award {...iconProps} />;
        case "contato":
            return <Mail {...iconProps} />;
        case "associe-se":
            return <UserPlus className="h-6 w-6" aria-hidden={true}/>;
        case "diretoria":
            return <Users2 {...iconProps} />;
        case "doacao":
        case "doação":
            return <HeartHandshake {...iconProps} />;
        case "transparencia":
        case "transparência":
            return <FileText {...iconProps} />;
        default:
            return null;
    }
}
