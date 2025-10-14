import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
      <div className="sm:col-span-2 prose dark:prose-invert max-w-none">
        <p>
          I study computer science and build software. I enjoy learning about AI,
          systems, and creating useful products that help people. Currently
          focused on frontend engineering and intuitive design systems.
        </p>
      </div>

      <div className="sm:col-span-1 flex justify-center sm:justify-end">
        <div className="w-40 h-40 rounded-full overflow-hidden border border-white/10">
          <Image src="/next.svg" alt="avatar" width={160} height={160} />
        </div>
      </div>
    </div>
  );
}
