export default function ToolsSection() {
  const toolCategories = [
    {
      title: "Product Tools",
      color: "bg-blue-600",
      tools: ["Jira", "Pendo", "Notion", "Figma", "Miro", "Asana", "Trello"]
    },
    {
      title: "Tech Stack",
      color: "bg-green-600",
      tools: ["TensorFlow","React", "Next.js", "Vue.js", "Express.js", "WebSocket", "WIX" , "Node.js", "GraphQL", "TypeScript", "JavaScript", "Python"]
    },
    {
      title: "Data & Cloud",
      color: "bg-purple-600",
      tools: ["Pandas","Azure", "AWS", "GA4", "SQL", "PostgreSQL", "Supabase", " Firebase", "Google Cloud"]
    },
    {
      title: "Methods",
      color: "bg-orange-600",
      tools: ["Agile", "Scrum", "Waterfall", "Lean Startup","Design Thinking" , "User Research"]
    }
  ];

  return (
    <section id="tools" className="py-8 sm:py-16 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Tools & Methods
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            The technologies and methodologies I use to bring ideas to life
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {toolCategories.map((category) => (
            <div key={category.title} className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {category.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${category.color} rounded-full`}></div>
                    <span className="text-sm sm:text-base">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 