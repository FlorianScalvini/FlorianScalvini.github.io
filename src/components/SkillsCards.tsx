interface SkillsCardProps {
    logo: string;
    name: string;
    accent: string;
}

function SkillsCards({ logo, name, accent }: SkillsCardProps) {
    return (
        <div className="flex flex-col rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-neutral-600 transition-colors w-28">
            <div className={`h-1 ${accent}`} />
            <div className="flex flex-col items-center gap-3 p-5">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-2 shrink-0">
                    <img src={logo} alt={name} className="w-full h-full object-contain" />
                </div>
                <span className="text-neutral-300 text-xs font-medium text-center leading-tight">{name}</span>
            </div>
        </div>
    );
}

export default SkillsCards;
