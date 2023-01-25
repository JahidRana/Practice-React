import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../Json/BlogData";
function Blog() {
  const [blogs, setblogs] = useState(BlogData);

  const trunCate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <section>
        {blogs.map((blogData) => {
          const { id, title, body } = blogData;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{trunCate(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Blog;
