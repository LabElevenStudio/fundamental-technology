import Head from 'next/head'
import Header from '@components/Header'
import ReturnNav from '@components/ReturnNav'

const About = () => {
    return(
        <main>
            <Head>
                <title>Fundamental Technology | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="about fundamental technology" img="/images/headers/about-hero.png"/>
            <section>
                <h2>Our Story</h2>
                <p>home of quality paints and allied products</p>
                <article>
                    <article>
                    <p>Fundamental Technology incorporated was incorporated on <em>31<sup>st</sup> july, 2017</em> to carry on the business of manufacture of quality special paints both for domestic and industrial uses. </p>
                    <p>we offer training and consultancy services to stakeholders, qualified chemists and laboratory technitians of best application techniques of a wide range of industrial products as well as chemical handling.</p>
                    <p>Our priority is customer statisfaction as we offer free consultation and professional adivice. Get in touch by simply calling the phone number below.</p>
                    </article>
                    <img src="" alt="" />
                </article>
            </section>
            <section>
                <h2>What we offer</h2>
                <div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </section>
            <section>
                <h2>Meet the founder</h2>
                <article>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi repellendus, ex aperiam, officia quis aliquam veritatis eius labore quos voluptate voluptas? Odit iure et suscipit impedit aliquid temporibus corrupti incidunt quibusdam repellat hic! Nam excepturi impedit vel iusto libero maiores, ipsa rem odio possimus nostrum. Incidunt magni beatae ea eum cum neque id doloribus animi distinctio. Odit ab fugit nulla error. Dignissimos ullam illum corrupti, quibusdam alias rem officia, tempore explicabo sunt repellendus accusantium cum aliquid! Provident repudiandae commodi accusamus ad placeat, rerum amet. Officia consequuntur officiis qui distinctio dolorum voluptatibus eius atque eaque eos ut? Eum dolores temporibus molestias.</p>
                    <img src="" alt="" />
                </article>
            </section>
            <ReturnNav />
        </main>
    )
}

export default About


