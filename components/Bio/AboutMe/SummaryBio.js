import { baseDarkText,  } from "../../../styles/colors"


export default function SummaryBio({ elevator }) {

    return (
        <div className="inline-block w-3/5">

                {
                    elevator.map((text, idx) =>
                        <p 
                        key={`${text}-${idx}`}
                            className={`dark:${baseDarkText()} py-2`}
                        >
                            {text}
                        </p>
                    )
                }

        </div>
    )
}