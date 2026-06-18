import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";
import { fragrances, brands, types, genders, prices, type Gender } from "@/data/fragrances";

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState<Gender | "">("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return fragrances.filter((f) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.brand.toLowerCase().includes(q) ||
        f.top.toLowerCase().includes(q) ||
        f.heart.toLowerCase().includes(q) ||
        f.base.toLowerCase().includes(q);
      const matchBrand = !selectedBrand || f.brand === selectedBrand;
      const matchType = !selectedType || f.type === selectedType;
      const matchGender = !selectedGender || f.gender === selectedGender;
      return matchSearch && matchBrand && matchType && matchGender;
    });
  }, [search, selectedBrand, selectedType, selectedGender]);

  const hasFilters = search || selectedBrand || selectedType || selectedGender;

  const resetFilters = () => {
    setSearch("");
    setSelectedBrand("");
    setSelectedType("");
    setSelectedGender("");
  };

  return (
    <section id="full-catalog" className="relative bg-graphite py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Все ароматы</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-3">
            Полный каталог
          </h2>
          <p className="text-white/40 text-sm">{fragrances.length} ароматов · 10, 15, 20 и 30 мл</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-5 mb-10 flex flex-col gap-4"
        >
          {/* Search */}
          <div className="relative">
            <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
            <input
              type="text"
              placeholder="Поиск по названию, бренду или нотам..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-gold/15 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          {/* Select filters */}
          <div className="flex flex-wrap gap-3">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="flex-1 min-w-[160px] bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-neutral-900">Все бренды</option>
              {brands.map((b) => (
                <option key={b} value={b} className="bg-neutral-900">{b}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="flex-1 min-w-[160px] bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-neutral-900">Все типы</option>
              {types.map((t) => (
                <option key={t} value={t} className="bg-neutral-900">{t}</option>
              ))}
            </select>

            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value as Gender | "")}
              className="flex-1 min-w-[140px] bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-neutral-900">Для всех</option>
              {genders.map((g) => (
                <option key={g} value={g} className="bg-neutral-900">{g}</option>
              ))}
            </select>

            {hasFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 px-4 py-3 text-sm text-gold/70 hover:text-gold border border-gold/15 rounded-xl transition-colors"
              >
                <Icon name="X" size={14} />
                Сбросить
              </button>
            )}
          </div>
        </motion.div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-white/40 text-sm">
            {filtered.length === fragrances.length
              ? `Все ${fragrances.length} ароматов`
              : `Найдено: ${filtered.length}`}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((f) => {
              const isOpen = expanded === f.id;
              return (
                <motion.article
                  key={f.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-5 flex flex-col gap-3 hover:border-gold/30 transition-colors duration-300"
                >
                  {/* Brand + gender */}
                  <div className="flex items-center justify-between">
                    <span className="text-gold/70 text-[10px] uppercase tracking-[0.2em]">{f.brand}</span>
                    <span className="text-white/40 text-[10px]">{f.gender}</span>
                  </div>

                  {/* Name + type */}
                  <div>
                    <h3 className="font-serif text-xl text-white leading-snug">{f.name}</h3>
                    <p className="text-white/40 text-xs mt-0.5">{f.type}</p>
                  </div>

                  {/* Notes (expanded) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1.5 pt-1 border-t border-gold/10">
                          <div className="flex gap-2 text-xs">
                            <span className="text-gold/50 uppercase tracking-widest shrink-0 w-10">Верх</span>
                            <span className="text-white/55 font-light">{f.top}</span>
                          </div>
                          <div className="flex gap-2 text-xs">
                            <span className="text-gold/50 uppercase tracking-widest shrink-0 w-10">Серд</span>
                            <span className="text-white/55 font-light">{f.heart}</span>
                          </div>
                          <div className="flex gap-2 text-xs">
                            <span className="text-gold/50 uppercase tracking-widest shrink-0 w-10">База</span>
                            <span className="text-white/55 font-light">{f.base}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle notes */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : f.id)}
                    className="flex items-center gap-1 text-gold/60 hover:text-gold text-xs transition-colors w-fit"
                  >
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={13} />
                    {isOpen ? "Скрыть ноты" : "Ноты аромата"}
                  </button>

                  {/* Prices */}
                  <div className="grid grid-cols-4 gap-1 mt-auto pt-3 border-t border-gold/10">
                    {prices.map((p) => (
                      <div key={p.vol} className="text-center">
                        <p className="text-gold/50 text-[9px] uppercase tracking-wider">{p.vol}</p>
                        <p className="text-white/80 text-[11px] font-medium mt-0.5">{p.price}</p>
                      </div>
                    ))}
                  </div>

                  {/* Order button */}
                  <a
                    href="#contact"
                    className="block text-center text-gold border border-gold/25 text-xs uppercase tracking-[0.2em] py-2.5 rounded-xl hover:bg-gold/10 transition-all duration-300 mt-1"
                  >
                    Заказать
                  </a>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Icon name="Search" size={40} className="text-gold/30 mx-auto mb-4" />
            <p className="text-white/50 text-lg font-serif">Ничего не найдено</p>
            <p className="text-white/30 text-sm mt-2">Попробуйте изменить фильтры</p>
            <button onClick={resetFilters} className="mt-6 text-gold text-sm hover:underline">
              Сбросить все фильтры
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
