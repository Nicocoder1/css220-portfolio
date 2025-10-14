"use client";
interface Skill {
  icon: string;
  name: string;
  proficiency: number;
}

interface SkillsWidgetProps {
  title: string;
  content: string;
  skills: Skill[];
}

export default function SkillsWidget({ title, content, skills }: SkillsWidgetProps) {
 return (
    <section
      data-testid="skillsWidget"
      className="my-20 px-6 py-10 rounded-2xl border border-white/10 bg-[var(--card)] shadow-xl hover:shadow-[0_0_25px_var(--ring)] transition-all duration-300"
    >
      <h2
        data-testid="skillsWidgetTitle"
        className="text-3xl font-semibold mb-4 text-[var(--fg)] tracking-tight"
      >
        {title}
      </h2>
      <p
        data-testid="skillsWidgetContent"
        className="text-[var(--muted)] mb-8 max-w-2xl"
      >
        {content}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4">
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="w-12 h-12 rounded-lg border border-white/10 p-2 bg-[var(--bg)]/40"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-[var(--fg)]">
                {item.name}
              </h3>
              <div className="w-full h-2 bg-[var(--muted)]/20 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-[var(--accent)] rounded-full transition-all duration-700"
                  style={{ width: `${item.proficiency}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
