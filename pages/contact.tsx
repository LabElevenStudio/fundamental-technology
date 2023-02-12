import Head from 'next/head'
import Header from '@components/Header'
import ReturnNav from '@components/ReturnNav'
import Styles from '@styles/contact.module.scss'


const Contact = () => {
    return(
        <main>
            <Head>
                <title>Fundamental Technology | contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="contact us" img="/images/headers/contact-hero.png"/>
            <section>
                <h2>Get in touch</h2>
                <p>let's talk about your projects</p>
                <section>
                    <section>
                        <h3>Address</h3>
                        <address>
                            <p>
                                <span>Office:</span>
                                12, Sabowale avenue, stadium area, Keke agege, lagos state, Nigeria
                            </p>
                            <p>
                                <span>Factory:</span>
                                29, olurin street, off iyana IIlogba, Ojuore, Ota, Ogun State, Nigeria
                            </p>
                        </address>
                    </section>
                    <section>
                        <h3>Phone</h3>
                        <p>+234 807 265 8726</p>
                        <p>+234 803 472 0852</p>
                    </section>
                    <section>
                        <h3>Email</h3>
                        <p>fundapaints@yahoo.com</p>
                    </section>
                </section>
            </section>
            <section>
                <h2>Let's make something together</h2>
                <p>drop us a line.</p>
                <form>
                    <div className={Styles.formControl}>
                        <label htmlFor="name">
                            Your Name
                        </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="phone">
                            Phone Number
                        </label>
                        <input type="number" name="phone" id="phone" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="message">
                            Drop us your message
                        </label>
                        <textarea id="message"></textarea>
                    </div>
                    <button type="submit" value="submit"></button>
                </form>
            </section>
            <ReturnNav />
        </main>
    )
}



export default Contact