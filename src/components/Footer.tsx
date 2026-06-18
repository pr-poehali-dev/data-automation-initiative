import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative h-[500px] sm:h-[650px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[800px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-black py-8 sm:py-10 lg:py-12 px-6 sm:px-8 h-full w-full flex flex-col justify-between border-t border-gold/20">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="max-w-md">
                <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
                  Готовы выбрать свой аромат?
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  Оставьте заявку — парфюмер поможет с выбором
                </h3>
                <a
                  href="#catalog"
                  className="inline-block glass text-gold px-8 py-4 text-xs uppercase tracking-[0.3em] rounded-full hover:bg-gold/10 transition-all duration-300"
                >
                  Сделать заказ
                </a>
              </div>

              <div className="flex gap-12 sm:gap-16">
                <div className="flex flex-col gap-3">
                  <h4 className="uppercase text-gold/70 text-xs tracking-[0.2em] mb-1">Меню</h4>
                  <a href="#catalog" className="text-white/70 hover:text-gold transition-colors text-sm">Каталог</a>
                  <a href="#notes" className="text-white/70 hover:text-gold transition-colors text-sm">Ароматы</a>
                  <a href="#reviews" className="text-white/70 hover:text-gold transition-colors text-sm">Отзывы</a>
                  <a href="#delivery" className="text-white/70 hover:text-gold transition-colors text-sm">Доставка</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="uppercase text-gold/70 text-xs tracking-[0.2em] mb-1">Контакты</h4>
                  <a href="tel:+74950000000" className="text-white/70 hover:text-gold transition-colors text-sm">+7 (495) 000-00-00</a>
                  <a href="mailto:hello@aurele.ru" className="text-white/70 hover:text-gold transition-colors text-sm">hello@aurele.ru</a>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-white/70 hover:text-gold transition-colors"><Icon name="Instagram" size={20} /></a>
                    <a href="#" className="text-white/70 hover:text-gold transition-colors"><Icon name="Send" size={20} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="font-serif text-[18vw] sm:text-[15vw] lg:text-[13vw] leading-[0.8] text-gradient-gold tracking-tight">
                AURÉLE
              </h1>
              <p className="text-white/50 text-sm">© {new Date().getFullYear()} AURÉLE</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
