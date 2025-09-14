'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { ClockIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Add scroll handler function
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Sample blog data structure - you can add your content here later
const sampleBlogs = [
  {
    id: 1,
    title: "The EV BnB Model: Building a Peer-to-Peer Charger Sharing Platform from Scratch",
    excerpt: "A comprehensive analysis of the peer-to-peer EV charger sharing model, exploring market validation, technical challenges, and strategic development approaches for building scalable charging infrastructure.",
    content: `
      <h2 id="executive-summary">Executive Summary</h2>
      <p>The burgeoning electric vehicle (EV) market necessitates a robust and accessible charging infrastructure. Traditional centralized charging networks, while growing, often struggle to keep pace with accelerating EV adoption due to high initial costs, grid capacity limitations, and regulatory complexities. In response, the peer-to-peer (P2P) EV charger sharing model, often dubbed the "EV BnB" model, has emerged as a critical, decentralized solution. This innovative approach efficiently leverages underutilized private charging assets, such as home chargers, to address existing public charging gaps and alleviate "range anxiety" among EV drivers.</p>
      
      <p>This report delves into the strategic development and operational intricacies of building such a platform, using the theoretical "Watt Share" model as a case study. It explores the foundational inspiration, the rigorous early research required to validate market needs and identify latent supply, and the multifaceted challenges inherent in establishing and scaling a two-sided marketplace from its inception. Key aspects examined include MVP decisions, go-to-market experiments, and the crucial role of partnerships and funding. The analysis further distills vital lessons learned, highlighting what contributes to success and what poses significant hurdles. Ultimately, the report underscores the indispensable role of a clear vision, customer-centric design principles, robust technical execution, and astute business acumen for achieving scalability and long-term viability in this rapidly evolving sector.</p>

      <h2 id="introduction">1. Introduction: The Rise of the EV BnB Model</h2>
      
      <h3>Defining the Peer-to-Peer EV Charger Sharing Concept</h3>
      <p>The "EV BnB" model represents a transformative shift in the landscape of electric vehicle charging infrastructure. This paradigm enables private charger owners, referred to as "Hosts," to rent out their home charging stations to other EV drivers, known as "Chargees," through a dedicated digital platform. This decentralized approach directly confronts the limitations and bottlenecks prevalent in traditional public charging networks.</p>
      
      <p>The global P2P EV charging market is experiencing substantial and rapid expansion. Valued at an estimated US$290.2 million in 2024, projections indicate a surge to US$804.3 million by 2030, reflecting a robust Compound Annual Growth Rate (CAGR) of 18.5%. This vigorous growth is primarily propelled by the increasing global adoption of electric vehicles and the inherent, pressing demand for more accessible, distributed, and flexible charging solutions, particularly in geographical areas where public infrastructure remains limited or prohibitively expensive.</p>

      <h3>The Vision Behind Watt Share: What Inspired its Creation and How the "EV BnB" Idea Was Born</h3>
      <p>The genesis of Watt Share was deeply rooted in a profound dedication to sustainable transportation and an unwavering commitment to revolutionize the automotive industry. The founders' core vision was to accelerate a future where electric vehicles would become the dominant mode of transport, thereby significantly reducing emissions and lessening dependence on fossil fuels.</p>
      
      <p>Watt Share's explicit mission is to streamline the transition from internal combustion engine vehicles to EVs by directly addressing critical challenges in EV charging. The company's focus is sharply aimed at making EV charging more affordable, accessible, and convenient for all users, including tenants and landlords, with the ultimate goal of eradicating "range anxiety". This mission directly translates into the "EV BnB" concept, where private individuals are empowered to "Earn money by sharing your charger with other EV drivers," while other EV owners can effortlessly "Find & Share EV Chargers".</p>

      <h2 id="market-research">2. Laying the Groundwork: Early Research and Market Validation</h2>
      
      <h3>Understanding User Behavior: Insights from Talking to Potential Hosts and Drivers</h3>
      <p>Early research for an EV BnB model would have primarily focused on validating the core problem: the pervasive "range anxiety" experienced by EV drivers and the critical lack of reliable, bookable, and affordable charging options, particularly for those residing in apartments or without access to private home charging.</p>
      
      <p>For the supply side, the incentive for potential hosts is clear and quantifiable: the opportunity to "Earn money by sharing your charger". Platforms like Watt Share enhance this by providing tools such as a "Host EV Charger Sharing Calculator" to immediately estimate potential earnings. For example, charging for 1.5 hours per day could yield approximately 1806.75 CAD per year for a 10 Kw/h charger, directly appealing to the economic motivation for private individuals to participate as hosts.</p>

      <h3>Market Analysis and Competitive Landscape</h3>
      <p>The market for EV charging is characterized by a pressing need for "bookable, affordable and reliable" charging solutions, a core tenet of Joosup's mission. Existing public charging options frequently fall short, suffering from a lack of guaranteed availability, high costs, and the inability to reserve charging spots in advance.</p>

      <h2 id="challenges">3. Navigating the Two-Sided Marketplace: Challenges and Solutions</h2>
      
      <h3>Building from Zero: The Inherent Difficulties of Attracting and Balancing Both Hosts and Drivers</h3>
      <p>A two-sided marketplace inherently faces a "chicken-and-egg problem": EV drivers are hesitant to purchase EVs due to a perceived lack of charging access, while property managers or potential hosts are reluctant to install chargers without sufficient existing EV demand among tenants or the public. This dynamic necessitates a sophisticated, simultaneous user acquisition strategy that appeals to both the supply (hosts) and demand (drivers) sides of the marketplace.</p>

      <h3>Technical Hurdles: Charger Compatibility, Standardization, Grid Integration</h3>
      <p>A significant technical challenge lies in the lack of universal standardization across charger compatibility, connector types, and communication protocols such as Open Charge Point Protocol (OCPP) and OpenADR. This fragmentation creates friction for both users and platform operators. Furthermore, managing increased electricity demand and ensuring grid stability requires robust smart grid integration capabilities, including load balancing and demand response mechanisms.</p>

      <h3>Trust and Safety Mechanisms: Addressing Concerns like Security, Reliability, and User Confidence</h3>
      <p>EV charging stations are vulnerable to both physical attacks, such as copper and cable theft and vandalism, and cyberattacks, including causing infrastructure outages, manipulating consumption data, authentication bypass, or infiltrating backend systems. Such incidents can lead to significant financial losses, severe reputational damage, and potential legal liabilities for platform operators.</p>

      <h2 id="mvp-strategy">4. MVP Decisions, Go-to-Market Experiments, Partnerships, and Funding</h2>
      
      <h3>Minimum Viable Product (MVP) Strategy</h3>
      <p>The development of an EV BnB platform necessitates a Minimum Viable Product (MVP) approach to efficiently validate core assumptions and gather crucial user feedback with minimal initial effort. An MVP is defined as the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort, emphasizing starting small, learning fast, and scaling appropriately.</p>
      
      <p>For an EV BnB model, a "Single-Feature MVP" or a "Working Model (Prototype MVP)" would be highly effective. The primary feature set would include:</p>
      <ul>
        <li><strong>Host Listing:</strong> A simple interface for charger owners to list their charger's location, availability, type, and pricing.</li>
        <li><strong>Driver Discovery & Booking:</strong> A map-based interface for EV drivers to find available chargers nearby, view details, and initiate a booking request.</li>
        <li><strong>Basic Payment Processing:</strong> A secure, streamlined mechanism for drivers to pay and hosts to receive earnings.</li>
      </ul>

      <h3>Go-to-Market Experiments and User Acquisition</h3>
      <p>A successful go-to-market strategy for an EV BnB platform must address the inherent "chicken-and-egg" problem of a two-sided marketplace. Initial experiments would likely involve a highly localized approach, focusing on specific urban or suburban areas with high EV adoption rates and known public charging deficits.</p>

      <h3>Strategic Partnerships</h3>
      <p>Partnerships are fundamental to the growth and operational efficiency of an EV BnB platform. They can bridge infrastructure gaps, enhance service offerings, and build trust.</p>

      <h2 id="lessons-learned">5. Lessons Learned: What Worked, What Didn't, and What's Next</h2>
      
      <h3>Key Success Factors</h3>
      <p>Several elements consistently contribute to the success of P2P EV charger sharing platforms:</p>
      <ul>
        <li><strong>Customer-Centric Design:</strong> Platforms that prioritize user experience, making it simple for both hosts to list and drivers to find/book chargers, see higher adoption.</li>
        <li><strong>Addressing Core Pain Points:</strong> Directly tackling "range anxiety," lack of public infrastructure, and high charging costs provides a compelling value proposition.</li>
        <li><strong>Leveraging Latent Supply:</strong> Identifying and incentivizing the vast network of existing private chargers is a crucial differentiator and accelerates network growth with lower capital expenditure.</li>
        <li><strong>Technological Innovation:</strong> Solutions like EVmatch's adapter for non-networked chargers demonstrate how technology can overcome compatibility barriers and expand the addressable market.</li>
      </ul>

      <h3>Challenges and What Didn't Work as Expected</h3>
      <p>Despite the promise, P2P EV charging platforms face persistent challenges:</p>
      <ul>
        <li><strong>Achieving Spatial Liquidity:</strong> Simply having many chargers is not enough; they must be located precisely where demand exists, which is difficult given the fixed nature of home chargers.</li>
        <li><strong>Reliability and Trust:</strong> The broader EV charging industry struggles with charger uptime. P2P platforms must actively build trust through robust security measures and transparent reliability reporting.</li>
        <li><strong>Regulatory Fragmentation:</strong> Inconsistent local and regional regulations, coupled with evolving safety and interoperability standards, create significant hurdles and costs for scaling.</li>
      </ul>

      <h3>Future Outlook and Next Steps</h3>
      <p>The peer-to-peer EV charging market is projected to continue its significant growth, driven by rising EV ownership, technological advancements, and supportive government policies. The market is expected to reach $804.3 million by 2030, with Level 2 chargers dominating due to their balance of cost, speed, and accessibility for P2P models.</p>

      <h2 id="conclusion">Conclusions</h2>
      <p>The "EV BnB" model stands as a testament to the power of the sharing economy in addressing critical infrastructure gaps. Platforms like Watt Share, Joosup, and EVmatch exemplify how leveraging underutilized private assets can provide a scalable, cost-effective, and community-driven solution to the pervasive challenges of EV charging. The market's rapid growth trajectory underscores the urgent need for such decentralized approaches to complement traditional public networks.</p>
      
      <p>Success in this two-sided marketplace is fundamentally tied to a deep understanding of user pain points, particularly range anxiety and the high cost/unavailability of public charging. Platforms that offer clear economic incentives for hosts and guaranteed, convenient access for drivers are best positioned for adoption. Overcoming the "chicken-and-egg" problem requires sophisticated, often localized, user acquisition strategies focused on achieving spatial liquidity.</p>
      
      <p>The future of P2P EV charging will likely see increased integration of AI for optimization, continued expansion into underserved areas, and diversification of revenue streams beyond direct charging fees. Ultimately, the long-term viability and widespread impact of the EV BnB model depend on its ability to continuously innovate, build robust trust frameworks, and strategically collaborate across the broader EV ecosystem, ensuring a seamless and reliable charging experience for all.</p>
    `,
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-zion-10029874.jpg",
    date: " April, 21, 2025",
    author: "Reza Boostani",
    readingTime: "15 min read",
    references: [
      {
        number: 1,
        text: "Global P2P EV Charging Market Report 2024-2030",
        url: "#"
      },
      {
        number: 2,
        text: "Watt Share Platform Documentation",
        url: "#"
      },
      {
        number: 3,
        text: "Joosup Case Study: Zero Commission Model",
        url: "#"
      },
      {
        number: 4,
        text: "EVmatch Adapter Technology Specifications",
        url: "#"
      },
      {
        number: 5,
        text: "California Energy Commission Grant Programs",
        url: "#"
      }
    ]
  },
  {
    id: 2,
    title: "From Feedback to Feature: How I Turned User Pain into a WattShare Win",
    excerpt: "A real-world story of how user feedback led to a major product improvement for WattShare hosts, boosting engagement, earnings, and network reliability.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>As product builders, we're constantly striving to create solutions that not only meet but exceed user expectations. But let's be honest, sometimes our initial assumptions miss the mark. That's where the magic of user feedback comes in. It's not just a collection of comments; it's a treasure trove of insights waiting to be unearthed, a direct line to understanding real user pain. Today, I want to share a story about how listening closely to a user, deeply understanding their frustration, and then systematically addressing it, led to a significant product win for WattShare, our Electric Vehicle (EV) Charger Sharing Platform.</p>

      <h2 id="frustration">The Frustration: A WattShare Host's Availability Abyss</h2>
      <p>At WattShare, our mission is to empower EV owners to easily share their home chargers with neighbors and other EV drivers, fostering a more connected and sustainable charging ecosystem. ... She wanted to "stay in control of her charging station," as our platform promises, but felt limited by the tools at hand.</p>

      <h2 id="unpacking">Unpacking the \"Why\": Expected vs. Experienced in Charger Sharing</h2>
      <p>The core of Maria's pain lay in the discrepancy between her expectation of effortless control and the actual, cumbersome experience. ... This oversight was impacting both host satisfaction and the overall density of available chargers on our network, especially during peak demand.</p>

      <h2 id="root-cause">Identifying the Root Cause and Reframing the Problem</h2>
      <p>My immediate thought wasn't just to "add more calendar options." Instead, I delved deeper. ... This reframe shifted the focus from a minor UI fix to a fundamental enhancement of the host experience, aligning directly with WattShare's promise of simplicity and control.</p>

      <h2 id="implementation">From Idea to Implementation: Prioritization, Design, and Execution</h2>
      <h3 id="prioritization">Prioritization</h3>
      <p>This issue, while seemingly granular, had a significant impact on host retention, satisfaction, and, crucially, the density of our charging network. ... We weighed its impact on host engagement against technical complexity and potential business value.</p>
      <h3 id="design">Design</h3>
      <p>My design process began with extensive user journey mapping, envisioning how Maria would ideally manage her charger. ... We iterated on wireframes and prototypes, conducting usability testing with hosts like Maria to ensure the new features truly solved their pain points.</p>
      <h3 id="implementation-details">Implementation</h3>
      <p>Working closely with our engineering team, we tackled the complexities of real-time calendar synchronization and integrating new scheduling logic. ... releasing incremental improvements to a beta group of hosts, including Maria, to gather continuous feedback and ensure stability.</p>
      <h3 id="cross-functional">Cross-functional Communication</h3>
      <p>Throughout this process, I maintained constant dialogue with our community support team, who were on the front lines hearing host frustrations. ... highlighting how the new features empowered hosts to "Earn money by sharing your charger" more effectively, truly being "part of a community of partners who are actively changing the landscape of EV charging infrastructure" as advertised on WattShare.</p>

      <h2 id="result">The Result: Unleashing Charger Potential, Empowering Hosts</h2>
      <p>The impact was almost immediate and highly encouraging. Within weeks of rolling out the enhanced availability management features, we observed a significant positive shift across the platform: ... And that, for me, is the true joy of product development at WattShare, enabling a cleaner city and a more efficient EV future, one charge at a time.</p>
    `,
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-mikhail-nilov-6592672.jpg",
    date: "December 12, 2024",
    author: "Reza Boostani",
    readingTime: "10 min read",
    references: []
  },
  {
    id: 3,
    title: "Validating a Product in 30 Days: My Step-by-Step Framework (A WattShare Story)",
    excerpt: "A practical, week-by-week guide to rapidly validating product ideas and features, illustrated with a real WattShare case study.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>In the fast-paced world of product development, the biggest sin isn't failing; it's building something nobody wants. ... Let me walk you through my step-by-step process, the tools I use, and how to separate genuine signals from distracting noise.</p>

      <h2 id="framework">The 30-Day Validation Sprint: My Framework</h2>
      <p>This framework is designed to get concrete answers quickly, minimizing wasted resources and maximizing our chances of building impactful solutions.</p>

      <h2 id="week1">Week 1: Deep Dive into the Problem & User</h2>
      <p>This is about truly understanding the "why" behind any potential feature or product. ... Focus on behavior over stated intent – what do they do, not just what they say they would do.</p>

      <h2 id="week2">Week 2: Solution Exploration & Low-Fidelity Prototyping</h2>
      <p>Now that we understand the problem, it's time to brainstorm and test potential solutions. ... Observe how they interact, not just what they say.</p>

      <h2 id="week3">Week 3: High-Fidelity Validation & Market Interest</h2>
      <p>Refine the chosen solution and gauge real market appetite. ... Monitor traffic sources to see where the interested users are coming from.</p>

      <h2 id="week4">Week 4: Analyze, Decide & Plan Forward</h2>
      <p>The final stretch is all about synthesizing data and making an informed decision. ... If many users abandon a specific step in the prototype, that's a signal of a major UX flaw.</p>

      <h2 id="wattshare-example">How We Used This at WattShare: The "Smart Scheduling" Feature</h2>
      <p>A prime example where this framework shone at WattShare was when we identified that hosts (charger owners) were struggling with managing their charger availability efficiently, leading to missed earning opportunities and frustration. ... This rapid validation process saved us months of development time and ensured we built a feature that truly solved a critical user problem.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>This 30-day framework is not a rigid dogma, but a flexible guide. It's about being resourceful, customer-centric, and disciplined in your pursuit of product-market fit. ... ensuring that every feature we build, and every product we launch, truly delivers value.</p>
    `,
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-kindelmedia-7054802.jpg",
    date: "Jan 9, 2025",
    author: "Reza Boostani",
    readingTime: "12 min read",
    references: []
  },
  {
    id: 4,
    title: "Building Scalable Software Solutions: Lessons from Product Development",
    excerpt: "Key insights and best practices for developing scalable software products in today's fast-paced technology landscape.",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Developing scalable software solutions requires careful planning, robust architecture, and a deep understanding of user needs and market dynamics.</p>
      
      <h2 id="architecture">System Architecture</h2>
      <p>A well-designed system architecture is the foundation of any scalable software solution, enabling growth and adaptation to changing requirements.</p>
      
      <h2 id="user-experience">User Experience Design</h2>
      <p>Creating intuitive and efficient user experiences is crucial for product adoption and long-term success in competitive markets.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Successful software development requires a balance of technical excellence, user-centric design, and strategic business thinking.</p>
    `,
    image: "/window.svg",
    date: "December 5, 2024",
    author: "Reza Boostani",
    readingTime: "10 min read"
  }
];

export default function BlogPost() {
  const params = useParams();
  const blog = sampleBlogs.find((b) => b.id === parseInt(params.id as string));

  // Fix for window is not defined
  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    // Handle hash-based navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Run on initial load
    handleHashNavigation();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="mt-24 container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Blog post not found</h1>
          <Link href="/blog" className="text-blue-500 hover:text-blue-600 hover:underline">
            ← Back to blog
          </Link>
        </div>
        <ContactSection />
        <Footer />
      </div>
    );
  }

  // Section summary for each blog
  let summarySections: { id: string; title: string; description: string }[] = [];
  if (blog.id === 1) {
    summarySections = [
      { id: 'executive-summary', title: 'Executive Summary', description: 'Overview and summary of the EV BnB model.' },
      { id: 'introduction', title: 'Introduction', description: 'The rise of the EV BnB model and its vision.' },
      { id: 'market-research', title: 'Market Research', description: 'Early research, user behavior, and competitive landscape.' },
      { id: 'challenges', title: 'Challenges', description: 'Marketplace, technical, and trust challenges.' },
      { id: 'mvp-strategy', title: 'MVP Strategy', description: 'MVP decisions, go-to-market, partnerships, and funding.' },
      { id: 'lessons-learned', title: 'Lessons Learned', description: 'Success factors, challenges, and future outlook.' },
      { id: 'conclusion', title: 'Conclusions', description: 'Key takeaways and strategic insights.' },
    ];
  } else if (blog.id === 2) {
    summarySections = [
      { id: "introduction", title: "Introduction", description: "How user feedback led to a WattShare product win." },
      { id: "frustration", title: "The Frustration", description: "A WattShare host's availability management pain." },
      { id: "unpacking", title: "Unpacking the 'Why'", description: "Expected vs. experienced in charger sharing." },
      { id: "root-cause", title: "Identifying the Root Cause", description: "Reframing the problem for a better solution." },
      { id: "implementation", title: "From Idea to Implementation", description: "Prioritization, design, and execution." },
      { id: "prioritization", title: "Prioritization", description: "Why this feature was prioritized." },
      { id: "design", title: "Design", description: "User journey mapping and feature design." },
      { id: "implementation-details", title: "Implementation", description: "Engineering and agile rollout." },
      { id: "cross-functional", title: "Cross-functional Communication", description: "Support, marketing, and community collaboration." },
      { id: "result", title: "The Result", description: "Impact on hosts, earnings, and the WattShare network." },
    ];
  } else if (blog.id === 3) {
    summarySections = [
      { id: "introduction", title: "Introduction", description: "Why rapid validation matters in product development." },
      { id: "framework", title: "The 30-Day Validation Sprint: My Framework", description: "Overview of the 30-day validation process." },
      { id: "week1", title: "Week 1: Deep Dive into the Problem & User", description: "Understanding the problem and user through interviews and surveys." },
      { id: "week2", title: "Week 2: Solution Exploration & Low-Fidelity Prototyping", description: "Brainstorming, prototyping, and early user feedback." },
      { id: "week3", title: "Week 3: High-Fidelity Validation & Market Interest", description: "Refining solutions and testing market demand." },
      { id: "week4", title: "Week 4: Analyze, Decide & Plan Forward", description: "Synthesizing data and making go/no-go decisions." },
      { id: "wattshare-example", title: "How We Used This at WattShare: The 'Smart Scheduling' Feature", description: "A real-world case study of the framework in action." },
      { id: "conclusion", title: "Conclusion", description: "Key takeaways and the value of disciplined validation." },
    ];
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="mt-24 bg-white flex-grow">
        <Link href="/blog" className="text-blue-500 hover:text-blue-600 hover:underline mb-8 inline-block px-4 sm:px-8 md:px-16 lg:px-48">
          ← Back to blog
        </Link>
        
        <article className="bg-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 px-4 sm:px-8 md:px-16 lg:px-48">{blog.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-8 md:px-16 lg:px-48">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.author}</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <ClockIcon className="h-5 w-5" />
              <span>{blog.readingTime}</span>
            </div>
          </div>

          <div className="px-4 sm:px-8 md:px-16 lg:px-48 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-2/3">
                  <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority={blog.id === 1}
                    />
                  </div>
                </div>
                
                {/* Article Summary Section */}
                <div className="lg:w-1/3 p-6 sm:p-8 md:p-10 bg-white">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Summary</h3>
                      <div className="space-y-3 sm:space-y-4 text-gray-600">
                        {summarySections.map((section) => (
                          <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => scrollToSection(e, section.id)}
                            className="block hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                          >
                            <div>
                              <h4 className="font-medium mb-2">{section.title}</h4>
                              <p>{section.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Share Section */}
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Share This Article</h3>
                      <div className="flex space-x-4">
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white hover:bg-[#166fe5] transition-colors"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-8 md:px-16 lg:px-48 bg-white">
            <div className="prose prose-lg max-w-none">
              <style jsx global>{`
                .prose h2 {
                  font-size: 1.75rem;
                  font-weight: 700;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: #1a202c;
                  scroll-margin-top: 100px;
                }
                @media (min-width: 640px) {
                  .prose h2 {
                    font-size: 2rem;
                    margin-top: 2.25rem;
                    margin-bottom: 1.25rem;
                  }
                }
                @media (min-width: 1024px) {
                  .prose h2 {
                    font-size: 2.25rem;
                    margin-top: 2.5rem;
                    margin-bottom: 1.5rem;
                  }
                }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 1.75rem;
                  margin-bottom: 0.75rem;
                  color: #2d3748;
                }
                @media (min-width: 640px) {
                  .prose h3 {
                    font-size: 1.625rem;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                  }
                }
                @media (min-width: 1024px) {
                  .prose h3 {
                    font-size: 1.75rem;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                  }
                }
                .prose h4 {
                  font-size: 1.25rem;
                  font-weight: 600;
                  margin-top: 1.25rem;
                  margin-bottom: 0.5rem;
                  color: #2d3748;
                }
                @media (min-width: 640px) {
                  .prose h4 {
                    font-size: 1.375rem;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                  }
                }
                @media (min-width: 1024px) {
                  .prose h4 {
                    font-size: 1.5rem;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                  }
                }
                .prose p {
                  font-size: 1.125rem;
                  line-height: 1.75;
                  margin-bottom: 1.5rem;
                  color: #2d3748;
                }
                @media (min-width: 640px) {
                  .prose p {
                    font-size: 1.25rem;
                    line-height: 1.875;
                    margin-bottom: 1.75rem;
                  }
                }
                @media (min-width: 1024px) {
                  .prose p {
                    font-size: 1.35rem;
                    line-height: 2;
                    margin-bottom: 2rem;
                  }
                }
                .prose strong {
                  font-weight: 600;
                }
                .prose ul {
                  font-size: 1.125rem;
                  line-height: 1.75;
                  margin-bottom: 1.5rem;
                  color: #2d3748;
                  list-style-type: disc;
                  padding-left: 1.25rem;
                }
                @media (min-width: 640px) {
                  .prose ul {
                    font-size: 1.25rem;
                    line-height: 1.875;
                    margin-bottom: 1.75rem;
                    padding-left: 1.5rem;
                  }
                }
                @media (min-width: 1024px) {
                  .prose ul {
                    font-size: 1.35rem;
                    line-height: 2;
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                  }
                }
                .prose li {
                  margin-bottom: 0.75rem;
                }
                @media (min-width: 640px) {
                  .prose li {
                    margin-bottom: 1rem;
                  }
                }
                .prose table {
                  font-size: 1rem;
                  margin: 1.5rem 0;
                  width: 100%;
                  border-collapse: collapse;
                }
                @media (min-width: 640px) {
                  .prose table {
                    font-size: 1.125rem;
                    margin: 1.75rem 0;
                  }
                }
                @media (min-width: 1024px) {
                  .prose table {
                    font-size: 1.25rem;
                    margin: 2rem 0;
                  }
                }
                .prose table th {
                  font-weight: 600;
                  background-color: #f7fafc;
                  padding: 0.75rem;
                  text-align: left;
                  border: 1px solid #e2e8f0;
                }
                @media (min-width: 640px) {
                  .prose table th {
                    padding: 1rem;
                  }
                }
                .prose table td {
                  padding: 0.75rem;
                  border: 1px solid #e2e8f0;
                }
                @media (min-width: 640px) {
                  .prose table td {
                    padding: 1rem;
                  }
                }
                .prose a {
                  color: #3182ce;
                  text-decoration: underline;
                }
                .prose a:hover {
                  color: #2c5282;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: blog.content.replace(
                /<h2 class="text-4xl font-bold mb-8">([^<]+)<\/h2>/g,
                (match, title) => {
                  const id = title.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return `<h2 id="${id}" class="text-4xl font-bold mb-8">${title}</h2>`;
                }
              )}} />
            </div>
          </div>

          {blog.references && (
            <div className="mt-12 sm:mt-14 md:mt-16 pt-6 sm:pt-8 pb-12 sm:pb-14 md:pb-16 border-t border-gray-200 px-4 sm:px-8 md:px-16 lg:px-48 bg-white">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">References</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                {blog.references.map((ref) => (
                  <a
                    key={ref.number}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-2 text-blue-500 hover:text-blue-600"
                  >
                    <span className="font-medium">{ref.number}.</span>
                    <span className="line-clamp-2">{ref.text}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
      <ContactSection />
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
} 