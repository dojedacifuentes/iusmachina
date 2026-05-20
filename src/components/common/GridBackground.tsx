export function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.71 0.17 200 / 0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 100% 80%, oklch(0.55 0.22 264 / 0.04) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}
