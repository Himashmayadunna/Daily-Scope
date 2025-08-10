'use client';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsByCategory } from '../data/newsData';

const SportsPage = () => {
  // Get sports news from our centralized data + create additional sports items
  const allSportsNews = getNewsByCategory('Sports');
  
  // Create additional sports news items
  const additionalSportsNews = [
    {
      id: 201,
      title: "World Cup Qualifiers Produce Stunning Upsets",
      summary: "Underdog nations secure crucial victories while traditional powerhouses struggle in dramatic qualification matches.",
      category: "Sports",
      timestamp: "15 minutes ago",
      imageUrl: "/SP/WC.jpg"
    },
    {
      id: 202,
      title: "Tennis Sensation Wins First Grand Slam at Age 19",
      summary: "Rising star defeats three-time champion in straight sets to claim maiden major title in historic breakthrough.",
      category: "Sports",
      timestamp: "1 hour ago",
      imageUrl: "/SP/G.jpg"
    },
    {
      id: 203,
      title: "NBA Trade Blockbuster Reshapes Championship Race",
      summary: "Multi-team deal involving All-Star players creates new title contenders and shifts playoff predictions.",
      category: "Sports",
      timestamp: "3 hours ago",
      imageUrl: "/SP/BB.webp"
    },
    {
      id: 204,
      title: "Olympic Swimming Records Fall at National Championships",
      summary: "Multiple world records broken as swimmers prepare for international competition with exceptional performances.",
      category: "Sports",
      timestamp: "5 hours ago",
      imageUrl: "/SP/SW.jpg"
    },
    {
      id: 205,
      title: "Boxing Match Generates $200 Million in Revenue",
      summary: "Heavyweight championship bout breaks pay-per-view records with global audience exceeding 50 million viewers.",
      category: "Sports",
      timestamp: "7 hours ago",
      imageUrl: "/SP/BM.jpg"
    },
    {
      id: 206,
      title: "Formula 1 Season Finale Promises Title Drama",
      summary: "Championship leaders separated by just three points heading into final race at iconic Monaco circuit.",
      category: "Sports",
      timestamp: "9 hours ago",
      imageUrl: "/SP/F.jpg"
    },
    {
      id: 207,
      title: "Women's Soccer League Expands to 16 Teams",
      summary: "Professional women's football adds four new franchises as popularity and attendance reach record levels.",
      category: "Sports",
      timestamp: "11 hours ago",
      imageUrl: "/SP/WS.png"
    },
    {
      id: 208,
      title: "Esports Tournament Offers $10 Million Prize Pool",
      summary: "Competitive gaming reaches new heights with largest purse in tournament history and global streaming audience.",
      category: "Sports",
      timestamp: "13 hours ago",
      imageUrl: "/SP/ES.webp"
    },
    {
      id: 209,
      title: "Marathon World Record Broken by 30 Seconds",
      summary: "Kenyan runner shatters long-standing mark in perfect conditions with revolutionary pacing strategy.",
      category: "Sports",
      timestamp: "15 hours ago",
      imageUrl: "/SP/M.jpg"
    },
    {
      id: 210,
      title: "High School Athlete Signs Historic Endorsement Deal",
      summary: "Basketball prodigy becomes youngest player ever to receive major sponsorship before college career.",
      category: "Sports",
      timestamp: "17 hours ago",
      imageUrl: "/SP/HA.jpg"
    }
  ];

  // Combine all sports news
  const sportsNews = [...allSportsNews, ...additionalSportsNews];

  const featuredNews = sportsNews[0];
  const recentNews = sportsNews.slice(1, 7);
  const sidebarNews = sportsNews.slice(7);

  return (
    <div className="homepage">
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            {/* Featured News */}
            <section className="featured-section">
              <h2>Sports Headlines</h2>
              <Link href={`/news/${featuredNews.id}`} className="clickable-item">
                <article className="featured-article">
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
                </article>
              </Link>
            </section>

            {/* Recent News Grid */}
            <section className="recent-section">
              <h2>Latest Scores & Updates</h2>
              <div className="news-grid">
                {recentNews.map(news => (
                  <Link key={news.id} href={`/news/${news.id}`} className="clickable-item">
                    <article className="news-card">
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
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-section">
                <h3>More Sports News</h3>
                {sidebarNews.map(news => (
                  <Link key={news.id} href={`/news/${news.id}`} className="clickable-item">
                    <article className="sidebar-item">
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
                    </article>
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
};

export default SportsPage;