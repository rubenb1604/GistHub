interface Props {
    ButtonLabel: string;
}

const Header: React.FC<Props> = ({ ButtonLabel }) => {
    return (
        <div>
            <a className="bg-blue-700 p-2 rounded-xl text-xl font-sans hover:bg-blue-500 transition-all cursor-pointer">
                {ButtonLabel}
            </a>
        </div>
    );
}

export default Header;
