import styles from "./brew-methods.module.css";

export default function BrewMethodsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/learn" className={styles.backLink}>
          ← Back to Knowledge Hub
        </a>
        <h1>Coffee Brewing Methods</h1>
        <p className={styles.intro}>
          Explore different ways to brew coffee and how each method shapes your
          cup
        </p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2>Why Brew Method Matters</h2>
          <p>
            The way you brew your coffee is just as important as the beans
            themselves. Each brewing method extracts flavors differently,
            affecting everything from body and acidity to aroma and mouthfeel.
            Different methods suit different beans and roasts, allowing you to
            highlight specific characteristics or create your perfect cup.
            Understanding these methods helps you match them with your preferred
            coffee style and daily routine.
          </p>
          <img
            src="/brew-methods.png"
            alt="Various coffee brewing methods and their characteristics"
            className={styles.brewImage}
          />
        </section>

        <section className={styles.section}>
          <h2>Filter Methods</h2>

          <div className={styles.method}>
            <h3>Pour Over</h3>
            <p>
              Methods like V60 and Chemex offer exceptional clarity and clean
              cups that highlight complex flavor notes. The paper filter removes
              oils and fine particles, resulting in a light-bodied coffee that
              emphasizes bright, delicate flavors. This method is perfect for
              light to medium roasts where you want to showcase subtle
              characteristics and origin flavors.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Aeropress</h3>
            <p>
              This versatile and portable brewer creates a clean yet rich cup
              with medium body. Its pressure brewing combines elements of
              immersion and filter methods, offering great flexibility in recipe
              experimentation. The Aeropress works well with any roast level and
              can produce both American-style coffee and a concentrated shot
              similar to espresso.
            </p>
          </div>

          <div className={styles.method}>
            <h3>French Press</h3>
            <p>
              The immersion brewing of a French Press produces full-bodied
              coffee with rich mouthfeel and robust flavor. Without paper
              filtration, more oils and fine particles remain, creating a bolder
              cup with some pleasant grittiness. This method particularly suits
              medium to dark roasts, highlighting their chocolate and nutty
              notes while maintaining complexity.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Espresso-Based Methods</h2>

          <div className={styles.method}>
            <h3>Espresso Machine</h3>
            <p>
              The hallmark of café culture, espresso machines use high pressure
              to produce intense, concentrated shots with rich crema. This
              method extracts bold flavors and creates a uniquely creamy
              mouthfeel. It's the foundation for milk-based drinks like lattes
              and cappuccinos, where the coffee's intensity can shine through
              dairy. Espresso particularly suits medium to dark roasts.
            </p>
            <div className={styles.subMethod}>
              <h4>Manual Lever Machines</h4>
              <p>
                These traditional machines give complete control over the
                extraction process. By manually operating the lever, you control
                pressure profiling and extraction time. While they require
                significant skill and experience, lever machines can produce
                exceptional shots with unique pressure profiles that highlight
                different flavor aspects.
              </p>
            </div>
            <div className={styles.subMethod}>
              <h4>Semi-Automatic Machines</h4>
              <p>
                The most common type for home baristas, semi-automatic machines
                handle pressure and temperature while letting you control grind
                size, dose, and shot timing. They typically use a portafilter
                system where you manually load and tamp the coffee. This balance
                of control and consistency makes them ideal for developing your
                espresso craft.
              </p>
            </div>
            <div className={styles.subMethod}>
              <h4>Automatic Machines</h4>
              <p>
                These machines control most variables including shot timing,
                while still using a portafilter system. They're popular in busy
                cafés where consistency is crucial. Some models offer
                programmable profiles for different coffees, combining
                convenience with flexibility.
              </p>
            </div>
            <div className={styles.subMethod}>
              <h4>Super-Automatic Machines</h4>
              <p>
                All-in-one machines that handle everything from grinding to
                brewing. While they offer less control, they provide
                convenience and consistency. Many models allow customization
                of strength, temperature, and milk frothing, making them
                suitable for offices or homes prioritizing ease of use.
              </p>
            </div>
          </div>

          <div className={styles.method}>
            <h3>Moka Pot</h3>
            <p>
              This stovetop brewer creates a strong, espresso-like coffee using
              steam pressure. While not true espresso, it produces a rich,
              concentrated brew with some sediment. The Moka Pot offers an
              accessible way to make strong coffee at home, ideal for those who
              enjoy bold flavors but don't want to invest in an espresso
              machine.
            </p>
          </div>

          <div className={styles.method}>
            <h3>Capsule Machine</h3>
            <p>
              Modern capsule systems offer convenience and consistency,
              producing espresso-style coffee at the touch of a button. While
              they provide less control over brewing variables, they're perfect
              for those who value speed and reliability. The sealed capsules
              maintain freshness, though they limit your choice of coffee and
              customization options.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Choosing a Method</h2>
          <p>
            Your ideal brewing method depends on several factors. Consider your
            daily routine - do you need something quick like a capsule machine,
            or do you enjoy the ritual of pour-over? Think about your flavor
            preferences: filter methods for clean, bright flavors; French Press
            for full body; espresso for intensity. Also consider your investment
            level in terms of both time and equipment. Start with one method
            that matches your needs, then explore others as your coffee journey
            evolves.
          </p>
        </section>
      </main>
    </div>
  );
}
