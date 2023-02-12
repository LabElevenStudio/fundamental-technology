import LinkButton from '@components/LinkButton';

export default function ReturnNav() {
    return <nav>
        <LinkButton path="/" children="back to home" btnType='primary' />
        <LinkButton path="/contact" children="contact us" btnType='secondary' />
    </nav>;
}
