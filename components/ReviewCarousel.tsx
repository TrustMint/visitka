import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: '1', author: 'Елена В.', text: 'Машина чистая, водитель вежливый. Доехали быстро и аккуратно!', rating: 5, date: 'Вчера' },
  { id: '2', author: 'Михаил', text: 'Отличный сервис. Встретил в аэропорту с табличкой, помог с багажом.', rating: 5, date: '2 дн.' },
  { id: '3', author: 'Анна К.', text: 'Очень комфортное вождение, спасибо Александру за беседу.', rating: 5, date: '1 нед.' },
  { id: '4', author: 'Олег П.', text: 'Все четко, вовремя. Рекомендую для бизнес поездок.', rating: 5, date: '2 нед.' },
];

export const ReviewCarousel: React.FC = () => {
  return (
    <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <h2 className="text-[20px] font-bold mb-3 px-5 text-white tracking-tight">Отзывы</h2>
      
      <div className="flex overflow-x-auto space-x-3 px-4 pb-4 no-scrollbar snap-x-mandatory cursor-grab active:cursor-grabbing">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="min-w-[280px] snap-center glass-panel p-5 rounded-[24px] flex flex-col justify-between shadow-sm border border-white/5 bg-[#1C1C1E]/80"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-white text-[16px]">{review.author}</span>
                <span className="text-[11px] text-gray-500 font-semibold bg-[#2C2C2E] px-2 py-1 rounded-md">{review.date}</span>
              </div>
              <p className="text-[14px] text-gray-300 leading-relaxed mb-4 font-normal">
                "{review.text}"
              </p>
            </div>
            
            <div className="flex items-center gap-0.5 border-t border-white/5 pt-3 mt-auto">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
          </div>
        ))}
        {/* Spacer for last item */}
        <div className="w-1 shrink-0"></div>
      </div>
    </div>
  );
};