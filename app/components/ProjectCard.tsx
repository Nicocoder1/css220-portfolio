import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  href?: string;
}

export default function ProjectCard({ title, description, tech, image = "/next.svg", href }: Props) {
  return (
    <article className="bg-[var(--card)]/80 border-2 dark:border-white border-black rounded-xl p-4 hover:scale-[1.01] transition w-full h-full flex flex-col justify-between">
      <div className="w-full h-40 relative rounded-md overflow-hidden mb-3">
        <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-4" />
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-[var(--muted)] mt-2">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/3">{t}</span>
        ))}
      </div>

      {href ? (
        <a href={href} className="mt-3 inline-block text-sm text-[var(--accent)]">Learn more →</a>
      ) : null}
    </article>
  );
}
