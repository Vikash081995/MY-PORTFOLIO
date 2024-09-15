import React from "react";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  return (
    <div>
      <h1>BlogDetails page</h1>
      <p>{blogId}</p>
    </div>
  );
};

export default BlogDetails;
