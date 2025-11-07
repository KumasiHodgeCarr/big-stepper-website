'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getStepperImages } from '@/lib/stepperImages';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const stepperImages = getStepperImages();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center z-10"
        >
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/stepper-1.png"
                alt="Big Stepper"
                fill
                className="object-contain animate-stomp"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            BIG STEPPER
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The Meme That Moves.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We don't chase pumps — we walk on them. Join the community that's one step ahead of the herd.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://t.me/BigStepper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-stepper-gold hover:bg-stepper-solar rounded-full text-xl font-bold text-stepper-black transition-all transform hover:scale-105 shadow-lg shadow-stepper-gold/50"
            >
              Join Telegram 👟
            </a>
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-stepper-purple hover:bg-stepper-purple/80 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-stepper-purple/50"
            >
              Buy on Pump.fun 💰
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center gradient-text">
            What Is BIG STEPPER?
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              BIG STEPPER ($STEP) isn't just another meme coin — it's a movement.
              It's about swagger, progress, and purpose. The culture of people who take
              big steps in everything they do — from trading to creating to just vibing.
            </p>

            <p>
              Each Stepper represents those who keep moving, even when the market stands still.
              When others panic, we step forward. When rugs drop, we stomp harder.
            </p>

            <motion.div
              className="text-center py-8"
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                Lace up. Step heavy. Walk with purpose.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Lore Section */}
      <section id="lore" className="py-20 px-6 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text">
            The Legend of the Big Shoes 👟
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-64 md:h-80"
            >
              <Image
                src="/stepper-3.png"
                alt="The Legend"
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="card-gradient rounded-2xl p-8 space-y-6 text-lg text-gray-300">
              <p>
                Long ago, there was a frog with shoes too big for anyone else to fill.
                He didn't run. He didn't chase. He just stepped — calm, collected, unstoppable.
              </p>

              <p>
                Those who saw him move became believers. And soon, the shoes appeared everywhere
                — on cats, AI bots, anime heroes, even Santa himself.
              </p>

              <p>
                Anyone can wear them, but only a few can truly step.
              </p>
            </div>
          </div>

          <blockquote className="border-l-4 border-purple-500 pl-6 py-4 mt-8 bg-black/30 rounded-lg card-gradient">
            <p className="text-2xl md:text-3xl font-bold italic gradient-text">
              "We don't follow the trend — we are the trend."
            </p>
            <p className="text-sm mt-2 text-gray-400">– The First Stepper</p>
          </blockquote>
        </motion.div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center gradient-text">
            Tokenomics: 100% Community, 0% Cap 💰
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-xl font-bold text-purple-400">Feature</th>
                  <th className="py-4 px-6 text-xl font-bold text-purple-400">Details</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="py-4 px-6 font-semibold">Total Supply</td>
                  <td className="py-4 px-6">1,000,000,000 $STEP</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="py-4 px-6 font-semibold">Launch Platform</td>
                  <td className="py-4 px-6">Pump.fun</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="py-4 px-6 font-semibold">Taxes</td>
                  <td className="py-4 px-6">0% Buy / 0% Sell</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="py-4 px-6 font-semibold">Ownership</td>
                  <td className="py-4 px-6">Renounced</td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition">
                  <td className="py-4 px-6 font-semibold">Liquidity</td>
                  <td className="py-4 px-6">Community Driven</td>
                </tr>
                <tr className="hover:bg-gray-900/50 transition">
                  <td className="py-4 px-6 font-semibold">Mission</td>
                  <td className="py-4 px-6 gradient-text font-bold">Make every rug a runway.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xl text-gray-300 text-center mt-8 max-w-3xl mx-auto">
            No tricks. No taxes. Just steps. BIG STEPPER is a pure community token —
            everything flows through the movement itself. The supply is public,
            the path is open, and the steps never stop.
          </p>
        </motion.div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text">
            The Stepper's Path 📈
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phase 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-gradient rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4 text-purple-400">Phase 1: LACE UP</h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Launch $STEP on Pump.fun</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Drop the OG Big Stepper artwork</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Build the Telegram & Twitter army</span>
                </li>
              </ul>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-gradient rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4 text-purple-400">Phase 2: STEP HARD</h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">👟</span>
                  <span>Meme storm week: &quot;Steppin&apos; on Rugs&quot;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">👟</span>
                  <span>First seasonal variants (Heat Stepper, Ice Stepper)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">👟</span>
                  <span>Collabs</span>
                </li>
              </ul>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-gradient rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4 text-purple-400">Phase 3: STEP WORLDWIDE</h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">🌍</span>
                  <span>Migration to Raydium</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌍</span>
                  <span>Stepper of the Day contests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌍</span>
                  <span>NFT airdrops for OG holders</span>
                </li>
              </ul>
            </motion.div>

            {/* Phase 4 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-gradient rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold mb-4 text-purple-400">Phase 4: NEVER STOP STEPPIN'</h3>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>Stepper mini-game</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>Merchandise collabs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>Global meme domination</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center gradient-text">
            The Big Stepper Collection 🎨
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stepperImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="card-gradient rounded-2xl p-4 overflow-hidden"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Submission Section */}
      <section id="submit" className="py-20 px-6 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <div className="card-gradient rounded-2xl p-12">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Got your own Stepper idea? 👟
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-300 mb-8">
                <p>
                  Draw it, meme it, animate it — we want to see your creation!
                </p>

                <p className="text-xl md:text-2xl font-semibold">
                  Tag <span className="text-blue-400">@BigStepperCoin</span> with{' '}
                  <span className="text-purple-400">#MyBigStep</span>
                </p>

                <p>
                  and you might get featured on our page or future drops.
                </p>
              </div>

              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-5xl mb-4 animate-stomp">👟</div>
              </motion.div>

              <p className="text-2xl font-bold gradient-text">
                Every Stepper adds to the movement. Let's keep steppin' 🚀
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Join the Stepperverse 🌐
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            BIG STEPPER is powered by you. Every meme, every edit, every post moves the movement forward.
            Whether you're a designer, trader, or just here for the vibes — you're a Stepper once you take your first step.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://twitter.com/BigStepperCoin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-stepper-blue hover:bg-stepper-blue/80 rounded-full text-xl font-bold transition-all shadow-lg shadow-stepper-blue/30 w-full sm:w-auto"
            >
              🐦 Twitter
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://t.me/BigStepper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-stepper-gold hover:bg-stepper-solar rounded-full text-xl font-bold text-stepper-black transition-all shadow-lg shadow-stepper-gold/30 w-full sm:w-auto"
            >
              💬 Telegram
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-stepper-purple hover:bg-stepper-purple/80 rounded-full text-xl font-bold transition-all shadow-lg shadow-stepper-purple/30 w-full sm:w-auto"
            >
              🌊 Pump.fun
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-stepper-gold/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-3xl font-bold gradient-text">
              BIG STEPPER — One Step Ahead of the Herd.
            </p>

            <div className="text-sm text-gray-400 max-w-3xl mx-auto space-y-3 leading-relaxed">
              <p className="font-semibold text-gray-300">Disclaimer:</p>
              <p>
                BIG STEPPER is a community-driven meme project created for entertainment and cultural expression.
              </p>
              <p>
                We are not affiliated or associated with Pepe the Frog, Wojak, Doge, or any other meme characters depicted.
                All visual references are used as homages to internet culture and creativity.
              </p>
              <p>
                We celebrate these icons with respect and hope for future collaborations.
              </p>
            </div>

            <p className="text-gray-600 text-sm">
              © 2025 BIG STEPPER. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
