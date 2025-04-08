import CoffeeQuiz from "./components/CoffeeQuiz";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Coffee Buddy</h1>
        <p className={styles.description}>Find your perfect coffee match!</p>
        <CoffeeQuiz />
        <Link href="/learn" className={styles.learnLink}>
          Want to learn more about coffee?
        </Link>
      </main>
    </div>
  );
}
