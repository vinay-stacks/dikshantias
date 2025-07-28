import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "COURSES",
      links: [
        { name: "Home", href: "/" },
        { name: "Classroom", href: "/classroom" },
        { name: "English FC", href: "/english-fc" },
        { name: "English FC - 2 & 3 Years", href: "/english-fc-2-3" },
        { name: "Optional Classroom", href: "/optional-classroom" },
        { name: "Essay", href: "/essay" },
        { name: "CSAT", href: "/csat" },
        { name: "GS Mains Advance", href: "/gs-mains-advance" },
        { name: "Fast Track - Prelims", href: "/fast-track-prelims" },
        { name: "PT 365", href: "/pt-365" }
      ]
    },
    {
      title: "",
      links: [
        { name: "Mains 365", href: "/mains-365" },
        { name: "Monthly CA", href: "/monthly-ca" },
        { name: "Model Classes For Answer Writing", href: "/model-classes" },
        { name: "Ethics Case Studies", href: "/ethics-case-studies" },
        { name: "Samvidhan Test Series", href: "/samvidhan-test-series" },
        { name: "Prelims Test Series", href: "/prelims-test-series" },
        { name: "GS & Essay Test Series", href: "/gs-essay-test-series" },
        { name: "Optional Test Series", href: "/optional-test-series" },

        { name: "Interview", href: "/interview" },
        { name: "Smart Content", href: "/smart-content" }
      ]
    },
    {
      title: "SERVICES",
      links: [
        { name: "Resources", href: "/resources" },
        { name: "Abhyaas", href: "/abhyaas" },
        { name: "Mains Corner", href: "/mains-corner" },
        { name: "Samarthi", href: "/samarthi" },
        { name: "Pariskshan Prelims", href: "/pariskshan-prelims" },
        { name: "Pariskshan Mains", href: "/pariskshan-mains" },
        { name: "Open Test", href: "/open-test" },
        { name: "Blog", href: "" },
        { name: "Pratispartha", href: "/pratispartha" },  
        { name: "Vision Publication", href: "/vision-publication" }
      ]
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Centers", href: "/centers" },
        { name: "FAQ", href: "/faq" },
        { name: "Syllabus", href: "/syllabus" }
      ]
    },
    {
      title: "POLICIES",
      links: [
        { name: "Terms of Use", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Refund Policy", href: "/refund" },
        { name: "Data Policy", href: "/data-policy" }
      ]
    }
  ];

  const socialMediaEnglish = [
    { icon: Facebook, href: "https://facebook.com/dikshantias", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/dikshantias", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/dikshantias", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/dikshantias", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/dikshantias", label: "Twitter" }
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  <div className='logo w-[150px] md:w-[200px]'>
                    <Image src={'/img/dikshant-logo.png'} alt="Logo" width={200} height={100} />
                  </div>
                </div>
                <div className="text-md font-medium text-gray-900 mt-4">Empowering minds for a brighter future.</div>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-800">
              <div>Phone: +91 7428092240</div> 
              <div>WhatsApp : +91 9810386285</div>            
              <div>Email: info@dikshantias.com</div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              {section.title && (
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-800 hover:text-[#f43144] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* About UPSC CSE Section */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            About UPSC Civil Services Examination (UPSC CSE)
          </h2>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            The UPSC Civil Services Examination (CSE) stands as one of the most esteemed competitive exams in India, conducted annually by the Union Public Service Commission. It is designed to recruit candidates for prominent government positions, including the IAS, IPS, and IFS. The selection process is highly competitive and consists of three stages: the Preliminary Examination, the Main Examination, and the Personality Test (Interview).
          </p>

          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Skills Required to Excel in UPSC CSE
          </h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
           The Preliminary Examination serves as an initial screening stage, designed to assess a candidate's fundamental knowledge and cognitive aptitude, helping identify serious contenders for the Mains. The Mains Examination delves deeper, testing an aspirant’s capacity for critical thinking, analytical reasoning, and effective written communication through structured and insightful answers. The final stage, the Interview (Personality Test), evaluates the candidate's intellectual depth, social awareness, and interpersonal skills — qualities essential for a successful career in the Civil Services.
          </p>

          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Achieving Success with Dikshant IAS
          </h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Dikshant IAS provides comprehensive support to civil services aspirants through a wide array of initiatives and services. Its holistic approach to preparation equips students with the essential skills and competencies needed to succeed at every stage of the UPSC CSE—be it the Prelims, Mains, or Personality Test.
          </p>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Dikshant IAS provides comprehensive and cutting-edge UPSC coaching through both online and offline/classroom platforms, ensuring students receive the best possible learning experience. The institute also offers its prestigious All India UPSC Mock Test Series covering GS Prelims, Mains, CSAT, Essay, and Optional Subjects, designed to facilitate regular evaluation and consistent enhancement of student performance.
          </p>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            A dedicated and dynamic mentoring ecosystem delivers personalized guidance, helping students recognize their areas for improvement while providing targeted support to unlock their full potential and achieve success.
          </p>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Dikshant IAS is recognized as one of the leading IAS academies in the country, thanks to its strong presence across more than 10 cities and a robust online platform that reaches students nationwide. Known for its innovative approach to UPSC online coaching, the institute offers real-time support that empowers aspirants throughout their preparation journey. This commitment to excellence and accessibility makes Dikshant IAS a trusted destination for those aspiring to join the Civil Services and serve the nation.
          </p>

          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Become a part of the Dikshant IAS Community.
          </h3>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Stay informed about crucial UPSC preparation updates. Connect with the Dikshant IAS community on social media to remain engaged with our informative and collaborative network.
          </p>
        </div>

        {/* Social Media and Download App */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Social Media</h4>
              <div className="flex space-x-3">
                {socialMediaEnglish.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#f43144] hover:text-white transition-colors"
                    aria-label={social.label}
                    target='_blank'
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Hindi Social Media */}
            {/* <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Hindi Social Media</h4>
              <div className="flex space-x-3">
                {socialMediaHindi.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Download App */}
          <div className="text-right">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Download App</h4>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Dikshant IAS © 2025. | All Rights Reserved. | Develop By Hover Business Services LLP
          </p>
        </div>

        {/* Chat Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
            💬
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;