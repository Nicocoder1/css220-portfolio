export default function SkillsSection() {
  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"];

  return (
    <ul className="flex flex-wrap gap-3">
      {skills.map((s) => (
        <li key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
          {s}
        </li>
      ))}
    </ul>
  );
}
