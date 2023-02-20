import Head from 'next/head'
import Header from '@components/Header'
import TextLink from '@components/TextButton'
import ReturnNav from '@components/ReturnNav'
import Styles from '@styles/services.module.scss'

const Services = () => {
    return(
        <main>
            <Head>
                <title>Fundamental Technology | Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="services" img="/images/headers/services-hero.png"/>
            <section className={Styles.servicesHero}>
                <article>
                    <article className={Styles.servicesHeroDeets}>
                        <h2>You can only expect the best.</h2>
                        <p>The home of quality paints and allied product</p>
                    </article>
                    <div className={Styles.hashAccent}>
                        <img src="./images/hash.svg" alt="hash accent" />
                        <img src="./images/hash.svg" alt="hash accent" />
                        <img src="./images/hash.svg" alt="hash accent" />
                    </div>
                    <div className={Styles.paintExamples}>
                        {/* this flexible box of paint products */}
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </article>
            </section>
            <section className={Styles.specialization}>
                <h2>Our specialization</h2>
                <p>We are configured through our technological, continual improvment to deliver premium quality paint products and services that ensure optimum value and satisfaction for their patronage.</p>
                <section className={Styles.specializationGrid}>
                    <figure className={Styles.flowLeft}>
                        <div></div>
                        {/* <img src="./images/specialties.png" alt="" /> */}
                        <figcaption>
                            <h3>Specialties Paints</h3>
                            <TextLink path="" children="view more" />
                        </figcaption>
                    </figure>
                    <figure className={Styles.flowRight}>
                        <div></div>
                        {/* <img src="./images/emulsion.png" alt="" /> */}
                        <figcaption>
                            <h3>Emulsion Paints</h3>
                            <TextLink path="" children="view more" />
                        </figcaption>
                    </figure>
                    <figure className={Styles.flowLeft}>
                        <div></div>
                        {/* <img src="./images/enamel.png" alt="" /> */}
                        <figcaption>
                            <h3>Enamel Paints</h3>
                            <TextLink path="" children="view more" />
                        </figcaption>
                    </figure>
                    <figure className={Styles.flowRight}>
                        <div></div>
                        {/* <img src="./images/industrial.png" alt="" /> */}
                        <figcaption>
                            <h3>Industrial Marine Paints</h3>
                            <TextLink path="" children="view more" />
                        </figcaption>
                    </figure>
                    <figure className={Styles.flowLeft}>
                        <div></div>
                        {/* <img src="./images/roadmarking.png" alt="" /> */}
                        <figcaption>
                            <h3>RoadMarking Paints</h3>
                            <TextLink path="" children="view more" />
                        </figcaption>
                    </figure>
                    <figure className={Styles.flowRight}>
                        <div></div>
                        {/* <img src="./images/textured.png" alt="" /> */}
                        <figcaption>
                            <h3>Textured Paints</h3>
                            <TextLink path="" children="view more" />
                        </figcaption>
                    </figure>
                </section>
            </section>
            <ReturnNav />
        </main>
    )
}


export default Services


// export async function getStaticProps() {}