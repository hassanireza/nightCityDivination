export function SectionDivider(): JSX.Element {
  return (
    <section className="section-divider" aria-hidden="true">
      <div className="divider-line" />
      <div className="divider-symbol">
        <span>✦</span><span>THE 22 ARCANA</span><span>✦</span>
      </div>
      <div className="divider-line" />
    </section>
  );
}
