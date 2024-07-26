import Image from "next/image";
import logo from "@/assets/logoBlackNav.svg";
import { Button } from "../Button/Button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="absolute z-50 flex justify-between w-full px-20 py-6 top-0">
      <Image src={logo} alt="" className="w-28" />
      <div className="flex gap-8">
        <Link href={" https://getbelong.com/blog"}>
          <Button variant={"ghost"} className=" font-garnett">
            Blogs
          </Button>
        </Link>
        {/* <Button className=" font-garnett">Get Early Access</Button> */}
      </div>
    </nav>
  );
};
