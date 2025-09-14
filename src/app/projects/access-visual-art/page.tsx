import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AccessVisualArtPage() {
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
                  Access Visual Art (AVA)
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Supporting users to access creative space through an online information resource about physical accessibility information of Ontario&apos;s art venues
                </p>
              </div>
              
              {/* Project Info */}
              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                  <p className="text-sm text-gray-700">Akimbo Art Promotions & AccessTO</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">My Role</h3>
                  <p className="text-sm text-gray-700">Design Researcher & Outreach Manager</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Duration</h3>
                  <p className="text-sm text-gray-700">May-Oct 2017 (Intern), July-Oct 2018 (Contractor)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Full Height Image (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/pexels-exnl-931887.jpg"
            alt="Access Visual Art Cover"
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
              As part of my internship and my contract with Akimbo Art Promotions as a Design Researcher I worked on Access Visual Art (AVA) project. AVA is an online information resource on accessibility of art venues. This solution is in a form of a landing page and a widget within AccessTO platform.
            </p>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Team</h3>
                  <p className="text-gray-700 mb-4">5 members:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Project director & founder</li>
                    <li>• Visual designer</li>
                    <li>• Inclusive designer</li>
                    <li>• Project manager</li>
                    <li>• Developer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h3>
                  <p className="text-gray-700">
                    I ran focus groups, events, site audits and redesigned a survey. I reached out to art venues to expand the project&apos;s network. I synthesized data from both qualitative and quantitative research and created a digital database as well as early prototypes for the landing page and widget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              There is no information about accessibility of art venues for individuals who are using mobility assistive devices and want to engage with art and cultural works. People using assistive mobility devices such as wheelchairs must rely on word of mouth and search engines to see if they can find any relevant information.
            </p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Process</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We found it necessary to use mixed-methods approach to first gather information on accessibility of as many art venues as possible. In the next step it was essential to gather diverse stakeholders to select the necessary information to be presented as part of the solution.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Secondary Research & Observation</li>
                  <li>• Survey (717 venues)</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Focus Group (6 participants)</li>
                  <li>• Site Visits/Audits (50 venues)</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Experimentation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Feedback loops</li>
                  <li>• Iterative Design Cycle</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Landing Page</li>
                  <li>• Widget Development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Discovery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discovery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In discovery I used the research that was done by the Akimbo art promotion and insights from a team member who is a wheelchair user to define needs, barriers, and goals. I also reviewed the existing platforms and services to identify gaps. Additionally, I visited several art venues to see what the barriers are.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Review of Existing Services</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">AccessNow</h4>
                  <p className="text-gray-700 mb-2">
                    There is one other platform called AccessNOW that utilizes Crowdsourcing. The main issue is that the information on this platform necessarily is not reliable due to the Crowdsourcing as well as vague information it provides.
                  </p>
                  <p className="text-gray-700">
                    The platform has three main categories including Accessible, Partially Accessible, and Not Accessible. However, There is no detail information on what each category includes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Survey Results</h3>
              <p className="text-gray-700 mb-4">
                Our survey was sent out to 717 public and commercial galleries with detailed questions about their venue accessibility features. The survey was designed to determine how many art venues in Ontario have physical accessibility features and better understand capability of the art venues to become more accessible.
              </p>
              <p className="text-gray-700">
                Surveys were completed by creative spaces&apos; administrators and I created a database of the results. The database was a foundation for the online information platform.
              </p>
            </div>
          </div>

          {/* User Personas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">User Personas</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Based on the secondary research and observation 3 main user personas were identified. These user stories highlight their frustrations and needs to support ideation of new services.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Amy - Director</h4>
                <p className="text-gray-700 text-sm mb-3">Wheelchair user</p>
                <p className="text-gray-700 text-sm mb-3">
                  &quot;I need to go to events and panel discussions in different art galleries. However, I can&apos;t find information about the accessibility of the venues. I need to make calls to ask if these venues are accessible. Sometimes they say it is accessible, but I go there, and I can&apos;t get in.&quot;
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Gerald - Student</h4>
                <p className="text-gray-700 text-sm mb-3">Wheelchair user</p>
                <p className="text-gray-700 text-sm mb-3">
                  &quot;I need to visit different art venues to complete my project and get inspiration. I usually search online to see if there is any information about venue accessibility. It is very frustrating when I go there and I can&apos;t enter the space, although the information on their website indicates that the venue is accessible.&quot;
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Sarah - Volunteer</h4>
                <p className="text-gray-700 text-sm mb-3">Wheelchair user</p>
                <p className="text-gray-700 text-sm mb-3">
                  &quot;As a wheelchair user I really like to work with venues to support them to be more accessible. It is frustrating that I can&apos;t find information on the level of accessibility of these venues to be able to work with them.&quot;
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Journey Mapping</h3>
              <p className="text-gray-700">
                After the initial research on the existing services and based on the insights from users of assistive devices, it was helpful to map the journey to the art venues. Journey map is based on the most common challenges that different users of assistive devices highlighted. I used pain points and challenges that users are facing to start ideation on services that can address these challenges.
              </p>
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We started ideation phase by early prototypes based on the user needs and existing gaps.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Focus Group Results</h3>
              <p className="text-gray-700 mb-4">
                We ran focus groups for ideation and selection of ideas to see what needs to be included on the online platform and how. There were 6 participants, including 2 participants from AVA collective, an accessibility specialist, 1 advocate and 2 wheelchair users.
              </p>
              <p className="text-gray-700 mb-4">
                Focus group participants found it crucial to have option to categorize information on accessibility of venues in four categories including:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Level Entrance/Ramp Access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Accessible Washroom</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Parking Nearby</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Automatic Doors</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Access Designations</h3>
              <p className="text-gray-700 mb-6">
                With focus group we also ideated on access designations and how these designations should appear on the AVA landing page. Participants highlighted while they are interested to see the details they want to be able to identify the level of accessibility of venues quickly. To achieve that, we used colour coded icons to show the level of accessibility instantly.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Accessible</h4>
                  <p className="text-sm text-gray-700">Level entrance or ramp access, accessible washroom, wide pathways, elevator access</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">~</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Partially Accessible</h4>
                  <p className="text-sm text-gray-700">Level entrance or ramp access, may be missing other features</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">✗</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Not Accessible</h4>
                  <p className="text-sm text-gray-700">Does not include level entrance or ramp access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experimentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experimentation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Wireframe prototypes were refined based on the feedback from the focus group and the refined prototypes were translated to final design solution.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Landing Page Design</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                  <span className="text-gray-700">Four filters are added based on the four main categories defined by users and focus group as the most important area that they find information on. This is to allow users quickly find about accessibility features in these areas.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                  <span className="text-gray-700">Color coded access designation icon, in addition to text to quickly show accessibility level</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                  <span className="text-gray-700">View both icon and text of a filter category beside each venue to easily locate the information</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</span>
                  <span className="text-gray-700">Access to the full report and detailed venue information</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Widget Design</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                  <span className="text-gray-700">Users can check the detail information about art venues on the widget and don&apos;t need to check venues&apos; websites</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                  <span className="text-gray-700">Photos of venues entrance, door, washroom to add clarity in terms of accessibility features</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                  <span className="text-gray-700">Detailed report on different accessibility features based on the users needs, including door width measurements, hallways measurements, etc.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</span>
                  <span className="text-gray-700">Category of areas with detail information and measurements to give users quickly clarity what information is available on the widget</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</span>
                  <span className="text-gray-700">Map to see the location and see nearby places</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcome</h2>
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Created a digital database about Information on accessibility of art venues</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Landing page and widget to make the database accessible to everyone were designed and published successfully within the projected timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Network of the project was expanded by 300%</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Resource Guide</h3>
              <p className="text-gray-700 mb-4">
                I found it crucial for the project continuation and maintaining relationship with the venues and funding partners to develop an accessibility resource guide. While it was not part of my work, I proposed it to the AVA executives and they agreed.
              </p>
              <p className="text-gray-700">
                I developed an accessibility resource guide for creative spaces that include lists of accessibility toolkits, guides and services for their physical spaces, digital platforms, artworks presentations and social media presence to move forward in becoming more accessible places. The Accessibility Resource Guide was shared with AVA network and gained attention by ArtsBuild Ontario and was shared on their platform as a resource with the creative spaces.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roll-A-Thon Event</h3>
              <p className="text-gray-700 mb-4">
                I as AVA&apos;s outreach manager volunteered to work collaboratively with five other institution partners, including Art Spin, Tangled Art + Disability, Creative Users Projects, Akimbo Art Promotions, and Bodies in Translation to organize and plan a promotional event.
              </p>
              <p className="text-gray-700">
                Roll-A-Thon was the AVA&apos;s first event which guided tours for people using mobility devices. It took place in the &quot;Holding patterns&quot; exhibition of site-specific artworks in storage lockers at Planet Storage in Toronto. The exhibition is curated by Art spin.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                I also mapped the future paths for the AVA project. The following is a brief about the possible paths the AVA could take:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">One-Three Years Ahead</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Move forward in partnership with art venues</li>
                    <li>• Develop Up-to-Date Accessibility Guides for Creative Spaces</li>
                    <li>• Accessible Digital Information Strategy for Creative Spaces</li>
                    <li>• Co-Creating Inclusive Exhibition Tours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Three to Five Years Ahead</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Developing/Prototyping Technological Tools to Support Better Exhibition Experiences for Users of Assistive devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
