import styles from "./StarList.module.css";

interface StarListProps {
  items: string[];
}

export function StarList({ items }: StarListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
