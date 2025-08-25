import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Product } from "../types";
import { products } from "../data/products";

/* ----------------------------- Utility bits ----------------------------- */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const shimmer =
  "bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.25),transparent)] bg-[length:200%_100%] animate-[shimmer_2.5s_infinite]";

const threadGradient =
  "bg-[conic-gradient(from_120deg,rgba(244,63,94,0.95),rgba(245,158,11,0.95),rgba(147,51,234,0.95),rgba(244,63,94,0.95))]";

const labelTone =
  "text-[0.8rem] tracking-wide uppercase font-semibold opacity-80";

/* Subtle woven pattern using a data-uri SVG so it works anywhere */
const wovenLight =
  "bg-[url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23e6c6bf' stroke-opacity='0.35' stroke-width='0.6'%3E%3Cpath d='M0 10h80M0 30h80M0 50h80M0 70h80'/%3E%3Cpath d='M10 0v80M30 0v80M50 0v80M70 0v80'/%3E%3C/g%3E%3C/svg%3E\")]";
const wovenDark =
  "bg-[url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%235b1e3f' stroke-opacity='0.45' stroke-width='0.6'%3E%3Cpath d='M0 10h80M0 30h80M0 50h80M0 70h80'/%3E%3Cpath d='M10 0v80M30 0v80M50 0v80M70 0v80'/%3E%3C/g%3E%3C/svg%3E\")]";

/* ----------------------------- Reusable UI ------------------------------ */

const SectionCard: React.FC<
  React.PropsWithChildren<{ title: React.ReactNode; dark: boolean }>
> = ({ title, dark, children }) => {
  return (
    <motion.section
      whileHover={{ scale: 1.005 }}
      className={[
        "relative rounded-3xl border shadow-xl overflow-hidden transition",
        dark
          ? "bg-white/5 border-white/10"
          : "bg-white/95 border-rose-200/50",
      ].join(" ")}
    >
      {/* Glowing stitched top border */}
      <div
        className={[
          "h-1.5 w-full",
          threadGradient,
          "opacity-90",
          "shadow-[0_0_25px_rgba(245,158,11,0.25)]",
        ].join(" ")}
      />
      <div className="p-8 md:p-10">
        <h3
          className={[
            "mb-6 text-2xl md:text-3xl font-serif font-extrabold tracking-tight",
            "inline-flex items-center gap-3",
          ].join(" ")}
        >
          <span
            className={[
              "inline-block w-8 h-8 rounded-full",
              "shadow ring-2 ring-white/30",
              threadGradient,
            ].join(" ")}
          />
          <span
            className={[
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-rose-600 via-amber-500 to-purple-700",
            ].join(" ")}
          >
            {title}
          </span>
        </h3>
        {children}
      </div>
      {/* Subtle bottom thread */}
      <div className="absolute -bottom-1 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-rose-400/60 to-transparent" />
    </motion.section>
  );
};

type FieldProps = {
  label: string;
  icon?: string; // emoji or small symbol
  hint?: string;
  dark: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Field: React.FC<FieldProps> = ({
  label,
  icon,
  hint,
  dark,
  className,
  ...props
}) => {
  return (
    <label className="group block">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-base">{icon}</span>}
        <span className={labelTone}>{label}</span>
      </div>
      <input
        {...props}
        className={[
          "w-full px-5 py-4 rounded-2xl border outline-none shadow-sm",
          "transition focus:ring-2 focus:ring-offset-0",
          dark
            ? "bg-white/10 border-white/15 text-white placeholder-rose-200/60 focus:ring-rose-400/60"
            : "bg-white border-rose-200 text-rose-900 placeholder-rose-400/70 focus:ring-amber-500/70",
          "group-hover:shadow-md",
          "ring-0",
          "focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]",
          className || "",
        ].join(" ")}
      />
      {hint && (
        <p className={["mt-2 text-xs opacity-70", dark ? "text-rose-200/80" : "text-rose-700/80"].join(" ")}>
          {hint}
        </p>
      )}
    </label>
  );
};

type TextAreaProps = {
  label: string;
  icon?: string;
  hint?: string;
  dark: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const FieldArea: React.FC<TextAreaProps> = ({
  label,
  icon,
  hint,
  dark,
  className,
  ...props
}) => (
  <label className="group block">
    <div className="flex items-center gap-2 mb-2">
      {icon && <span className="text-base">{icon}</span>}
      <span className={labelTone}>{label}</span>
    </div>
    <textarea
      {...props}
      className={[
        "w-full px-5 py-4 rounded-2xl border outline-none shadow-sm",
        "transition focus:ring-2 focus:ring-offset-0",
        dark
          ? "bg-white/10 border-white/15 text-white placeholder-rose-200/60 focus:ring-rose-400/60"
          : "bg-white border-rose-200 text-rose-900 placeholder-rose-400/70 focus:ring-amber-500/70",
        "group-hover:shadow-md",
        "focus:shadow-[0_0_0_4px_rgba(244,63,94,0.08)]",
        className || "",
      ].join(" ")}
    />
    {hint && (
      <p className={["mt-2 text-xs opacity-70", dark ? "text-rose-200/80" : "text-rose-700/80"].join(" ")}>
        {hint}
      </p>
    )}
  </label>
);

const ThreadDivider: React.FC<{ dark: boolean; className?: string }> = ({
  dark,
  className,
}) => (
  <div className={["relative my-2", className || ""].join(" ")}>
    <div
      className={[
        "h-[2px] w-full rounded-full overflow-hidden",
        dark ? "bg-rose-100/10" : "bg-rose-900/10",
      ].join(" ")}
    >
      <div
        className={[
          "h-full w-1/3",
          threadGradient,
          "animate-[slide_3.6s_linear_infinite]",
        ].join(" ")}
      />
    </div>
  </div>
);

/* ------------------------------- Main Page ------------------------------ */

const Admin: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Persist theme so it feels intentional and personal
  useEffect(() => {
    const saved = localStorage.getItem("aqshmar-theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);
  useEffect(() => {
    localStorage.setItem("aqshmar-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [product, setProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    image: "",
    description: "",
    sizes: [],
    colors: [],
    fabric: "",
    category: "",
    featured: false,
    isNew: false,
    tags: [],
    careInstructions: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: `aqs-${String(products.length + 1).padStart(3, "0")}`,
      ...product,
    };
    console.log("New Product Added:", newProduct);
    // A gentle celebratory pulse instead of a plain alert vibe
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 1600);
  };

  /* Fancy button pulse */
  const [celebrate, setCelebrate] = useState(false);

  /* Computed background classes */
  const shell = useMemo(
    () =>
      darkMode
        ? "bg-gradient-to-br from-[#0f0f12] via-[#1b0b18] to-[#0a0a0a] text-white"
        : "bg-gradient-to-br from-[#fffaf7] via-[#fff3ed] to-[#fffaf8] text-rose-900",
    [darkMode]
  );

  return (
    <div
      className={[
        "min-h-screen relative overflow-x-hidden transition-colors duration-500 font-sans",
        shell,
      ].join(" ")}
    >
      {/* Woven background overlays */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-50",
          darkMode ? wovenDark : wovenLight,
        ].join(" ")}
      />
      {/* Soft radial vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(60% 60% at 50% 35%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(60% 60% at 50% 35%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Top Bar */}
      <header
        className={[
          "sticky top-0 z-30 backdrop-blur-xl border-b",
          darkMode ? "bg-[#0f0f12]/60 border-white/10" : "bg-white/70 border-rose-200/50",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className={[
                "inline-block w-9 h-9 rounded-full ring-2 ring-white/40",
                threadGradient,
                shimmer,
              ].join(" ")}
              aria-hidden
            />
            <h1 className="text-2xl md:text-3xl font-serif font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-700 via-amber-600 to-purple-700">
              Aqshmar Admin Hub
            </h1>
          </div>

          <button
            onClick={() => setDarkMode((d) => !d)}
            className={[
              "px-4 md:px-5 py-2 rounded-full font-medium shadow-md transition-all",
              darkMode
                ? "bg-gradient-to-r from-amber-400 to-rose-400 text-black hover:brightness-110"
                : "bg-gradient-to-r from-rose-600 to-amber-500 text-white hover:brightness-110",
            ].join(" ")}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        {...fadeUp(0.05)}
        className="relative max-w-4xl mx-auto px-6 pt-10 md:pt-14 pb-6 text-center"
      >
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-700 via-amber-600 to-purple-700">
            Curate a Timeless Masterpiece
          </h2>
          <ThreadDivider dark={darkMode} />
        </div>
        <p
          className={[
            "mt-4 md:mt-5 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl",
            darkMode ? "text-rose-100/85" : "text-rose-900/80",
          ].join(" ")}
        >
          Every thread carries wisdom. Every stitch tells a story. Craft a new
          heirloom for Aqshmar’s collection.
        </p>
      </motion.section>

      {/* Form */}
      <main className="relative max-w-7xl mx-auto px-6 pb-20">
        <form onSubmit={handleSubmit} className="grid gap-10 md:gap-12">
          {/* Core Details */}
          <SectionCard title="Core Details" dark={darkMode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field
                label="Product Title"
                icon="🪡"
                hint="Give it a name that feels like a story."
                name="name"
                placeholder="e.g., The Celestial Tee"
                onChange={handleChange}
                dark={darkMode}
                autoComplete="off"
              />
              <Field
                label="Price (USD)"
                icon="💠"
                hint="Reflects effort (15+ hours) & artistry."
                name="price"
                type="number"
                placeholder="99.99"
                onChange={handleChange}
                dark={darkMode}
                min="0"
                step="0.01"
              />
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Field
                label="Image Filename"
                icon="🖼"
                name="image"
                placeholder="aqshmar-tee-001.jpg"
                onChange={handleChange}
                dark={darkMode}
                autoComplete="off"
              />
              <FieldArea
                label="Description"
                icon="📜"
                name="description"
                placeholder="Describe the pattern, the story, and the feeling it carries…"
                rows={5}
                onChange={handleChange}
                dark={darkMode}
              />
            </div>
          </SectionCard>

          {/* Specifications */}
          <SectionCard title="Specifications" dark={darkMode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field
                label="Sizes"
                icon="📏"
                hint="Comma-separated, e.g., XS, S, M, L, XL"
                name="sizes"
                placeholder="XS, S, M, L, XL"
                onChange={handleArrayChange}
                dark={darkMode}
              />
              <Field
                label="Colors"
                icon="🎨"
                hint="Comma-separated, e.g., Emerald Green, Crimson Red, Pearl White"
                name="colors"
                placeholder="Emerald Green, Crimson Red, Pearl White"
                onChange={handleArrayChange}
                dark={darkMode}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field
                label="Fabric"
                icon="🧶"
                name="fabric"
                placeholder="Handwoven Cotton, Silk Blend"
                onChange={handleChange}
                dark={darkMode}
              />

              <label className="block">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">🏷</span>
                  <span className={labelTone}>Category</span>
                </div>
                <select
                  name="category"
                  onChange={handleChange}
                  className={[
                    "w-full px-5 py-4 rounded-2xl border shadow-sm outline-none transition focus:ring-2",
                    darkMode
                      ? "bg-white/10 border-white/15 text-white focus:ring-rose-400/60"
                      : "bg-white border-rose-200 text-rose-900 focus:ring-amber-500/70",
                  ].join(" ")}
                >
                  <option value="">Select Category</option>
                  <option>Heritage Embroidery</option>
                  <option>Luxury Casuals</option>
                  <option>Limited Edition Tees</option>
                  <option>Everyday Elegance</option>
                </select>
              </label>
            </div>
          </SectionCard>

          {/* Refined Touches */}
          <SectionCard title="Refined Touches" dark={darkMode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field
                label="Tags"
                icon="✨"
                hint="Comma-separated, e.g., heritage, handcrafted, cultural"
                name="tags"
                placeholder="heritage, handcrafted, cultural"
                onChange={handleArrayChange}
                dark={darkMode}
              />
              <Field
                label="Care Instructions"
                icon="🫧"
                hint="Comma-separated, e.g., Hand wash, Dry flat, Gentle iron"
                name="careInstructions"
                placeholder="Hand wash, Dry flat, Gentle iron"
                onChange={handleArrayChange}
                dark={darkMode}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-8">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="featured"
                  onChange={handleChange}
                  className="w-5 h-5 accent-amber-500"
                />
                <span className="font-medium">Featured</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isNew"
                  onChange={handleChange}
                  className="w-5 h-5 accent-rose-500"
                />
                <span className="font-medium">New Arrival</span>
              </label>
            </div>
          </SectionCard>

          {/* Submit */}
          <motion.div
            className="text-center pt-2"
            animate={celebrate ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={[
                "relative inline-flex items-center gap-3 px-16 py-5 rounded-2xl",
                "text-lg md:text-xl font-semibold text-white shadow-xl",
                "transition-all",
                "bg-gradient-to-r from-rose-700 via-amber-600 to-purple-700",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute inset-0 rounded-2xl opacity-30",
                  threadGradient,
                  celebrate ? shimmer : "",
                ].join(" ")}
                aria-hidden
              />
              <span className="relative z-10">🚀 Launch Heritage Tee</span>
            </motion.button>
          </motion.div>
        </form>

        {/* Footer */}
        <motion.footer
          {...fadeUp(0.1)}
          className={[
            "mt-16 md:mt-20 text-center",
            darkMode ? "text-rose-100/85" : "text-rose-800/85",
          ].join(" ")}
        >
          <p className="italic font-serif text-lg md:text-xl">
            “Every stitch is a whisper from the past, woven for tomorrow.”
          </p>
          <p className="mt-2 font-serif text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 inline-block animate-[shine_6s_linear_infinite]">
            — Aqshmar Legacy
          </p>
        </motion.footer>
      </main>

      {/* Keyframes (tailwind unsupported custom) via style tag */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes shine {
          0% { filter: brightness(1); }
          50% { filter: brightness(1.15); }
          100% { filter: brightness(1); }
        }
      `}</style>
    </div>
  );
};

export default Admin;
