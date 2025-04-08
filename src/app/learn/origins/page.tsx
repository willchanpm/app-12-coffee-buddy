import styles from "./origins.module.css";
import Image from "next/image";

export default function OriginsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Bean Origins</h1>
        <p className={styles.intro}>
          Discover how different growing regions shape coffee&apos;s taste and
          character. Each origin&apos;s unique climate, soil, and altitude
          create distinct flavor profiles.
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Understanding Origins</h2>
          <p>
            Coffee grows in the &quot;bean belt&quot; between the Tropics of
            Cancer and Capricorn. Each region&apos;s unique combination of
            altitude, climate, and soil creates distinct flavor characteristics
            in the beans.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/coffee-bean-origins.png"
              alt="Map showing major coffee growing regions and their characteristics"
              className={styles.categoryImage}
              width={600}
              height={400}
              priority
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Major Growing Regions</h2>

          <div className={styles.origin}>
            <h3>Ethiopia</h3>
            <p>
              The birthplace of coffee, Ethiopia produces beans with bright,
              complex flavors. High altitudes and diverse heirloom varieties
              create distinctive profiles featuring floral notes, bright
              acidity, and berry or wine-like qualities. Ethiopia&apos;s natural
              processing tradition adds fruit-forward sweetness to many of its
              coffees.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Colombia</h3>
            <p>
              Colombian coffee is known for its balanced profile and consistent
              quality. The country&apos;s varied microclimates produce beans
              with medium body, caramel sweetness, and subtle fruit notes.
              Careful processing and strict quality controls help maintain
              Colombia&apos;s reputation for excellence.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Brazil</h3>
            <p>
              As the world&apos;s largest coffee producer, Brazil offers a wide
              range of flavors. Lower-altitude growing regions typically produce
              full-bodied coffees with chocolate and nut notes, low acidity, and
              excellent sweetness. These characteristics make Brazilian beans
              perfect for espresso blends.
            </p>
          </div>

          <div className={styles.origin}>
            <h3>Guatemala</h3>
            <p>
              Guatemalan coffee is grown at high altitudes in volcanic soil,
              producing complex cups with bright acidity and full body.
              Different regions offer distinct profiles, from spicy and smoky to
              floral and fruity. The country&apos;s varied microclimates create
              eight distinct coffee-growing regions.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>How Geography Affects Flavor</h2>
          <p>
            Several factors influence a coffee&apos;s taste profile. Altitude
            affects bean density and complexity - higher grown coffees typically
            develop more intricate flavors. Soil composition impacts nutrient
            uptake and flavor development, with volcanic soils often producing
            bright, clean tastes. Climate conditions during growing and
            harvesting seasons also play crucial roles in flavor development.
          </p>
        </section>
      </main>
    </div>
  );
}
