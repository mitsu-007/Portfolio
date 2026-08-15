import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { ScrollReveal } from '../components/ScrollReveal';
import { Toast } from '../components/Toast';
import { personalInfo } from '../data/portfolioData';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  MessageSquare, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setToastMessage('Thank you! Your message has been sent successfully to Nidhi Kumari.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setIsSuccess(false), 5000);
    }, 700);
  };

  const copyPhoneToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('9955862892');
    setCopiedPhone(true);
    setToastMessage('Phone number (9955862892) copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        
        {/* Contact Page Introduction Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#88B8B3] bg-[#07323D] px-3.5 py-1.5 rounded-full border border-[#527779]">
              <MessageSquare className="w-3.5 h-3.5 text-[#88B8B3]" />
              <span className="uppercase tracking-wider">Get In Touch</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#061925] tracking-tight">
              Let's Connect
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-sm sm:text-base font-semibold text-[#527779] leading-relaxed">
              Have a project, opportunity, or collaboration in mind? Feel free to get in touch.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Grid: Contact Cards & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* LEFT COLUMN: Three Primary Contact Cards */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#527779]">
                    Contact Information
                  </h2>
                </div>

                {/* Card 1: Phone */}
                <motion.a
                  href="tel:9955862892"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  aria-label="Call Nidhi Kumari"
                  className="bg-[#07323D] text-[#F7F8F7] p-4 sm:p-5 rounded-2xl border border-[#527779] hover:border-[#88B8B3] transition-all duration-300 shadow-2xs group flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-[#061925] border border-[#527779] group-hover:border-[#88B8B3] flex items-center justify-center text-[#88B8B3] transition-colors flex-shrink-0 shadow-2xs">
                      <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#88B8B3] tracking-wider block">Phone</span>
                      <span className="font-extrabold text-sm sm:text-base text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors block truncate">
                        9955862892
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyPhoneToClipboard}
                    className="p-2 rounded-lg bg-[#061925] hover:bg-[#527779] text-[#88B8B3] hover:text-[#F7F8F7] border border-[#527779] transition-colors text-xs flex items-center gap-1 flex-shrink-0"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#88B8B3]" /> : <Copy className="w-3.5 h-3.5 text-[#88B8B3]" />}
                    <span className="text-[11px] font-semibold hidden sm:inline">{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </motion.a>

                {/* Card 2: Email */}
                <motion.a
                  href="mailto:nidhikumari62014@gmail.com"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  aria-label="Send email to Nidhi Kumari"
                  className="bg-[#07323D] text-[#F7F8F7] p-4 sm:p-5 rounded-2xl border border-[#527779] hover:border-[#88B8B3] transition-all duration-300 shadow-2xs group flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-[#061925] border border-[#527779] group-hover:border-[#88B8B3] flex items-center justify-center text-[#88B8B3] transition-colors flex-shrink-0 shadow-2xs">
                      <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#88B8B3] tracking-wider block">Email</span>
                      <span className="font-extrabold text-xs sm:text-sm text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors block break-all sm:break-normal">
                        nidhikumari62014@gmail.com
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-[#061925] border border-[#527779] group-hover:border-[#88B8B3] text-[#88B8B3] transition-colors flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.a>

                {/* Card 3: LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/nidhi-kumari1512/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  aria-label="Open Nidhi Kumari's LinkedIn profile"
                  className="bg-[#07323D] text-[#F7F8F7] p-4 sm:p-5 rounded-2xl border border-[#527779] hover:border-[#88B8B3] transition-all duration-300 shadow-2xs group flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-[#061925] border border-[#527779] group-hover:border-[#88B8B3] flex items-center justify-center text-[#88B8B3] transition-colors flex-shrink-0 shadow-2xs">
                      <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#88B8B3] tracking-wider block">LinkedIn</span>
                      <span className="font-extrabold text-xs sm:text-sm text-[#F7F8F7] group-hover:text-[#88B8B3] transition-colors block break-all sm:break-normal">
                        Nidhi Kumari
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-[#061925] border border-[#527779] group-hover:border-[#88B8B3] text-[#88B8B3] transition-colors flex-shrink-0">
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>

                {/* Secondary Academic Location Summary Card */}
                <div className="bg-[#07323D] text-[#F7F8F7] p-5 rounded-2xl border border-[#527779] space-y-3 shadow-xs mt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#88B8B3] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-[#88B8B3]" />
                    <span>Academic Details</span>
                  </div>
                  <div className="space-y-1 text-xs text-[#D2D7D8] leading-relaxed">
                    <p className="font-extrabold text-[#F7F8F7] text-sm">{personalInfo.college}</p>
                    <p>Computer Science & Data Science • 3rd Year</p>
                    <p className="text-[11px] text-[#88B8B3] font-semibold pt-1">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="bg-[#07323D] text-[#F7F8F7] rounded-3xl p-6 sm:p-8 border border-[#527779] shadow-2xs space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#F7F8F7]">Contact Form</h3>
                  <p className="text-xs text-[#D2D7D8] mt-1">
                    Fill out the form below to send a direct message to Nidhi Kumari.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-2xl bg-[#061925] border border-[#88B8B3] text-center space-y-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#88B8B3]/20 text-[#88B8B3] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-[#F7F8F7]">Message Delivered Successfully</h4>
                      <p className="text-xs text-[#D2D7D8] leading-relaxed">
                        Thank you for connecting! Nidhi Kumari will respond to your message shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Name Field */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#88B8B3] uppercase tracking-wider">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-2.5 rounded-xl text-xs border bg-[#061925] text-[#F7F8F7] placeholder-[#527779] focus:outline-none transition-all duration-250 ${
                            errors.name 
                              ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' 
                              : 'border-[#527779] focus:border-[#88B8B3] focus:ring-1 focus:ring-[#88B8B3]/40'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] font-bold text-rose-400">{errors.name}</p>}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#88B8B3] uppercase tracking-wider">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl text-xs border bg-[#061925] text-[#F7F8F7] placeholder-[#527779] focus:outline-none transition-all duration-250 ${
                            errors.email 
                              ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' 
                              : 'border-[#527779] focus:border-[#88B8B3] focus:ring-1 focus:ring-[#88B8B3]/40'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] font-bold text-rose-400">{errors.email}</p>}
                      </div>

                      {/* Subject Field */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#88B8B3] uppercase tracking-wider">
                          Subject <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Internship Inquiry / Project Discussion"
                          className={`w-full px-4 py-2.5 rounded-xl text-xs border bg-[#061925] text-[#F7F8F7] placeholder-[#527779] focus:outline-none transition-all duration-250 ${
                            errors.subject 
                              ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' 
                              : 'border-[#527779] focus:border-[#88B8B3] focus:ring-1 focus:ring-[#88B8B3]/40'
                          }`}
                        />
                        {errors.subject && <p className="text-[11px] font-bold text-rose-400">{errors.subject}</p>}
                      </div>

                      {/* Message Field */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#88B8B3] uppercase tracking-wider">
                          Message <span className="text-rose-400">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your message here..."
                          className={`w-full px-4 py-2.5 rounded-xl text-xs border bg-[#061925] text-[#F7F8F7] placeholder-[#527779] focus:outline-none transition-all duration-250 ${
                            errors.message 
                              ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' 
                              : 'border-[#527779] focus:border-[#88B8B3] focus:ring-1 focus:ring-[#88B8B3]/40'
                          }`}
                        />
                        {errors.message && <p className="text-[11px] font-bold text-rose-400">{errors.message}</p>}
                      </div>

                      <motion.button
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold text-[#061925] bg-[#88B8B3] hover:bg-[#061925] hover:text-[#F7F8F7] disabled:opacity-70 transition-all shadow-xs group cursor-pointer"
                      >
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                      </motion.button>

                    </form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

        </div>

        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />

      </div>
    </PageTransition>
  );
};

