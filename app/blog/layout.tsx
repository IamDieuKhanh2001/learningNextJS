import React, { ReactNode } from 'react';

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Header blog</h1>
      {children}
    </div>
  );
};

export default BlogLayout;

