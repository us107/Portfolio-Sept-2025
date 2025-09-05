"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-1/2 max-w-lg p-12 flex flex-col justify-between z-10">
        <div>
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Trisha Sharma</h1>
            <h2 className="text-xl text-slate-300 mb-6 font-medium">Analyst</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I explore data to spot trends and turn them into useful insights. I build ML/DL models that predict, explain, and simplify complex information so anyone can understand it.
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {[
              { id: "about", label: "ABOUT" },
              { id: "experience", label: "EXPERIENCE" },
              { id: "projects", label: "PROJECTS" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center space-x-4 text-left transition-all duration-300 ${
                  activeSection === item.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <div
                  className={`h-px transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-16 bg-white"
                      : "w-8 bg-slate-600 group-hover:w-12 group-hover:bg-slate-400"
                  }`}
                />
                <span className="text-xs font-bold tracking-widest">{item.label}</span>
              </button>
            ))}
          </nav>
           <div className="relative py-8">
            <h3 className="text-xs font-bold tracking-widest text-white mb-6">TECH STACK</h3>
            <div className="relative h-43 w-full">
              {[
                { name: "Python", x: "17%", y: "15%", delay: "0s" },
                { name: "Machine Learning", x: "39%", y: "0.100%", delay: "0.1s" },
                { name: "TensorFlow", x: "25%", y: "39%", delay: "0.2s" },
                { name: "PyTorch", x: "69%", y: "35%", delay: "0.3s" },
                { name: "Java", x: "49%", y: "32%", delay: "0.3s" },
                { name: "MySQL", x: "12%", y: "64%", delay: "0.4s" },
                { name: "NLP", x: "55%", y: "60%", delay: "0.5s" },
                { name: "MongoDB", x: "74%", y: "78%", delay: "0.5s" },
                { name: "AI", x: "40%", y: "67%", delay: "0.6s" },
                { name: "Git", x: "59%", y: "90%", delay: "0.6s" },
                { name: "Github", x: "25%", y: "92%", delay: "0.6s" },
                { name: "Gen AI", x: "75%", y: "10%", delay: "0.7s" },
                { name: "PowerBI", x: "82%", y: "55%", delay: "0.8s" },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute animate-pulse hover:animate-none transition-all duration-500 hover:scale-110 cursor-pointer group"
                  style={{
                    left: tech.x,
                    top: tech.y,
                    animationDelay: tech.delay,
                    animationDuration: "3s",
                  }}
                  onMouseEnter={(e) => {
                    const randomX = (Math.random() - 0.5) * 20 // ±10px movement
                    const randomY = (Math.random() - 0.5) * 20 // ±10px movement
                    e.currentTarget.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.1)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0px, 0px) scale(1)"
                  }}
                >
                  <span className="inline-flex items-center rounded-full bg-cyan-900/40 hover:bg-cyan-800/50 px-2 py-1 text-xs font-medium text-cyan-100 border border-cyan-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/us107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/trisha-sharma-871544251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:trish2582@gmail.com"
            className="text-slate-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-auto w-1/2 min-h-screen">
        <div className="p-12 pt-24">
          {/* About Section */}
          <section id="about" className="mb-24">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Hi, I’m Trisha. I work with data, build ML/DL models, and turn complex patterns into simple insights that actually make sense. I enjoy solving problems, experimenting with AI, and creating things that make data feel less intimidating and more useful.
              </p>
              <p>
                Currently, I'm a final year stundent{" "}
                <a href="#" className="text-teal-300 hover:text-teal-200 transition-colors">
                  Manipal University Jaipur
                </a>
                , pursuing a degree in Data Science and Engineering. I have maintained a strong academic record, consistently achieving high grades and earning a place on the Dean's List for multiple semesters.
              </p>
              <p>
                Outside of work, I’m into photography, traveling, and I’m a big fan of movies and series—especially sci-fi adventures and crime mysteries. I also love ramen and anime.
              </p>
            
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24">
            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="group relative grid grid-cols-4 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 pt-1">
                  May — July 2025
                </div>
                <div className="col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Summer Intern · Ericsson
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                   At Ericsson (Gurgaon), I cut financial variance analysis time by 60% using Python with Azure OpenAI and Azure Storage, automating data retrieval, processing, Excel integration, and NLP for sharper insights. I also engineered NLP solutions for two enterprise clients, including an email summarization system, fine-tuned LLM models, and Spanish-English translation processing, while gaining valuable exposure to corporate culture and working with brilliant minds.                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Python", "Azure", "NLP", "OpenAI","Numpy", "Pandas"].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="group relative grid grid-cols-4 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 pt-1">
                  Jan — April 2025
                </div>
                <div className="col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Machine Learning Intern · Cloud Riverdale Pty Limited
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    At Cloud Riverdale Pty Limited (Australia, Remote), I built Python data pipelines for spam email detection using Hugging Face LLaMA, TensorFlow regression models, and ETL processes for real-time classification. I also integrated a Grok API chatbot into a clothing e-commerce Wix site, applying prompt engineering and data preprocessing techniques that deflected 30% of routine customer inquiries.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Machiene Learning",
                      "TensorFlow",
                      "ETL",
                      "Numpy",
                      "Pandas",
                      "Scikit-Learn",
                      "Hugging Face"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Experience Item 3 */}
              <div className="group relative grid grid-cols-4 gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 pt-1">
                  April — July 2025
                </div>
                <div className="col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Team Lead · Capstone Program by Deloitte
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                   During the Deloitte Capstone Program (Remote), I was selected among the top 20 from 240+ students for a 3-month mentorship, leading Team Data Mavericks on a Generative AI project for automated video monitoring and behavioral assessment. I integrated a YOLO DeepSORT detection model with Streamlit, enabling real-time anomaly alerts and improving incident response times by 30%.                  
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "YOLOv8",
                      "TensorFlow",
                      "PyTorch",
                      "Numpy",
                      "OpenCV",
                      "Streamlit",
                      "Gen AI"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Experience Item 4 */}
              <div className="group relative grid grid-cols- gap-4 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 pt-1">
                  July 2024 — May 2025
                </div>
                <div className="col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Vice President · Turing Sapiens (IOT Club)
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                  I served as Vice President of Turing Sapiens, the tech club at MUJ, where I organized and hosted various technical events while mentoring juniors. This experience not only allowed me to contribute to the university’s tech community but also strengthened my leadership, collaboration, and teamwork skills.                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Leadership",
                      "Team work",
                      "Social Connect",
                      "Tech Club",
                      "Event Management",
                      "Mentoring"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              

              {/* View Full Resume Link */}
              <div className="mt-12">
                <a
                   href="https://drive.google.com/file/d/1tVcMZNoYAgOGJAShzT3yIwcI84hAf19u/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                >
                  <span>Resume</span>
                  <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </a>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <div className="space-y-12">
              {/* Project Item 1 */}
              <div className="group relative grid grid-cols-8 gap-4 transition-all duration-300 hover:bg-white-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-3">
                  <img
                    src="/project1.jpg"
                    alt="Gen AI Video Monitoring and Automated summary and Assessment"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  />
                </div>
                <div className="col-span-5">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Gen AI for Video Monitoring and Automated summary and Assessment
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Deployed a video surveillance solution using the SPHAR dataset, achieving 95% precision in event classification. Reduced incident response times by 40% for the monitoring team. Built an intelligent pipeline with automatic alerts, detailed incident summaries, and a dashboard interface that identified the top three causes of false alarms.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Python", "YOLOv8", "PyTorch", "Neo4j", "Streamlit"].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Item 2 */}
              <div className="group relative grid grid-cols-8 gap-4 transition-all duration-300 hover:bg-white-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-3">
                  <img
                    src="/proj2.jpg"
                    alt="Halcyon Theme"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  />
                </div>
                <div className="col-span-5">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      COVID-19 Detection Using CNN Through Chest X-Ray Images
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Built a CNN model with convolutional layers, dropout, and Adam optimizer, achieving 60% accuracy in COVID-19 chest X-ray classification. Enhanced preprocessing with OpenCV, boosting training speed by 30% and improving accuracy by 8%, enabling faster diagnoses.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Python", "Tensorflow", "PyTorch", "Numpy", "Pandas", "Matplotlib"].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Project Item 3*/}
              <div className="group relative grid grid-cols-8 gap-4 transition-all duration-300 hover:bg-white-800/50 hover:shadow-lg rounded-lg p-6 -m-6">
                <div className="col-span-3">
                  <img
                    src="/proj3.png"
                    alt="Adidas sales dashboard"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                  />
                </div>
                <div className="col-span-5">
                  <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                    <a
                      href="#"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      Adidas Sales Dashboard Using Power BI
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    Designed a Power BI dashboard for Adidas sales, analyzing over 10,000 data points to uncover 15% revenue growth
                    opportunities and improve regional sales insights.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Microsoft PowerBI"].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
             
            </div>
            
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center text-sm text-slate-400">
  Built with <strong>Next.js 15</strong>,<strong>React 18</strong>, <strong>TypeScript</strong> and  styled using <strong>Tailwind CSS v4</strong> and deployed on <strong>Vercel</strong>.
</footer>

        </div>
      </div>
    </div>
  )
}
