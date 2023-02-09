import Head from 'next/head'
import Header from '@components/Header'
import LinkButton from '@components/LinkButton'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fundamental Technology</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
         title="Broad Vision, Honest Values, Great Service." 
         img="/images/headers/index-hero.png"
          subtitle="at fundamental technology, customer satisfaction is our peace of mind" 
          >
            <nav>
              <LinkButton path="./products" btnType="primary">View our products</LinkButton>
              <LinkButton path="./contact" btnType="secondary">Contact Us</LinkButton>
            </nav>
          </Header>
        
      </main>
    </div>
  )
}
