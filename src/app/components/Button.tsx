import styles from "../../styles/components/button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick} type="button">
      {children}
    </button>
  );
}
