import styles from "./milk-vs-black.module.css";
import Image from "next/image";

export default function MilkVsBlackPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Milk vs Black Coffee</h1>
        <p className={styles.intro}>
          Discover how milk affects coffee taste and learn which beans work best
          for your preferred brewing style
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>How Milk Changes Coffee</h2>
          <p>
            Adding milk to coffee creates a complex transformation of flavors
            and textures. Milk proteins and fats act as natural smoothing
            agents, softening the coffee&apos;s acidity and creating a more
            rounded mouthfeel. While this can make coffee more approachable, it
            can also mask some of the more delicate flavor notes, particularly
            in lighter roasts. Different types of milk - from whole dairy to
            alternatives like oat, almond, or soy - each bring their own
            characteristics to the cup, influencing both taste and texture in
            unique ways.
          </p>
          <Image
            src="/milk-vs-black.png"
            alt="Visual comparison of milk and black coffee styles"
            className={styles.featureImage}
            width={600}
            height={400}
            priority
          />
        </section>

        <section className={styles.section}>
          <h2>Best Beans for Milk</h2>
          <p>
            When choosing coffee to pair with milk, look for beans and roasts
            that can stand up to dairy&apos;s mellowing effects. Medium to dark
            roasted beans from Brazil and Colombia are excellent choices, as
            their pronounced chocolatey and nutty notes remain distinct even
            when mixed with milk. These origins often produce coffees with
            robust body and lower acidity, creating a harmonious blend with
            milk&apos;s creamy texture. Espresso blends are specifically crafted
            with milk drinks in mind, typically featuring a combination of beans
            that maintain their character while complementing milk&apos;s
            natural sweetness.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Best Beans for Black</h2>
          <p>
            Black coffee allows the full spectrum of a bean&apos;s
            characteristics to shine through. Light to medium roasts from
            Ethiopian and Kenyan origins are particularly celebrated when served
            black, as their bright, complex profiles can be fully appreciated.
            These beans often feature vibrant fruit notes, floral aromatics, and
            a wine-like acidity that would otherwise be muted by milk.
            Single-origin beans from these regions tell a unique story of their
            terroir through distinct flavor notes - from Ethiopian
            Yirgacheffe&apos;s jasmine and bergamot to Kenyan AA&apos;s
            blackcurrant and citrus highlights.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Dairy vs Plant-Based Milk</h2>
          <div className={styles.milkType}>
            <h3>Dairy Milk</h3>
            <p>
              Traditional dairy milk offers a naturally creamy texture and
              subtle sweetness that perfectly balances coffee&apos;s bitterness.
              Its protein content and fat structure make it especially good for
              espresso-based drinks, creating silky microfoam and enhancing the
              overall mouthfeel.
            </p>
          </div>

          <div className={styles.milkType}>
            <h3>Oat Milk</h3>
            <p>
              Among plant-based alternatives, oat milk has gained popularity for
              its smooth, slightly sweet profile and excellent mouthfeel. It
              complements most coffee styles without overpowering them, making
              it a versatile choice for both hot and cold drinks. Its natural
              creaminess makes it a favorite among baristas.
            </p>
          </div>

          <div className={styles.milkType}>
            <h3>Soy Milk</h3>
            <p>
              Soy milk provides a relatively neutral flavor profile and higher
              protein content compared to other plant-based options. While it
              works well in many coffee drinks, it can sometimes separate when
              added to hot coffee or react differently to various brewing
              methods. Temperature and acidity play crucial roles in its
              behavior.
            </p>
          </div>

          <div className={styles.milkType}>
            <h3>Almond Milk</h3>
            <p>
              With its distinctive nutty flavor and thinner consistency, almond
              milk can add an interesting dimension to coffee drinks. However,
              its lower fat content and potential to clash with coffee&apos;s
              natural acidity means it may not perform as well in hot beverages
              or with particularly acidic coffee varieties.
            </p>
          </div>

          <div className={styles.milkType}>
            <h3>Coconut Milk</h3>
            <p>
              Coconut milk brings a unique tropical note to coffee drinks and
              works particularly well in iced or flavored beverages. Its rich,
              creamy texture can enhance certain coffee styles, though its
              distinctive flavor may not suit all taste preferences. It&apos;s
              especially popular in cold brew and specialty drinks.
            </p>
          </div>

          <p className={styles.note}>
            For the best results when making milk-based coffee drinks at home,
            look for &quot;barista&quot; versions of plant-based milks. These are
            specifically formulated to steam better, create smoother microfoam,
            and resist separation when mixed with hot coffee.
          </p>
        </section>
      </main>
    </div>
  );
}
