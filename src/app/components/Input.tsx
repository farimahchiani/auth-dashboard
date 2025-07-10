import styles from "../../styles/components/input.module.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export default function Input({ value, onChange, placeholder, type = "text" }: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
