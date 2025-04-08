import styles from "./learn.module.css";
import Link from "next/link";

interface LearnSection {
  title: string;
  description: string;
  route: string;
}

const sections: LearnSection[] = [
  {
    title: "Coffee Bean Origins",
    description:
      "Discover how beans from Ethiopia, Colombia, Brazil, and more differ in flavour and feel.",
    route: "/learn/origins",
  },
  {
    title: "Processing Methods",
    description:
      "Learn about natural, washed, and honey processing and how they shape your cup.",
    route: "/learn/processing",
  },
  {
    title: "Roast Levels",
    description:
      "Understand light, medium, and dark roasts and how they affect flavour and brewing.",
    route: "/learn/roasts",
  },
  {
    title: "Brew Methods",
    description:
      "Explore different ways to brew your coffee, from espresso to pour over.",
    route: "/learn/brew-methods",
  },
  {
    title: "Flavour Profiles",
    description:
      "Fruity, chocolatey, nutty, or floral — decode the flavours in your cup.",
    route: "/learn/flavour-profiles",
  },
  {
    title: "Milk vs Black",
    description: "How your choice of milk changes the coffee experience.",
    route: "/learn/milk-vs-black",
  },
];

export default function LearnPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        <h1>Coffee Knowledge Hub</h1>
        <p className={styles.intro}>
          Explore the world of coffee — learn about beans, brew methods, flavour
          profiles and more.
        </p>
      </header>

      <main className={styles.grid}>
        {sections.map((section) => (
          <a key={section.route} href={section.route} className={styles.card}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </a>
        ))}
      </main>
    </div>
  );
}
