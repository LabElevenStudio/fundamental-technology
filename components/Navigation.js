import Link from 'next/link'
import Styles from '@styles/nav.module.scss'



const Nav = () => {
    return(
        <nav className={Styles.navWrapper}>
            <ul>
                <li className={Styles.logo}>
                    <img src="/images/logo-colored.svg" alt="funda tech logo" />
                </li>
                <li className={Styles.navItems}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </li>
                <li className={Styles.cta}>
                    <button>Book An Appointment</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav