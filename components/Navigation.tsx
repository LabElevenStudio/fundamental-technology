import Link from 'next/link'
import Styles from '@styles/nav.module.scss'
import LinkButton from '@components/LinkButton'



const Nav = () => {
    return(
        <nav className={Styles.navWrapper}>
            <ul>
                <li className={Styles.logo}>
                    <img src="/images/logo-colored.svg" alt="funda tech logo" />
                </li>
                <li className={Styles.navItems}>
                    <ul>
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
                    </ul>
                </li>
                <li className={Styles.cta}>
                    <LinkButton path="/contact" btnType="three">Book An Appointment</LinkButton>
                </li>
            </ul>
        </nav>
    )
}

export default Nav