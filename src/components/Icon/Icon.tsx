import styles from './Icon.module.css';

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  name,
  width = 24,
  height = 24,
  className,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className ? `${styles.icon} ${className}` : styles.icon}
      aria-hidden="true"
    >
      <use href={`/icons/symbol-defs.svg#icon-${name}`} />
    </svg>
  );
}
