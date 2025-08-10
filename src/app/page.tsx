'use client';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  timestamp: string;
  imageUrl: string;
}

export default function Home() {
  const latestNews: NewsItem[] = [
    {
      id: 1,
      title: "Trump's sweeping new tariffs take effect against dozens of countries",
      summary: "Just before the deadline for deals to be agreed to cut or avoid the import taxes Trump posted on his Truth Social platform that billions of dollars were now flowing into the US due to tariffs.",
      category: "Business",
      timestamp: "2 hours ago",
      imageUrl: "/Home/Trump.jpg"
    },
    {
      id: 2,
      title: "No agreement finalized to reduce US tariff on Sri Lanka – President",
      summary: "President Anura Kumara Dissanayake says that no agreement has been finalized or signed to reduce the reciprocal tariff imposed by the United States on Sri Lankan exports to 20%.",
      category: "Local",
      timestamp: "4 hours ago",
      imageUrl: "/Home/SLP.jpg"
    },
    {
      id: 3,
      title: "India beat England by 6 runs in most dramatic World Cup match.",
      summary: "India defeated England by 6 runs in the fifth and final Test match, leveling the five-match series 2-2. With this emphatic win, India denied England a series victory and showcased their resilience in the longest format of the game.",
      category: "Sports",
      timestamp: "6 hours ago",
      imageUrl: "/Home/SP.jpg"
    },
    {
      id: 4,
      title: "OpenAI claims GPT-5 model boosts ChatGPT to 'PhD level'",
      summary: "ChatGPT-maker OpenAI has unveiled the long-awaited latest version of its artificial intelligence (AI) chatbot, GPT-5, saying it can provide PhD-level expertise. Billed as 'smarter, faster, and more useful,' OpenAI co-founder and chief executive Sam Altman lauded the company's new model as ushering in a new era of ChatGPT.",
      category: "Global",
      timestamp: "8 hours ago",
      imageUrl: "/Home/chat.jpg"
    },
    {
      id: 5,
      title: "Truth about satellite launch and funding clear after 13 years",
      summary: "Major technology companies plan significant investments in emerging markets.",
      category: "Business",
      timestamp: "10 hours ago",
      imageUrl: "/Home/bis1.jpg"
    },
    {
      id: 6,
      title: "Sri Lanka makes strides in prevention and care of cervical cancer",
      summary: "Comprehensive public transit improvements approved for implementation next year.",
      category: "Local",
      timestamp: "12 hours ago",
      imageUrl: "/Home/cancer.jpg"
    },
    {
      id: 7,
      title: "Israeli plan for Gaza takeover must be halted immediately",
      summary: "Comprehensive public transit  approved for implementation next year.",
      category: "Global",
      timestamp: "12 hous ago",
      imageUrl: "/Home/Isreal.jpg"
    },
    {
      id: 8,
      title: "People panic and flee after 3 people injured in Times Square shooting",
      summary: "Comprehensive public transit improvements approved for implementation next year.",
      category: "Local",
      timestamp: "12 hours ago",
      imageUrl: "/Home/PO.jpg"
    },
    {
      id: 9,
      title: "President visits the Chief Prelates of Malwathu and Asgiri Chapters",
      summary: "Comprehensive public transit improvements approved for implementation next year.",
      category: "Local",
      timestamp: "12 hours ago",
      imageUrl: "/Home/PC.jpg"
    },
    {
      id: 10,
      title: "Pakistan batter Haider Ali suspended by PCB after arrest in England over alleged rape",
      summary: "Comprehensive public transit improvements approved for implementation next year.",
      category: "sport",
      timestamp: "12 hours ago",
      imageUrl: "/Home/PK.jpg"
    },
    {
      id: 11,
      title: "Two Sri Lankans held for attempted ganja smuggling in India.",
      summary: "Comprehensive public transit improvements approved for implementation next year.",
      category: "Globel",
      timestamp: "12 hours ago",
      imageUrl: "/Home/GG.jpg"
    },
  ];

  const featuredNews = latestNews[0];
  const recentNews = latestNews.slice(1, 7);
  const sidebarNews = latestNews.slice(7);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Breaking News</h2>
              <Link href={`/news/${featuredNews.id}`} className="featured-article">
                <Image 
                  src={featuredNews.imageUrl} 
                  alt={featuredNews.title} 
                  width={600} 
                  height={450}
                  className="featured-image"
                />
                <div className="featured-content">
                  <span className="category">{featuredNews.category}</span>
                  <h3>{featuredNews.title}</h3>
                  <p>{featuredNews.summary}</p>
                  <span className="timestamp">{featuredNews.timestamp}</span>
                </div>
              </Link>
            </section>

            {/* Recent News Grid */}
            <section className="recent-section">
              <h2>Latest Updates</h2>
              <div className="news-grid">
                {recentNews.map(news => (
                  <Link key={news.id} href={`/news/${news.id}`} className="news-card">
                    <Image 
                      src={news.imageUrl} 
                      alt={news.title} 
                      width={300} 
                      height={200}
                      className="card-image"
                    />
                    <div className="card-content">
                      <span className="category">{news.category}</span>
                      <h4>{news.title}</h4>
                      <p>{news.summary}</p>
                      <span className="timestamp">{news.timestamp}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-section">
                <h3>Trending Now</h3>
                {sidebarNews.map(news => (
                  <Link key={news.id} href={`/news/${news.id}`} className="sidebar-item">
                    <Image 
                      src={news.imageUrl} 
                      alt={news.title} 
                      width={100} 
                      height={80}
                      className="sidebar-image"
                    />
                    <div className="sidebar-content">
                      <span className="category">{news.category}</span>
                      <h5>{news.title}</h5>
                      <span className="timestamp">{news.timestamp}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-links">
                  <Link href="/business" className="category-link business">
                    <span>Business</span>
                    <span className="count">24</span>
                  </Link>
                  <Link href="/local" className="category-link local">
                    <span>Local</span>
                    <span className="count">18</span>
                  </Link>
                  <Link href="/sports" className="category-link sports">
                    <span>Sports</span>
                    <span className="count">31</span>
                  </Link>
                  <Link href="/global" className="category-link global">
                    <span>Global</span>
                    <span className="count">42</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
