import React from 'react';
import { ArrowRight, Brain, Sparkles, ArrowDown, ArrowUpRight, Triangle, Circle, Diamond } from 'lucide-react';

function App() {
  const testimonials = [
    {
      name: "Sarah",
      title: "CTO at fintech startup",
      content: "Saved me from making a terrible vendor decision. Got honest feedback from 3 CTOs who'd used the same platform.",
      avatar: "S"
    },
    {
      name: "Marcus",
      title: "CTO at retail platform",
      content: "Finally, a place where I can share what actually broke in production and get real help instead of marketing fluff.",
      avatar: "M"
    },
    {
      name: "Jennifer",
      title: "CTO at health tech",
      content: "Best part? No one's trying to sell me anything. Just CTOs helping other CTOs.",
      avatar: "J"
    },
    {
      name: "David",
      title: "VP Eng → CTO",
      content: "Quick responses from people who actually get it. Ask a question at lunch, get answers by dinner.",
      avatar: "D"
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

  return (
    <div className="min-h-screen bg-red-50">
      {/* Decorative Elements - Hero Section */}
      <div className="fixed top-20 left-20 text-green-500 opacity-30 pointer-events-none">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="fixed top-32 right-32 text-pink-500 opacity-30 pointer-events-none">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="fixed top-56 left-72 text-blue-400 opacity-25 pointer-events-none">
        <ArrowUpRight className="w-5 h-5" />
      </div>
      <div className="fixed top-80 right-16 text-purple-400 opacity-20 pointer-events-none">
        <Triangle className="w-6 h-6" />
      </div>
      
      {/* Decorative Elements - Middle Sections */}
      <div className="fixed top-96 left-8 text-red-400 opacity-25 pointer-events-none">
        <Circle className="w-4 h-4" />
      </div>
      <div className="fixed top-1/2 right-8 text-yellow-400 opacity-30 pointer-events-none">
        <Sparkles className="w-7 h-7" />
      </div>
      <div className="fixed top-1/2 left-1/4 text-green-400 opacity-20 pointer-events-none">
        <ArrowDown className="w-5 h-5" />
      </div>
      <div className="fixed top-1/3 right-1/4 text-indigo-400 opacity-25 pointer-events-none">
        <Diamond className="w-6 h-6" />
      </div>
      
      {/* Decorative Elements - Bottom Sections */}
      <div className="fixed bottom-96 left-32 text-pink-400 opacity-30 pointer-events-none">
        <ArrowUpRight className="w-6 h-6" />
      </div>
      <div className="fixed bottom-80 right-40 text-green-500 opacity-25 pointer-events-none">
        <Triangle className="w-5 h-5" />
      </div>
      <div className="fixed bottom-40 left-16 text-green-400 opacity-20 pointer-events-none">
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="fixed bottom-60 right-20 text-red-400 opacity-25 pointer-events-none">
        <Sparkles className="w-7 h-7" />
      </div>
      <div className="fixed bottom-32 left-1/3 text-blue-400 opacity-20 pointer-events-none">
        <Circle className="w-8 h-8" />
      </div>
      <div className="fixed bottom-16 right-1/3 text-purple-500 opacity-25 pointer-events-none">
        <ArrowDown className="w-4 h-4" />
      </div>

      {/* Hero Section */}
      <div className="relative bg-red-50">
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
                <p className="text-gray-600 text-sm">CTOs sharing what's actually working with AI implementation</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center relative">
              <div className="relative">
                <div className="absolute -top-2 -right-2 text-green-400 opacity-40">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-black">200+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">CTOs</div>
              </div>
              <div className="relative">
                <div className="absolute -top-1 -left-2 text-red-400 opacity-30">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
                <div className="text-2xl font-bold text-black">~40</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Messages/Day</div>
              </div>
              <div className="relative">
                <div className="absolute -top-2 -right-1 text-blue-400 opacity-35">
                  <Circle className="w-3 h-3" />
                </div>
                <div className="text-2xl font-bold text-black">Private</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">WhatsApp</div>
              </div>
              <div className="relative">
                <div className="absolute -top-1 -left-1 text-purple-400 opacity-40">
                  <Triangle className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold text-black">0</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Sales Pitches</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's this about Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-4 left-1/4 text-yellow-400 opacity-30 pointer-events-none">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="absolute -top-2 right-1/3 text-pink-400 opacity-25 pointer-events-none">
              <ArrowDown className="w-4 h-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
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
      </div>

      {/* Recent conversations Section */}
      <div className="py-20 bg-red-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/3 text-green-400 opacity-35 pointer-events-none">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <div className="absolute -top-3 right-1/4 text-indigo-400 opacity-30 pointer-events-none">
              <Triangle className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Recent conversations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what CTOs have been discussing this week:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 relative">
                <div className="absolute -top-2 -right-2 opacity-25 pointer-events-none">
                  {index % 4 === 0 && <Sparkles className="w-3 h-3 text-green-400" />}
                  {index % 4 === 1 && <ArrowUpRight className="w-3 h-3 text-blue-400" />}
                  {index % 4 === 2 && <Circle className="w-2 h-2 text-pink-400" />}
                  {index % 4 === 3 && <Triangle className="w-3 h-3 text-purple-400" />}
                </div>
                <span className="text-gray-700 font-medium">"{topic}"</span>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-5 left-1/3 text-green-500 opacity-30 pointer-events-none">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div className="absolute -top-3 right-1/4 text-blue-400 opacity-35 pointer-events-none">
              <Circle className="w-4 h-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What CTOs say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6 relative hover:border-gray-300 transition-colors duration-200">
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-black">{testimonial.name}</span>, {testimonial.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

            {/* How it works + CTA Section */}
      <div className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
              How it works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <p className="text-gray-700">
                  We check that you're actually a CTO (quick LinkedIn/company verification)
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <p className="text-gray-700">
                  You get added to the WhatsApp group
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <p className="text-gray-700">
                  Start asking questions, sharing experiences, helping others
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-black">Want in?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              If you're a CTO working on AI stuff and want to chat with others doing the same, just let us know.
            </p>

            <a 
              href="https://form.typeform.com/to/XEcj0O5J" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 inline-flex items-center group shadow-sm"
            >
              Join the Group
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">CTOxAI</span>
            </div>
            <p className="text-sm mb-4">Private WhatsApp community for CTOs implementing AI</p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>200+ CTOs</span>
              <span>•</span>
              <span>Private WhatsApp</span>
              <span>•</span>
              <span>Zero Sales Pitches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;