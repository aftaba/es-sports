import Head from 'next/head'
import React, { Children } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout( {children} ) {
    return (
        <>
            <Header />
            <main id="site-main">{children}</main>
            <Footer />
        </>
    )
}
