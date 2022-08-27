import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout( {children} ) {
    return (
        <>
            <Header />
            <main id="site-main">{children}</main>
            <Footer />
        </>
    )
}
