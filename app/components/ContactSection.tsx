export default function ContactSection() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-[var(--muted)]">Interested in working together? Reach out:</p>
      <a href="mailto:nikosoriagomez@gmail.com" className="text-sm font-medium text-[var(--accent)] hover:underline">nikosoriagomez@gmail.com</a>

      <div className="flex gap-4 mt-2">
        <a href="https://instagram.com/nikosoriag" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)]">Instagram</a>
        <a href="https://facebook.com/nicolas.soria" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)]">Facebook</a>
      </div>
    </div>
  );
}
