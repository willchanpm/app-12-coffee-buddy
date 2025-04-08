import styles from "./origins.module.css";

export default function OriginsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Bean Origins</h1>
        <p className={styles.intro}>
          Discover how different growing regions create distinct coffee flavors
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Introduction to Origins</h2>
          <p>
            The flavor of coffee beans is deeply influenced by where they're
            grown. Geographic factors like altitude, soil composition, and
            climate all play crucial roles in developing the bean's
            characteristics. Higher altitudes typically produce harder, more
            complex beans with brighter acidity, while different soil types can
            contribute unique mineral notes to the final cup.
          </p>
          <img
            src="/coffee-bean-origins.png"
            alt="Map showing major coffee growing regions and their characteristic flavors"
            className={styles.originImage}
          />
        </section>

        <section className={styles.section}>
          <h2>Common Origins</h2>

          <div className={styles.origin}>
            <h3>Ethiopian Coffee</h3>
            <p>
              Known as the birthplace of coffee, Ethiopia produces beans with
              distinctive fruity and floral characteristics. These coffees often
              feature bright, complex flavors with notes of jasmine, bergamot,
              and blueberry. The diverse growing regions and traditional
              processing methods contribute to their unique taste profile.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Kenyan Coffee</h3>
            <p>
              Kenyan coffee is renowned for its bold, wine-like acidity and
              complex fruit notes. These beans often exhibit bright blackcurrant
              and berry flavors, complemented by a sweet, almost tomato-like
              savory quality. Kenya's strict grading system and unique
              processing methods help maintain its reputation for exceptional
              quality.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Colombian Coffee</h3>
            <p>
              Colombian beans are celebrated for their well-balanced, clean
              taste with caramel sweetness and nutty undertones. Growing at high
              altitudes in volcanic soil, these beans develop a medium body with
              hints of chocolate and a subtle citrus brightness that makes them
              universally appealing.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Brazilian Coffee</h3>
            <p>
              Brazil's coffee is known for its smooth, sweet flavor with
              pronounced chocolate notes and low acidity. These beans often have
              a heavy body with nutty, caramel characteristics, making them
              perfect for espresso blends. The lower growing altitudes and
              natural processing methods contribute to their mellow profile.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Burundi Coffee</h3>
            <p>
              Coffee from Burundi offers a unique combination of bright citrus
              acidity and deep, wine-like sweetness. These beans typically
              feature complex flavors of red fruit, orange, and honey, with a
              silky body and clean finish. The high-altitude growing conditions
              and careful processing create a distinguished cup profile.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Panamanian Geisha</h3>
            <p>
              Panama's Geisha coffee, particularly from the Boquete region, is
              among the world's most sought-after varieties. Known for its
              intensely floral aroma, delicate jasmine notes, and bergamot
              characteristics reminiscent of Earl Grey tea. These exceptional
              beans also feature complex layers of citrus and tropical fruit
              flavors.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>El Salvador Coffee</h3>
            <p>
              El Salvador produces coffee with a distinctive honey-like
              sweetness and smooth, medium body. These beans often display notes
              of apple, apricot, and chocolate, with a gentle citrus acidity.
              The country's Bourbon and Pacamara varieties are particularly
              celebrated for their complex flavor profiles.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Honduras Coffee</h3>
            <p>
              Honduran coffee offers a balanced profile with sweet chocolate
              notes and subtle fruit undertones. Growing at high altitudes,
              these beans develop a creamy body with flavors of caramel and
              vanilla, complemented by a gentle citrus brightness. The country's
              diverse growing regions produce beans with varying
              characteristics.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Choosing by Origin</h2>
          <p>
            When selecting coffee by origin, consider your flavor preferences:
            Choose Ethiopian or Kenyan beans for bright, complex flavors with
            high acidity. Colombian or Honduran coffee offers a balanced,
            approachable profile. Brazilian beans are perfect for those who love
            smooth, chocolatey notes or prefer low-acid coffee. For unique
            experiences, try Panamanian Geisha for floral complexity or Burundi
            for wine-like characteristics. Remember that while origin strongly
            influences flavor, roast level and brewing method also play
            important roles in your final cup.
          </p>
        </section>
      </main>
    </div>
  );
}
