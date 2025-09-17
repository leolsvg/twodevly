import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group rounded-3xl border border-[#D5E1E4] bg-white overflow-hidden shadow-sm hover:shadow transition-shadow block"
    >
      <div className="aspect-video bg-[#F2F7F8] relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-[#5B7380] text-sm">
            Image / capture
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-[#3F5560]">{description}</p>
      </div>
    </Link>
  );
}
