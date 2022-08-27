import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="text-center">
                        <Link href="/">
                            <a className="navbar-brand ">ES - Sports</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
