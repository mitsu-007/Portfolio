import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Upload, RefreshCw, Sparkles } from 'lucide-react';

interface ProfilePhotoProps {
  size?: 'normal' | 'large';
  className?: string;
  delay?: number;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size = 'large', className = '', delay = 0.15 }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const defaultPhoto = "https://res.cloudinary.com/dkduejkuj/image/upload/v1786777669/ee2e9248-d9c8-4498-ad94-412cb29075b5.png";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCustomPhoto(uploadEvent.target.result as string);
          setShowUploadModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetToDefault = () => {
    setCustomPhoto(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative inline-block ${className}`}
    >
      {/* Background Subtle Ambient Rings */}
      <div className="absolute -inset-4 rounded-full bg-[#07323D]/30 -z-10 pointer-events-none border border-[#527779]/40" />
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#07323D]/50 -z-10 pointer-events-none" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-[#061925]/30 -z-10 pointer-events-none" />

      {/* Main Image Container Frame */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative group rounded-3xl overflow-hidden bg-[#07323D] p-2 border-2 border-[#061925] hover:border-[#88B8B3]/60 shadow-xl transition-colors duration-400"
      >
        {/* Inner Ring */}
        <div className="rounded-2xl p-1 bg-[#061925]/40 border border-[#527779] group-hover:border-[#88B8B3]/50 transition-colors duration-400">
          <div
            className={`relative rounded-xl overflow-hidden bg-[#061925] ${
              size === 'large' ? 'w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96' : 'w-44 h-52'
            }`}
          >
            <img
              src={customPhoto || defaultPhoto}
              alt="Nidhi Kumari Profile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='100%25' height='100%25' fill='%23061925'/%3E%3Ccircle cx='200' cy='180' r='80' fill='%2388B8B3' opacity='0.25'/%3E%3Cpath d='M120 400 C 120 300, 280 300, 280 400 Z' fill='%23527779' opacity='0.5'/%3E%3Ccircle cx='200' cy='180' r='60' fill='%2388B8B3' opacity='0.8'/%3E%3Ctext x='50%25' y='460' text-anchor='middle' fill='%23F7F8F7' font-family='sans-serif' font-size='16' font-weight='bold'%3ENIDHI KUMARI%3C/text%3E%3C/svg%3E";
              }}
            />

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061925] via-[#061925]/70 to-transparent p-4 flex flex-col justify-end">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#F7F8F7] uppercase tracking-wider bg-[#07323D] px-2.5 py-0.5 rounded-md border border-[#88B8B3]/30">
                    CSDS • 3rd Year
                  </span>
                  <p className="text-[#D2D7D8] text-xs font-medium mt-1">GL Bajaj ITM</p>
                </div>

                <button
                  onClick={() => setShowUploadModal(true)}
                  className="p-2 rounded-xl bg-[#07323D] hover:bg-[#527779] text-[#F7F8F7] text-xs flex items-center gap-1.5 border border-[#88B8B3]/40 transition-colors"
                  title="Change profile photo"
                >
                  <Camera className="w-3.5 h-3.5 text-[#88B8B3]" />
                  <span className="hidden sm:inline text-[11px] font-semibold">Photo</span>
                </button>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute top-3 right-3 bg-[#061925]/90 text-[#F7F8F7] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#88B8B3]/50 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#88B8B3]" />
              <span>Portrait</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Upload Modal Dialog */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061925]/85 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-[#07323D] text-[#F7F8F7] rounded-2xl max-w-sm w-full p-6 border border-[#527779] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#527779] pb-3">
              <h3 className="font-extrabold text-[#F7F8F7] text-base flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#88B8B3]" />
                Update Profile Photo
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-[#D2D7D8] hover:text-[#88B8B3] text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#D2D7D8] leading-relaxed">
              Upload an actual photo to personalize Nidhi's portfolio in real time.
            </p>

            <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#88B8B3] hover:border-white rounded-xl bg-[#061925] transition-colors cursor-pointer group">
              <Upload className="w-8 h-8 text-[#88B8B3] group-hover:scale-110 transition-transform mb-2" />
              <span className="text-xs font-bold text-[#F7F8F7]">Click to upload photo</span>
              <span className="text-[11px] text-[#D2D7D8] mt-0.5">PNG, JPG up to 5MB</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {customPhoto && (
              <button
                onClick={resetToDefault}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#88B8B3] hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset to default portrait
              </button>
            )}

            <button
              onClick={() => setShowUploadModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#061925] hover:bg-[#527779] text-[#F7F8F7] text-xs font-bold transition-colors border border-[#527779]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
