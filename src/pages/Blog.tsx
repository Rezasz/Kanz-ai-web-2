import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import EditableContent from '../components/EditableContent';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Document Management',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way organizations handle documents.',
      date: '2024-03-15',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'Securing Your Documents in the Digital Age',
      excerpt: 'Learn about the latest security measures for protecting sensitive documents.',
      date: '2024-03-10',
      author: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Streamlining Workflows with Automation',
      excerpt: 'Discover how automated document processing can improve efficiency.',
      date: '2024-03-05',
      author: 'David Kumar',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EditableContent
              id="blog-hero-title"
              defaultContent="Blog"
              type="heading"
            />
            <EditableContent
              id="blog-hero-description"
              defaultContent="Insights and updates from the Kanz.ai team"
              type="paragraph"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <EditableContent
                    id={`blog-post-${post.id}-title`}
                    defaultContent={post.title}
                    type="heading"
                  />
                  <EditableContent
                    id={`blog-post-${post.id}-excerpt`}
                    defaultContent={post.excerpt}
                    type="paragraph"
                  />
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <EditableContent
                      id={`blog-post-${post.id}-date`}
                      defaultContent={post.date}
                    />
                    <User className="h-4 w-4 ml-4 mr-1" />
                    <EditableContent
                      id={`blog-post-${post.id}-author`}
                      defaultContent={post.author}
                    />
                  </div>
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
                    <EditableContent
                      id={`blog-post-${post.id}-cta`}
                      defaultContent="Read More"
                    />
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;