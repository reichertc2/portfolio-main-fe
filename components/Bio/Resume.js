export default function Resume() {

    const openResume = () => {
        console.log("openResume")
        let pdf = "./public/Christopher Reichert RES SD1 V2.pdf"
        // window.open(pdf)
        return false
    }

    return (
  
            <a>
                <button
                    className="p-2 inline-block border-2 border-solid border-sky-200 rounded-md "
                    onClick={() => openResume()}
                >
                    Resume
                </button>
            </a>

    )
}