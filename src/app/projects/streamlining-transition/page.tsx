import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function StreamliningTransitionPage() {
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
                  Streamlining Transition
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Supporting stroke patients through service design intervention to improve the transition experience from hospital to home
                </p>
              </div>
              
              {/* Project Info */}
              <div className="space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                  <p className="text-sm text-gray-700">Bridgepoint Rehabilitation Hospital</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">My Role</h3>
                  <p className="text-sm text-gray-700">Service Designer</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Duration</h3>
                  <p className="text-sm text-gray-700">Sep-Dec 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Full Height Image (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
          <Image
            src="/pexels-cottonbro-6804077.jpg"
            alt="Streamlining Transition Cover"
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
              As part of my master's degree at OCAD University I worked as a design researcher with the Bridgepoint Active Rehabilitation Hospital. The focus of this internship was to improve current hospital services for stroke patients in transition care to support them in having a successful discharge. I was working with four other design research interns and scientific researchers at the Hospital.
            </p>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Team</h3>
                  <p className="text-gray-700 mb-4">4 team members - design researchers</p>
                  <p className="text-gray-700 mb-4">Advisors:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Job Rutgers</li>
                    <li>• Dr. Kate Sellen</li>
                    <li>• Dr. Michelle Nelson</li>
                    <li>• Shawn Tracy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h3>
                  <p className="text-gray-700">
                    I designed, planned, ran, and facilitated interviews and co-design workshops. I analyzed and synthesized data from research into actionable insights and developed guidelines and concepts for future steps of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Navigating health care services are very complex as they are provided in different disconnected settings. Persons with complex care needs such as stroke patients after discharge from hospital are left on their own to navigate this complex system to get the care that they need.
            </p>
          </div>

          {/* Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Approach | Methods</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              It was essential to ensure different actors, including users of healthcare, healthcare providers, and others who are part of this service delivery are engaged in the research and design process. To design this innovative service process, we used Design Thinking and Inclusive Design approaches to include a diverse group of stakeholders into our processes.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Discovery</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Secondary Research</li>
                  <li>• Ethnographic Study</li>
                  <li>• Interview & Informal Chat</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ideation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Co-Design 1 (15 participants)</li>
                  <li>• Co-Design 2 (17 participants)</li>
                  <li>• Qualitative Data Analysis</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Experimentation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Feedback Session 1 (4 participants)</li>
                  <li>• Feedback Session 2 (3 participants)</li>
                  <li>• Iterative Design Cycle</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Service Design</li>
                  <li>• Future Service Blueprints</li>
                  <li>• Continuum of Care</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Discovery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Discovery</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Review of literature indicated the following as the main contributing factors for disconnect in transitional care. Lack of: community resources and programs, social support, and/or coordination between different care providers and services.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem Area</h3>
              <p className="text-gray-700 mb-4">
                Some of the factors that can lead to a poor transition include, but are not limited to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Push for discharge</li>
                <li>• Transitional disconnect</li>
                <li>• Lack of arranging follow-ups</li>
                <li>• Lack of home assessments</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stakeholder Identification</h3>
              <p className="text-gray-700 mb-4">
                It was essential to define main stakeholders early on to include them in the design process and consider their needs, challenges, and goals. We defined five main user groups for the service:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Patients</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Family Members/Caregivers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Health Administrators</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Healthcare Providers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Volunteers</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ethnography Study, Interview & Informal Chat</h3>
              <p className="text-gray-700 mb-4">
                In this phase we observed the stroke unit as well as clinical round to better understand the context. We moved forward with interviews, engaging the five main stakeholders to understand their needs, challenges, and goals. We also used the interview opportunity to validate the gathered data to date. We used thematic analysis to analyze qualitative data.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="text-center">
                  <div className="font-semibold">5 Healthcare Providers</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">3 Pairs of Stroke Patients and Family Members</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">1 Volunteer Resources Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Journey Maps - Four Different Lenses</h3>
              <p className="text-gray-700 mb-4">
                The following map highlights journeys of four different groups of stakeholders, including patients, caregivers, care providers, and volunteers based on the interviews and ethnography study we had with various stakeholders. This journey map through 4 various lenses identifies unmet patient needs as well as the gaps that exist at different stages of care delivery.
              </p>
              <p className="text-gray-700">
                It also highlights the existing disconnect between healthcare provider and stroke patient after discharge until the first follow-up.
              </p>
            </div>
          </div>

          {/* Stroke Patient & Family Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stroke Patient & Family/Caregiver Analysis</h2>
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Needs and Barriers</h3>
              <p className="text-gray-700 mb-4">
                After discharge, stroke patients and their family/caregiver are left on their own to navigate the complex health and welfare system. Based on the place that a stroke patient lives there are different barriers. For instance, if they are living in a condo or a home based on their physical functionality, there can be a huge difference in terms on physical accessibility.
              </p>
              <p className="text-gray-700 mb-4">
                Outpatient and supportive programs for stroke patients have no structure in the community. Factors including transportation, weather, Comorbidities, unintended consequences, language, money, employment, social links and built environment can impact transition of stroke patients from hospital to community as well.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Causal Loops - System Stress & Leverage Points</h3>
              <p className="text-gray-700 mb-4">
                Transition complexities are result of a combination of factors. I used causal loops to show how different factors in the system can cause stress and to discover the leverage points.
              </p>
              <p className="text-gray-700 mb-4">
                Causal loops below present a reinforcing and a balancing loop. Reinforcing loop shows the vicious cycle of variables like push for discharge which means more patients go home. This increases the chance of having new/underlying problem at home which can result in readmission. More patients coming back to the again reinforces push for discharge.
              </p>
              <p className="text-gray-700">
                This Casual Loop illustrates more in detail what elements can reinforce a successful discharge. Home assessment, financial assistance and outpatient rehab programs are the factors that can support successful transition to home. However, there are elements like travel time, human resources, transportation, community programs and funded programs criteria that can simplify or complicate this cycle.
              </p>
            </div>
          </div>

          {/* Ideation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ideation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We found it necessary to engage diverse stakeholders to validate the gathered data and to discover if there are missing points.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Co-Design 1 - Lunch & Design</h3>
              <p className="text-gray-700 mb-4">
                We designed a very informal session around lunch time in stroke unit dining place where we provided lunch and prepared visual tools for staff to interact with as they dine. This session was very informal and designed in a way that take the least time from stroke unit staff.
              </p>
              <p className="text-gray-700 mb-4">
                In this session we:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Validated and identified gaps within the post discharge experience</li>
                <li>• Validated patient journeys</li>
                <li>• Gathered professional insights</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Participants:</strong> 15 stroke unit healthcare providers and staff
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Co-Design 2</h3>
              <p className="text-gray-700 mb-4">
                In this session we engaged healthcare providers, family of patients with complex conditions, volunteers, administrators, and researchers. Activities were designed to introduce the project, validate the gathered data to date, gather additional data, ideate, prototype, and test.
              </p>
              <p className="text-gray-700 mb-4">
                Activities include validating stakeholders' needs, painpoints, goals as well as mind mapping, ideation, prototyping, and testing.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Insights</h4>
                  <p className="text-gray-700 mb-2">What participants defined as important components of a streamlined transition:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Consistent communication across organizations</li>
                    <li>• Centralized information on resources</li>
                    <li>• Follow-up during the post-discharge period</li>
                    <li>• Integration of community resources</li>
                    <li>• Supports for caregivers</li>
                    <li>• Support plans for the alleviation of anxiety</li>
                    <li>• Flexibility and individuality</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  <strong>Participants:</strong> 17 healthcare providers, volunteers, health researchers, family member of patients with complexities
                </p>
              </div>
            </div>
          </div>

          {/* Experimentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experimentation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The gathered data throughout the research was translated to the Bridgepoint's current service blueprint. This blueprint illustrates the structure of the service delivery at the Bridgepoint including the relationship of different stakeholders and components relevant to a certain touchpoint.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Service Blueprints</h3>
              <p className="text-gray-700 mb-4">
                This blueprint was used as a visual tool to communicate with executive board at the Bridgepoint Rehabilitation Hospital about current service delivery issues and where design intervention can take place.
              </p>
              <p className="text-gray-700">
                The magnified area shows one of the main areas of disconnect in the current service delivery.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Concept Prototypes Through Storyboarding</h3>
              <p className="text-gray-700 mb-4">
                Based on the emerged themes from the co-design ideation we started our first cycle of concept prototypes for possible solutions. We used storyboard for the initial prototypes. We tested these prototype in a feedback session with healthcare providers and scientific researchers at the Bridgepoint Rehabilitation Hospital.
              </p>
              <p className="text-gray-700 mb-4">
                These prototypes reflected the main ideas and important factors identified by diverse stakeholders at co-design.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Caregiver Education</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Common Profile</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Caregiver Support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Transition Team</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-semibold text-gray-900">Volunteer Matching</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Based on the received feedbacks we fine tuned our prototypes and redesigned a service that streamlines the transition based on the defined needs, painpoints and goals by diverse stakeholders. This service design using the principle of person-centered care addresses the existing gaps within care delivery and starts with interventions from rehabilitation hospital.
            </p>

            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Design - Continuum of Care</h3>
              <p className="text-gray-700 mb-4">
                We picked one of our personas to introduce the service design and show how this service design makes his transition smooth through storytelling to Bridgepoint Rehabilitation Hospital executive board. Since the beginning, we found importance of meeting of triad's (patient, caregiver/ family, and healthcare provider) needs.
              </p>
              <p className="text-gray-700 mb-4">
                Our service design intervention proposes a triad-centred transitional plan: patient, caregiver, and healthcare provider. Elements of this streamlined service include:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Caregiver education</li>
                <li>• Home assessment</li>
                <li>• Find family physician</li>
                <li>• Book an appointment</li>
                <li>• Make transportation arrangements</li>
                <li>• Make 72-hour follow-up calls</li>
                <li>• Connect patients to community services</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Service Blueprints</h3>
              <p className="text-gray-700">
                We used future service blueprint to communicate where and how exactly the design interventions can take place. The magnified areas show the areas that the proposed service can intervene to improve experience for all the stakeholders.
              </p>
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcome</h2>
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Presented the "Continuum of Care" streamlined transition service design to the executive board at Bridgepoint Rehabilitation Hospital & OCAD University Design for Health Program director and instructors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Project presentation was a great success Bridgepoint Rehabilitation hospital started to apply some of the interventions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">The project presentation secured a partnership between Bridgepoint Rehabilitation Hospital and OCAD University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">I presented a poster of the project at GTA Rehab Network Best Practices Day 2019 and I won 3rd place of the People's Choice Awards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">I also presented the project at Cahspr Conference 2019 in an oral session on the "Cancer, Chronic Disease Management"</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of the Proposed Service Design</h3>
              <p className="text-gray-700 mb-4">
                Our proposed Service Design intervention can address a small aspect of the huge transition dilemma for diverse stakeholders with:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Alleviating some of the stress on healthcare providers by effective home assessments</li>
                <li>• Mitigating some of the strain on the patient and caregiver by providing follow-up support</li>
                <li>• Preparing both patients and caregivers for their new life routines through education</li>
                <li>• Removing some of the possibilities for readmission by providing more community resources</li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                We used horizon map to communicate how the proposed design interventions can take place in the years ahead.
              </p>
              <p className="text-gray-700 mb-4">
                The streamlined transition service from the rehabilitation hospital back to the home communities can be implemented by further including the patients' and caregivers' inputs within the proposed plan.
              </p>
              <p className="text-gray-700">
                To move forward with the proposed design interventions, it is beneficial to test it through a pilot practice to ensure it is inclusive of all stakeholder groups' perspectives.
              </p>
            </div>
          </div>

          {/* Personal Learning */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Learning</h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Ways of communication with diverse stakeholders in a hospital setting, academic setting, and community programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Health & welfare system general overview, hierarchy, terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Hospital system performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Service design approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">System thinking tools</span>
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
