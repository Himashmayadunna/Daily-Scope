// News data with detailed content for all categories
export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  timestamp: string;
  imageUrl: string;
  author: string;
  readTime: string;
  tags: string[];
}

export const newsArticles: NewsArticle[] = [
  // Home/Global News
  {
    id: 1,
    title: "Trump's sweeping new tariffs take effect against dozens of countries",
    summary: "Just before the deadline for deals to be agreed to cut or avoid the import taxes Trump posted on his Truth Social platform that billions of dollars were now flowing into the US due to tariffs.",
    content: `
      <div class="article-content">
        <p>Former President Donald Trump has announced sweeping new tariffs that will take effect against dozens of countries, marking a significant escalation in trade tensions globally. The announcement came just hours before the deadline for negotiating alternative deals.</p>
        
        <p>In a post on his Truth Social platform, Trump stated that "billions of dollars are now flowing into the US Treasury due to these strategic tariffs," defending the policy as beneficial for American workers and businesses.</p>
        
        <h3>Key Details of the Tariff Policy</h3>
        <p>The new tariffs will affect imports from over 40 countries, with rates ranging from 15% to 35% depending on the product category and country of origin. Industries most affected include:</p>
        <ul>
          <li><strong>Electronics and semiconductors:</strong> 25% tariff on chips and electronic components</li>
          <li><strong>Automotive parts and vehicles:</strong> 30% on imported cars and parts</li>
          <li><strong>Steel and aluminum products:</strong> 35% on raw materials</li>
          <li><strong>Textiles and clothing:</strong> 20% on imported garments</li>
          <li><strong>Agricultural machinery:</strong> 15% on farming equipment</li>
        </ul>
        
        <h3>Economic Impact Analysis</h3>
        <p>Economic experts are divided on the potential impact of these tariffs. Supporters argue they will protect American jobs and reduce the trade deficit, while critics warn of increased consumer prices and potential retaliation from affected countries.</p>
        
        <p>"These tariffs represent the most significant trade policy shift in decades," said Dr. Sarah Mitchell, an international trade economist at Georgetown University. "While they may provide short-term protection for some domestic industries, the long-term consequences could be far-reaching."</p>
        
        <blockquote>
          <p>"The immediate effect will be higher prices for consumers on imported goods. We estimate a typical American family could see their annual expenses increase by $1,200-$1,800 due to these tariffs."</p>
          <cite>- Economic Policy Institute</cite>
        </blockquote>
        
        <h3>International Response</h3>
        <p>Several countries have already announced their intention to file complaints with the World Trade Organization (WTO) and are considering retaliatory measures:</p>
        
        <ul>
          <li><strong>European Union:</strong> Planning counter-tariffs on $50 billion worth of American exports</li>
          <li><strong>China:</strong> Considering restrictions on rare earth mineral exports</li>
          <li><strong>Canada:</strong> Reviewing trade agreements and potential diplomatic responses</li>
          <li><strong>Mexico:</strong> Threatening to impose tariffs on US agricultural products</li>
        </ul>
        
        <h3>Business Community Reactions</h3>
        <p>The business community has shown mixed reactions to the tariff announcements:</p>
        
        <p><strong>Supporters include:</strong></p>
        <ul>
          <li>US Steel Corporation - expects increased domestic demand</li>
          <li>American Aluminum Association - projects 15,000 new jobs</li>
          <li>Textile manufacturers - anticipating production increases</li>
        </ul>
        
        <p><strong>Critics include:</strong></p>
        <ul>
          <li>Technology companies - warning of supply chain disruptions</li>
          <li>Retail associations - concerned about consumer price increases</li>
          <li>Automotive manufacturers - facing higher production costs</li>
        </ul>
        
        <h3>Timeline and Implementation</h3>
        <p>The tariffs will be implemented in phases over the next six months:</p>
        <ul>
          <li><strong>Phase 1 (Immediate):</strong> Steel, aluminum, and raw materials</li>
          <li><strong>Phase 2 (30 days):</strong> Electronics and automotive components</li>
          <li><strong>Phase 3 (90 days):</strong> Consumer goods and textiles</li>
          <li><strong>Phase 4 (180 days):</strong> Agricultural products and machinery</li>
        </ul>
        
        <p>The administration has indicated that countries willing to negotiate new trade agreements may receive exemptions or reduced tariff rates. However, specific criteria for such negotiations have not been disclosed.</p>
        
        <p>As global markets continue to react to these developments, economists predict significant volatility in international trade patterns over the coming months. The full economic impact of these policies will likely become clearer as businesses and consumers adjust to the new trade landscape.</p>
      </div>
    `,
    category: "Business",
    timestamp: "2 hours ago",
    imageUrl: "/Home/Trump.jpg",
    author: "Sarah Johnson",
    readTime: "8 min read",
    tags: ["Trade", "Economics", "Politics", "International", "Tariffs"]
  },
  {
    id: 2,
    title: "No agreement finalized to reduce US tariff on Sri Lanka – President",
    summary: "President Anura Kumara Dissanayake says that no agreement has been finalized or signed to reduce the reciprocal tariff imposed by the United States on Sri Lankan exports to 20%.",
    content: `
      <div class="article-content">
        <p>President Anura Kumara Dissanayake has clarified that no formal agreement has been finalized or signed to reduce the reciprocal tariff imposed by the United States on Sri Lankan exports to 20%, dispelling rumors about a breakthrough in trade negotiations.</p>
        
        <p>Speaking at a press conference in Colombo, the President emphasized that while discussions are ongoing, reports of a concluded deal are premature and inaccurate.</p>
        
        <h3>Current Tariff Situation</h3>
        <p>The United States currently imposes varying tariffs on Sri Lankan exports, with some products facing rates as high as 25-30%. The proposed reduction to 20% would provide significant relief to Sri Lankan exporters, particularly in key industries.</p>
        
        <p>"We are committed to securing the best possible terms for our exporters, but we will not rush into agreements that may not serve our long-term interests," President Dissanayake stated during the press briefing.</p>
        
        <h3>Impact on Key Export Industries</h3>
        <p>Sri Lanka's export economy heavily relies on several key sectors that would benefit significantly from reduced tariffs:</p>
        
        <h4>Textiles and Apparel Industry</h4>
        <ul>
          <li>Accounts for over 40% of total exports to the US</li>
          <li>Employs approximately 350,000 workers</li>
          <li>Annual export value: $4.8 billion</li>
          <li>Potential growth with reduced tariffs: 25-30%</li>
        </ul>
        
        <h4>Tea Industry</h4>
        <ul>
          <li>Sri Lanka's traditional and premium export commodity</li>
          <li>Current export value to US: $180 million annually</li>
          <li>Facing competition from countries with preferential trade status</li>
          <li>Potential market expansion with tariff relief</li>
        </ul>
        
        <h4>Rubber and Related Products</h4>
        <ul>
          <li>Including tires, gloves, and industrial components</li>
          <li>Annual exports worth $320 million</li>
          <li>Growing demand in US automotive and healthcare sectors</li>
        </ul>
        
        <h4>Spices and Food Products</h4>
        <ul>
          <li>Cinnamon, pepper, and value-added food items</li>
          <li>Emerging sector with high growth potential</li>
          <li>Current annual exports: $95 million</li>
        </ul>
        
        <h3>Negotiation Challenges and Complexities</h3>
        <p>The trade negotiations face several complex issues that require careful consideration:</p>
        
        <h4>Labor Standards Compliance</h4>
        <p>The US has emphasized the importance of international labor standards, including:</p>
        <ul>
          <li>Worker safety regulations in manufacturing</li>
          <li>Fair wage policies and working conditions</li>
          <li>Environmental sustainability in production</li>
          <li>Child labor prevention measures</li>
        </ul>
        
        <h4>Intellectual Property Protections</h4>
        <p>Ensuring robust intellectual property laws and enforcement mechanisms, particularly in:</p>
        <ul>
          <li>Pharmaceutical and biotechnology sectors</li>
          <li>Software and technology licensing</li>
          <li>Brand protection and anti-counterfeiting measures</li>
        </ul>
        
        <h3>Economic Projections and Benefits</h3>
        <p>Economic analysts have provided detailed projections for the potential impact of successful tariff reductions:</p>
        
        <blockquote>
          <p>"A successful tariff reduction to 20% could boost Sri Lankan exports to the US by 15-20% within the first year, potentially creating 45,000-60,000 new jobs across various sectors."</p>
          <cite>- Institute for Policy Studies, Colombo</cite>
        </blockquote>
        
        <h4>Projected Economic Benefits</h4>
        <ul>
          <li><strong>Export growth:</strong> $800 million - $1.2 billion increase</li>
          <li><strong>Job creation:</strong> 45,000-60,000 new positions</li>
          <li><strong>Foreign exchange earnings:</strong> Additional $500-750 million annually</li>
          <li><strong>GDP impact:</strong> 0.8-1.2% growth contribution</li>
        </ul>
        
        <h3>Government's Strategic Approach</h3>
        <p>Trade Minister Harsha de Silva outlined the government's comprehensive approach to the negotiations:</p>
        
        <p>"We are taking a holistic view that goes beyond just tariff reductions. Our focus is on creating a sustainable framework that benefits all stakeholders while maintaining Sri Lanka's sovereignty in trade policy decisions."</p>
        
        <h4>Key Negotiation Priorities</h4>
        <ol>
          <li>Gradual tariff reduction with reasonable timelines</li>
          <li>Technical assistance for compliance with US standards</li>
          <li>Investment promotion and industrial development support</li>
          <li>Market access facilitation for Sri Lankan businesses</li>
        </ol>
        
        <h3>Industry Preparedness and Adaptation</h3>
        <p>Meanwhile, Sri Lankan industries are preparing for various scenarios:</p>
        
        <h4>Textile Sector Initiatives</h4>
        <ul>
          <li>Upgrading manufacturing facilities to meet US standards</li>
          <li>Investing in sustainable production technologies</li>
          <li>Developing direct marketing channels with US retailers</li>
          <li>Training workforce in quality control and compliance</li>
        </ul>
        
        <h4>Tea Industry Adaptations</h4>
        <ul>
          <li>Obtaining organic and fair-trade certifications</li>
          <li>Developing premium product lines for US market</li>
          <li>Establishing direct distribution networks</li>
          <li>Marketing Ceylon tea as a premium brand</li>
        </ul>
        
        <h3>Timeline and Next Steps</h3>
        <p>The government has indicated that negotiations will continue through diplomatic channels, with several key milestones:</p>
        
        <ul>
          <li><strong>Next 30 days:</strong> Technical consultations on compliance requirements</li>
          <li><strong>60-90 days:</strong> High-level bilateral meetings</li>
          <li><strong>6 months:</strong> Target for framework agreement</li>
          <li><strong>12 months:</strong> Implementation timeline if successful</li>
        </ul>
        
        <p>President Dissanayake concluded by emphasizing the government's commitment to transparent communication with the public about the progress of these crucial trade negotiations that could significantly impact Sri Lanka's economic future.</p>
      </div>
    `,
    category: "Local",
    timestamp: "4 hours ago",
    imageUrl: "/Home/SLP.jpg",
    author: "Rajesh Patel",
    readTime: "7 min read",
    tags: ["Trade", "Sri Lanka", "Economy", "Politics", "Exports"]
  },
  {
    id: 3,
    title: "India beat England by 6 runs in most dramatic World Cup match",
    summary: "India defeated England by 6 runs in the fifth and final Test match, leveling the five-match series 2-2. With this emphatic win, India denied England a series victory and showcased their resilience in the longest format of the game.",
    content: `
      <div class="article-content">
        <p>In what many are calling the most dramatic World Cup match in recent memory, India emerged victorious against England by just 6 runs in a nail-biting encounter that had spectators on the edge of their seats until the final ball was bowled at Lord's Cricket Ground.</p>
        
        <p>The victory came in the fifth and final Test match of the series, with India successfully leveling the five-match series 2-2, denying England what would have been a historic series victory on home soil.</p>
        
        <h3>Match Summary and Key Moments</h3>
        <p>India, batting first after winning the toss, posted a challenging total of 298 runs in their allotted 50 overs. The innings was anchored by a magnificent century from captain Virat Kohli, who remained unbeaten on 118 runs from 124 balls.</p>
        
        <h4>India's Batting Performance</h4>
        <ul>
          <li><strong>Virat Kohli:</strong> 118* (124 balls, 12 fours, 2 sixes) - Player of the Match</li>
          <li><strong>Rohit Sharma:</strong> 67 (78 balls, 8 fours) - Solid foundation</li>
          <li><strong>Ravindra Jadeja:</strong> 45 (38 balls, 4 fours, 1 six) - Crucial lower-order runs</li>
          <li><strong>KL Rahul:</strong> 34 (45 balls) - Steady partnership with Kohli</li>
          <li><strong>Hardik Pandya:</strong> 28* (19 balls) - Quick-fire finish</li>
        </ul>
        
        <h4>England's Bowling Figures</h4>
        <ul>
          <li><strong>Chris Woakes:</strong> 3/58 (10 overs) - Pick of the bowlers</li>
          <li><strong>Jofra Archer:</strong> 2/52 (10 overs) - Crucial breakthroughs</li>
          <li><strong>Adil Rashid:</strong> 2/48 (10 overs) - Tight spin bowling</li>
          <li><strong>Ben Stokes:</strong> 1/35 (8 overs) - Economical spell</li>
        </ul>
        
        <h3>England's Chase - A Rollercoaster Ride</h3>
        <p>England's chase started aggressively with openers Joe Root and Jonny Bairstow putting on a commanding 89-run partnership in just 12 overs. However, India's bowling attack, spearheaded by Jasprit Bumrah and Mohammed Shami, struck at regular intervals to keep the pressure mounting.</p>
        
        <h4>England's Batting Scorecard</h4>
        <ul>
          <li><strong>Joe Root:</strong> 89 (102 balls, 9 fours) - Anchored the chase</li>
          <li><strong>Jonny Bairstow:</strong> 54 (61 balls, 6 fours) - Aggressive start</li>
          <li><strong>Ben Stokes:</strong> 42 (38 balls, 4 fours, 1 six) - Fighting knock</li>
          <li><strong>Jos Buttler:</strong> 38 (29 balls, 3 fours, 1 six) - Late charge</li>
          <li><strong>Moeen Ali:</strong> 25 (23 balls, 2 fours) - Valuable contribution</li>
          <li><strong>Liam Livingstone:</strong> 18 (15 balls, 1 four, 1 six) - Quick runs</li>
        </ul>
        
        <h4>India's Bowling Performance</h4>
        <ul>
          <li><strong>Jasprit Bumrah:</strong> 4/52 (10 overs) - Exceptional death bowling</li>
          <li><strong>Mohammed Shami:</strong> 3/45 (9.4 overs) - Final over heroics</li>
          <li><strong>Ravindra Jadeja:</strong> 2/38 (10 overs) - Crucial middle-order wickets</li>
          <li><strong>Yuzvendra Chahal:</strong> 1/51 (10 overs) - Kept things tight</li>
        </ul>
        
        <h3>The Dramatic Final Over</h3>
        <p>The match reached its crescendo in the final over, with England needing 12 runs with 3 wickets in hand. Mohammed Shami was entrusted with bowling the final over, and the experienced pacer delivered under immense pressure.</p>
        
        <h4>Ball-by-Ball Final Over Drama</h4>
        <ol>
          <li><strong>Ball 1:</strong> Liam Livingstone hits a boundary through covers (8 needed off 5)</li>
          <li><strong>Ball 2:</strong> Livingstone attempts a big shot, edges to keeper - OUT (8 needed off 4)</li>
          <li><strong>Ball 3:</strong> Chris Woakes takes a single to long-on (7 needed off 3)</li>
          <li><strong>Ball 4:</strong> Jofra Archer swings hard, gets 2 runs to deep midwicket (5 needed off 2)</li>
          <li><strong>Ball 5:</strong> Archer hits a boundary over point - crowd erupts (1 needed off 1)</li>
          <li><strong>Ball 6:</strong> Archer attempts the winning run, beaten by Shami's yorker - India wins by 6 runs!</li>
        </ol>
        
        <h3>Turning Points That Defined the Match</h3>
        
        <h4>Kohli's Masterclass Under Pressure</h4>
        <p>Virat Kohli's unbeaten century was a masterpiece of controlled aggression. Coming to the crease when India was struggling at 45/2, Kohli rebuilt the innings with calculated shot selection and strategic partnerships.</p>
        
        <blockquote>
          <p>"This innings will be remembered as one of Kohli's finest in challenging conditions. His ability to accelerate when needed while maintaining composure was exemplary."</p>
          <cite>- Former England captain Michael Vaughan</cite>
        </blockquote>
        
        <h4>Bumrah's Spell in Death Overs</h4>
        <p>Jasprit Bumrah's final spell of 4 overs for just 18 runs, including 2 crucial wickets, turned the match in India's favor. His yorkers and slower deliveries proved unplayable under pressure.</p>
        
        <h4>Root's Fighting Knock</h4>
        <p>Joe Root's 89 kept England in the hunt throughout the chase. His partnership with Ben Stokes (67 runs for the 4th wicket) brought England within touching distance of victory.</p>
        
        <h3>Statistical Highlights</h3>
        
        <h4>Match Records</h4>
        <ul>
          <li>Closest finish in India vs England ODIs at Lord's</li>
          <li>Kohli's 45th ODI century - joint 2nd most in cricket history</li>
          <li>Bumrah's best figures in ODIs at Lord's</li>
          <li>Highest successful chase defense by India in England (last 10 years)</li>
        </ul>
        
        <h4>Series Statistics</h4>
        <ul>
          <li><strong>Leading run-scorer:</strong> Virat Kohli (India) - 452 runs at 90.4 average</li>
          <li><strong>Leading wicket-taker:</strong> Jasprit Bumrah (India) - 18 wickets at 16.8 average</li>
          <li><strong>Most centuries:</strong> Joe Root (England) - 2 hundreds</li>
          <li><strong>Best bowling figures:</strong> Mohammed Shami (India) - 5/28 in 3rd ODI</li>
        </ul>
        
        <h3>Captain's Comments and Reactions</h3>
        
        <h4>Virat Kohli (India Captain)</h4>
        <p>"This is what cricket is all about. The boys showed tremendous character and fight throughout the series. To level the series after being down shows the spirit in this team. Special mention to our bowling unit - they were exceptional under pressure."</p>
        
        <h4>Joe Root (England Captain)</h4>
        <p>"Credit to India - they played exceptionally well today. Kohli's innings was simply outstanding, and their bowling in the death overs was superior to ours. We can be proud of how we fought in this series, but we missed crucial moments that could have changed the outcome."</p>
        
        <h3>Expert Analysis and Future Implications</h3>
        
        <h4>Technical Analysis</h4>
        <p>Cricket analysts highlighted several key factors that contributed to India's victory:</p>
        
        <ul>
          <li><strong>Death bowling execution:</strong> India's bowlers maintained better line and length in pressure situations</li>
          <li><strong>Field positioning:</strong> Strategic field changes in the final 10 overs created pressure</li>
          <li><strong>Batting partnerships:</strong> India built crucial partnerships at key moments</li>
          <li><strong>Mental strength:</strong> India showed superior composure in crunch situations</li>
        </ul>
        
        <h4>Impact on World Cup Preparations</h4>
        <p>This series result has significant implications for both teams' World Cup preparations:</p>
        
        <p><strong>For India:</strong></p>
        <ul>
          <li>Confidence boost ahead of the World Cup</li>
          <li>Validation of team combination and strategy</li>
          <li>Kohli's return to form at crucial time</li>
          <li>Bowling unit's effectiveness under pressure proven</li>
        </ul>
        
        <p><strong>For England:</strong></p>
        <ul>
          <li>Areas identified for improvement before World Cup</li>
          <li>Death bowling concerns highlighted</li>
          <li>Batting depth and finishing ability under scrutiny</li>
          <li>Need for tactical adjustments in pressure situations</li>
        </ul>
        
        <h3>Fan Reactions and Social Media Buzz</h3>
        <p>The match generated tremendous excitement on social media, with #INDvENG trending worldwide. Fans from both countries praised the quality of cricket and the thrilling finish.</p>
        
        <p>Cricket legends also joined in appreciating the contest, with many calling it one of the best ODI matches in recent years. The Lord's crowd gave both teams a standing ovation, acknowledging the exceptional cricket on display.</p>
        
        <p>This match will be remembered as a classic example of ODI cricket at its finest, showcasing the unpredictable and dramatic nature of the sport that continues to captivate audiences worldwide. The 2-2 series draw sets up future encounters between these two cricket powerhouses with even more anticipation and excitement.</p>
      </div>
    `,
    category: "Sports",
    timestamp: "6 hours ago",
    imageUrl: "/Home/SP.jpg",
    author: "Michael Thompson",
    readTime: "12 min read",
    tags: ["Cricket", "India", "England", "Sports", "World Cup", "Test Match"]
  },
  {
    id: 4,
    title: "OpenAI claims GPT-5 model boosts ChatGPT to 'PhD level'",
    summary: "ChatGPT-maker OpenAI has unveiled the long-awaited latest version of its artificial intelligence (AI) chatbot, GPT-5, saying it can provide PhD-level expertise.",
    content: `
      <div class="article-content">
        <p>OpenAI, the company behind ChatGPT, has officially unveiled GPT-5, the latest iteration of its groundbreaking artificial intelligence model. The company claims this new version represents a quantum leap in AI capabilities, offering what they describe as "PhD-level expertise" across multiple domains.</p>
        
        <p>Billed as "smarter, faster, and more useful," the new model promises to revolutionize how users interact with AI technology. OpenAI co-founder and CEO Sam Altman described GPT-5 as ushering in "a new era of ChatGPT" during the highly anticipated announcement event at OpenAI's headquarters in San Francisco.</p>
        
        <h3>Revolutionary Capabilities and Improvements</h3>
        <p>GPT-5 introduces several groundbreaking enhancements that set it apart from its predecessors:</p>
        
        <h4>Enhanced Reasoning and Problem-Solving</h4>
        <ul>
          <li><strong>Advanced Logic Processing:</strong> Superior ability to handle complex logical reasoning chains</li>
          <li><strong>Mathematical Proficiency:</strong> Capable of solving graduate-level mathematics problems</li>
          <li><strong>Scientific Analysis:</strong> Deep understanding of scientific principles and methodologies</li>
          <li><strong>Critical Thinking:</strong> Ability to evaluate arguments and identify logical fallacies</li>
        </ul>
        
        <h4>Multimodal Integration</h4>
        <ul>
          <li><strong>Advanced Vision:</strong> Can analyze images, diagrams, and charts with unprecedented accuracy</li>
          <li><strong>Audio Processing:</strong> Real-time speech recognition and generation capabilities</li>
          <li><strong>Video Understanding:</strong> Can interpret and analyze video content frame by frame</li>
          <li><strong>Cross-Modal Learning:</strong> Seamlessly combines information from multiple input types</li>
        </ul>
        
        <h4>Performance Enhancements</h4>
        <ul>
          <li><strong>Processing Speed:</strong> Up to 3x faster response times compared to GPT-4</li>
          <li><strong>Context Length:</strong> Can process up to 1 million tokens in a single conversation</li>
          <li><strong>Memory Efficiency:</strong> Improved long-term conversation memory</li>
          <li><strong>Accuracy:</strong> 40% reduction in factual errors and hallucinations</li>
        </ul>
        
        <h3>PhD-Level Expertise Across Disciplines</h3>
        <p>OpenAI's bold claim of "PhD-level" performance is backed by extensive testing across various academic and professional domains:</p>
        
        <h4>Scientific Research and Analysis</h4>
        <p>GPT-5 demonstrates exceptional capabilities in scientific research:</p>
        <ul>
          <li><strong>Literature Review:</strong> Can synthesize thousands of research papers in minutes</li>
          <li><strong>Hypothesis Generation:</strong> Proposes novel research directions based on existing knowledge</li>
          <li><strong>Data Analysis:</strong> Advanced statistical analysis and interpretation capabilities</li>
          <li><strong>Experimental Design:</strong> Can design controlled experiments with proper methodologies</li>
        </ul>
        
        <blockquote>
          <p>"GPT-5's ability to analyze and synthesize scientific literature is remarkable. It can identify research gaps and suggest novel approaches that even experienced researchers might overlook."</p>
          <cite>- Dr. Elena Rodriguez, Stanford University Research Director</cite>
        </blockquote>
        
        <h4>Medical and Healthcare Applications</h4>
        <p>The model shows remarkable accuracy in medical diagnosis and treatment recommendations:</p>
        <ul>
          <li><strong>Diagnostic Accuracy:</strong> 92% accuracy on complex medical case studies</li>
          <li><strong>Treatment Planning:</strong> Can suggest comprehensive treatment protocols</li>
          <li><strong>Drug Interactions:</strong> Identifies potential adverse drug reactions</li>
          <li><strong>Medical Literature:</strong> Stays current with latest medical research</li>
        </ul>
        
        <p><em>*OpenAI emphasizes that GPT-5 should supplement, not replace, professional medical advice</em></p>
        
        <h4>Legal Analysis and Research</h4>
        <ul>
          <li><strong>Case Law Analysis:</strong> Can analyze legal precedents and their applications</li>
          <li><strong>Contract Review:</strong> Identifies potential issues in legal documents</li>
          <li><strong>Regulatory Compliance:</strong> Helps navigate complex regulatory frameworks</li>
          <li><strong>Legal Writing:</strong> Assists in drafting legal briefs and documents</li>
        </ul>
        
        <h4>Engineering and Technical Solutions</h4>
        <ul>
          <li><strong>System Design:</strong> Can architect complex software and hardware systems</li>
          <li><strong>Code Generation:</strong> Writes production-quality code in multiple languages</li>
          <li><strong>Debugging:</strong> Identifies and fixes complex programming issues</li>
          <li><strong>Optimization:</strong> Suggests performance improvements and best practices</li>
        </ul>
        
        <h3>Comprehensive Benchmark Performance</h3>
        <p>GPT-5 has achieved unprecedented scores across standardized tests and evaluations:</p>
        
        <h4>Academic Performance Metrics</h4>
        <ul>
          <li><strong>Graduate Record Examination (GRE):</strong> 95th percentile across all sections</li>
          <li><strong>Law School Admission Test (LSAT):</strong> 92nd percentile</li>
          <li><strong>Medical College Admission Test (MCAT):</strong> 89th percentile</li>
          <li><strong>Graduate Management Admission Test (GMAT):</strong> 94th percentile</li>
        </ul>
        
        <h4>Professional Certification Tests</h4>
        <ul>
          <li><strong>Certified Public Accountant (CPA):</strong> 88% pass rate simulation</li>
          <li><strong>Project Management Professional (PMP):</strong> 91% accuracy</li>
          <li><strong>Cisco Certified Network Professional:</strong> 85% success rate</li>
          <li><strong>AWS Solutions Architect:</strong> 87% accuracy on practice tests</li>
        </ul>
        
        <h4>Specialized PhD Qualifying Examinations</h4>
        <ul>
          <li><strong>Physics PhD Quals:</strong> 85% success rate across top universities</li>
          <li><strong>Computer Science PhD Quals:</strong> 90% success rate</li>
          <li><strong>Chemistry PhD Quals:</strong> 82% success rate</li>
          <li><strong>Economics PhD Quals:</strong> 88% success rate</li>
        </ul>
        
        <h3>Industry Reactions and Expert Opinions</h3>
        
        <h4>Academic Community Response</h4>
        <p>The academic community has shown mixed reactions to OpenAI's claims:</p>
        
        <p><strong>Supporters:</strong></p>
        <blockquote>
          <p>"GPT-5 represents a significant advancement in AI capabilities. Its ability to engage with complex academic content at a graduate level is genuinely impressive and could accelerate research across multiple disciplines."</p>
          <cite>- Dr. Andrew Ng, Stanford University</cite>
        </blockquote>
        
        <p><strong>Skeptics:</strong></p>
        <blockquote>
          <p>"While the technical improvements are undeniable, we must be cautious about claims of 'PhD-level' expertise. True doctoral-level understanding involves creativity, intuition, and years of specialized training that AI may not fully replicate."</p>
          <cite>- Dr. Fei-Fei Li, Stanford Human-Centered AI Institute</cite>
        </blockquote>
        
        <h4>Technology Industry Response</h4>
        <p>Major technology companies have expressed both excitement and concern about GPT-5's capabilities:</p>
        
        <ul>
          <li><strong>Google:</strong> Announced accelerated timeline for competing AI models</li>
          <li><strong>Microsoft:</strong> Plans deeper integration with existing OpenAI partnership</li>
          <li><strong>Amazon:</strong> Evaluating potential applications for AWS services</li>
          <li><strong>Meta:</strong> Increased investment in internal AI research programs</li>
        </ul>
        
        <h3>Ethical Considerations and Safety Measures</h3>
        <p>OpenAI has emphasized its commitment to responsible AI development with GPT-5:</p>
        
        <h4>Advanced Safety Protocols</h4>
        <ul>
          <li><strong>Alignment Research:</strong> Extensive work to ensure AI goals align with human values</li>
          <li><strong>Bias Mitigation:</strong> Comprehensive testing and reduction of harmful biases</li>
          <li><strong>Content Filtering:</strong> Enhanced systems to prevent generation of harmful content</li>
          <li><strong>Transparency Tools:</strong> Improved ability to explain reasoning and decision-making</li>
        </ul>
        
        <h4>Regulatory Compliance</h4>
        <ul>
          <li><strong>Government Cooperation:</strong> Working with regulators on AI safety standards</li>
          <li><strong>International Standards:</strong> Compliance with emerging global AI governance frameworks</li>
          <li><strong>Privacy Protection:</strong> Enhanced data protection and user privacy measures</li>
          <li><strong>Audit Trail:</strong> Comprehensive logging of AI decisions for accountability</li>
        </ul>
        
        <h3>Commercial Applications and Market Impact</h3>
        
        <h4>Enterprise Solutions</h4>
        <p>GPT-5 is expected to transform various business applications:</p>
        
        <ul>
          <li><strong>Legal Services:</strong> Automated contract analysis and legal research</li>
          <li><strong>Healthcare:</strong> Diagnostic assistance and treatment planning</li>
          <li><strong>Financial Services:</strong> Risk analysis and investment strategy development</li>
          <li><strong>Education:</strong> Personalized tutoring and curriculum development</li>
          <li><strong>Research & Development:</strong> Accelerated innovation across industries</li>
        </ul>
        
        <h4>Economic Implications</h4>
        <p>Economists predict significant economic impacts from GPT-5's deployment:</p>
        
        <ul>
          <li><strong>Productivity Gains:</strong> Estimated 15-25% improvement in knowledge work productivity</li>
          <li><strong>Job Market Changes:</strong> New roles emerging while others become automated</li>
          <li><strong>Industry Disruption:</strong> Traditional service industries facing transformation</li>
          <li><strong>Economic Growth:</strong> Potential GDP impact of 0.5-1.2% annually</li>
        </ul>
        
        <h3>Availability and Pricing Structure</h3>
        
        <h4>Rollout Timeline</h4>
        <ul>
          <li><strong>Phase 1 (Current):</strong> Limited beta testing with select enterprise partners</li>
          <li><strong>Phase 2 (Next Month):</strong> ChatGPT Plus subscribers gain early access</li>
          <li><strong>Phase 3 (Q2 2025):</strong> Full consumer availability</li>
          <li><strong>Phase 4 (Q3 2025):</strong> Enterprise API and custom solutions</li>
        </ul>
        
        <h4>Pricing Model</h4>
        <ul>
          <li><strong>Consumer Tier:</strong> $25/month for ChatGPT Plus with GPT-5 access</li>
          <li><strong>Professional Tier:</strong> $100/month for advanced features and higher limits</li>
          <li><strong>Enterprise Tier:</strong> Custom pricing based on usage and features</li>
          <li><strong>API Access:</strong> Pay-per-token model with volume discounts</li>
        </ul>
        
        <h3>Future Development and Research Directions</h3>
        
        <h4>Ongoing Research Areas</h4>
        <p>OpenAI has outlined several areas for continued development:</p>
        
        <ul>
          <li><strong>Embodied AI:</strong> Integration with robotics and physical world interaction</li>
          <li><strong>Scientific Discovery:</strong> AI systems capable of making novel scientific discoveries</li>
          <li><strong>Creative Collaboration:</strong> Enhanced human-AI creative partnerships</li>
          <li><strong>Specialized Expertise:</strong> Domain-specific versions for particular industries</li>
        </ul>
        
        <h4>Long-term Vision</h4>
        <p>Sam Altman concluded the announcement by outlining OpenAI's vision for the future:</p>
        
        <blockquote>
          <p>"GPT-5 represents a significant step toward artificial general intelligence (AGI). Our goal is to ensure that AGI benefits all of humanity, and GPT-5 is designed with that principle at its core. We believe this technology will augment human capabilities rather than replace them, leading to unprecedented advances in science, education, and human knowledge."</p>
          <cite>- Sam Altman, CEO of OpenAI</cite>
        </blockquote>
        
        <h3>Global Competition and Market Dynamics</h3>
        <p>The release of GPT-5 intensifies global competition in the AI sector:</p>
        
        <h4>Competitive Landscape</h4>
        <ul>
          <li><strong>Google's Gemini:</strong> Expected major update in response to GPT-5</li>
          <li><strong>Anthropic's Claude:</strong> Focusing on safety and alignment advantages</li>
          <li><strong>Meta's LLaMA:</strong> Open-source approach gaining enterprise adoption</li>
          <li><strong>Chinese AI Companies:</strong> Baidu, Alibaba accelerating development timelines</li>
        </ul>
        
        <p>As the AI landscape continues to evolve rapidly, GPT-5's introduction marks a significant milestone in the journey toward more capable and useful artificial intelligence systems. The coming months will reveal how successfully OpenAI can deliver on its ambitious promises and how the technology will be adopted across different sectors of the economy.</p>
        
        <p>The implications of truly PhD-level AI capabilities extend far beyond technology, potentially reshaping education, research, professional services, and the very nature of human-machine collaboration in the 21st century.</p>
      </div>
    `,
    category: "Global",
    timestamp: "8 hours ago",
    imageUrl: "/Home/chat.jpg",
    author: "Dr. Alex Rivera",
    readTime: "15 min read",
    tags: ["AI", "Technology", "OpenAI", "ChatGPT", "Innovation", "Machine Learning"]
  }
];

// Helper functions
export function getNewsById(id: number): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllNews(): NewsArticle[] {
  return newsArticles;
}
