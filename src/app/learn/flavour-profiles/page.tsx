import styles from "./flavour-profiles.module.css";
import Image from "next/image";

export default function FlavourProfilesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Flavour Profiles</h1>
        <p className={styles.intro}>
          Discover the diverse world of coffee flavours and learn what shapes
          your cup&apos;s taste
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>What Affects Flavour?</h2>
          <p>
            Coffee&apos;s complex flavour profile is influenced by multiple
            factors throughout its journey from seed to cup. The origin of the
            beans plays a crucial role, with different regions producing
            distinct taste characteristics due to their unique soil, climate,
            and altitude. The processing method - whether natural, washed, or
            honey - significantly impacts the final flavour development. Roast
            level transforms these inherent qualities, while your chosen brewing
            method determines how these flavours are extracted into your cup.
          </p>
          <Image
            src="/flavour-profile.png"
            alt="Coffee flavor profile categories showing Fruity (Citrus), Floral (Jasmine), Chocolatey (Nutty), Spicy (Earthy), Nutty (Berry), and Earthy flavors"
            className={styles.categoryImage}
            width={600}
            height={400}
            priority
          />
          <Image
            src="/flavour-wheel.png"
            alt="Coffee flavour wheel showing different taste profiles"
            className={styles.flavorImage}
            width={600}
            height={400}
          />
        </section>

        <section className={styles.section}>
          <h2>Common Flavour Families</h2>
          <div className={styles.profile}>
            <h3>Fruity Notes</h3>
            <p>
              Bright citrus, sweet berries, and tropical fruit notes are often
              found in light roasts and naturally processed coffees. These
              flavours are particularly prominent in African coffees, especially
              those from Ethiopia and Kenya. You might taste notes of lemon,
              blueberry, or even mango in these vibrant cups.
            </p>
          </div>

          <div className={styles.profile}>
            <h3>Chocolatey & Nutty</h3>
            <p>
              Rich cocoa, smooth almond, and toasted hazelnut notes are
              hallmarks of medium roasts, particularly from South American
              origins like Brazil and Colombia. These comforting flavours often
              come with a creamy body and make excellent everyday drinking
              coffees.
            </p>
          </div>

          <div className={styles.profile}>
            <h3>Floral & Tea-like</h3>
            <p>
              Delicate jasmine, subtle bergamot, and elegant tea-like qualities
              are typically found in Ethiopian coffees and light roasts. These
              refined flavours often come with a lighter body and complex aroma
              that evolves as the coffee cools.
            </p>
          </div>

          <div className={styles.profile}>
            <h3>Spicy & Earthy</h3>
            <p>
              Warming cinnamon, aromatic clove, and deep tobacco notes are more
              prevalent in darker roasts and Indonesian coffees. These bold
              flavours often accompany a full body and lasting finish, perfect
              for those who enjoy intense cups.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Acidity vs Sweetness vs Bitterness</h2>
          <p>
            Acidity in coffee presents as a bright, lively sensation - think of
            biting into a fresh apple or grape. It adds vibrancy to the cup and
            is more prominent in light roasts. Sweetness manifests as pleasant,
            smooth notes reminiscent of caramel, honey, or fruit sugars,
            providing balance to the cup. Bitterness, while natural in coffee,
            should be balanced - think dark chocolate rather than burnt toast.
            Your preference among these characteristics will guide you toward
            certain origins and roast levels.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Discovering Your Preferences</h2>
          <p>
            The best way to develop your palate is through mindful
            experimentation. Start with a coffee flavour wheel as your guide and
            taste across different origins and roast levels. Try cupping
            sessions or guided tastings at local roasteries. Take notes on what
            you enjoy and look for patterns in your preferences. Remember that
            taste is subjective - there&apos;s no wrong choice as long as you enjoy
            what&apos;s in your cup. Consider starting with medium roasts from Brazil
            or Colombia as a baseline, then explore lighter or darker profiles
            to discover your perfect cup.
          </p>
        </section>
      </main>
    </div>
  );
}
