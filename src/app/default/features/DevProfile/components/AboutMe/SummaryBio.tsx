
interface ISummaryBio {
    elevator: string[]
}

export const SummaryBio: React.FC<ISummaryBio>=({ elevator }) =>{

    return (
        <div className="inline-block w-3/5">

                {
                    elevator.map((text, idx) =>
                        <p 
                        key={`${text}-${idx}`}
                            className={`dark:text-gray-500 py-2`}
                        >
                            {text}
                        </p>
                    )
                }

        </div>
    )
}

export default SummaryBio;