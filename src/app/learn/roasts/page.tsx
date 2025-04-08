import styles from "./roasts.module.css";
import Image from "next/image";

export default function RoastPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Roast Levels</h1>
        <p className={styles.intro}>
          Discover how roasting transforms coffee&apos;s flavor and character
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Understanding Roast Levels</h2>
          <p>
            The roasting process is where coffee&apos;s inherent flavors are
            developed and transformed. As beans absorb heat, they undergo
            significant physical and chemical changes that affect their taste,
            aroma, and appearance. The roaster&apos;s skill lies in knowing
            exactly when to stop the process to achieve the desired flavor
            profile.
          </p>
          <Image
            src="/coffee-roasts.png"
            alt="Different coffee roast levels and their characteristics"
            className={styles.roastImage}
            width={600}
            height={400}
          />
        </section>

        <section className={styles.section}>
          <h2>What is Roast Level?</h2>
          <p>
            Coffee roasting is the transformative process that turns raw, green
            coffee beans into the aromatic brown beans we know. During roasting,
            beans undergo complex chemical changes as they&apos;re heated,
            developing their flavor, aroma, and color. The roast level
            significantly influences everything from acidity and sweetness to
            body and bitterness, allowing roasters to highlight different
            characteristics in each bean.
          </p>

        </section>

        <section className={styles.section}>
          <h2>Common Roast Types</h2>

          <div className={styles.roastType}>
            <h3>Light Roast</h3>
            <p>
              Light roasts preserve more of the bean&apos;s original character,
              allowing the unique flavors from its origin to shine through.
              These roasts typically feature bright acidity, complex flavor
              notes like citrus and florals, and a lighter body. The beans have
              a dry surface and light brown color, with no oil showing. Light
              roasts often reveal delicate tea-like qualities and fruit-forward
              profiles that showcase the bean&apos;s terroir.
            </p>
          </div>

          <div className={styles.roastType}>
            <h3>Medium Roast</h3>
            <p>
              Medium roasts strike a perfect balance between origin
              characteristics and roast-induced flavors. These beans display a
              rich brown color and develop more body while maintaining some
              bright notes. You&apos;ll find enhanced sweetness, smooth
              chocolate or caramel notes, and a well-rounded flavor profile that
              appeals to most palates. The balanced nature of medium roasts
              makes them incredibly versatile.
            </p>
          </div>

          <div className={styles.roastType}>
            <h3>Dark Roast</h3>
            <p>
              Dark roasts transform beans into deep brown, oily specimens with
              bold, intense flavors. The extended roasting develops bitter-sweet
              characteristics, pronounced body, and significantly reduced
              acidity. These roasts often feature rich, smoky notes, dark
              chocolate bitterness, and sometimes hints of spice. While origin
              characteristics become less distinct, dark roasts offer their own
              complex and satisfying flavor profile.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Choosing the Right Roast</h2>
          <p>
            Your choice of roast level should align with both your taste
            preferences and brewing method. Light roasts excel in filter brewing
            methods like pour-over or drip coffee, where their delicate flavors
            and origin characteristics can be fully appreciated. Medium roasts
            offer exceptional versatility, performing well across all brewing
            methods from French press to drip coffee. Dark roasts shine in
            espresso preparation and milk-based drinks, where their bold flavors
            can cut through dairy and create rich, satisfying beverages.
          </p>
          <p>
            Consider starting with a medium roast if you&apos;re new to
            specialty coffee, then explore lighter or darker roasts based on
            your preferences. If you enjoy bright, complex flavors, try light
            roasts. For bold, intense coffee with lower acidity, dark roasts
            might be your perfect match.
          </p>
        </section>
      </main>
    </div>
  );
}
