export default function Resume() {

    const openResume = () => {
        let pdf = "./public/Christopher Reichert RES SD1 V2.pdf"
        return pdf
    }

    return (
  
            <a>
                <button
                    className={`p-2 inline-block border-2 border-solid dark:${baseDarkBorder()} rounded-md`}
                    onClick={() => openResume()}
                >
                    Resume
                </button>
            </a>

    )
}