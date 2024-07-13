import { useQuery } from "react-query";
import { GET_BLOGS } from "@/utils/endpoints";

export const getBlogsList = async () => {
  console.log("hi");
  
  try {
    const response = await fetch(GET_BLOGS);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("data", data); 

    return data; 
    } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
};

const getBlogs = (options?: any) => {
  return useQuery({
    queryKey: ["get_blogs"],
    queryFn: getBlogsList,
    ...options,
  });
};

export default getBlogs;
