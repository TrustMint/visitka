import React, { useState } from 'react';
import { Banknote, Building2, CreditCard, Copy, Check, Wallet } from 'lucide-react';

export const PaymentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumberForCopy = "+79258472778";
  const displayPhone = "+7 925 847 27 78";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumberForCopy);
    setCopied(true);
    
    // Haptic feedback pattern (if supported by browser/device)
    if (navigator.vibrate) {
      navigator.vibrate([50, 50, 50]);
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="px-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center gap-2 mb-3 px-1">
        <h2 className="text-[20px] font-bold tracking-tight text-white">Оплата</h2>
      </div>

      {/* Wallet Container */}
      <div className="relative group">
        
        {/* Main Container - Borderless, just depth */}
        <div className="hyper-glass rounded-[32px] p-5 relative overflow-hidden ring-highlight">
          
          <div className="grid gap-3">
            {/* VTB Card - Blue Glass Plate */}
            <div className="relative overflow-hidden rounded-[20px] h-[72px] flex items-center justify-between px-5 group/card transition-transform active:scale-[0.98] force-radius">
              {/* Background with Brand Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002882] to-[#0A45B5] opacity-80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-md"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shadow-inner text-white font-bold text-sm backdrop-blur-sm">
                  ВТБ
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-white tracking-wide">ВТБ Банк</div>
                  <div className="text-[12px] text-blue-200 font-medium opacity-80">СБП / По номеру</div>
                </div>
              </div>
              
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                 <Building2 size={16} className="text-white opacity-80" />
              </div>
            </div>

            {/* Alfa Bank - Red Glass Plate */}
            <div className="relative overflow-hidden rounded-[20px] h-[72px] flex items-center justify-between px-5 group/card transition-transform active:scale-[0.98] force-radius">
               {/* Background with Brand Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EF3124] to-[#B01F16] opacity-80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-red-900/30 backdrop-blur-md"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shadow-inner text-white font-bold text-[18px] backdrop-blur-sm font-serif">
                  A
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-white tracking-wide">Альфа-Банк</div>
                  <div className="text-[12px] text-red-100 font-medium opacity-80">СБП / По номеру</div>
                </div>
              </div>

              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                 <CreditCard size={16} className="text-white opacity-80" />
              </div>
            </div>

            {/* Cash Card - Green Glass */}
            <div className="relative overflow-hidden rounded-[20px] h-[72px] flex items-center justify-between px-5 group/card transition-transform active:scale-[0.98] force-radius">
              {/* Background with Brand Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#34C759] to-[#2EAF50] opacity-80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-green-900/40 backdrop-blur-md"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shadow-inner backdrop-blur-sm">
                  <Banknote className="text-white opacity-90" size={20} />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-white tracking-wide">Наличные</div>
                  <div className="text-[12px] text-green-200 font-medium opacity-80">Рубли</div>
                </div>
              </div>

              {/* Ruble Icon in Circle */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5">
                 <span className="text-white opacity-80 font-bold text-sm">₽</span>
              </div>
            </div>
          </div>
          
          {/* Copy Phone Number Action */}
          <button 
            onClick={handleCopy}
            className="w-full mt-4 relative overflow-hidden bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all p-3 rounded-[16px] border border-white/5 group h-[60px]"
          >
            {/* Normal State Content */}
            <div className={`flex items-center justify-between transition-all duration-300 ${copied ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100'}`}>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-green-500/10 rounded-lg">
                     <Wallet size={16} className="text-green-500" />
                   </div>
                   <div className="text-left">
                      <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Номер для перевода</div>
                      <div className="text-[15px] text-white font-mono font-medium tracking-tight">
                        {displayPhone}
                      </div>
                   </div>
                </div>
                
                <div className="mr-1 p-2 text-gray-500 group-hover:text-white transition-colors">
                   <Copy size={16} />
                </div>
            </div>

            {/* Success Overlay State - Transparent Matte */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm transition-all duration-300 z-10 ${copied ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <div className="flex items-center gap-2 animate-scale-in">
                    <div className="bg-green-500 rounded-full p-1">
                        <Check size={14} className="text-black stroke-[3px]" />
                    </div>
                    <span className="text-white font-semibold text-[15px] tracking-wide">Скопировано!</span>
                 </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};