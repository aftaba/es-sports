import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-dark bg-dark justify-content-center">
                <Link href="/">
                    <a className="navbar-brand">
                        <Image src="/logo.png" height="30px" width="130px" alt="logo" />
                    </a>
                </Link>
            </nav>
        </header>
    )
}
