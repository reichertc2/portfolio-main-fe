import Link from "next/link"


export default function Footer({ profileMain }) {
    return (
        <footer className="p-3 text-center content-center">
            <h6 className="dark:text-sky-400 italic py-4">
                <Link href={profileMain['profile']['profileURL']}>
                    <a>{profileMain['profile']['name']} 2022 &copy;</a>
                </Link>
            </h6>
        </footer>
    )
}