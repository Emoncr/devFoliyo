"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { 
  Search,
  Filter,
  ExternalLink,
  Star,
  ShoppingCart,
  Eye,
  Heart,
  Grid3X3,
  List
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['All', 'Business', 'Portfolio', 'E-commerce', 'Landing Page', 'Dashboard', 'Blog'];
const technologies = ['All', 'React', 'Next.js', 'Vue.js', 'Angular', 'WordPress', 'Shopify'];
const industries = ['All', 'Real Estate', 'Healthcare', 'Restaurant', 'E-commerce', 'Finance', 'Education', 'Travel'];
const priceRanges = ['All', 'Free', '$1-$29', '$30-$59', '$60-$99', '$100+'];

const templates = [
  {
    id: 1,
    title: 'Modern Portfolio Pro',
    description: 'Clean and minimal portfolio template perfect for showcasing creative work with smooth animations.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Portfolio',
    technology: 'React',
    price: 39,
    originalPrice: 59,
    rating: 4.9,
    sales: 1247,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    featured: true,
    discount: 34,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Business Landing Hub',
    description: 'Professional business landing page template with conversion-focused design and modern aesthetics.',
    image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Landing Page',
    technology: 'Vue.js',
    price: 29,
    originalPrice: 49,
    rating: 4.7,
    sales: 892,
    tags: ['Vue.js', 'Vuetify', 'Animation', 'Responsive'],
    featured: false,
    discount: 41,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'E-Store Complete',
    description: 'Full-featured e-commerce template with shopping cart, payment integration, and admin panel.',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'E-commerce',
    technology: 'Next.js',
    price: 89,
    originalPrice: 129,
    rating: 4.8,
    sales: 543,
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Admin Panel'],
    featured: true,
    discount: 31,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Modern analytics dashboard template with charts, widgets, and data visualization components.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Dashboard',
    technology: 'React',
    price: 59,
    originalPrice: 79,
    rating: 4.6,
    sales: 721,
    tags: ['React', 'Chart.js', 'Material-UI', 'Dark Mode'],
    featured: false,
    discount: 25,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Corporate Website',
    description: 'Professional corporate website template with multiple pages and content management system.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Business',
    technology: 'WordPress',
    price: 45,
    originalPrice: 65,
    rating: 4.5,
    sales: 634,
    tags: ['WordPress', 'Elementor', 'SEO Ready', 'Multilingual'],
    featured: false,
    discount: 31,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Creative Blog Theme',
    description: 'Beautiful blog template with modern typography, image galleries, and social integration.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Blog',
    technology: 'Next.js',
    price: 25,
    originalPrice: 39,
    rating: 4.4,
    sales: 456,
    tags: ['Next.js', 'Markdown', 'SEO', 'Social Share'],
    featured: false,
    discount: 36,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 7,
    title: 'Startup Landing Pro',
    description: 'High-converting startup landing page template with A/B testing ready sections.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Landing Page',
    technology: 'React',
    price: 35,
    originalPrice: 55,
    rating: 4.8,
    sales: 789,
    tags: ['React', 'Styled Components', 'A/B Testing', 'Analytics'],
    featured: true,
    discount: 36,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 8,
    title: 'Fashion Store',
    description: 'Elegant fashion e-commerce template with product showcase and shopping experience.',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'E-commerce',
    technology: 'Shopify',
    price: 69,
    originalPrice: 99,
    rating: 4.7,
    sales: 312,
    tags: ['Shopify', 'Liquid', 'Mobile First', 'Fast Loading'],
    featured: false,
    discount: 30,
    previewUrl: '#',
    downloadUrl: '#'
  },
  {
    id: 9,
    title: 'Agency Showcase',
    description: 'Creative agency template with portfolio sections, team profiles, and contact forms.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    category: 'Business',
    technology: 'Angular',
    price: 49,
    originalPrice: 69,
    rating: 4.6,
    sales: 567,
    tags: ['Angular', 'Bootstrap', 'GSAP', 'Portfolio'],
    featured: false,
    discount: 29,
    previewUrl: '#',
    downloadUrl: '#'
  }
];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesTechnology = selectedTechnology === 'All' || template.technology === selectedTechnology;
    const matchesIndustry = selectedIndustry === 'All'; // Add industry matching logic when template data includes industry
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesPriceRange = true;
    if (selectedPriceRange !== 'All') {
      switch (selectedPriceRange) {
        case 'Free':
          matchesPriceRange = template.price === 0;
          break;
        case '$1-$29':
          matchesPriceRange = template.price > 0 && template.price <= 29;
          break;
        case '$30-$59':
          matchesPriceRange = template.price >= 30 && template.price <= 59;
          break;
        case '$60-$99':
          matchesPriceRange = template.price >= 60 && template.price <= 99;
          break;
        case '$100+':
          matchesPriceRange = template.price >= 100;
          break;
      }
    }
    
    return matchesCategory && matchesTechnology && matchesIndustry && matchesSearch && matchesPriceRange;
  });

  const featuredTemplates = templates.filter(template => template.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div>
              <Badge variant="secondary" className="mb-4">Premium Templates</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Beautiful{' '}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Templates
                </span>{' '}
                for Every Need
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Save time and launch faster with our collection of professionally designed, 
                fully responsive templates built with modern technologies.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden w-full sm:w-auto"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              
              <div className={`flex-col sm:flex-row gap-4 w-full lg:w-auto ${showFilters ? 'flex' : 'hidden lg:flex'}`}>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Technology" />
                  </SelectTrigger>
                  <SelectContent>
                    {technologies.map(tech => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map(range => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Templates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and highly-rated templates
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={template.image}
                      alt={template.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={template.previewUrl}>
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-orange-500 text-white">
                        Featured
                      </Badge>
                    </div>
                    {template.discount && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-red-500 text-white">
                          -{template.discount}%
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{template.category}</Badge>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{template.rating}</span>
                        <span className="text-muted-foreground ml-1">({template.sales})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{template.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {template.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">
                          ${template.price}
                        </span>
                        {template.originalPrice > template.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${template.originalPrice}
                          </span>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {template.technology}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                      <Link href={`/templates/${template.id}`}>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Templates */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Filter Templates</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Technology</h4>
                    <div className="space-y-2">
                      {technologies.map((tech) => (
                        <Button
                          key={tech}
                          variant={selectedTechnology === tech ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start text-xs"
                          onClick={() => setSelectedTechnology(tech)}
                        >
                          {tech}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Industry</h4>
                    <div className="space-y-2">
                      {industries.map((industry) => (
                        <Button
                          key={industry}
                          variant={selectedIndustry === industry ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start text-xs"
                          onClick={() => setSelectedIndustry(industry)}
                        >
                          {industry}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <Button
                          key={range}
                          variant={selectedPriceRange === range ? "default" : "ghost"}
                          size="sm"
                          className="w-full justify-start text-xs"
                          onClick={() => setSelectedPriceRange(range)}
                        >
                          {range}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Templates Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">All Templates</h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-xl text-muted-foreground">
                  Showing {filteredTemplates.length} templates
                </p>
              </motion.div>
              
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'md:grid-cols-2 lg:grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`overflow-hidden hover:shadow-lg transition-all duration-300 h-full ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}>
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-64 flex-shrink-0' : ''
                  }`}>
                    <Image
                      src={template.image}
                      alt={template.title}
                      width={400}
                      height={300}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-56'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={template.previewUrl}>
                            <Eye className="w-3 h-3" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    {template.featured && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-orange-500 text-white text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                    {template.discount && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-red-500 text-white text-xs">
                          -{template.discount}%
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className={`p-4 flex flex-col ${
                    viewMode === 'list' ? 'flex-1' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                      <div className="flex items-center text-xs">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{template.rating}</span>
                      </div>
                    </div>
                    <h3 className={`font-semibold mb-2 ${
                      viewMode === 'list' ? 'text-lg' : 'text-base'
                    }`}>
                      {template.title}
                    </h3>
                    <p className={`text-muted-foreground text-sm mb-3 flex-1 ${
                      viewMode === 'list' ? 'line-clamp-3' : 'line-clamp-2'
                    }`}>
                      {template.description}
                    </p>
                    {viewMode === 'list' && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {template.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">
                          ${template.price}
                        </span>
                        {template.originalPrice > template.price && (
                          <span className="text-xs text-muted-foreground line-through">
                            ${template.originalPrice}
                          </span>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {template.technology}
                      </Badge>
                    </div>
                    <Button size="sm" className="w-full">
                      <ShoppingCart className="w-3 h-3 mr-2" />
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
            </div>
          </div>
          
          {filteredTemplates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No templates found matching your criteria. Try adjusting your filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}