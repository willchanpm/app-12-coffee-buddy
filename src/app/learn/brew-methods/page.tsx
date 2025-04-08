import styles from "./brew-methods.module.css";
import Image from "next/image";

export default function BrewMethodsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Brewing Methods</h1>
        <p className={styles.intro}>
          Explore different ways to brew your perfect cup
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Understanding Brewing Methods</h2>
          <p>
            Each brewing method extracts coffee differently, highlighting
            various aspects of the bean&apos;s flavor profile. The key variables
            are time, temperature, grind size, and pressure. Understanding how
            these interact helps you choose the right method for your taste
            preferences.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/brew-methods.png"
              alt="Different coffee brewing methods and their characteristics"
              className={styles.categoryImage}
              width={600}
              height={400}
              priority
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Popular Methods</h2>

          <div className={styles.method}>
            <h3>Espresso</h3>
            <p>
              A concentrated shot of coffee brewed under high pressure,
              producing intense flavor and rich, creamy mouthfeel. It&apos;s the
              foundation for milk-based drinks like lattes and cappuccinos.
              Requires fine grounds and precise temperature control.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Pour Over</h3>
            <p>
              A manual brewing method that gives you complete control over the
              extraction process. Hot water is poured over medium-fine grounds
              in a circular motion. This method highlights the coffee&apos;s
              subtle flavors and produces a clean, bright cup.
            </p>
          </div>

          <div className={styles.method}>
            <h3>French Press</h3>
            <p>
              An immersion method using coarse grounds steeped in hot water. The
              metal mesh filter allows oils and fine particles through, creating
              a full-bodied cup with rich mouthfeel. It&apos;s simple to use but
              requires attention to timing.
            </p>
          </div>

          <div className={styles.method}>
            <h3>AeroPress</h3>
            <p>
              A versatile brewing device that combines immersion and pressure.
              It&apos;s quick, easy to clean, and produces a smooth cup with low
              acidity. The method is highly customizable, making it popular
              among coffee enthusiasts.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Cold Brew</h3>
            <p>
              Coarse grounds are steeped in cold water for 12-24 hours. This
              gentle extraction produces a smooth, low-acid concentrate that can
              be diluted with water or milk. Perfect for hot summer days and
              those sensitive to acid.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Choosing Your Method</h2>
          <p>
            Consider your lifestyle, time constraints, and flavor preferences
            when selecting a brewing method. Pour over might be perfect for
            those who enjoy a morning ritual and bright, clean flavors. Espresso
            suits those who love intense coffee or milk drinks. French press is
            great for sharing, while AeroPress is ideal for travel. Start with
            one method and master it before exploring others.
          </p>
        </section>
      </main>
    </div>
  );
}
