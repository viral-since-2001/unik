import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  vehicle: z.string().min(2, 'Please specify your vehicle make & model'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a preferred date'),
  message: z.string().optional(),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      vehicle: '',
      service: '',
      date: '',
      message: '',
    }
  });

  const onSubmit = async (data) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Submitted booking data:', data);
    setIsSubmitted(true);
    reset();
    // Reset submission state after a delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background soft reflections */}
      <div className="absolute top-1/3 left-1/3 w-[50vw] h-[50vw] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Reservation Desk
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            Book your slot
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            Request an appointment at our premium garage. Our concierge team will review and confirm your details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact info & Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="glass-card rounded-2xl p-8 border border-white/5 space-y-6">
              <h3 className="font-playfair text-xl font-semibold text-white tracking-wide mb-6">
                Studio Information
              </h3>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-inter text-xs font-semibold text-[#B8B8B8] tracking-wider uppercase">Call Us</h4>
                  <p className="font-inter text-sm text-white mt-0.5 font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-inter text-xs font-semibold text-[#B8B8B8] tracking-wider uppercase">Email</h4>
                  <p className="font-inter text-sm text-white mt-0.5 font-medium">concierge@unikcarcare.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96A] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-inter text-xs font-semibold text-[#B8B8B8] tracking-wider uppercase">Studio Address</h4>
                  <p className="font-inter text-sm text-white mt-0.5 font-light leading-relaxed">
                    100 Luxury Avenue, Suite A,<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-inter text-xs font-semibold text-[#B8B8B8] tracking-wider uppercase">Business Hours</h4>
                  <p className="font-inter text-sm text-white mt-0.5 font-light">
                    Monday - Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: Closed (By Appointment Only)
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Stylized Dark Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
              <iframe
                title="Unik Car Care Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.7792619472395!2d-118.40428522345091!3d34.07512187314736!2m3!1f0!2f0!3f0!3m2!1i1024!2i769!4f13.1!3m3!1m2!1s0x80c2bc04ce9df87b%3A0xe10ee071239c0d38!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-white/5 h-full relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center h-full py-16 gap-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 flex items-center justify-center text-[#34D399]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                        Reservation Request Sent
                      </h3>
                      <p className="font-inter text-sm text-[#B8B8B8] font-light max-w-sm mx-auto leading-relaxed">
                        Thank you for choosing Unik Car Care. Our concierge desk will contact you within 15 minutes to confirm your booking date and slot.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  // Main Form
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <h3 className="font-playfair text-xl font-semibold text-white tracking-wide mb-6">
                      Schedule Detailing Service
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. John Doe"
                          {...register('name')}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm"
                        />
                        {errors.name && (
                          <span className="text-red-400 text-xs mt-0.5">{errors.name.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 555-0199"
                          {...register('phone')}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm"
                        />
                        {errors.phone && (
                          <span className="text-red-400 text-xs mt-0.5">{errors.phone.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Vehicle */}
                      <div className="flex flex-col gap-2">
                        <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                          Vehicle Make & Model
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Porsche 911 Carrera"
                          {...register('vehicle')}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm"
                        />
                        {errors.vehicle && (
                          <span className="text-red-400 text-xs mt-0.5">{errors.vehicle.message}</span>
                        )}
                      </div>

                      {/* Service Selection */}
                      <div className="flex flex-col gap-2">
                        <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                          Select Service
                        </label>
                        <select
                          {...register('service')}
                          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm [&>option]:bg-[#151515]"
                        >
                          <option value="" className="text-white/20">Choose a service...</option>
                          <option value="foam-wash">Foam Wash & Decontamination</option>
                          <option value="interior">Bespoke Interior Detailing</option>
                          <option value="exterior">Elite Exterior Polishing</option>
                          <option value="ceramic">Ultra Ceramic Coating</option>
                          <option value="ppf">Paint Protection Film (PPF)</option>
                          <option value="other">Custom Detail / Multi-Service</option>
                        </select>
                        {errors.service && (
                          <span className="text-red-400 text-xs mt-0.5">{errors.service.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />
                        <span>Preferred Appointment Date</span>
                      </label>
                      <input
                        type="date"
                        {...register('date')}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm color-scheme-dark"
                      />
                      {errors.date && (
                        <span className="text-red-400 text-xs mt-0.5">{errors.date.message}</span>
                      )}
                    </div>

                    {/* Special Instructions / Message */}
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-xs text-[#B8B8B8] font-medium uppercase tracking-wider">
                        Special Requests / Vehicle Condition
                      </label>
                      <textarea
                        rows="3"
                        placeholder="e.g. Paint has heavy swirls, request leather coatings..."
                        {...register('message')}
                        className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C8A96A] hover:bg-[#D6B87C] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase py-4 rounded-xl transition-all duration-300 shadow-[0_5px_15px_rgba(200,169,106,0.15)] disabled:opacity-50"
                    >
                      {isSubmitting ? 'Requesting Slot...' : 'Submit Reservation Request'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
