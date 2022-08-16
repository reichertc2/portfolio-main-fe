export default function Resume() {

    const openResume = () => {
        console.log("openResume")
        let pdf = "./public/Christopher Reichert RES SD1 V2.pdf"
        // window.open(pdf)
        return pdf
    }

    return (
  
            <a>
                <button
                    className="p-2 inline-block border-2 border-solid dark:border-sky-200 rounded-md "
                    onClick={() => openResume()}
                >
                    Resume
                </button>
            </a>

    )
}