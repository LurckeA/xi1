import Link from "next/link";
import styles from "./SideButtons.module.css"; 

export default function SideButtons({ href, emoji, label }: { href: string; emoji: string; label: string }) {
  return (
    <Link href={href}>
        <div className={styles.navButton}>
            <div className={styles.emoji}>{emoji}</div>
            <div className={styles.label}>{label}</div>
        </div>
    </Link>
  );
}
