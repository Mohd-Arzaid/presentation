import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Layout,
  Users,
  CheckCircle,
  Calendar,
  ArrowRight,
  BarChart3,
  Rocket,
  Database,
  Layers,
  Frame,
  Maximize2,
} from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return <Presentation />;
}

export default App;

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = 8;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "f") {
        toggleFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [currentSlide]);

  const slides = [
    // slide 1
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"></div>
      <div className="mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-6">
          <Code className="w-12 h-12 text-purple-600" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text">
        Monthly Work Accomplishments
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium mb-1 text-gray-700">
      Sun Consultants & Engineers
      </h2>
      <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-700">
        Web Development Team
      </h2>
      <div className="flex items-center gap-2 text-xl text-gray-600 mb-12">
        <span>Presented by :</span>
        <span className="font-semibold">Abhay Raj Kashyap & Mohd Arzaid </span>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowRight className="w-6 h-6 text-gray-400" />
      </div>
    </div>,

    // slide 2
    <div className="flex flex-col h-full px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-purple-600">Introduction</h2>
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Good Afternoon everyone. Today, we are presenting our
          team's progress for the past month. As part of the web
          development team, we have made significant progress on both frontend
          and backend aspects of our company website, focusing on:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-50 p-6 rounded-lg flex flex-col items-center text-center">
            <Layout className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Responsiveness</h3>
            <p className="text-gray-600">
              Fully responsive design across all devices
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-lg flex flex-col items-center text-center">
            <Code className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Functionality</h3>
            <p className="text-gray-600">
              Enhanced interactive elements and features
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg flex flex-col items-center text-center">
            <Rocket className="w-10 h-10 text-orange-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Deployment</h3>
            <p className="text-gray-600">Preparing for website launch</p>
          </div>
        </div>
      </div>
    </div>,

  
    // Slide 3: Abhay's Accomplishments
    <div className="flex flex-col h-full px-8 py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
          <Users className="w-6 h-6 text-pink-600" />
        </div>
        <h2 className="text-3xl font-bold text-pink-600">
          Abhay Raj Kashyap's Accomplishments
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Service Pages Development
          </h3>
          <h4 className="text-lg font-medium mb-2 text-pink-600">
            Responsive Design:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Developed responsive layouts for all service pages</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Ensured consistent design across different screen sizes and
                devices
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Backend Integration
          </h3>
          <h4 className="text-lg font-medium mb-2 text-orange-600">
            Form Submission System:
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Implemented backend functionality for form submissions
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                Created integration with Google Sheets for data storage and
                analysis
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Form Functionality
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-medium mb-2 text-purple-600">
              Multiple Form Types:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Successfully integrated three different types of forms
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Implemented data collection for all form types</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2 text-purple-600">
              Enhanced Data Collection:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Added timestamp tracking for form submissions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Implemented referral page tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Created query categorization system</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2 text-purple-600">
              Data Validation:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Implemented input validation on all forms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Reduced error rates and improved data quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,


 
     // slide 4
     <div className="flex flex-col h-full px-8 py-12">
     <div className="flex items-center mb-8">
       <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
         <Users className="w-6 h-6 text-purple-600" />
       </div>
       <h2 className="text-3xl font-bold text-purple-600">
         Mohd Arzaid's Accomplishments
       </h2>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
       <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
         <h3 className="text-xl font-semibold mb-4 text-gray-800">
           Frontend Development
         </h3>
         <h4 className="text-lg font-medium mb-2 text-purple-600">
           Complete Responsive Design Implementation:
         </h4>
         <ul className="space-y-2 text-gray-700">
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Home page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>About page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Latest updates page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Notification page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Gallery page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Contact us page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Footer page</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Service page</span>
           </li>
         </ul>
       </div>

       <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
         <h3 className="text-xl font-semibold mb-4 text-gray-800">
           Enhanced Functionality
         </h3>
         <h4 className="text-lg font-medium mb-2 text-pink-600">
           Interactive Elements:
         </h4>
         <ul className="space-y-2 text-gray-700">
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Implemented clickable buttons throughout the website</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Created proper linking between all pages</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Developed search functionalities
             </span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Added "Go to the top" button for improved user experience in Service Pages
             </span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Created carousel functionality for dynamic content display
             </span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Made testimonials scrollable</span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Implemented fonts and color design throughout the website
             </span>
           </li>
         </ul>
       </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
         <h3 className="text-xl font-semibold mb-4 text-gray-800">
           Post-Review Improvements
         </h3>
         <h4 className="text-lg font-medium mb-2 text-orange-600">
           Quality Assurance:
         </h4>
         <ul className="space-y-2 text-gray-700">
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Addressed and implemented all 12 improvement points provided by
               Dhruv Sir
             </span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>Enhanced overall user interface based on feedback</span>
           </li>
         </ul>
       </div>

       <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
         <h3 className="text-xl font-semibold mb-4 text-gray-800">
           Backend Support
         </h3>
         <h4 className="text-lg font-medium mb-2 text-blue-600">
           Error Resolution:
         </h4>
         <ul className="space-y-2 text-gray-700">
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Identified and fixed backend errors affecting Abhay's progress
             </span>
           </li>
           <li className="flex items-start">
             <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
             <span>
               Provided technical support to ensure smooth backend integration
             </span>
           </li>
         </ul>
       </div>
     </div>
   </div>,


      // Slide 5: Your Ongoing Projects
      <div className="flex flex-col h-full px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-purple-600">Ongoing Tasks</h2>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 border border-purple-100">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
            <Rocket className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Website Deployment
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-sm font-medium">1</span>
              </div>
              <span>
                Initiated deployment process in collaboration with Abhay
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <span className="text-purple-600 text-sm font-medium">2</span>
              </div>
              <span>
                Researched optimal hosting solutions for our specific
                requirements
              </span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-purple-100">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium text-gray-600">Progress</span>
              <span className="font-medium text-purple-600">90%</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full">
              <div className="h-full w-[90%] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>,


    // Slide 6: Collaborative Achievements & Current Focus
    <div className="flex flex-col h-full px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            Collaborative Achievements
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <span>
                  Successfully coordinated frontend and backend development
                  tasks
                </span>
              </li>
              <li className="flex items-start p-3 bg-pink-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Layout className="w-4 h-4 text-pink-600" />
                </div>
                <span>
                  Maintained consistent design language throughout the website
                </span>
              </li>
              <li className="flex items-start p-3 bg-orange-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <Code className="w-4 h-4 text-orange-600" />
                </div>
                <span>
                  Regular code reviews to ensure quality and consistency
                </span>
              </li>
              <li className="flex items-start p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                </div>
                <span>Effective knowledge sharing between team members</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-pink-600">
            Current Month Focus
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Rocket className="w-5 h-5 text-pink-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Website Deployment
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 pl-7">
                <li>Finalizing server requirements</li>
                <li>Setting up deployment pipelines</li>
                <li>Testing deployment processes</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Layers className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Admin Panel Development
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 pl-7">
                <li>Building backend functionality for the admin panel</li>
                <li>Creating user-friendly interface for content management</li>
                <li>Implementing role-based access control</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-orange-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">
                  API Integration
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 pl-7">
                <li>Connecting frontend components with backend APIs</li>
                <li>Implementing secure data exchange protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 7: Next Steps
    <div className="flex flex-col h-full px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">
        Next Steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-b from-purple-50 to-white rounded-xl shadow-lg p-6 border border-purple-100 flex flex-col">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-md mx-auto">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Timeline
          </h3>
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
            <span className="text-gray-700">
              Working on Deplopyment of website 
            </span>
          </div>
          <div className="mt-auto pt-4 border-t border-purple-100">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium text-gray-600">Priority</span>
              <span className="font-medium text-purple-600">High</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full">
              <div className="h-full w-[90%] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-pink-50 to-white rounded-xl shadow-lg p-6 border border-pink-100 flex flex-col">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-md mx-auto">
            <Layers className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Admin Panel
          </h3>
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
            <span className="text-gray-700">
              Admin panel development after deployment
            </span>
          </div>
         
          <div className="mt-auto pt-4 border-t border-pink-100">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium text-gray-600">Priority</span>
              <span className="font-medium text-pink-600">Medium</span>
            </div>
            <div className="h-2 bg-pink-100 rounded-full">
              <div className="h-full w-[60%] bg-gradient-to-r from-pink-600 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Slide 8: Conclusion
    <div className="flex flex-col h-full px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text">
        Conclusion
      </h2>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This month has been highly productive with significant progress on
          both frontend and backend development. We have successfully
          implemented:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-medium text-gray-800">
                Responsive design
              </span>
            </div>
            <p className="text-gray-600 text-sm pl-7">
              Across the entire website
            </p>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-pink-600 mr-2" />
              <span className="font-medium text-gray-800">
                Key functionality
              </span>
            </div>
            <p className="text-gray-600 text-sm pl-7">
              Interactive elements and forms
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-medium text-gray-800">
                Deployment preparation
              </span>
            </div>
            <p className="text-gray-600 text-sm pl-7">
              Server and pipeline setup
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-medium text-gray-800">
                Admin panel planning
              </span>
            </div>
            <p className="text-gray-600 text-sm pl-7">
              Design and feature planning
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our focus for the next month will shift more toward backend
          development, API integration, and completing the admin panel.
        </p>
      </div>

      <div className="text-center">
        <p className="text-xl font-medium text-gray-700 mb-4">
          Thank you for your attention.
        </p>
        <p className="text-lg text-gray-600">
          We welcome any questions or feedback.
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <Frame className="w-6 h-6 text-purple-600" />
          <span className="font-semibold text-lg text-gray-800">
            Web Development Team Presentation
          </span>
          
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={toggleFullscreen} className="gap-1">
            <Maximize2 className="w-4 h-4" />
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </Button>
        </div>

      </div>

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <div className="absolute inset-0 flex items-center justify-center p-4 pb-16 overflow-y-auto">
            {slides[currentSlide]}
          </div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-purple-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 border-t bg-white flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Slide {currentSlide + 1} of {totalSlides}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
      
          <Button
            variant="default"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="gap-1 bg-purple-600 hover:bg-purple-700"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
