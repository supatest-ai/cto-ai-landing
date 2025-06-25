import { useEffect } from 'react';
import { ArrowRight, Brain, Sparkles, ArrowDown, ArrowUpRight, Triangle, Circle, Diamond } from 'lucide-react';
import { useAnalytics } from './useAnalytics';
import { trackCTAClick, trackTypeformRedirect, trackFAQInteraction, trackTestimonialView, trackTopicCardHover } from './analytics';

function App() {
  // Initialize analytics tracking
  useAnalytics();

  // Add FAQ structured data
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is CTOxAI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CTOxAI is a private WhatsApp community where 200+ CTOs share real experiences, solutions, and insights about AI implementation. It's a space for practical advice from technology leaders who have actually shipped AI to production."
          }
        },
        {
          "@type": "Question",
          "name": "How do I join the CTOxAI WhatsApp group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, we verify that you're actually a CTO through a quick LinkedIn/company verification. Then you get added to the WhatsApp group where you can start asking questions, sharing experiences, and helping other CTOs."
          }
        },
        {
          "@type": "Question",
          "name": "Is there any cost to join CTOxAI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, CTOxAI is completely free to join. We don't have any sales pitches or vendor promotions - just CTOs helping other CTOs with real AI implementation challenges."
          }
        },
        {
          "@type": "Question",
          "name": "What topics do CTOs discuss in the group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recent discussions include managing LLM costs, evaluating AI vendors, hiring AI engineers, building AI agents that don't hallucinate, AI system security, measuring AI ROI, integration patterns, and AI strategy without marketing fluff."
          }
        },
        {
          "@type": "Question",
          "name": "How active is the CTOxAI community?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The community is very active with approximately 40 messages per day. You can ask a question at lunch and typically get answers by dinner from CTOs who have faced similar challenges."
          }
        }
      ]
    };

    const aggregateRatingSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://ctoxai.com/#organization",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const statisticsSchema = {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "CTOxAI Community Statistics",
      "description": "Real-time statistics about the CTOxAI WhatsApp community",
      "creator": {
        "@type": "Organization",
        "name": "CTOxAI"
      },
      "distribution": {
        "@type": "DataDownload",
        "contentUrl": "https://ctoxai.com/api/stats",
        "encodingFormat": "application/json"
      },
      "measurementTechnique": "Community engagement tracking",
      "variableMeasured": [
        "Total CTO members",
        "Daily message volume",
        "Community engagement rate",
        "Response time metrics"
      ]
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(faqSchema, 'faq-schema');
    addSchema(aggregateRatingSchema, 'rating-schema');
    addSchema(statisticsSchema, 'statistics-schema');

    // Add title and meta description updates based on time of day
    const hour = new Date().getHours();
    const timeBasedTitle = hour >= 9 && hour <= 17 
      ? "CTOxAI - Private WhatsApp Community for CTOs Implementing AI | Join 200+ Tech Leaders"
      : "CTOxAI - Private WhatsApp Community for CTOs Implementing AI";
    
    document.title = timeBasedTitle;

    return () => {
      // Cleanup on unmount
      document.getElementById('faq-schema')?.remove();
      document.getElementById('rating-schema')?.remove();
      document.getElementById('statistics-schema')?.remove();
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah",
      title: "CTO at fintech startup",
      content: "Saved me from making a terrible vendor decision. Got honest feedback from 3 CTOs who'd used the same platform.",
      avatar: "S",
      rating: 5,
      company: "FinTech Innovations"
    },
    {
      name: "Marcus",
      title: "CTO at retail platform",
      content: "Finally, a place where I can share what actually broke in production and get real help instead of marketing fluff.",
      avatar: "M",
      rating: 5,
      company: "RetailTech Solutions"
    },
    {
      name: "Jennifer",
      title: "CTO at health tech",
      content: "Best part? No one's trying to sell me anything. Just CTOs helping other CTOs.",
      avatar: "J",
      rating: 5,
      company: "HealthTech Innovations"
    },
    {
      name: "David",
      title: "VP Eng → CTO",
      content: "Quick responses from people who actually get it. Ask a question at lunch, get answers by dinner.",
      avatar: "D",
      rating: 4,
      company: "TechScale Inc"
    }
  ];

  const topics = [
    "Our LLM costs are getting out of hand",
    "Which AI vendors are worth it?",
    "Hiring AI engineers is brutal",
    "AI agents that don't hallucinate",
    "Security for AI systems",
    "Actually measuring AI ROI",
    "Integration patterns that work",
    "AI strategy without the BS"
  ];

  const faqData = [
    {
      question: "What is CTOxAI?",
      answer: "CTOxAI is a private WhatsApp community where 200+ CTOs share real experiences, solutions, and insights about AI implementation. It's a space for practical advice from technology leaders who have actually shipped AI to production."
    },
    {
      question: "How do I join the CTOxAI WhatsApp group?",
      answer: "First, we verify that you're actually a CTO through a quick LinkedIn/company verification. Then you get added to the WhatsApp group where you can start asking questions, sharing experiences, and helping other CTOs."
    },
    {
      question: "Is there any cost to join CTOxAI?",
      answer: "No, CTOxAI is completely free to join. We don't have any sales pitches or vendor promotions - just CTOs helping other CTOs with real AI implementation challenges."
    },
    {
      question: "What topics do CTOs discuss in the group?",
      answer: "Recent discussions include managing LLM costs, evaluating AI vendors, hiring AI engineers, building AI agents that don't hallucinate, AI system security, measuring AI ROI, integration patterns, and AI strategy without marketing fluff."
    }
  ];

  return (
    <div className="min-h-screen bg-red-50">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-500 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Decorative Elements - Hero Section */}
      <div className="fixed top-20 left-20 text-green-500 opacity-30 pointer-events-none" aria-hidden="true">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="fixed top-32 right-32 text-pink-500 opacity-30 pointer-events-none" aria-hidden="true">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="fixed top-56 left-72 text-blue-400 opacity-25 pointer-events-none" aria-hidden="true">
        <ArrowUpRight className="w-5 h-5" />
      </div>
      <div className="fixed top-80 right-16 text-purple-400 opacity-20 pointer-events-none" aria-hidden="true">
        <Triangle className="w-6 h-6" />
      </div>
      
      {/* Decorative Elements - Middle Sections */}
      <div className="fixed top-96 left-8 text-red-400 opacity-25 pointer-events-none" aria-hidden="true">
        <Circle className="w-4 h-4" />
      </div>
      <div className="fixed top-1/2 right-8 text-yellow-400 opacity-30 pointer-events-none" aria-hidden="true">
        <Sparkles className="w-7 h-7" />
      </div>
      <div className="fixed top-1/2 left-1/4 text-green-400 opacity-20 pointer-events-none" aria-hidden="true">
        <ArrowDown className="w-5 h-5" />
      </div>
      <div className="fixed top-1/3 right-1/4 text-indigo-400 opacity-25 pointer-events-none" aria-hidden="true">
        <Diamond className="w-6 h-6" />
      </div>
      
      {/* Decorative Elements - Bottom Sections */}
      <div className="fixed bottom-96 left-32 text-pink-400 opacity-30 pointer-events-none" aria-hidden="true">
        <ArrowUpRight className="w-6 h-6" />
      </div>
      <div className="fixed bottom-80 right-40 text-green-500 opacity-25 pointer-events-none" aria-hidden="true">
        <Triangle className="w-5 h-5" />
      </div>
      <div className="fixed bottom-40 left-16 text-green-400 opacity-20 pointer-events-none" aria-hidden="true">
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="fixed bottom-60 right-20 text-red-400 opacity-25 pointer-events-none" aria-hidden="true">
        <Sparkles className="w-7 h-7" />
      </div>
      <div className="fixed bottom-32 left-1/3 text-blue-400 opacity-20 pointer-events-none" aria-hidden="true">
        <Circle className="w-8 h-8" />
      </div>
      <div className="fixed bottom-16 right-1/3 text-purple-500 opacity-25 pointer-events-none" aria-hidden="true">
        <ArrowDown className="w-4 h-4" />
      </div>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <header className="relative bg-red-50" data-section="hero">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <div className="text-white font-bold text-xl">
                    <Brain className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-black">CTOxAI</h1>
                  <p className="text-gray-700 text-sm">CTOs sharing what's actually working with AI implementation</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center relative" role="region" aria-label="Community statistics" itemScope itemType="https://schema.org/Dataset">
                <div className="relative" itemScope itemType="https://schema.org/Observation">
                  <div className="absolute -top-2 -right-2 text-green-400 opacity-40" aria-hidden="true">
                    <Sparkles className="w-4 h-4" />
                  </div>
                                     <div className="text-2xl font-bold text-black" itemProp="value">200+</div>
                   <div className="text-xs text-gray-700 uppercase tracking-wide" itemProp="name">CTOs</div>
                </div>
                <div className="relative" itemScope itemType="https://schema.org/Observation">
                  <div className="absolute -top-1 -left-2 text-red-400 opacity-30" aria-hidden="true">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                                     <div className="text-2xl font-bold text-black" itemProp="value">~40</div>
                   <div className="text-xs text-gray-700 uppercase tracking-wide" itemProp="name">Messages/Day</div>
                </div>
                <div className="relative" itemScope itemType="https://schema.org/Observation">
                  <div className="absolute -top-2 -right-1 text-blue-400 opacity-35" aria-hidden="true">
                    <Circle className="w-3 h-3" />
                  </div>
                                     <div className="text-2xl font-bold text-black" itemProp="value">Private</div>
                   <div className="text-xs text-gray-700 uppercase tracking-wide" itemProp="name">WhatsApp</div>
                </div>
                <div className="relative" itemScope itemType="https://schema.org/Observation">
                  <div className="absolute -top-1 -left-1 text-purple-400 opacity-40" aria-hidden="true">
                    <Triangle className="w-4 h-4" />
                  </div>
                                     <div className="text-2xl font-bold text-black" itemProp="value">0</div>
                   <div className="text-xs text-gray-700 uppercase tracking-wide" itemProp="name">Sales Pitches</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-20 bg-white" aria-labelledby="about-heading" data-section="about">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 relative">
              <div className="absolute -top-4 left-1/4 text-yellow-400 opacity-30 pointer-events-none" aria-hidden="true">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="absolute -top-2 right-1/3 text-pink-400 opacity-25 pointer-events-none" aria-hidden="true">
                <ArrowDown className="w-4 h-4" />
              </div>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                What's this about?
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Look, most AI content online is written by people who've never actually shipped AI to production. 
                This is just a WhatsApp group where CTOs share what's working, what's not, and help each other avoid expensive mistakes.
              </p>
              <p>
                It's pretty straightforward - real CTOs, real problems, real solutions. No vendor pitches, no theoretical discussions, 
                just practical stuff from people who've been there.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Conversations Section */}
        <section className="py-20 bg-red-50" aria-labelledby="topics-heading" data-section="topics">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 relative">
              <div className="absolute -top-6 left-1/3 text-green-400 opacity-35 pointer-events-none" aria-hidden="true">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <div className="absolute -top-3 right-1/4 text-indigo-400 opacity-30 pointer-events-none" aria-hidden="true">
                <Triangle className="w-5 h-5" />
              </div>
              <h2 id="topics-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                Recent conversations
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Here's what CTOs have been discussing this week:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Discussion topics">
              {topics.map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 relative" 
                  role="listitem" 
                  itemScope itemType="https://schema.org/DiscussionForumPosting"
                  onMouseEnter={() => trackTopicCardHover(topic, index)}
                >
                  <div className="absolute -top-2 -right-2 opacity-25 pointer-events-none" aria-hidden="true">
                    {index % 4 === 0 && <Sparkles className="w-3 h-3 text-green-400" />}
                    {index % 4 === 1 && <ArrowUpRight className="w-3 h-3 text-blue-400" />}
                    {index % 4 === 2 && <Circle className="w-2 h-2 text-pink-400" />}
                    {index % 4 === 3 && <Triangle className="w-3 h-3 text-purple-400" />}
                  </div>
                  <span className="text-gray-700 font-medium" itemProp="headline">"{topic}"</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white" aria-labelledby="testimonials-heading" data-section="testimonials">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16 relative">
              <div className="absolute -top-5 left-1/3 text-green-500 opacity-30 pointer-events-none" aria-hidden="true">
                <ArrowDown className="w-5 h-5" />
              </div>
              <div className="absolute -top-3 right-1/4 text-blue-400 opacity-35 pointer-events-none" aria-hidden="true">
                <Circle className="w-4 h-4" />
              </div>
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                What CTOs say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6" role="list" aria-label="Member testimonials">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg border border-gray-200 p-6 relative hover:border-gray-300 transition-colors duration-200" 
                  role="listitem" 
                  itemScope itemType="https://schema.org/Review"
                  onMouseEnter={() => trackTestimonialView(testimonial.name, index)}
                >
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed" itemProp="reviewBody">"{testimonial.content}"</blockquote>
                  <footer className="text-sm text-gray-700">
                    <div itemProp="author" itemScope itemType="https://schema.org/Person">
                      <cite className="font-medium text-black not-italic" itemProp="name">{testimonial.name}</cite>
                      <span>, </span>
                      <span itemProp="jobTitle">{testimonial.title}</span>
                      <div className="hidden" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                        <span itemProp="name">{testimonial.company}</span>
                      </div>
                    </div>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-red-50" aria-labelledby="faq-heading" data-section="faq">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Common questions about joining the CTOxAI community
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <details 
                  key={index} 
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors duration-200" 
                  itemScope itemType="https://schema.org/Question"
                  onToggle={(e) => {
                    if ((e.target as HTMLDetailsElement).open) {
                      trackFAQInteraction(faq.question, index);
                    }
                  }}
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer text-lg" itemProp="name">
                    {faq.question}
                  </summary>
                  <div className="mt-4 text-gray-800 leading-relaxed" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div itemProp="text">{faq.answer}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* How it works + CTA Section */}
        <section className="py-20 bg-white" aria-labelledby="how-it-works-heading" data-section="cta">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-8 text-black">
                How it works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12" role="list" aria-label="Step-by-step process">
                <div className="text-center" role="listitem" itemScope itemType="https://schema.org/HowToStep">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" aria-label="Step 1">1</div>
                  <div className="text-gray-700" itemProp="text">
                    We check that you're actually a CTO (quick LinkedIn/company verification)
                  </div>
                </div>
                <div className="text-center" role="listitem" itemScope itemType="https://schema.org/HowToStep">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" aria-label="Step 2">2</div>
                  <div className="text-gray-700" itemProp="text">
                    You get added to the WhatsApp group
                  </div>
                </div>
                <div className="text-center" role="listitem" itemScope itemType="https://schema.org/HowToStep">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" aria-label="Step 3">3</div>
                  <div className="text-gray-700" itemProp="text">
                    Start asking questions, sharing experiences, helping others
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black">Want in?</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                If you're a CTO working on AI stuff and want to chat with others doing the same, just let us know.
              </p>

              <a 
                href="https://form.typeform.com/to/XEcj0O5J" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 inline-flex items-center group shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Join the CTOxAI WhatsApp group"
                itemScope itemType="https://schema.org/Action"
                onClick={() => {
                  trackCTAClick('bottom_cta', 'Join the Group');
                  trackTypeformRedirect();
                }}
              >
                <span itemProp="name">Join the Group</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12" role="contentinfo">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">CTOxAI</span>
            </div>
            <p className="text-sm mb-4">Private WhatsApp community for CTOs implementing AI</p>
            <div className="flex justify-center space-x-6 text-sm" role="list" aria-label="Community highlights">
              <span role="listitem">200+ CTOs</span>
              <span aria-hidden="true">•</span>
              <span role="listitem">Private WhatsApp</span>
              <span aria-hidden="true">•</span>
              <span role="listitem">Zero Sales Pitches</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;