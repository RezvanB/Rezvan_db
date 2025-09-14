import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function LearningContentCreationPage() {

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="mt-16 bg-gray-100 relative min-h-[20vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[18vh]">
            {/* Left Side - Title and Project Info */}
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="mt-42 lg:mt-0 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Learning Content Creation with Generative AI
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Empowering learning content creators to develop quality and consistent content
                </p>
              </div>
              
              {/* Project Info */}
              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                  <p className="text-sm text-gray-700">Amazon</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">My Role</h3>
                  <p className="text-sm text-gray-700">Lead designer, from concept to execution</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Duration</h3>
                  <p className="text-sm text-gray-700">Dec 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Full Height Image (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/pexels-thisisengineering-3861442.jpg"
            alt="Learning Content Creation Cover"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The goal of this initiative was to support the learning experience designer in the content creation process by reducing the training development time while also improving content quality 
                  and consistency. As a result, reduce the overall cost to learn.
            </p>
          </div>

          {/* Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This solution had several competitors internally (at Amazon) and externally (outside Amazon), and users have already been using various products. This project needed cross-org collaboration to enable the product to scale from the inception. We were independent for ingress points to the tool and for publishing to the learner&apos;s platform. This needed cross-org collaboration to ensure UX consistency.
            </p>
            
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Collaborate with another org for handshakes with their solutions (a standalone learner-facing product) and make sure of design consistency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The tools that we needed to have ingress/egress were using various design systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Lack of stakeholder alignment on the overall vision</span>
                </li>
              </ul>
            </div>

            {/* User Personas */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Creator</h4>
                <p className="text-gray-700 text-sm">My goal is to create quality content that is consistent. I want to be able to quickly repurpose my content for various use cases.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Feedback Provider</h4>
                <p className="text-gray-700 text-sm">My goal is to provide feedback in a timely manner on specific parts of the content so the content creator has enough time to incorporate my feedback.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Learner</h4>
                <p className="text-gray-700 text-sm">I want to quickly access quality learning and development materials, whether I set aside time to go through learning and/or need to learn a process in the flow of my work.</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Main Pain Points for Content Creators</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Consolidating source documents and learning content from multiple sources into one place is time-consuming.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The current content creation process is time-intensive and variable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Learning experience designers already were using several platforms (internal and external products) to create content and contain their source documents and content.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Discovery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discovery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I started my discovery process by doing a competitors analysis of e-learning tools for creating workplace training. The main product experience theme across these tools was the use of GenAI to rapidly create structured learning content from multiple sources of data.
            </p>
            
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Early Concepts</h3>
              <p className="text-gray-700 mb-4">
                Based on inspirations from these tools, I started working on early concepts and shared them with stakeholders. My early concepts involved exploring three different options to quickly help learning experience designers create structured content from various source documents.
              </p>
              <p className="text-gray-700">
                My proposal included 1) quickly asking the minimum required from users to create quality and structured content and present the results in a conversational style interaction, 2) having a form filled out upfront that requires adding minimum required details and optional details upfront, and 3) a combination of the two options above.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Hypotheses</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The content creation process is complex and does not necessarily follow a linear path.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Users want to upload documents and drop some details, save their work, and return to it, so they need a dedicated space for dropping some details and source documents.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Research */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              My goal with this round of research was to learn about our users&apos; existing workflows and test early design concepts and identify areas of opportunity. I ran one-hour sessions with Learning Experience Designers to map out their existing journey, and asked their feedback on early design concepts.
            </p>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Content Creation User Journey</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Gather Sources</h4>
                  <p className="text-gray-700">Content creators gather data and resources from diverse sources including a) local devices (documents, presentations), b) subject Matter Experts (SMEs) via documents, emails, messages, and syncs, and c) shared platforms (Quip, drives). They start analyzing the resources.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Analyze and Outline</h4>
                  <p className="text-gray-700">Content creators analyze the sources to identify key concepts, trends, and learning gaps. Then they start to develop the outline and learning activities for the content and use it as a blueprint for the learning content.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Draft</h4>
                  <p className="text-gray-700">Then users built the developed content into a structured learning experience using authoring tools like Learning Genome, Articulate Storyline, or Rise 360.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Build</h4>
                  <p className="text-gray-700">Users design the learning experience for optimal engagement. They develop interactive modules, simulations, and assessments.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 5: Review and Revise</h4>
                  <p className="text-gray-700">Content creators download the content and/or share a link to send the content to subject matter experts (SMEs) and stakeholders to gather feedback and refine text.</p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 6: Publish</h4>
                  <p className="text-gray-700">Users download the content they created and upload it to the platform they want to publish and add relevant metadata (title, description, keywords).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Using insights from our first round of research, I started designing the user experience end-to-end, from the time users identify a need to create learning content until they complete a learning project and are ready to share and/or publish their content. I conducted several design iterations and shared with stakeholders to gather feedback.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">UX Strategy</h3>
              <p className="text-gray-700 mb-4">
                This project aimed to support learning content creators to improve learning content quality and consistency with less time spent. The initial focus was on decreasing active content generation time. Future iterations will optimize review cycles and wait times.
              </p>
              <p className="text-gray-700 mb-4">
                Generative AI serves as a cornerstone of this experience, acting as a guide throughout the content creation process to help users move forward and get inspired. Design strategy emphasizes a seamless integration of AI into the content creation and editing flows.
              </p>
              <div className="bg-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Goals:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Provide timely, unobtrusive AI suggestions based on user context and goals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Keep the user in the loop to provide additional context and domain expertise to improve accuracy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Design a fluid and modern content editor and combining intent-based prompts, to streamline the content creation process and make work enjoyable for our users.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Design Decisions</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Assistant in the Side Panel UI Interaction</h4>
                  <p className="text-gray-700 mb-3">
                    One of the main user pain points using Gen AI content editors (such as Articulate, the main external competitor) was the generated content interaction in the flyout, window, and below the text. Users wanted to see the generated suggestions and their input side by side to decide whether to insert it, refine parts, or keep the original one.
                  </p>
                  <p className="text-gray-700">
                    I proposed having the AI assistant suggestions in the side panel to address this issue. Also, I proposed that the AI assistant side panel will be dynamic to highlighted text in the editor. Users can scroll and see the history of their AI assistant suggestions in the current session.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Version History Side-by-Side in the Editor View</h4>
                  <p className="text-gray-700 mb-3">
                    One of the main concerns content creators had was losing access to their edits and historical content. They spend time and go back and forth across their historical content to finalize a learning experience and share/publish.
                  </p>
                  <p className="text-gray-700">
                    I proposed to have a version history side-by-side the editor so users can compare the current version with previous versions. This way they can compare and/or copy from the previous versions where they feel the need.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Switcher and Contextual Side Panel</h4>
                  <p className="text-gray-700 mb-3">
                    The end result of a learning content is an interactive experience with media, images, and a set of questions. Users find it frustrating when, for editing image settings and other media, they&apos;re directed to a separate view or a modal and need to go back and forth to see their edits.
                  </p>
                  <p className="text-gray-700">
                    To address this, I proposed a dynamic side panel switcher within the content editor. This switcher allows users to seamlessly transition between various functionalities—such as AI assistance, version history, and media editing—directly alongside their content. I aimed to enable users to edit and see the results within their learning experience by consolidating these functionalities into a single, contextual side panel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Validation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Validation</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700">
                This project is currently in beta-testing phase. Hence, research insights are not included here.
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700">
                A key benefit of this project, even before its launch, is the enhancement of GenAI in learning content creation and as an outcome, learners flow. The various methods of integrating Gen AI into the product enable users to effortlessly choose to delve deeply into a topic (exploring), create a variety of learning content for various source documents (programs), automatically repurpose for various learner experiences (bite-size, snack size (micro-learning), and meal size (core learning)), and automatically translate based on learners needs without the need to create a new project.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
