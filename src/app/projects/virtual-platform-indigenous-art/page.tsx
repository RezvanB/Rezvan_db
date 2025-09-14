import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function VirtualPlatformIndigenousArtPage() {
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
                  Virtual Platform for Indigenous Art (VPIA)
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Supporting communities to access artwork directories and wiki platforms with a focus on Indigenous artworks worldwide
                </p>
              </div>
              
              {/* Project Info */}
              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                  <p className="text-sm text-gray-700">OCAD University - Wapatah Research Lab</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">My Role</h3>
                  <p className="text-sm text-gray-700">Sole UX Designer and Researcher</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Duration</h3>
                  <p className="text-sm text-gray-700">September 2019 - Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Full Height Image (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/pexels-jakubzerdzicki-28851165(1).jpg"
            alt="Virtual Platform for Indigenous Art Cover"
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As part of my employment as a UX Designer at OCAD University I worked on the "Virtual Platform For Indigenous Art (VPIA)" project in the Wapatah Research Lab. This project aimed to create an online database to provide access to diverse museum collections of Indigenous artworks. Database Information covered over 2,000 objects from more than 90 institutions and museums around the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The design's goal is to empower communities and stakeholders to regain control over information on indigenous artworks.
            </p>
          </div>

          {/* My Role */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Role</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                As a sole UX designer and researcher on the project, I led the UX design and research process.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Team</h3>
                  <p className="text-gray-700 mb-4">8 team members:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Visual designer</li>
                    <li>• Database researcher</li>
                    <li>• Front-end developer</li>
                    <li>• Full-stack developer</li>
                    <li>• Lab coordinator</li>
                    <li>• Lab director</li>
                    <li>• Project manager</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h3>
                  <p className="text-gray-700">
                    I designed and executed user experience research and design process for the project from scratch. I planned and ran co-creation sessions with Internal team, usability testing sessions with users, and events to attract institution partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Information on Indigenous Art is hard to navigate, especially for individuals from diverse indigenous communities as well as students and any individual who does not have curatorial and academic cultural studies background. This is largely due to:
            </p>
            
            <div className="bg-gray-100 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Use of inaccessible language that is not familiar for persons with different discipline (archeological terms) by museum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Limited access to only certain collections online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Missing information on indigenous artworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Not including individuals from indigenous communities who have information on artworks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Approach | Methods</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              It was essential to bring diverse stakeholders together to define challenges, needs and goals to make sure our design is meaningful to them. I used design thinking approach and participatory design research methods to allow contribution of diverse stakeholders in different stages of the research project.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Secondary Research</li>
                  <li>• Co-Design 1 (Internal Team)</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Co-Design 2 (Internal Team)</li>
                  <li>• Workshop (9 participants)</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Experimentation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Workshop (Open to Public)</li>
                  <li>• Usability Testing (8 participants)</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Iterative Design</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bi-weekly cycles</li>
                  <li>• Continuous refinement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Discovery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discovery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I defined stakeholders early on in the project to make sure that processes and methods are designed in a way that engage diverse stakeholders.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">VPIA Stakeholder Map</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Users</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Indigenous Community Members</li>
                    <li>• Art & Cultural Institution Members</li>
                    <li>• Academic or Student</li>
                    <li>• Interested in Indigenous Art</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Funders & Partners</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Art & Cultural Institution Members</li>
                    <li>• Research Officers</li>
                    <li>• Technical Experts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secondary Research</h3>
              <p className="text-gray-700 mb-4">
                I reviewed the existing platforms in the area of indigenous art to better understand the services that already are available as well as the existing gaps.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Main Issues with Existing Platforms</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Language Accessibility</li>
                    <li>• Usability Issues</li>
                    <li>• Membership-based access</li>
                    <li>• Limited Information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Personas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">User Personas</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Amy - Art Student</h4>
                <p className="text-gray-700 text-sm mb-3">Tech-savvy, studies online, iPhone user</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Goals:</strong> Finish school projects, find all artworks in one platform, create artwork
                  </div>
                  <div>
                    <strong>Frustrations:</strong> No/missing information, don't know where to search, takes time to go to different museum collections
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Peter - Indigenous Artist</h4>
                <p className="text-gray-700 text-sm mb-3">Novice with video tools, iPhone user</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Goals:</strong> Know more about indigenous artworks, connect with other artists, share information
                  </div>
                  <div>
                    <strong>Frustrations:</strong> Poor internet connection, spend time finding artworks, no platform to share work
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Alia - Museum Curator</h4>
                <p className="text-gray-700 text-sm mb-3">Active social media user, Android user</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Goals:</strong> Expand collection descriptions, find scholars and community members
                  </div>
                  <div>
                    <strong>Frustrations:</strong> No access to indigenous insights, limited timeline, difficult to find people with information
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Defined Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">To give single access point to indigenous artworks in different institutions across the world to indigenous communities, artists, curators, and scholars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">To let users edit artwork records</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">To connect with other users</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Co-Design Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Co-Design Process</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As part of UX Design and Research process I ran 5 co-design sessions with internal team in different phases of the project. Co-design is the methods that enables to design and create with diverse stakeholders to understand, define, ideate, prototype, test and validate.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Co-Design 1</h3>
                <p className="text-gray-700 mb-4">
                  I ran the first co-design session to ensure cross-functional team members are aligned with clear and well-defined goals, success vision and deliverables.
                </p>
                <p className="text-gray-700">
                  <strong>Team:</strong> 7 members including lead software engineer, front-end developer, project coordinator, lead cultural researcher, platform researcher, visual designer, and lab director
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Co-Design 2</h3>
                <p className="text-gray-700 mb-4">
                  In Ideation phase different features were explored with internal team based on the prior available research.
                </p>
                <p className="text-gray-700">
                  <strong>Team:</strong> Same 7 members as Co-Design 1
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workshop at McCord Museum</h3>
              <p className="text-gray-700 mb-4">
                To improve the existing museum records and to explore how indigenous knowledge can inform indigenous artworks' description, VPIA team ran a collaborative workshop with Indigenous-led organization La Boite Rouge VIF. VPIA principal investigator, user experience design team, and researchers worked with Plains Cree scholar Eric Tootoosis on the McCord Museum indigenous artwork collections.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Emerged Themes from Workshop</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Flexibility:</strong> Provide options as to how individuals can contribute to knowledge of the platform, including audio, video, and text.</li>
                    <li>• <strong>Artworks are living:</strong> Each artwork has its own story where it lives and opens conversations where it connects people to one another.</li>
                    <li>• <strong>Stories Behind Artworks:</strong> Each artwork is connected to a deeper concept.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Prioritization */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Prioritization</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I used a prioritization grid to identify features for minimal viable product and guide the design of the user experience for a digital service based on the gathered data from internal co-design and workshop.
            </p>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Minimum Viable Product Features</h3>
              <p className="text-gray-700 mb-6">
                Second co-design session with internal team and workshop with community members supported the process of narrowing down the features of the Minimum Viable Product (MVP). Based on the most important needs and expectation of users as well as the partners the focus of the project was narrowed down to the following three main areas:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Explore Artworks</h4>
                  <p className="text-sm text-gray-700">from around the world through a single point of access</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Edit and Revive</h4>
                  <p className="text-sm text-gray-700">institutional records through your contributions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect and Share</h4>
                  <p className="text-sm text-gray-700">knowledge with other community members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Architecture</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              First co-design session ideas and secondary research informed the initial content inventory and information architecture prototypes for the platform. It was based on the users' expectations and features defined as the main solution to support users and partners to meet their needs.
            </p>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">User Flows</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Find an Artwork</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Since users find it very important to be able to easily find artworks, a search box is displayed prominently above the menu on every page. There are autosuggestions for users to help them to find what they are looking for.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Users highlighted that they want to be able to narrow down search with limited information easily. Filters are based on the categories. Language for filters are based on the defined categories by diverse users from experts to novices.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Edit an Artwork</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Artwork article is a living document and users who have information on artworks can edit them. Users can either by search or explore artwork path come to an artwork article page where they can edit artworks.
                  </p>
                  <p className="text-gray-700 text-sm">
                    Users find it essential that editing artworks should be simple and usable for everyone who uses the platform. The edit feature is discoverable at top of artwork page both as a tab and as an icon beside each text section.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experimentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experimentation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As the project moved forward prototypes were tested and refined based on the feedbacks received in each phase. Rapid prototyping techniques like sketching and wireframing was used to test the ideas early on with internal team and gather feedback.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workshop - Open to Public</h3>
              <p className="text-gray-700 mb-4">
                This workshop was an event to introduce the alpha version of the platform to diverse stakeholders including institution partners and funders. This event and early design secured second year of the funding for the project.
              </p>
              <p className="text-gray-700">
                We set up computer stations for attendees to interact with the alpha version of the platform and put an experience map on the wall to give us feedback on it. Attendees contributed to the user experience map.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usability Testing</h3>
              <p className="text-gray-700 mb-4">
                I ran 8 remote moderated usability test sessions in three different phases of the design to identify problems, learn about main user groups' preferences and to see if there are opportunities to improve the platform.
              </p>
              <p className="text-gray-700 mb-4">
                In these sessions I engaged 2 artists, 1 curator, 2 scholars, 2 community members and an accessibility specialist.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Main Tasks Tested</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Find an artwork that you are interested in</li>
                    <li>• Find who has information on the artwork</li>
                    <li>• Change the artwork article</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Learning from Feedback</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Give users reason upfront why they need to sign up to the platform</li>
                    <li>• Ensure keyboard compatibility for all the actions of the platform to be accessible to users who do not use a mouse</li>
                    <li>• Change wording "details" on an artwork article page to something more specific like history/historical context</li>
                    <li>• Use edit icon at each section of the text on an artwork article page to be easily discoverable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges and Successes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges and Successes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">To balance the priorities and perspectives of multiple Indigenous communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Inconsistency of the initial dataset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Unanticipated delay in processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Website usability</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Successes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Brought together a strong network of Indigenous and institutional partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Planned for sustainability through multiple levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Developed Strategy for years ahead</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcome</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Launch of Alpha Platform that secured second year of funding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Partnerships with two major museum institutions based on the platform design presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Received permission to use artworks from museums across the world, based on the design demos that makes the project eligible for a wider range of funding possibilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Validated features for the MVP with diverse stakeholders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Planned community engagement through a series of events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Created a design system and UX Research resources for projects to enable sustainability and future expansion of the project</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plan for Next Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan for Next Steps</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                I developed different documents and tools to enable VPIA to move forward in partnership process and to present to partners and funders. I also planned for measuring User Experience success in the implementation phase.
              </p>
              <p className="text-gray-700 mb-4">
                I used Google Heart Metrics to plan for Measuring UX Success based on the goals defined by diverse stakeholders in different phases of the project.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Happiness</h4>
                  <p className="text-gray-700">Create a supportive community around each artwork</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Engagement</h4>
                  <p className="text-gray-700">Enable users to connect with others with like interests</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Adoption</h4>
                  <p className="text-gray-700">Download/Launch of the app/webpage</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Retention</h4>
                  <p className="text-gray-700">Users keep using VPIA to complete artwork edits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Learning */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Learning</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Familiarize with terminologies in indigenous art and culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Plan, run and design shows/events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Be an ally in the project (co-plan tasks rather than delegation, make sure it is a progressive trend)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Balance diversity of priorities and perspectives of multiple Indigenous communities, clients/partner institutions</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}