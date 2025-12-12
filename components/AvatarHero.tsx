import React, { useState } from 'react';
import { UserPlus, User, TrendingDown, Phone, MessageCircle, Send, ChevronRight, Check, PhoneCall } from 'lucide-react';

// -----------------------------------------------------------------------------
// ⚙️ НАСТРОЙКА ФОТО ПРОФИЛЯ
// -----------------------------------------------------------------------------
const PROFILE_IMAGE_URL = "https://i.ibb.co/DH9P8kpW/IMG-6256.jpg"; 

export const AvatarHero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [isContactSheetOpen, setContactSheetOpen] = useState(false);
  const [saveContactState, setSaveContactState] = useState<'idle' | 'success'>('idle');
  
  const whatsAppNumber = "79258472778";
  const telegramUsername = "qorzz";
  const phoneNumber = "+79258472778";

  // Helper to convert an image blob to a Base64 string
  const blobToBase64 = (blob: Blob): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        // Return only the Base64 part, without the data URL prefix
        resolve(result ? result.split(',')[1] : null);
      };
      reader.onerror = () => {
        resolve(null);
      };
      reader.readAsDataURL(blob);
    });
  };
  
  const handleSaveContact = async () => {
    if (saveContactState === 'success') return; // Prevent double-clicking

    const contactData = {
      firstName: "Александр",
      lastName: "Такси",
      phone: "+79258472778",
      note: "Личный водитель, трансфер, Москва и область",
      url: window.location.href
    };

    let photoVcardLine = '';
    try {
      // Fetch the image and convert it to Base64
      const response = await fetch(PROFILE_IMAGE_URL);
      if (response.ok) {
        const blob = await response.blob();
        const base64Image = await blobToBase64(blob);
        if (base64Image) {
          const imageType = blob.type.split('/')[1].toUpperCase(); // e.g., JPEG, PNG
          photoVcardLine = `PHOTO;ENCODING=b;TYPE=${imageType}:${base64Image}\n`;
        }
      }
    } catch (error) {
      console.error("Could not fetch or encode profile image for vCard:", error);
      // If fetching fails, proceed to create the vCard without a photo
    }

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.firstName} ${contactData.lastName}
N:${contactData.lastName};${contactData.firstName};;;
TEL;TYPE=CELL:${contactData.phone}
NOTE:${contactData.note}
URL:${contactData.url}
${photoVcardLine}END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Alexander_Taxi.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up the object URL from memory

    setSaveContactState('success');
    setTimeout(() => {
      setSaveContactState('idle');
    }, 3000); // Reset state after 3 seconds
  };

  return (
    <>
      <div 
        className="flex flex-col items-center px-4 relative z-10"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 2.5rem)' }}
      >
        
        {/* Main Profile Visual */}
        <div className="relative group animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          
          {/* Container - Clean, no glow, just merged */}
          <div className="relative w-40 h-40 rounded-full bg-[#121212]">
             
             <div className="w-full h-full rounded-full overflow-hidden relative z-10">
               {!imgError ? (
                 <img 
                   src={PROFILE_IMAGE_URL} 
                   alt="Водитель Александр" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   onError={() => setImgError(true)}
                 />
               ) : (
                 <div className="w-full h-full bg-[#1C1C1E] flex items-center justify-center">
                   <User className="text-gray-600" size={50} />
                 </div>
               )}
             </div>
          </div>
          
          {/* Belarusian Flag Badge */}
          <div className="absolute bottom-1 right-1 bg-black p-0.5 rounded-full z-20 border-2 border-black/50 shadow-lg">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden relative force-radius">
              {/* Main Stripes */}
              <div className="w-full h-full flex flex-col absolute inset-0">
                <div className="h-2/3 w-full" style={{ backgroundColor: '#d9232c' }}></div>
                <div className="h-1/3 w-full" style={{ backgroundColor: '#009a3f' }}></div>
              </div>
              {/* Ornament */}
              <div className="absolute left-0 top-0 h-full w-[7px] bg-white flex items-center justify-center">
                <div className="w-[3px] h-[85%]" style={{ backgroundColor: '#d9232c' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="w-full mt-6 text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '50ms' }}>
          <h1 className="text-[36px] font-bold tracking-tight leading-none font-mono bg-gradient-to-br from-[#EAC985] to-[#D8AE5E] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Александр
          </h1>
          
          <div className="mt-2.5 flex items-center gap-2 opacity-90">
              <span className="text-gray-400 text-[16px] font-medium tracking-wide">Личный водитель • Такси • Комфорт+</span>
          </div>

          {/* Cheaper than Yandex Badge */}
          <div className="mt-4 py-1.5 px-3.5 rounded-full bg-[#1C1C1E] border border-green-500/20 shadow-lg flex items-center gap-1.5 animate-pulse-slow">
             <TrendingDown size={14} className="text-ios-green" />
             <span className="text-[13px] font-medium text-ios-green">
               Дешевле, чем через Яндекс Go
             </span>
          </div>

          {/* Add Contact Button */}
          <button 
            onClick={handleSaveContact}
            disabled={saveContactState === 'success'}
            className={`mt-6 w-full flex items-center justify-center gap-2 bg-[#2C2C2E] ${saveContactState === 'idle' ? 'hover:bg-[#3A3A3C] active:scale-95' : 'bg-green-500/20'} transition-all px-5 py-3.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] group cursor-pointer ring-highlight relative overflow-hidden`}
          >
            <div className={`transition-all duration-300 flex items-center justify-center gap-2 ${saveContactState === 'idle' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}>
              <UserPlus size={18} className="text-ios-orange" />
              <span className="text-ios-orange text-[15px] font-semibold">Добавить в контакты</span>
            </div>
            <div className={`absolute inset-0 transition-all duration-300 flex items-center justify-center gap-2 ${saveContactState === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
              <Check size={18} className="text-ios-green" />
              <span className="text-ios-green text-[15px] font-semibold">Скачано! Откройте файл</span>
            </div>
          </button>

          {/* Contact Actions Row */}
          <div className="mt-3 flex w-full gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] active:scale-95 transition-all px-4 py-3.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] group cursor-pointer ring-highlight"
            >
              <Phone size={18} className="text-ios-green group-active:scale-90 transition-transform" />
              <span className="text-ios-green text-[15px] font-semibold">Позвонить</span>
            </a>
            <button
              onClick={() => setContactSheetOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2C2C2E] hover:bg-[#3A3A3C] active:scale-95 transition-all px-4 py-3.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] group cursor-pointer ring-highlight"
            >
              <MessageCircle size={18} className="text-ios-blue group-active:scale-90 transition-transform" />
              <span className="text-ios-blue text-[15px] font-semibold">Написать</span>
              <ChevronRight size={16} className="text-ios-blue/60 -mr-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Action Sheet for Contact */}
      {isContactSheetOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col justify-end h-[100dvh]">
          {/* Invisible Click Layer */}
          <div 
            className="absolute inset-0 bg-transparent"
            onClick={() => setContactSheetOpen(false)}
            style={{ touchAction: 'none', cursor: 'default' }}
          ></div>
          <div className="relative w-full max-w-[480px] mx-auto px-4 pb-safe-bottom z-10 animate-slide-up">
            <div className="mb-4 relative">
                
                {/* Floating Badge */}
                <div className="absolute -top-14 left-0 right-0 flex justify-center pointer-events-none">
                    <div className="bg-[#1c1c1e]/25 backdrop-blur-[20px] border border-white/10 px-5 py-2 rounded-full text-[15px] font-semibold text-white shadow-2xl flex items-center gap-2 animate-scale-in">
                        <MessageCircle size={14} className="text-ios-blue"/>
                        Связаться
                    </div>
                </div>

                {/* Main Action Group */}
                <div className="bg-[#1c1c1e]/40 backdrop-blur-[35px] border border-white/10 rounded-[26px] overflow-hidden text-center shadow-[0_20px_50px_0_rgba(0,0,0,0.5)] mb-3">
                  <div className="py-4 px-4 bg-white/5 border-b border-white/5">
                    <p className="text-[13px] font-medium text-gray-200">Выберите мессенджер</p>
                  </div>

                  <a 
                    href={`https://wa.me/${whatsAppNumber}?text=Здравствуйте!`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 text-[17px] text-ios-blue active:bg-white/10 transition-colors border-t border-white/5 flex items-center justify-center gap-2 hover:bg-white/5"
                  >
                    <PhoneCall size={20} />
                    WhatsApp
                  </a>

                  <a 
                    href={`https://t.me/${telegramUsername}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 text-[17px] text-ios-blue active:bg-white/10 transition-colors border-t border-white/5 flex items-center justify-center gap-2 hover:bg-white/5"
                  >
                    <Send size={19} />
                    Telegram
                  </a>
                  
                  <a 
                    href="https://max.ru/u/f9LHodD0cOJtwbWmv1PMoc9m3Nwjfnb8PKoj02ulnywVmBKq4eWYjVBHEtQ"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 text-[17px] text-ios-blue active:bg-white/10 transition-colors border-t border-white/5 flex items-center justify-center gap-2 hover:bg-white/5"
                  >
                    <MessageCircle size={20} />
                    MAX
                  </a>

                </div>

                <button 
                  onClick={() => setContactSheetOpen(false)}
                  className="w-full bg-[#7f1d1d]/40 backdrop-blur-[35px] border border-white/10 py-4 rounded-[26px] text-[17px] font-bold text-ios-red active:scale-[0.98] transition-transform shadow-lg hover:bg-white/5"
                >
                  Отмена
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};