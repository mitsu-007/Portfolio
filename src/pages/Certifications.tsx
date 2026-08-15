import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { CertificateCard } from '../components/CertificateCard';
import { CertificateModal } from '../components/CertificateModal';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { Search, Award, ShieldCheck, Calendar, Sparkles, Filter, RefreshCw, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const categories = [
    'All',
    'AI / Technology',
    'Programming',
    'Workshop',
    'Course',
  ];

  // Dynamic Statistics Calculation
  const totalCertificates = certificatesData.length;
  const learningAreasCount = useMemo(() => {
    const categoriesSet = new Set(certificatesData.map(c => c.category));
    return categoriesSet.size;
  }, []);
  const latestYear = '2026';

  // Filter & Search Filtering Logic
  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((cert) => {
      const matchesCategory =
        activeCategory === 'All' ||
        cert.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        (activeCategory === 'AI / Technology' && cert.category.includes('AI'));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        (cert.topics && cert.topics.some(t => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-14">
        
        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <section className="space-y-6 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#88B8B3] bg-[#07323D] px-3.5 py-1.5 rounded-full border border-[#527779]">
              <Award className="w-3.5 h-3.5 text-[#88B8B3]" />
              <span className="uppercase tracking-wider">Verified Credentials</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#061925] tracking-tight">
              Certifications
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-xl font-bold text-[#07323D] leading-snug">
              Continuous learning, practical knowledge, and a commitment to growing as a developer.
            </p>
            <p className="text-xs sm:text-sm text-[#061925]/80 leading-relaxed mt-2 max-w-xl mx-auto">
              Here are some of the courses, workshops, and learning programs I have successfully completed.
            </p>
          </ScrollReveal>
        </section>

        {/* ==========================================
            STATISTICS ROW
            ========================================== */}
        <ScrollReveal delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-[#061925] text-[#F7F8F7] p-5 rounded-2xl border border-[#527779] text-center space-y-1 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-[#88B8B3] block">
                0{totalCertificates}+
              </span>
              <span className="text-xs font-bold text-[#D2D7D8] uppercase tracking-wider block">
                Verified Certifications
              </span>
            </div>

            <div className="bg-[#061925] text-[#F7F8F7] p-5 rounded-2xl border border-[#527779] text-center space-y-1 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-[#88B8B3] block">
                0{learningAreasCount}+
              </span>
              <span className="text-xs font-bold text-[#D2D7D8] uppercase tracking-wider block">
                Core Learning Areas
              </span>
            </div>

            <div className="bg-[#061925] text-[#F7F8F7] p-5 rounded-2xl border border-[#527779] text-center space-y-1 shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-[#88B8B3] block">
                {latestYear}
              </span>
              <span className="text-xs font-bold text-[#D2D7D8] uppercase tracking-wider block">
                Latest Certification Year
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ==========================================
            SEARCH & FILTER CONTROLS BAR
            ========================================== */}
        <ScrollReveal delay={0.3}>
          <div className="bg-[#07323D] p-4 sm:p-5 rounded-2xl border border-[#527779] shadow-xs space-y-4 max-w-4xl mx-auto">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Field */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#88B8B3] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search certifications..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#061925] text-[#F7F8F7] border border-[#527779] focus:border-[#88B8B3] focus:outline-none focus:ring-1 focus:ring-[#88B8B3] placeholder-[#88B8B3]/60 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#88B8B3] hover:text-[#F7F8F7]"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-[#88B8B3] text-[#061925] border border-[#88B8B3] shadow-2xs'
                        : 'bg-[#061925] text-[#F7F8F7] hover:bg-[#527779] border border-[#527779]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* ==========================================
            CERTIFICATE GRID
            ========================================== */}
        <section className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCertificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CertificateCard
                      certificate={cert}
                      onView={(selected) => setSelectedCertificate(selected)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* EMPTY SEARCH STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-10 rounded-3xl bg-[#07323D] border border-[#527779] text-center space-y-4 max-w-lg mx-auto shadow-xs text-[#F7F8F7]"
              >
                <div className="w-12 h-12 rounded-full bg-[#061925] text-[#88B8B3] flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#F7F8F7]">No certifications found</h3>
                  <p className="text-xs text-[#D2D7D8]">
                    Try searching with a different keyword or resetting your category filter.
                  </p>
                </div>

                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#F7F8F7] bg-[#061925] hover:bg-[#527779] transition-colors shadow-2xs"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#88B8B3]" />
                  <span>View All Certificates</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Lightbox Certificate Viewer Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />

      </div>
    </PageTransition>
  );
};
