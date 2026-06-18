interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-5 ${className ?? ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#hero" className="font-serif text-2xl tracking-[0.3em] text-gradient-gold">
          AURÉLE
        </a>
        <nav className="hidden md:flex gap-10">
          <a
            href="#catalog"
            className="text-white/80 hover:text-gold transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Каталог
          </a>
          <a
            href="#notes"
            className="text-white/80 hover:text-gold transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Ароматы
          </a>
          <a
            href="#reviews"
            className="text-white/80 hover:text-gold transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Отзывы
          </a>
          <a
            href="#delivery"
            className="text-white/80 hover:text-gold transition-colors duration-300 uppercase text-xs tracking-[0.2em]"
          >
            Доставка
          </a>
        </nav>
        <a
          href="#catalog"
          className="glass text-gold px-5 py-2 text-xs uppercase tracking-[0.2em] rounded-full hover:bg-gold/10 transition-all duration-300"
        >
          Заказать
        </a>
      </div>
    </header>
  );
}
