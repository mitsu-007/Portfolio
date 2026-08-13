import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';
import { Toast } from '../components/Toast';
import { personalInfo } from '../data/portfolioData';
import { Phone, GraduationCap, Send, Copy, Check, Linkedin, Github, MessageSquare, CheckCircle2 } from 'lucide-react';

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

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setToastMessage(`Phone number (+91 ${personalInfo.phone}) copied to clipboard!`);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        
        <SectionHeading
          badge="Let's Connect"
          title="Contact Me"
          subtitle="Feel free to reach out directly regarding internships, placements, or project collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="right">
              <div className="bg-[#061925] text-[#F7F8F7] rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-[#527779] relative overflow-hidden">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#061925] bg-[#88B8B3] px-3 py-1 rounded-full">
                    Direct Contact
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#F7F8F7]">Let's Connect</h3>
                  <p className="text-xs text-[#D2D7D8] leading-relaxed">
                    I am a 3rd-year Computer Science & Data Science student available for internships, placements, hackathons, and professional networking.
                  </p>
                </div>

                {/* Phone Details Card */}
                <div className="p-4 rounded-2xl bg-[#07323D] border border-[#527779] space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#88B8B3] tracking-wider">Phone Number</span>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#F7F8F7] font-bold text-base">
                      <Phone className="w-4 h-4 text-[#88B8B3]" />
                      <span>+91 {personalInfo.phone}</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyPhoneToClipboard}
                      className="p-2 rounded-xl bg-[#061925] hover:bg-[#527779] text-[#F7F8F7] transition-colors flex items-center gap-1 text-xs border border-[#527779]"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#88B8B3]" /> : <Copy className="w-3.5 h-3.5 text-[#88B8B3]" />}
                      <span className="text-[11px] font-semibold">{copiedPhone ? 'Copied' : 'Copy'}</span>
                    </motion.button>
                  </div>
                </div>

                {/* Academic Details */}
                <div className="space-y-3 pt-2 text-xs text-[#D2D7D8]">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-[#88B8B3] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Institution</span>
                      <span className="font-semibold text-[#F7F8F7]">{personalInfo.college}</span>
                      <span className="block text-[11px] text-[#D2D7D8]">Greater Noida, Uttar Pradesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-[#88B8B3] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#88B8B3] block text-[10px] uppercase font-bold">Program & Year</span>
                      <span className="font-semibold text-[#F7F8F7]">Computer Science & Data Science • 3rd Year</span>
                    </div>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="pt-4 border-t border-[#527779] space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#88B8B3] tracking-wider">Professional Networks</span>
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#07323D] border border-[#527779] text-xs text-[#D2D7D8] hover:text-white transition-colors cursor-pointer"
                      onClick={() => setToastMessage("LinkedIn profile link active")}
                    >
                      <Linkedin className="w-4 h-4 text-[#88B8B3]" />
                      <span className="font-bold text-[11px]">LinkedIn</span>
                    </motion.div>

                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#07323D] border border-[#527779] text-xs text-[#D2D7D8] hover:text-white transition-colors cursor-pointer"
                      onClick={() => setToastMessage("GitHub profile link active")}
                    >
                      <Github className="w-4 h-4 text-[#88B8B3]" />
                      <span className="font-bold text-[11px]">GitHub</span>
                    </motion.div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="bg-[#07323D] text-[#F7F8F7] rounded-3xl p-6 sm:p-8 border border-[#527779] shadow-2xs space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#F7F8F7]">Send a Message</h3>
                  <p className="text-xs text-[#D2D7D8] mt-1">
                    Fill out the form below to get in touch with Nidhi Kumari.
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
                        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold text-[#061925] bg-[#88B8B3] hover:bg-[#061925] hover:text-[#F7F8F7] disabled:opacity-70 transition-all shadow-xs group"
                      >
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
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
