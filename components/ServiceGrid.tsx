import React from 'react';
import { Plane, MapPin, Clock, CarFront, PhoneCall, Phone, Send, Info, Route, ChevronRight, MessageCircle, Map } from 'lucide-react';
import { ServiceWithColor } from '../types';

const services: ServiceWithColor[] = [
  {
    id: '1',
    title: 'Аэропорт',
    icon: <Plane size={22} className="text-white" />,
    colorClass: 'from-blue-500 to-blue-600',
    iconColor: 'bg-blue-500 shadow-blue-500/40'
  },
  {
    id: '2',
    title: 'Межгород',
    icon: <MapPin size={22} className="text-white" />,
    colorClass: 'from-emerald-500 to-emerald-600',
    iconColor: 'bg-emerald-500 shadow-emerald-500/40'
  },
  {
    id: '3',
    title: 'Почасовая',
    icon: <Clock size={22} className="text-white" />,
    colorClass: 'from-orange-400 to-orange-500',
    iconColor: 'bg-orange-500 shadow-orange-500/40'
  },
  {
    id: '4',
    title: 'Трезвый водитель',
    icon: <CarFront size={22} className="text-white" />,
    colorClass: 'from-purple-500 to-purple-600',
    iconColor: 'bg-purple-500 shadow-purple-500/40'
  },
];

interface ServiceGridProps {
  selectedService: ServiceWithColor | null;
  onSelectService: (service: ServiceWithColor | null) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ selectedService, onSelectService }) => {
  const phoneNumber = "+79258472778";
  const whatsAppNumber = "79258472778";
  const telegramUsername = "qorzz";

  const closeSheet = () => {
    onSelectService(null);
  };

  const customService: ServiceWithColor = {
    id: 'custom',
    title: 'Свой маршрут',
    icon: <Route size={22} />,
    colorClass: 'from-gray-500 to-gray-600',
    iconColor: 'bg-gray-600'
  };

  return (
    <>
      <div className="px-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="mb-3 px-1 flex justify-between items-end">
          <h2 className="text-[20px] font-bold tracking-tight text-white">Услуги</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-3">
          {services.map((service) => (
            <button 
              key={service.id} 
              onClick={() => onSelectService(service)}
              className="relative p-4 rounded-[26px] h-[110px] flex flex-col justify-between w-full group overflow-hidden transition-all duration-300
                         bg-[#2C2C2E] hover:bg-[#3A3A3C] active:scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] ring-highlight"
            >
              <div className="relative z-10">
                <div className={`w-10 h-10 rounded-[14px] bg-gradient-to-br ${service.colorClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Centered Chevron */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white/50 transition-colors">
                 <ChevronRight size={20} />
              </div>
              
              <div className="relative z-10 w-full text-left pr-4">
                <h3 className="font-semibold text-[16px] leading-tight text-white tracking-tight">{service.title}</h3>
              </div>
            </button>
          ))}
        </div>

        <button 
          onClick={() => onSelectService(customService)}
          className="relative w-full p-4 rounded-[26px] flex items-center justify-between gap-4 group overflow-hidden transition-all duration-300
                     bg-[#2C2C2E] hover:bg-[#3A3A3C] active:scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)] ring-highlight"
        >
           <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Route size={22} className="text-white" />
               </div>
               <div className="text-left">
                  <h3 className="font-semibold text-[17px] text-white tracking-tight">Индивидуальный маршрут</h3>
                  <p className="text-[13px] text-gray-400 font-medium leading-tight mt-0.5">
                    Поездка из точки А в точку Б
                  </p>
               </div>
           </div>
           
           {/* Right aligned chevron for list item */}
           <ChevronRight size={20} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
        </button>

        <div className="mt-4 mx-0 rounded-[20px] bg-[#1C1C1E] border border-white/10 w-full overflow-hidden shadow-lg">
          <div className="flex items-center gap-4 px-4 py-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center ring-1 ring-inset ring-blue-500/30">
                <Map size={18} className="text-blue-400" />
            </div>
            <div className="flex-1">
                <p className="text-[15px] text-white font-semibold leading-tight tracking-tight">
                    Зона обслуживания
                </p>
                <p className="text-[13px] text-gray-400 leading-tight mt-0.5 font-medium">
                    Москва и Московская область
                </p>
            </div>
          </div>
          <div className="mx-4 border-t border-white/10"></div>
          <div className="flex items-start gap-3 px-4 py-3 text-gray-400">
            <Info size={15} className="mt-0.5 shrink-0" />
            <p className="text-[13px] leading-snug font-medium">
                Стоимость поездки может меняться в зависимости от пробок и времени суток.
            </p>
          </div>
        </div>

      </div>

      {/* FLOATING ACTION SHEET - NO BACKDROP DIMMING */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col justify-end h-[100dvh]"
        >
          
          {/* 
             Invisible Click Layer
             This allows clicking outside the modal to close it, 
             but visually it is 100% transparent. No dimming, no blur.
          */}
          <div 
            className="absolute inset-0 bg-transparent"
            onClick={closeSheet}
            style={{ 
                touchAction: 'none',
                // Ensure it grabs clicks but doesn't show anything
                cursor: 'default' 
            }}
          ></div>

          {/* Sheet Container */}
          <div className="relative w-full max-w-[480px] mx-auto px-4 pb-safe-bottom z-10 animate-slide-up">
            
            {/* Wrapper for floating content */}
            <div className="mb-4 relative">
                
                {/* Floating Badge */}
                <div className="absolute -top-14 left-0 right-0 flex justify-center pointer-events-none">
                    <div className="bg-[#1c1c1e]/25 backdrop-blur-[20px] border border-white/10 px-5 py-2 rounded-full text-[15px] font-semibold text-white shadow-2xl flex items-center gap-2 animate-scale-in">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${selectedService.colorClass}`}></div>
                        {selectedService.title}
                    </div>
                </div>

                {/* Main Action Group - Ultra Glass */}
                <div className="bg-[#1c1c1e]/40 backdrop-blur-[35px] border border-white/10 rounded-[26px] overflow-hidden text-center shadow-[0_20px_50px_0_rgba(0,0,0,0.5)] mb-3">
                  <div className="py-4 px-4 bg-white/5 border-b border-white/5">
                    <p className="text-[13px] font-medium text-gray-200">Выберите способ связи</p>
                  </div>

                  <a 
                    href={`https://wa.me/${whatsAppNumber}?text=Здравствуйте! Интересует услуга: ${selectedService.title}. Подскажите стоимость и условия.`}
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

                  <a 
                    href={`tel:${phoneNumber}`}
                    className="block w-full py-4 text-[17px] text-ios-blue font-semibold active:bg-white/10 transition-colors border-t border-white/5 flex items-center justify-center gap-2 hover:bg-white/5"
                  >
                    <Phone size={19} />
                    Позвонить
                  </a>
                </div>

                {/* Cancel Button - Glassy */}
                <button 
                  onClick={closeSheet}
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
