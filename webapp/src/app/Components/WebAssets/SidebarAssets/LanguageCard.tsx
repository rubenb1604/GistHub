interface LanguageCard {
    title: string;
    color: string;
}

const LanguageCard: React.FC<LanguageCard> = ({ title, color }) => {
    return (
        <div className={"border-2 rounded-md w-fit p-1 pt-0.5 pb-0.5" } style={{ borderColor: color, color: color }}>
            {title}
        </div>
    );
}

export default LanguageCard;