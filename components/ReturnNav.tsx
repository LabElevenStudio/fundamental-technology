import LinkButton from '@components/LinkButton';
import Styles from '@styles/returnav.module.scss'

export default function ReturnNav() {
    return <nav className={Styles.returnNav}>
        <LinkButton path="/" children="back to home" btnType='three' />
        <LinkButton path="/contact" children="contact us" btnType='secondary' />
    </nav>;
}
