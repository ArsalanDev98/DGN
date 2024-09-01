import React from 'react';
import Newsletter from '../components/Newsletter/Newsletter';
import Community from '../components/Community/Community';
import BlogWide from '../components/BlogWide/BlogWide';


const BlogPage: React.FC = () => {
  return (
    <>
      <BlogWide />
      <Community />
      <Newsletter />
    </>
  );
};

export default BlogPage;
