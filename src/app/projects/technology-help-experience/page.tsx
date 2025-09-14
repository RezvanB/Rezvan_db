import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TechnologyHelpExperiencePage() {
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
                  Technology Help Experience
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Supporting employees to access technology tools and services
                </p>
              </div>
              
              {/* Project Info */}
              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                  <p className="text-sm text-gray-700">Scotiabank</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">My Role</h3>
                  <p className="text-sm text-gray-700">Lead designer, from concept to execution</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Duration</h3>
                  <p className="text-sm text-gray-700">April to August 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Full Height Image (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/pexels-hyundaimotorgroup-30658213.jpg"
            alt="Technology Help Experience Cover"
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
              The project's main goal was to address employees' technology-related issues/needs in a timely manner digitally to reduce call volume and create better employee experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The pandemic has resulted in a vast majority of Scotiabank's workforce having to work from home (WFH), with the possibility that many may continue this working scenario into the future. Prior to the pandemic, employees would heavily rely on peer support, their managers, or IT professionals and/or would go to a physical help desk.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Now, within this new working environment, employees are more reliant on technology functioning properly. Employees become anxious and stressed if they can't simply connect to the Scotiabank ecosystem, and they view this work disruption as urgent.
            </p>
          </div>

          {/* Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This, across the entire bank, has resulted in a high volume of calls, which has then resulted in the IT help having to reduce their attention to each issue, deflecting the service to others, or sometimes sending the issue back to the user. This results in further disruption to the user's work, operational waste, cost displacement across working groups, frustration, and users not knowing what to do.
            </p>
            
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The IT help team is in a different part of the organization, and this was their first time working with a design team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The third-party vendor was implementing the solution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The issue was across several channels of IT tickets, contact center, and in-person service.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Discovery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discovery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When I joined the project, discovery was already completed. I started to go through the existing analytics report and discovery research. Call drivers as well as analytics reports to narrow down the focus on the areas that have the highest impact on the employees experience and, as a result, on customers and business.
            </p>
            
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Experience Audit</h3>
              <p className="text-gray-700 mb-4">
                I reviewed the research done and explored the platform's current state. I also looked at the task completion rate for the main tasks and page visits and time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                  <span className="text-gray-700">In the first fold of the page, there are a number of links to technology updates that are mostly relevant to IT help staff.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                  <span className="text-gray-700">The main menu and tasks are in an accordion view at the bottom of the page. The language used for the main menu is ambiguous.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                  <span className="text-gray-700">Two search bars without proper labels and headings.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</span>
                  <span className="text-gray-700">Navigation, information hierarchy, and order are unclear.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</span>
                  <span className="text-gray-700">Subcategory language is unclear.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">6</span>
                  <span className="text-gray-700">Form input fields include both mandatory and not mandatory fields. Some field categories are ambiguous and lack clarity on where users can find the needed information.</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Hypothesis</h3>
              <p className="text-gray-700 mb-4">
                After auditing the current experience and looking at existing discovery research and analytical reports, I developed three hypotheses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The platform presents several options for users to request help/fix an issue, and users are unable to determine which one is the right option for them, and they call the IT help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Forms for submitting an issue are longer than users expectations and lack clarity. Users are overwhelmed and call to seek help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The platform does not give users tangible and visible cues on the status of their submitted issues/needs and/or if they need to take actions, and users contact the IT Help to learn about the status of their requests.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Research */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To better understand the employees current process, pain points, and expectations, I proposed conducting discovery research. The discovery research proposal included interviews with various employee groups, including technicians, employees from different parts of the bank, and employees with different roles (leaders, managers, individual contributors, support roles, and operations), and Card Sorting.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Overview of User Research Key Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Discontinuity of service</h4>
                      <p className="text-sm text-gray-700">Users believed that their tickets and phone calls were ignored, discarded, or not received.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Confidence in the call</h4>
                      <p className="text-sm text-gray-700">Users felt confident that their issues would be taken care of if they spoke directly to technicians.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Balancing Self Help with competencies</h4>
                      <p className="text-sm text-gray-700">When speaking about self-help, users thought that it would work for technological issues that were low complexity.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">What is IT help?</h4>
                      <p className="text-sm text-gray-700">Users did not know where to go to service their own issues digitally, which caused them to call the IT Service Desk.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lack of expectations and understanding</h4>
                      <p className="text-sm text-gray-700">Users were unaware of how the service worked or what the process was for their issues to be resolved.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">6</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">All issues perceived as 'urgent'</h4>
                      <p className="text-sm text-gray-700">Users consistently felt, no matter what type of issue they had, that it was urgent and it needed to be handled immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Pain Points</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Users also felt that the situation was in control when speaking directly to technicians and that they were able to better explain their issues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Confusion in the process of resubmitting issues or requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Users were not notified when their tickets were closed (approved in the system), even though there was no solution gained (approved does not equal resolved).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Frustration that time has been wasted causes users to directly contact the Tech Help (feelings of time being wasted and work being disrupted).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Users felt confident that there was more accountability from the call when they explained their issue to a fellow colleague.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Card Sort Study</h3>
              <p className="text-gray-700 mb-4">
                I conducted the card sorting remotely and moderated the sessions. I used both Figma and PowerPoint for the activity. As an open card sort, participants organized 30 phrases into categories that they would expect to find on a website. They then labeled each category. Participants were not required to sort all the cards. The cards were also randomized for each participant.
              </p>
              <p className="text-gray-700 mb-4">
                Based on the users feedback categories were standardized. There were also some categories that needed more clarification. Examples: Account setup (What type of account?), Account troubleshooting (What type of account?), Password-related documentation (What type of password?), How to fill out forms (what type of forms?).
              </p>
              <p className="text-gray-700">
                Add action verbs to the categories. Action verbs add more clarity about each category's content. Examples: Request Applications rather than Applications. Request a mobile device rather than a mobile device.
              </p>
            </div>
          </div>

          {/* User Personas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Main User Personas</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Like many other employee-facing tools, IT Help experience has primarily focused on empowering data individual contributors and people manager personas as two main personas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Individual Contributors</h4>
                <p className="text-gray-700 text-sm">Uses IT Help for requesting devices and software. He finds it very difficult to use the platform. He never knows which option is best for him to select and usually calls for requests. He feels that platform is good for someone who is a technology expert and already knows what their issue is.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">People Managers</h4>
                <p className="text-gray-700 text-sm">Uses IT Help for requesting devices and software, especially when she has a new hire. She finds it very frustrating that email notifications and platform notifications use the request number, and she always needs to go to the platform and read the entire request to see what the notifications were about.</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New Findings</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Focus on Process Clarity:</strong> Lack of clarity about the process of resolving an issue digitally is one of the main causes that users call.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Process Adoption:</strong> There were communication feature possible within the platform, however, the process was not adopted by the IT help team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Inclusion:</strong> There were some character illustrations for the branding that implied stereotypes. While these characters were tested before in today's context were problematic. I consulted banks digital branding and marketing to see what resources they have and can share with IT Help team.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideation and Prioritization</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The result of the research did not support that the initial concepts would resolve the issue with the call volume and platform use. After sharing the research insights with the team, I set up ideation and prioritization workshops with the engineering team and the product manager. The main goal was to help the team feel included in the ideation process, considering my proposal to change directions.
            </p>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Second Design Iteration</h3>
              <p className="text-gray-700 mb-4">
                In the second iteration, I focused on improving the navigation based on customer insights from both the card sort study and interviews. The IT ticket navigation was only displaying the request number. I proposed a new information architecture as well as added a left-side navigation for users to easily access the categories on the side as they are viewing their ticket rather than going back and forth to their home page.
              </p>
              <p className="text-gray-700 mb-4">
                In the navigation pane, users could see their other requests as well. I proposed to use ticket topics in the navigation and move the request number in parentheses. This was to address users pain point about recalling the IT request topic, and they needed to open the ticket each time.
              </p>
              <p className="text-gray-700">
                I proposed to display the process on the top of the IT ticket page and add an explanation of the average wait time. This was to address customer pain points on the unclarity of if/when their request will be addressed, and they would feel the need to call IT and ask the processing time.
              </p>
            </div>
          </div>

          {/* Usability Testing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Usability Testing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Two main user flows were tested in remote usability test sessions with employees: To submit a request for the last technology-related need/issue and To check the status of their requests. When there was additional time, we also tested how users find a way to resolve the issue themselves.
            </p>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Insights</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Checking Status</h4>
                  <p className="text-gray-700">Users wanted to know the escalation process and how they can communicate changes to their needs with the IT Help.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Submitting a Request</h4>
                  <p className="text-gray-700">Users wanted to know where exactly they could find the information, for instance, for the funding section.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Self-Help Guides</h4>
                  <p className="text-gray-700">It was important for users that they have access to all the information they need in the article and there are no links to other pages.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Design */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Design</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700">
                I iterated and refined the designs to include mostly asked questions on the landing page and allow for adding notes and messages after the ticket is submitted in case the user needs changes.
              </p>
              <p className="text-sm text-gray-600 mt-4 italic">
                Note: All design mocks included are conceptual. Since the tool was not open to the public, I'm not using any of the final proposed designs.
              </p>
            </div>
          </div>

          {/* Planning for Measuring Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Planning for Measuring the Impact</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700">
                I created a plan for measuring the experience impact to support the team after implementation.
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcome</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Increased main tasks completion rate from 34 to 81 percent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">56 percent decrease in call volume.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Positive user feedback and sentiment from CSAT.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Gained stakeholder trust and received a process optimization award.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Built design capacity and supported hiring of an embedded UX designer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Facilitated collaboration and future partnership opportunities between IT Help and the marketing team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Paved the way for a smoother collaboration between the design and IT teams.</span>
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

