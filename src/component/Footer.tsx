import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Send } from 'lucide-react';
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
        { name: "Pratispartha", href: "/pratispartha" },  
        { name: "Vision Publication", href: "/vision-publication" }
      ]
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Centers", href: "/centers" },
        { name: "FAQs", href: "/faqs" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Blog", href: "blogs" },
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
    { icon: Facebook, href: "https://facebook.com/dikshantias", label: "Facebook", backgroundColor:"bg-[#3b579d]" },
    { icon: Instagram, href: "https://instagram.com/dikshantias", label: "Instagram", backgroundColor:"bg-[#a408f3]"},
    { icon: Youtube, href: "https://youtube.com/dikshantias", label: "YouTube", backgroundColor:"bg-red-600" },
    { icon: Linkedin, href: "https://linkedin.com/company/dikshantias", label: "LinkedIn", backgroundColor:"bg-[#0274b3]" },
    { icon: Twitter, href: "https://twitter.com/dikshantias", label: "Twitter", backgroundColor:"bg-[#1d9bf0]" },
    { icon: Send, href: "https://t.me/dikshantias", label: "Telegram", backgroundColor:"bg-[#29a9eb]" }
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
                    className={`w-8 h-8 text-white rounded-full flex items-center justify-center hover:bg-[#f43144] hover:text-white transition-colors ${social.backgroundColor}` }
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
          <div className="text-right bg-red-500 rounded-sm">
            <h4 className="text-sm font-medium text-gray-50 my-3 mx-1
            ">Download App</h4>
            {/* <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Dikshant IAS © 2025. | All Rights Reserved. | Develop By Hover Business Services LLP
          </p>
        </div>

        {/* Chat Button */}
        {/* <div className="fixed bottom-6 right-6">
          <button className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
            💬
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;