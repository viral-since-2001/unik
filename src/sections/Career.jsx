import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Upload, CheckCircle2, FileText, X, Copy, Check, Paperclip, Send, MessageCircle } from 'lucide-react';
import { contactInfo, careerHeader, jobRoles } from '../data/siteData';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  position: z.string().min(1, 'Please select a position'),
  experience: z.string().optional(),
  message: z.string().optional(),
});

const MAX_FILE_MB = 5;
const ACCEPTED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export default function Career() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [submittedFileName, setSubmittedFileName] = useState('');
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', phone: '', position: '', experience: '', message: '' }
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeFile(null);
      return;
    }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setFileError('Please upload a PDF or Word document (.pdf, .doc, .docx)');
      setResumeFile(null);
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File must be smaller than ${MAX_FILE_MB}MB`);
      setResumeFile(null);
      return;
    }
    setFileError('');
    setResumeFile(file);
  };

  const onSubmit = async (data) => {
    if (!resumeFile) {
      setFileError('Please attach your resume to apply');
      return;
    }

    const whatsappMessage = `*NEW JOB APPLICATION - UNIK CAR CARE & SPA*
--------------------------------------------
*Name:* ${data.name}
*Phone:* ${data.phone}
*Position Applying For:* ${data.position}
*Experience:* ${data.experience || 'Not specified'}
*Message:* ${data.message || 'None'}
*Resume File:* ${resumeFile.name}

_Note: Please attach the resume file "${resumeFile.name}" from your device in this chat — browsers can't send files automatically for security reasons._`;

    const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    reset();
    setResumeFile(null);
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section id="career" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[35vw] h-[35vw] rounded-full bg-[#C8A96A]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            {careerHeader.subtitle}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            {careerHeader.title}
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            {careerHeader.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 border border-white/5 relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 flex items-center justify-center text-[#34D399]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                      Application Sent
                    </h3>
                    <p className="font-inter text-sm text-[#B8B8B8] font-light max-w-sm mx-auto leading-relaxed">
                      We've opened WhatsApp with your details pre-filled. Please attach your resume file in that chat before sending — our team will review it shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <h3 className="font-playfair text-xl font-semibold text-white tracking-wide mb-6 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#C8A96A]" />
                    <span>Apply Now</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Raj Mehta"
                        {...register('name')}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm"
                      />
                      {errors.name && <span className="text-red-400 text-xs mt-0.5">{errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98765 43210"
                        {...register('phone')}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm"
                      />
                      {errors.phone && <span className="text-red-400 text-xs mt-0.5">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                        Position Applying For
                      </label>
                      <select
                        {...register('position')}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm [&>option]:bg-[#151515]"
                      >
                        <option value="">Choose a role...</option>
                        {jobRoles.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                      {errors.position && <span className="text-red-400 text-xs mt-0.5">{errors.position.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                        Experience
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2 years"
                        {...register('experience')}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                      Message (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us a bit about yourself..."
                      {...register('message')}
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm resize-none"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                      Resume / CV
                    </label>
                    {!resumeFile ? (
                      <label className="flex flex-col items-center justify-center gap-2 px-4 py-8 rounded-xl bg-white/5 border border-dashed border-white/15 hover:border-[#C8A96A]/50 cursor-pointer transition-colors text-center">
                        <Upload className="w-5 h-5 text-[#C8A96A]" />
                        <span className="font-inter text-xs text-[#B8B8B8]">
                          Click to upload PDF or Word file (max {MAX_FILE_MB}MB)
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-[#C8A96A]/30">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText className="w-4 h-4 text-[#C8A96A] shrink-0" />
                          <span className="font-inter text-xs text-white truncate">{resumeFile.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="text-[#B8B8B8] hover:text-white p-1 shrink-0"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {fileError && <span className="text-red-400 text-xs mt-0.5">{fileError}</span>}
                    <p className="font-inter text-[10px] text-[#B8B8B8]/60 leading-relaxed mt-1">
                      Submitting opens WhatsApp with your details filled in — you'll just need to attach this file in the chat before sending, since browsers can't send files automatically.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8A96A] hover:bg-[#D6B87C] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase py-4 rounded-xl transition-all duration-300 shadow-[0_5px_15px_rgba(200,169,106,0.15)] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
