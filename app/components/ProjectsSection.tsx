export default function ProjectsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <article className="p-4 border rounded-lg">
        <h3 className="font-semibold">Project One</h3>
        <p className="text-sm text-gray-600 mt-2">A short description of project one.</p>
      </article>
      <article className="p-4 border rounded-lg">
        <h3 className="font-semibold">Project Two</h3>
        <p className="text-sm text-gray-600 mt-2">A short description of project two.</p>
      </article>
    </div>
  );
}
