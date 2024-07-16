
import Link from "next/link";

const formatDate = (inputDate: string) => {
  // Parse the input date string
  const date = new Date(inputDate);

  // Options for formatting the output date
  const options = { day: 'numeric', month: 'short' };

  // Format the date using toLocaleDateString
  //@ts-ignore
  const formattedDate = date.toLocaleDateString('en-GB', options);

  return formattedDate;
}


export const BlogCard = ({ cardInfo }: any) => {
  const { title, link, thumbnail, pubDate } = cardInfo;

  return (
    <Link href={link}>
      <div className="w-[252px] bg-[#FBF8F6]">
        <img src={thumbnail} alt="" className="rounded-md mb-3" height={"150px"} width={"150px"} />
        <p className=" text-start mb-1  font-garnett text-base font-semibold">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}{" "}
        </p>
        <p className="text-left  font-garnett font-medium text-[#7E7C7B] text-sm">{formatDate(pubDate)} • 2 min read</p>
      </div>
    </Link>
  );
};
