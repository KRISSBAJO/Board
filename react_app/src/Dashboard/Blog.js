// Blog.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  pic1 from '../assets/images/doc3.png';
import  pic2 from '../assets/images/doc4.png';
import  pic3 from '../assets/images/doc5.png';
import  pic4 from '../assets/images/doc6.png';
import { faCalendar, faUser, faClock, faTags, faComments, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const BlogPostCard = ({ post }) => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {post.category}
          </div>
          <a href={post.link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {post.title}
          </a>
          <p className="mt-2 text-gray-500">
            {post.excerpt}
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center text-sm">
              <FontAwesomeIcon icon={faCalendar} className="text-gray-500 mr-2" />
              <span className="text-gray-500">{post.date}</span>
            </div>
            <div className="flex items-center text-sm">
              <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
              <span className="text-gray-500">{post.author}</span>
            </div>
            <div className="flex items-center text-sm">
              <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-2" />
              <span className="text-gray-500">{post.readTime}</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap items-center text-sm">
              <FontAwesomeIcon icon={faTags} className="text-gray-500 mr-2" />
              {post.tags.map(tag => (
                <span key={tag} className="mr-2 bg-indigo-100 text-indigo-500 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={post.imageUrl} alt="Blog cover" />
        </div>
      </div>
      <div className="px-8 py-4 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center text-sm">
          <FontAwesomeIcon icon={faComments} className="text-gray-500 mr-2" />
          <span className="text-gray-500">{post.commentsCount} Comments</span>
        </div>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon icon={faShareAlt} className="text-gray-500 mr-2" />
          <span className="text-gray-500">Share</span>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
    const blogPosts = [
        {
          title: "5 Essential Tips for a Relaxing Massage Experience",
          link: "#",
          category: "Massage",
          date: "Feb 10, 2023",
          author: "John Smith",
          readTime: "7 min read",
          tags: ["Wellness", "Massage", "Relaxation"],
          commentsCount: 5,
          excerpt: "Discover the art of relaxation with these professional massage techniques...",
          imageUrl: pic1
        },
        {
          title: "The Art of Hair Care: Trends for 2023",
          link: "#",
          category: "Hair Care",
          date: "Mar 5, 2023",
          author: "Emma Williams",
          readTime: "6 min read",
          tags: ["Beauty", "Hair Care", "Trends"],
          commentsCount: 4,
          excerpt: "Stay ahead of the hair care curve with these upcoming trends that are set to make a splash...",
          imageUrl: pic2
        },
        {
          title: "Integrative Approaches to Health and Wellness",
          link: "#",
          category: "Healthcare",
          date: "Apr 15, 2023",
          author: "Dr. Linda Brown",
          readTime: "8 min read",
          tags: ["Healthcare", "Holistic", "Wellness"],
          commentsCount: 10,
          excerpt: "Explore how integrative medicine combines traditional and alternative therapies for your well-being...",
          imageUrl: pic3
        },
        {
          title: "Transformative Skin Care Routines with Natural Ingredients",
          link: "#",
          category: "Salon",
          date: "May 20, 2023",
          author: "Sophie Turner",
          readTime: "5 min read",
          tags: ["Skincare", "Natural", "Beauty"],
          commentsCount: 8,
          excerpt: "Learn how to elevate your skin care routine using the power of natural ingredients...",
          imageUrl: pic4
        },
        // ... more blog posts if needed
    ];
    

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest Blog Posts</h1>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
