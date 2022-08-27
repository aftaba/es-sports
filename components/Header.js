import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
    return (
        <header className="fixed-top">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <Image src="/logo.png" height="30px" width="130px" alt="logo" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
