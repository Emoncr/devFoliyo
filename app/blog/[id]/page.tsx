"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  Heart,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock blog post data
const blogPostData = {
  1: {
    id: 1,
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring emerging trends, new frameworks, and technologies that will shape the web development landscape in the coming year.',
    content: `
# The Future of Web Development in 2024

The web development landscape is constantly evolving, and 2024 promises to bring exciting new developments that will reshape how we build and interact with web applications. As we look ahead, several key trends are emerging that every developer should be aware of.

## Artificial Intelligence Integration

AI is no longer just a buzzword—it's becoming an integral part of web development. From AI-powered code completion tools like GitHub Copilot to intelligent chatbots and personalized user experiences, artificial intelligence is transforming how we approach web development.

### Key AI Developments:
- **Code Generation**: AI tools are becoming more sophisticated at generating production-ready code
- **Automated Testing**: AI-driven testing tools can identify bugs and performance issues automatically
- **Personalization**: Machine learning algorithms enable highly personalized user experiences

## The Rise of Edge Computing

Edge computing is moving processing closer to users, resulting in faster load times and better performance. This shift is particularly important for web applications that require real-time data processing.

### Benefits of Edge Computing:
- Reduced latency
- Improved performance
- Better user experience
- Enhanced security

## WebAssembly (WASM) Adoption

WebAssembly continues to gain traction, allowing developers to run high-performance applications in the browser using languages like Rust, C++, and Go.

## Progressive Web Apps (PWAs) Evolution

PWAs are becoming more powerful with new APIs and capabilities, bridging the gap between web and native applications.

## Conclusion

The future of web development is bright, with new technologies and approaches that will make web applications faster, more intelligent, and more user-friendly. Staying updated with these trends is crucial for any developer looking to remain competitive in the field.
    `,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=2',
    category: 'Industry News',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Full-stack developer and tech enthusiast with 6+ years of experience building web applications.'
    },
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    tags: ['Web Development', 'Trends', '2024', 'Technology', 'AI', 'WebAssembly'],
    likes: 142,
    comments: 23,
    shares: 18
  }
};

const relatedPosts = [
  {
    id: 2,
    title: 'Building Responsive Components with Tailwind CSS',
    excerpt: 'A comprehensive guide to creating beautiful, responsive UI components.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    category: 'Tutorials',
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'Advanced React Patterns for Scalable Applications',
    excerpt: 'Learn about advanced React patterns and architectural decisions.',
    image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
    category: 'React',
    readTime: '15 min read'
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPostData[params.id as keyof typeof blogPostData];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none dark:prose-invert"
              >
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
              </motion.div>
              
              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t"
              >
                <h3 className="font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              
              {/* Share Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t"
              >
                <h3 className="font-semibold mb-4">Share this post</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="text-center">
                      <Avatar className="w-16 h-16 mx-auto mb-4">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold mb-2">{post.author.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{post.author.bio}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        Follow
                      </Button>
                    </div>
                  </Card>
                </motion.div>
                
                {/* Reading Progress */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">{post.readTime}</p>
                        <p className="text-sm text-muted-foreground">Reading time</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Related Posts</h2>
            <p className="text-xl text-muted-foreground">
              Continue reading with these related articles
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={240}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}