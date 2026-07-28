import styles from "./Button.module.css";

type ButtonVariant = "solid" | "line";

interface CommonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type AnchorProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

const classFor = (variant: ButtonVariant, extra?: string) =>
  [styles.btn, variant === "solid" ? styles.solid : styles.line, extra].filter(Boolean).join(" ");

/** Renders an <a> when `href` is given, a <button> otherwise. */
export function Button(props: AnchorProps | NativeProps) {
  if (props.href !== undefined) {
    const { variant = "solid", className, children, ...rest } = props;
    return (
      <a className={classFor(variant, className)} {...rest}>
        {children}
      </a>
    );
  }
  const { variant = "solid", className, children, ...rest } = props;
  return (
    <button className={classFor(variant, className)} {...rest}>
      {children}
    </button>
  );
}
