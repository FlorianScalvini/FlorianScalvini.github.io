interface RowImgProps {
    title: string;
    img: string;
    date: string;
    place: string;
    color: string;
}

function RowImgTextPortfolio({ title, date, place, color }: RowImgProps) {
    return (
        <div className="flex items-start gap-4">
            <div className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${color}`} />
            <div className="flex flex-col gap-0.5">
                <p className="text-white font-semibold text-base leading-snug">{title}</p>
                <p className="text-neutral-400 text-sm">{place}</p>
                <p className="text-neutral-500 text-xs">{date}</p>
            </div>
        </div>
    );
}

export default RowImgTextPortfolio;
