import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">essentiallysports</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" ariaLabel="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
  )
}
