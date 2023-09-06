import styles from "/searchFilter.module.css";

interface SearchFilterProps {
  label: string;
  options: string[];
  onChange: (name:string, value: string) => void;
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
        onChange={(e) => onChange(label, e.target.value)}
      >
        {options.map((option, index) => (
          <option key={option} value={option} selected={index === 0}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
