

export default function Footer({ profileMain }) {
    return (
        <footer className="p-3 text-center content-center">
            <h6 className="text-sky-400 italic">
                {profileMain['profile']['name']} 2022 &copy;
            </h6>
        </footer>
    )
}