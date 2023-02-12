
import Head from 'next/head'
import Header from '@components/Header'
import ReturnNav from '@components/ReturnNav'

const Projects = () => {
    return(
        <main>
            <Head>
                <title>Fundamental Technology | Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="projects" img="/images/headers/projects-hero.png" />
            <section>
                <div className=""></div>
                <div className=""></div>
            </section>
            <ReturnNav />
        </main>
    )
}


export default Projects