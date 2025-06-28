"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  Landmark,
  Zap,
  Sprout,
  LucideIcon,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "usehooks-ts";

const MarketingFeatureCard = ({
    marketing,
    index
}: {
    marketing: { title: string; points: string[] };
    index: number;
}) => {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            className="w-full h-full bg-slate-900 rounded-3xl p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
        >
            <div className="absolute top-8 right-8 text-[120px] font-black text-white/5 z-0">
                0{index + 1}
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px] z-0"></div>
            <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-space">{marketing.title}</h3>
                <ul className="space-y-4">
                    {marketing.points.map((point, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.2 }}
                        >
                            <CheckCircle className="h-6 w-6 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                            <span className="text-slate-300">{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const products: {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  marketing: {
    title: string;
    points: string[];
  };
}[] = [
  {
    Icon: Landmark,
    title: "Crypto Lending Pool",
    description:
      "Earn passive income on your assets. Lend your Bitcoin, Ethereum, and other cryptocurrencies to earn competitive yields with daily compounding.",
    features: ["Up to 15% APY", "Daily Compounding", "No Lock-up Period"],
    marketing: {
        title: "Security & Yield, Reimagined.",
        points: [
            "Fortified with bank-grade security protocols.",
            "Earn industry-leading APY, paid out daily.",
            "No complex staking. Just simple, powerful returns.",
        ]
    }
  },
  {
    Icon: Zap,
    title: "Flash Borrowing",
    description:
      "Borrow against your crypto holdings instantly. No credit checks, just collateralize your assets and get instant access to funds.",
    features: ["Instant Approval", "Competitive Rates", "Flexible Terms"],
    marketing: {
        title: "Capital at the Speed of Light.",
        points: [
            "Seize market opportunities without liquidating assets.",
            "Instant liquidity for trading, arbitrage, or collateral swaps.",
            "Automated, on-chain, and radically efficient.",
        ]
    }
  },
  {
    Icon: Sprout,
    title: "Yield Farming Strategies",
    description:
      "Our smart contracts automatically optimize your yields across multiple DeFi protocols to maximize your returns.",
    features: ["Auto Compounding", "Risk Management", "Multi-Protocol"],
    marketing: {
        title: "Your Personal DeFi Strategist.",
        points: [
            "We navigate the complexities of yield farming for you.",
            "Smart contracts that constantly seek the best returns.",
            "Maximize your gains with optimized, multi-protocol strategies.",
        ]
    }
  },
];

const DesktopLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-16 items-start">
      <div className="md:sticky top-24">
        <div className="relative h-[80vh] min-h-[600px] bg-white border border-slate-200/80 rounded-3xl shadow-lg">
          {products.map((product, i) => {
            const start = i / products.length;
            const end = (i + 1) / products.length;
            const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [30, 0, 0, -30]);

            const n = products.length;
            const transitionPointIn = i / n;
            const transitionPointOut = (i + 1) / n;
            const transitionWidth = 0.2;

            let opacityInputRange: number[] = [];
            let opacityOutputRange: number[] = [];

            if (i === 0) {
              opacityInputRange = [transitionPointOut - transitionWidth / 2, transitionPointOut + transitionWidth / 2];
              opacityOutputRange = [1, 0];
            } else if (i === n - 1) {
              opacityInputRange = [transitionPointIn - transitionWidth / 2, transitionPointIn + transitionWidth / 2];
              opacityOutputRange = [0, 1];
            } else {
              opacityInputRange = [
                transitionPointIn - transitionWidth / 2,
                transitionPointIn + transitionWidth / 2,
                transitionPointOut - transitionWidth / 2,
                transitionPointOut + transitionWidth / 2,
              ];
              opacityOutputRange = [0, 1, 1, 0];
            }

            const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

            return (
              <motion.div
                key={i}
                className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12"
                style={{ opacity, y }}
              >
                <product.Icon className="h-10 w-10 text-purple-600 mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-space">{product.title}</h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-inter mb-6">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Learn More</Button>
                  <Button size="lg" variant="outline">Get Started</Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="space-y-12 relative">
         <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        {products.map((product, i) => (
          <div key={i} className="h-[80vh] min-h-[600px] flex items-center justify-center relative">
            <div className="w-full h-[70%] rounded-3xl overflow-hidden shadow-2xl relative">
                <MarketingFeatureCard marketing={product.marketing} index={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileLayout = () => (
  <div className="space-y-16">
    {products.map((product, i) => (
      <div key={i} className="space-y-8">
        {/* Text content card */}
        <div className="p-8 bg-white border border-slate-200/80 rounded-3xl shadow-lg">
            <product.Icon className="h-10 w-10 text-purple-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-space">{product.title}</h2>
            <p className="text-base text-gray-600 leading-relaxed font-inter mb-6">{product.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {product.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">Learn More</Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Get Started</Button>
            </div>
        </div>
        
        {/* Marketing feature card */}
        <div className="h-[70vh] min-h-[500px] flex items-center justify-center relative">
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative">
            <MarketingFeatureCard marketing={product.marketing} index={i} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const ProductOfferings = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isDesktop ? <DesktopLayout /> : <MobileLayout />}
      </div>
    </section>
  );
};
