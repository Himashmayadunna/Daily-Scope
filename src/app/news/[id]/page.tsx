'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsById, getAllNews, NewsArticle } from '../../data/newsData';
import styles from './NewsArticle.module.css';

const NewsArticlePage = () => {
  const params = useParams();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = parseInt(params.id as string);
    const foundArticle = getNewsById(id);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Get related articles from the same category
      const allNews = getAllNews();
      const related = allNews
        .filter(news => news.category === foundArticle.category && news.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedNews(related);
    }
    
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <Link href="/" className={styles.backButton}>
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.articlePage}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <span className={styles.separator}>/</span>
        <Link href={`/${article.category.toLowerCase()}`}>{article.category}</Link>
        <span className={styles.separator}>/</span>
        <span>Article</span>
      </nav>

      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className={styles.categoryTag}>
          <span className={`${styles.category} ${styles[article.category.toLowerCase()]}`}>
            {article.category}
          </span>
        </div>
        
        <h1 className={styles.title}>{article.title}</h1>
        
        <div className={styles.articleMeta}>
          <div className={styles.authorInfo}>
            <div className={styles.authorAvatar}>
              {article.author.charAt(0)}
            </div>
            <div className={styles.authorDetails}>
              <span className={styles.authorName}>By {article.author}</span>
              <div className={styles.metadata}>
                <span className={styles.timestamp}>{article.timestamp}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className={styles.shareButtons}>
            <button className={styles.shareBtn} title="Share on Facebook">
              📘
            </button>
            <button className={styles.shareBtn} title="Share on Twitter">
              🐦
            </button>
            <button className={styles.shareBtn} title="Share on LinkedIn">
              💼
            </button>
            <button className={styles.shareBtn} title="Copy Link">
              🔗
            </button>
          </div>
        </div>
        
        <p className={styles.summary}>{article.summary}</p>
      </header>

      {/* Featured Image */}
      <div className={styles.featuredImageContainer}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={1200}
          height={600}
          className={styles.featuredImage}
          priority
        />
      </div>

      {/* Article Content */}
      <main className={styles.articleContent}>
        <div className={styles.contentBody}>
          <div 
            className={styles.articleText}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Tags */}
          <div className={styles.tagsSection}>
            <h4>Tags:</h4>
            <div className={styles.tags}>
              {article.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Table of Contents */}
          <div className={styles.tocSection}>
            <h3>In This Article</h3>
            <nav className={styles.toc}>
              <a href="#overview">Overview</a>
              <a href="#details">Key Details</a>
              <a href="#analysis">Analysis</a>
              <a href="#impact">Impact</a>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletterSection}>
            <h3>Stay Updated</h3>
            <p>Get the latest news delivered to your inbox.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.subscribeBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </main>

      {/* Related Articles */}
      {relatedNews.length > 0 && (
        <section className={styles.relatedSection}>
          <h2>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {relatedNews.map((news) => (
              <Link 
                key={news.id} 
                href={`/news/${news.id}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}>
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    width={300}
                    height={200}
                  />
                </div>
                <div className={styles.relatedContent}>
                  <span className={`${styles.relatedCategory} ${styles[news.category.toLowerCase()]}`}>
                    {news.category}
                  </span>
                  <h3>{news.title}</h3>
                  <p>{news.summary.slice(0, 100)}...</p>
                  <span className={styles.relatedTime}>{news.timestamp}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to Top */}
      <button 
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Back to Top
      </button>
    </div>
  );
};

export default NewsArticlePage;
