import Head from "next/head";
import Header from "@components/IndexHeader";
import LinkButton from "@components/LinkButton";
import Styles from "@styles/home.module.scss";

export default function Home() {
  return (
    <main className="container">
      <Head>
        <title>Fundamental Technology | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header
          title="Broad Vision, Honest Values, Great Service."
          img="/images/headers/index-hero.png"
          subtitle="at fundamental technology, customer satisfaction is our peace of mind"
        >
          <nav className={Styles.headerBtns}>
            <LinkButton path="./products" btnType="primary">
              View our products
            </LinkButton>
            <LinkButton path="./contact" btnType="secondary">
              Contact Us
            </LinkButton>
          </nav>
        </Header>
        <main className={Styles.content}>
          <article className={Styles.specialization}>
            <article>
              <h2>Our Specialization</h2>
              <p>
                We are configured through our technological continual imporovement
                to deliver premium quality paint products and services that ensure
                optimum value and satisfaction for their patronage.
              </p>
            </article>
            <section className={Styles.grid}>
              <figure>
                <img src="" alt="" />
                <figcaption>specialities paints</figcaption>
              </figure>
              <figure>
                <img src="" alt="" />
                <figcaption>Emulsion paints</figcaption>
              </figure>
              <figure>
                <img src="" alt="" />
                <figcaption>Enamel paints</figcaption>
              </figure>
              <figure>
                <img src="" alt="" />
                <figcaption>industrial marine paints</figcaption>
              </figure>
              <figure>
                <img src="" alt="" />
                <figcaption>road marking paints</figcaption>
              </figure>
              <figure>
                <img src="" alt="" />
                <figcaption>textured paints</figcaption>
              </figure>
            </section>
          </article>
          <section className={Styles.products}>
            <article>
              <p>
                premium quality paints require expertise in order to meet
                industrial and marine customers' specifications. At Fundamental
                Technologies, we manufacture a wide range of special quality
                paints for both domestic and industrial uses.
              </p>
              <details>
                <summary className={Styles.viewMore}>view more</summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere officiis velit obcaecati consectetur fuga, dolore hic
                  sequi saepe veniam minus veritatis repudiandae praesentium!
                  Ipsum optio doloremque error excepturi aut nobis unde debitis
                  eveniet aperiam repellat quidem, dicta tenetur aliquam quis
                  explicabo voluptatem tempora ad, magnam nostrum minus
                  similique fugiat! Quibusdam?
                </p>
              </details>
            </article>
            <div className={Styles.paints}>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </section>
          <section className={Styles.testimonials}></section>
        </main>
      </main>
  );
}
