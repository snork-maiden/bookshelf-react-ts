import styles from "./searchFilter.module.css";

interface SearchFilterProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function SearchFilter({
  label,
  options,
  onChange,
}: SearchFilterProps) {
  return (
    <label className={styles.selectLabel}>
      {label}
      <select
        name={label}
        id={label}
        className={styles.select}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={options[0]}
      >
        {options.map((option, index) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
