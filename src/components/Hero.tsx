import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      id="hero"
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-graphite"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/3bee8530-cfdb-4915-bffd-1be118bca0ce/files/bc105b21-1738-4974-8715-ce387f4a3d9b.jpg"
          alt="Премиальный флакон духов AURÉLE"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-graphite" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Нишевая парфюмерия
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 text-white"
        >
          Аромат как
          <span className="block text-gradient-gold italic">подпись</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base md:text-lg max-w-xl mx-auto text-white/70 font-light"
        >
          Раскройте свою индивидуальность через коллекцию изысканных ароматов,
          созданных лучшими парфюмерами мира.
        </motion.p>
        <motion.a
          href="#catalog"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="inline-block mt-10 glass text-gold px-10 py-4 text-xs uppercase tracking-[0.3em] rounded-full hover:bg-gold/10 transition-all duration-300"
        >
          Открыть коллекцию
        </motion.a>
      </motion.div>
    </div>
  );
}
