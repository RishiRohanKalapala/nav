import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ChevronDown, Camera, Code, Brush, ShieldCheck, Layers } from "lucide-react";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = (): void => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen relative">
        {/* Full-screen background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('nav22.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white">Nav_Scope.</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a key={item} href="#" className="text-white hover:text-white/80 font-medium">
                    {item}
                  </a>
                ))}
                <button className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                  Get Started
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-white/80">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a key={item} href="#" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md">
                    {item}
                  </a>
                ))}
                <button className="w-full text-left px-3 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 backdrop-blur-sm border border-white/20">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Transform Your Vision Into Reality
                </h1>
                <p className="mt-6 text-xl text-white/90">
                  Create stunning experiences that captivate your audience and drive results. Let's build something amazing together.
                </p>
                <div className="mt-10 flex items-center space-x-4">
                  <button className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20 flex items-center group">
                    Get Started
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                  <button className="bg-transparent text-white px-8 py-3 rounded-full border-2 border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="nav333-removebg-preview.png"
                  alt="Hero"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <button
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={32} className="hover:text-white/80 transition-colors" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-black">
        {/* Noise Effect for Depth */}
        <div className="absolute inset-0 bg-noise opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text animate-pulse">
              Who We Are
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We craft exceptional digital experiences by merging creativity and technology to bring your vision to life.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] mx-auto mt-4"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                At our core, we are passionate about storytelling through design and innovation. Our team transforms ideas into reality, creating meaningful and impactful digital solutions.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Whether it’s crafting immersive visuals or engineering seamless user experiences, we push boundaries to redefine creativity.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-[#d1dd5d]/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#d1dd5d]/20 rounded-full">
                    <Camera className="text-[#d1dd5d]" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                    Creative Vision
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Capturing the essence of your brand through innovative storytelling and visual excellence.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-[#d1dd5d]/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#d1dd5d]/20 rounded-full">
                    <Code className="text-[#d1dd5d]" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                    Technical Excellence
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Harnessing cutting-edge technology to build scalable, high-performance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 bg-black">
        {/* Noise Effect */}
        <div className="absolute inset-0 bg-noise opacity-10"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text animate-pulse">
              Our Services
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We blend creativity and technology to deliver exceptional digital solutions tailored to your needs.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] mx-auto mt-4"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
                  <Code className="text-[#d1dd5d]" size={36} />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                  Web Development
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Crafting high-performance, responsive, and scalable web applications using modern technologies.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
                  <Brush className="text-[#d1dd5d]" size={36} />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                  UI/UX Design
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Creating intuitive and visually stunning user experiences that engage and inspire.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
                  <ShieldCheck className="text-[#d1dd5d]" size={36} />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                  Cybersecurity
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Ensuring data security with advanced encryption, risk assessments, and compliance strategies.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
                  <Layers className="text-[#d1dd5d]" size={36} />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                  AI & Automation
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Integrating AI-driven automation to optimize business processes and efficiency.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="p-8 rounded-2xl bg-white/10 border border-[#d1dd5d]/50 backdrop-blur-xl shadow-xl transition-all transform hover:scale-105 hover:shadow-[#d1dd5d]/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-4 bg-[#d1dd5d]/20 rounded-full">
                  <Code className="text-[#d1dd5d]" size={36} />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#d1dd5d] to-[#aabb44] text-transparent bg-clip-text">
                  Mobile App Development
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Designing and developing seamless, high-performance mobile applications for all platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
