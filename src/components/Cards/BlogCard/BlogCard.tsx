import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ cardInfo }: any) => {
  const { title, link, thumbnail } = cardInfo;
  return (
    <Link href={link}>
      <div className="w-[252px] bg-[#FBF8F6]">
        <Image src={thumbnail} alt="" className="rounded-md mb-3" height={150} />
        <p className=" text-start  text-base font-semibold">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}{" "}
        </p>
      </div>
    </Link>
  );
};
