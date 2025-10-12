// "use client";

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
// import {
//   Search,
//   Calendar,
//   Clock,
//   User,
//   ArrowRight,
//   Tag
// } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { formatDate } from '@/lib/utils';

// const categories = ['All', 'Web Development', 'Design', 'JavaScript', 'React', 'Tutorials', 'Industry News'];

// const blogPosts = [
//   {
//     id: 1,
//     title: 'The Future of Web Development in 2024',
//     excerpt: 'Exploring emerging trends, new frameworks, and technologies that will shape the web development landscape in the coming year.',
//     content: 'Full blog post content would go here...',
//     image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
//     category: 'Industry News',
//     author: 'Alex Johnson',
//     publishedAt: '2024-01-15',
//     readTime: '8 min read',
//     tags: ['Web Development', 'Trends', '2024', 'Technology'],
//     featured: true
//   },
//   {
//     id: 2,
//     title: 'Building Responsive Components with Tailwind CSS',
//     excerpt: 'A comprehensive guide to creating beautiful, responsive UI components using Tailwind CSS utility classes and modern design principles.',
//     content: 'Full blog post content would go here...',
//     image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
//     category: 'Tutorials',
//     author: 'Alex Johnson',
//     publishedAt: '2024-01-10',
//     readTime: '12 min read',
//     tags: ['CSS', 'Tailwind', 'Responsive Design', 'Tutorial'],
//     featured: false
//   },
//   {
//     id: 3,
//     title: 'Advanced React Patterns for Scalable Applications',
//     excerpt: 'Learn about advanced React patterns and architectural decisions that help build maintainable and scalable applications.',
//     content: 'Full blog post content would go here...',
//     image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
//     category: 'React',
//     author: 'Alex Johnson',
//     publishedAt: '2024-01-05',
//     readTime: '15 min read',
//     tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
//     featured: true
//   },
//   {
//     id: 4,
//     title: 'Designing for Accessibility: A Developer\'s Guide',
//     excerpt: 'Essential accessibility principles and practical implementation techniques to make your websites inclusive for all users.',
//     content: 'Full blog post content would go here...',
//     image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
//     category: 'Design',
//     author: 'Alex Johnson',
//     publishedAt: '2023-12-28',
//     readTime: '10 min read',
//     tags: ['Accessibility', 'UX', 'Design', 'Web Standards'],
//     featured: false
//   },
//   {
//     id: 5,
//     title: 'Optimizing Web Performance: Core Web Vitals',
//     excerpt: 'Deep dive into Core Web Vitals, performance metrics, and practical optimization strategies for faster web applications.',
//     content: 'Full blog post content would go here...',
//     image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
//     category: 'Web Development',
//     author: 'Alex Johnson',
//     publishedAt: '2023-12-20',
//     readTime: '14 min read',
//     tags: ['Performance', 'Web Vitals', 'Optimization', 'SEO'],
//     featured: false
//   },
//   {
//     id: 6,
//     title: 'Modern JavaScript ES2024 Features',
//     excerpt: 'Exploring the latest JavaScript features and how they can improve your development workflow and code quality.',
//     content: 'Full blog post content would go here...',
//     image: 'https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
//     category: 'JavaScript',
//     author: 'Alex Johnson',
//     publishedAt: '2023-12-15',
//     readTime: '9 min read',
//     tags: ['JavaScript', 'ES2024', 'Modern JS', 'Features'],
//     featured: true
//   }
// ];

// export default function Blog() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredPosts = blogPosts.filter(post => {
//     const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   const featuredPosts = blogPosts.filter(post => post.featured);

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center space-y-8"
//           >
//             <div>
//               <Badge variant="secondary" className="mb-4">Blog</Badge>
//               <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//                 Insights &{' '}
//                 <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
//                   Knowledge
//                 </span>
//               </h1>
//               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//                 Thoughts on web development, design trends, and the latest technologies.
//                 Stay updated with tutorials, insights, and industry best practices.
//               </p>
//             </div>

//             {/* Search Bar */}
//             <div className="relative max-w-2xl mx-auto">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
//               <Input
//                 placeholder="Search articles..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-12 h-12 text-lg"
//               />
//             </div>

//             {/* Category Filters */}
//             <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={selectedCategory === category ? "default" : "outline"}
//                   size="sm"
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Articles</h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Don't miss these handpicked articles covering the latest in web development
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {featuredPosts.slice(0, 3).map((post, index) => (
//               <motion.div
//                 key={post.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       width={400}
//                       height={240}
//                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                     <div className="absolute top-3 left-3">
//                       <Badge className="bg-orange-500 text-white">
//                         Featured
//                       </Badge>
//                     </div>
//                     <div className="absolute top-3 right-3">
//                       <Badge variant="secondary">
//                         {post.category}
//                       </Badge>
//                     </div>
//                   </div>
//                   <CardContent className="p-6 flex flex-col h-full">
//                     <div className="flex items-center text-sm text-muted-foreground mb-3">
//                       <User className="w-4 h-4 mr-1" />
//                       <span className="mr-3">{post.author}</span>
//                       <Calendar className="w-4 h-4 mr-1" />
//                       <span className="mr-3">{formatDate(post.publishedAt)}</span>
//                       <Clock className="w-4 h-4 mr-1" />
//                       <span>{post.readTime}</span>
//                     </div>
//                     <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
//                       {post.title}
//                     </h3>
//                     <p className="text-muted-foreground mb-4 flex-1">
//                       {post.excerpt}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {post.tags.slice(0, 3).map((tag) => (
//                         <Badge key={tag} variant="outline" className="text-xs">
//                           <Tag className="w-3 h-3 mr-1" />
//                           {tag}
//                         </Badge>
//                       ))}
//                     </div>
//                     <Link href={`/blog/${post.id}`}>
//                       <Button variant="ghost" className="w-full justify-start p-0 h-auto font-semibold text-primary hover:text-primary-dark">
//                         Read More
//                         <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Posts */}
//       <section className="py-20 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-2xl font-bold">
//               All Articles ({filteredPosts.length})
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPosts.map((post, index) => (
//               <motion.div
//                 key={post.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       width={400}
//                       height={200}
//                       className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute top-2 right-2">
//                       <Badge variant="secondary" className="text-xs">
//                         {post.category}
//                       </Badge>
//                     </div>
//                     {post.featured && (
//                       <div className="absolute top-2 left-2">
//                         <Badge className="bg-orange-500 text-white text-xs">
//                           Featured
//                         </Badge>
//                       </div>
//                     )}
//                   </div>
//                   <CardContent className="p-4 flex flex-col h-full">
//                     <div className="flex items-center text-xs text-muted-foreground mb-2">
//                       <Calendar className="w-3 h-3 mr-1" />
//                       <span className="mr-2">{formatDate(post.publishedAt)}</span>
//                       <Clock className="w-3 h-3 mr-1" />
//                       <span>{post.readTime}</span>
//                     </div>
//                     <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-3">
//                       {post.excerpt}
//                     </p>
//                     <div className="flex flex-wrap gap-1 mb-3">
//                       {post.tags.slice(0, 2).map((tag) => (
//                         <Badge key={tag} variant="outline" className="text-xs">
//                           {tag}
//                         </Badge>
//                       ))}
//                       {post.tags.length > 2 && (
//                         <Badge variant="outline" className="text-xs">
//                           +{post.tags.length - 2}
//                         </Badge>
//                       )}
//                     </div>
//                     <Link href={`/blog/${post.id}`}>
//                       <Button size="sm" className="w-full">
//                         Read More
//                         <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {filteredPosts.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-12"
//             >
//               <p className="text-muted-foreground text-lg">
//                 No articles found matching your criteria. Try adjusting your search or filters.
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

import React from "react";

const BlogPage = () => {
  return <div className="py-48">BlogPage</div>;
};

export default BlogPage;
