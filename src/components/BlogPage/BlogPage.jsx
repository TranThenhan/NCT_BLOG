import BlogItem from "./BlogItem/BlogItem";
import "./blog.css";
import img from "../../image/Group 7.png";

export default function BlogPage() {
  return (
    <>
      <div className="blog-title">
        <img src={img} alt="#"/>
      </div>
      <div className="blog-content">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </>
  );
}
