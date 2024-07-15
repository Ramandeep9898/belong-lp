
import Link from "next/link";

export const BlogCard = ({ cardInfo }: any) => {
  const { title, link, thumbnail } = cardInfo;
  return (
    <Link href={link}>
      <div className="w-[252px] bg-[#FBF8F6]">
        <img src={thumbnail} alt="" className="rounded-md mb-3" height={"150px"} width={"150px"} />
        <p className=" text-start  text-base font-semibold">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}{" "}
        </p>
      </div>
    </Link>
  );
};
