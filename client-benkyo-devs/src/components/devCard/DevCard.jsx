const DevCard = ({ name, email, github, linkedin }) => {
    return (
        <div className="flex flex-col items-center justify-center w-60 h-30 p-30 gap-2 border-2 border-soli border-black">
            <div className="flex flex-col items-center justify-center w-60 h-30 p-30 gap-2">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    {name}
                </h1>
                <h2 className="text-xl font-bold text-center text-gray-800">
                    {email}
                </h2>
                <h2 className="text-xl font-bold text-center text-gray-800">
                    {github}
                </h2>
                <h2 className="text-xl font-bold text-center text-gray-800">
                    {linkedin}
                </h2>
            </div>
        </div>
    );
};

export default DevCard;
