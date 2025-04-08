import styles from "./processing.module.css";
import Image from "next/image";

export default function ProcessingPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Processing Methods</h1>
        <p className={styles.intro}>
          Discover how different processing techniques shape the flavor of your
          coffee
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>What is Processing?</h2>
          <p>
            Coffee processing refers to the method used to remove the fruit
            (cherry) from the coffee bean after harvesting. This crucial step
            not only prepares the beans for roasting but significantly
            influences their final flavor, aroma, and mouthfeel. The time,
            environment, and technique used during processing can enhance
            certain characteristics while minimizing others, giving roasters and
            coffee lovers more options for their perfect cup.
          </p>
          <Image
            src="/processing-methods.png"
            alt="Different coffee processing methods and their effects on flavor"
            className={styles.processingImage}
            width={600}
            height={400}
            priority
          />
        </section>

        <section className={styles.section}>
          <h2>Traditional Methods</h2>

          <div className={styles.method}>
            <h3>Natural Process</h3>
            <p>
              In the natural (dry) process, coffee cherries are dried with the
              fruit intact, allowing the beans to absorb sugars and compounds
              from the cherry. This oldest processing method typically produces
              coffee with pronounced fruit flavors, full body, and bold
              sweetness. Natural processed coffees often exhibit berry, wine,
              and tropical fruit notes with a syrupy body.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Washed Process</h3>
            <p>
              The washed (wet) process removes all fruit before drying,
              resulting in coffee that clearly expresses the bean&apos;s
              inherent characteristics. This method typically produces cleaner,
              brighter flavors with pronounced acidity and clarity. Washed
              coffees often showcase floral notes, citrus brightness, and
              tea-like clarity with a crisp, clean finish.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Honey Process</h3>
            <p>
              In honey processing, some of the fruit mucilage remains on the
              bean during drying. The amount left on determines the process type
              (white, yellow, red, or black honey). This method creates a
              balanced cup profile with enhanced sweetness and body while
              maintaining some clarity. Expect notes of caramel, honey, and
              stone fruits with a silky mouthfeel.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Experimental Methods</h2>

          <div className={styles.method}>
            <h3>Anaerobic Fermentation</h3>
            <p>
              Beans are fermented in sealed, oxygen-free tanks, allowing for
              precise control over the fermentation environment. This method can
              produce incredibly complex flavor profiles with intense fruit
              notes, wine-like acidity, and unique aromatic compounds. The
              controlled environment ensures consistency while pushing flavor
              boundaries.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Carbonic Maceration</h3>
            <p>
              Borrowed from wine-making, this method involves fermenting whole
              cherries in a carbon dioxide-rich environment. The result is often
              spectacular: funky, wild profiles with intense fruit
              characteristics and complex acidity. Expect bold tropical fruit
              notes, wine-like qualities, and sometimes even cola or spice
              notes.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Thermal Shock</h3>
            <p>
              After fermentation, beans are rapidly cooled to halt the process
              and lock in specific flavor compounds. This technique can either
              enhance clarity in clean, bright profiles or intensify wild,
              experimental notes. The quick temperature change creates distinct
              flavor separation and can highlight unique characteristics.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Lactic Fermentation</h3>
            <p>
              This process uses specific bacteria to promote lactic acid
              fermentation, similar to yogurt production. The result is coffee
              with pronounced creamy, smooth characteristics and often
              dairy-like notes. Expect buttery mouthfeel, subtle sweetness, and
              complex milk chocolate or cream notes.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Co-fermentation</h3>
            <p>
              In this innovative approach, coffee is fermented alongside other
              ingredients like fruits, spices, or yeasts. This can create
              entirely new flavor profiles and unexpected combinations. While
              controversial among purists, it represents the cutting edge of
              coffee processing experimentation.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Choosing a Process</h2>
          <p>
            Your choice of processing method should align with your taste
            preferences and coffee adventure level. For clean, predictable
            flavors that showcase the bean&apos;s origin characteristics, opt
            for washed coffees. Natural processed beans offer bold, fruity
            profiles perfect for those who enjoy wine-like complexity. Honey
            process provides a middle ground with balanced sweetness and
            clarity. Experimental methods are ideal for adventurous coffee
            enthusiasts seeking unique and intense flavor experiences — but be
            prepared for surprising and sometimes challenging cup profiles.
          </p>
        </section>
      </main>
    </div>
  );
}
