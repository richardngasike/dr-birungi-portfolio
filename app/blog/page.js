'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: "The Myth of Donor Dependency in Global Health",
    excerpt: "After 25 years of emergency financing, evidence shows only domestic ownership creates lasting change.",
    date: "November 14, 2025",
    category: "Health Financing",
    readTime: "7 min",
    featured: true,
    image: "/images/economy1.jpg",
    slug: "myth-donor-dependency"
  },
  {
    id: 2,
    title: "How Uganda Can Fund Universal Health Coverage by 2030",
    excerpt: "A new macroeconomic model shows 1.8% GDP reallocation is possible through efficiency gains and progressive tax reform.",
    date: "November 8, 2025",
    category: "Policy Brief",
    readTime: "5 min",
    featured: false,
    image: "/images/economy2.jpg",
    slug: "uganda-uhc-2030"
  },
  {
    id: 3,
    title: "Quote of the Week",
    excerpt: "“Economics is not about money. It’s about choices — and in health, the cost of wrong choices is measured in human lives.”",
    author: "— Dr. Charles Birungi",
    date: "November 12, 2025",
    category: "Insight",
    readTime: "1 min",
    featured: false,
    image: "/images/economy3.jpg",
    slug: "quote-nov-2025"
  },
  {
    id: 4,
    title: "Why Fiscal Space Matters More Than GDP Growth",
    excerpt: "Growth without allocation is meaningless. New data from 42 countries proves it.",
    date: "November 5, 2025",
    category: "Research",
    readTime: "9 min",
    featured: false,
    image: "/images/economy4.jpg",
    slug: "fiscal-space-vs-gdp"
  },
  {
    id: 5,
    title: "The Hidden Cost of Health Worker Migration",
    excerpt: "Africa trains doctors worth $2.7B annually — then loses 70% to wealthy nations. Time for compensation mechanisms.",
    date: "October 30, 2025",
    category: "Opinion",
    readTime: "6 min",
    featured: false,
    image: "/images/economy5.jpg",
    slug: "health-worker-migration"
  },
  {
    id: 6,
    title: "Breaking: Kenya Announces Health Financing Transition Plan",
    excerpt: "First African country to phase out PEPFAR emergency funding by 2030. My analysis of what comes next.",
    date: "November 11, 2025",
    category: "Breaking News",
    readTime: "4 min",
    featured: false,
    image: "/images/economy6.jpg",
    slug: "kenya-transition-2030"
  }
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const sidePosts = posts.slice(1, 4); // Left sidebar
  const mainPosts = posts.slice(3);    // Main column

  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1>News, Blogs & Insights</h1>
            <p className="lead">Original research, policy analysis, and commentary</p>
            <p className="sub-lead">By Dr. Charles Birungi — Global Lead, Macroeconomics & Health Financing</p>
          </motion.div>
        </div>
      </section>

      {/* Main Layout: 3-Column Magic */}
      <section className="blog-layout">
        <div className="container">
          <div className="blog-grid">

            {/* LEFT SIDEBAR - Latest Quick Reads */}
            <aside className="sidebar-left">
              <h3>Latest Updates</h3>
              {sidePosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  className="side-card"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="side-image">
                    <Image src={post.image} alt={post.title} width={100} height={100} />
                  </div>
                  <div className="side-content">
                    <span className="side-cat">{post.category}</span>
                    <h4>{post.title}</h4>
                    <time>{post.date}</time>
                  </div>
                </motion.article>
              ))}
            </aside>

            {/* CENTER - Featured + Main Posts */}
            <main className="main-content">

              {/* Featured */}
              {featured && (
                <motion.article
                  className="featured-big"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="featured-img">
                    <Image src={featured.image} alt={featured.title} fill />
                    <div className="featured-overlay">
                      <span className="featured-tag">Featured Analysis</span>
                    </div>
                  </div>
                  <div className="featured-text">
                    <h2>{featured.title}</h2>
                    <p>{featured.excerpt}</p>
                    <div className="meta">
                      <span>{featured.date}</span> • <span>{featured.readTime} read</span>
                    </div>
                    <Link href={`/blog/${featured.slug}`} className="read-full">Read Full Analysis →</Link>
                  </div>
                </motion.article>
              )}

              {/* Main Grid */}
              <div className="main-posts">
                {mainPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    className="main-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, boxShadow: "0 30px 70px rgba(0,102,204,0.22)" }}
                  >
                    <div className="main-img">
                      <Image src={post.image} alt={post.title} fill />
                      <span className="main-cat">{post.category}</span>
                    </div>
                    <div className="main-text">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      {post.author && <p className="quote-author">{post.author}</p>}
                      <div className="main-meta">
                        <time>{post.date}</time> • {post.readTime}
                        <Link href={`/blog/${post.slug}`} className="main-link">Read →</Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </main>

            {/* RIGHT SIDEBAR - Quote + Subscribe */}
            <aside className="sidebar-right">
              <motion.div
                className="quote-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <blockquote>
                  “True development financing doesn’t come from donors. It comes from political will.”
                </blockquote>
                <cite>— Dr. Charles Birungi</cite>
              </motion.div>

              <div className="subscribe-box">
                <h4>Stay Updated</h4>
                <p>Get new insights directly to your inbox</p>
                <form>
                  <input type="email" placeholder="Your email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
