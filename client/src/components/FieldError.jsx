export default function FieldError({ children }) {
  if (!children) return null;
  return (
    <p className="field-error" role="alert">
      {children}
    </p>
  );
}