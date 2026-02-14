import Header from '@/components/Header';
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <section id="home" className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Best <span className="text-purple-500">Spoofer & Cheats</span> <br /> for your games!
        </h1>
        
        <p className="text-gray-400 max-w-2xl text-lg mb-10">
          Top-Tier Spoofer & Cheats for all your games. 24/7 support & All in one place!
        </p>

        <div className="flex gap-4">
        <a href="#products">
          <button className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105">
            View Offers
          </button>
        </a>
        <a href="https://discord.gg/57pr8zTuvk" target="_blank" rel="noopener noreferrer">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all">
            Discord Server
          </button>
        </a>
        </div>
      </section>

      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
  <div className="mb-12">
    <h2 className="text-3xl font-bold border-l-4 border-purple-600 pl-4">
      Available <span className="text-purple-500">Products</span>
    </h2>
    <p className="text-gray-400 mt-2">Choose the software according to your favorite game</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
      <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
        <Image 
          src="/images/valorantcheat.jpg"
          alt="Valorant Cheat"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
            <h3 className="text-xl font-bold mb-2">Valorant Cheat</h3>
      <p className="text-gray-400 text-sm mb-6">
         The best Working & Undetectable Valorant Cheat & Keys: 3€ Daily, 5€ Weekly, 10€ Monthly, 25€ LifeTime
      </p>
    </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
      <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
        <Image 
          src="/images/cs2cheat.jpg"
          alt="CS2 Cheat"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">Counter-Strike 2 Cheat</h3>
      <p className="text-gray-400 text-sm mb-6">
        Undetectable & Keys: 3€ Daily, 5€ Weekly, 10€ Monthly, 25€ LifeTime
      </p>
    </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
    <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
      <Image 
        src="/images/mintzspoofer.png"
        alt="Mintz Spoofer"
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    <h3 className="text-xl font-bold mb-2 text-white">Mintz Spoofer</h3>
    <p className="text-gray-400 text-sm mb-6">
      Best Undetectable HWID Spoofer on this Market! & Keys: 3€ Daily, 5€ Weekly, 10€ Monthly, 25€ LifeTime 
    </p>
  </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
      <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
        <Image 
          src="/images/discordaccs.jpg"
          alt="Discord Accounts"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">Discord Accs</h3>
      <p className="text-gray-400 text-sm mb-6">
        These Accounts are aged and in high quality.
      </p>
      
<div className="flex items-center justify-between">
        <div className="px-4 py-2 rounded-md border border-white/20 bg-[#0f0f0f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="text-2xl font-black text-white tracking-tighter">
            2€
          </span>
        </div>
      </div>
    </div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
      <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
        <Image 
          src="/images/steamaccs.jpg"
          alt="Steam Accs"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
  
  <h3 className="text-xl font-bold mb-2 text-white">Steam Accs</h3>
  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
    These accounts contain a paid set of all games.
  </p>

  <div className="flex items-center justify-between">
    <div className="px-4 py-2 rounded-md border border-white/20 bg-[#0f0f0f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
      <span className="text-2xl font-black text-white tracking-tighter">
        2€
      </span>
    </div>
  </div>
</div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
      <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
        <Image 
          src="/images/fivemcheat.png"
          alt="Fivem Cheat"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">Fivem Cheat</h3>
      <p className="text-gray-400 text-sm mb-6">
        Undetectable & Top-Tier GTA V RP Hacks & Keys: 3€ Daily, 5€ Weekly, 10€ Monthly, 25€ LifeTime
      </p>
    </div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group">
      <div className="h-40 bg-purple-900/20 rounded-2xl mb-4 overflow-hidden relative border border-white/5">
        <Image 
          src="/images/permspoofer.png"
          alt="Perm Spoofer"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
  
  <h3 className="text-xl font-bold mb-2 text-white">Perm Spoofer</h3>
  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
    Best Undetectable Perm Spoofer on this market! & Keys: 3€ Daily, 5€ Weekly, 10€ Monthly, 25€ LifeTime
  </p>
</div>

  </div>
</section>
<section id="faq" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
  <div className="mb-12">
    <h2 className="text-3xl font-bold border-l-4 border-purple-600 pl-4">
      FAQ
    </h2>
    <p className="text-gray-400 mt-2">
      Answers about <span className="text-purple-500 font-medium">Spoofer & Cheats</span>
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-2">Is it UD?</h3>
      <p className="text-gray-400 leading-relaxed text-sm">Yes, our Spoofer & Cheats are undetectable.</p>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-2">Refunds?</h3>
      <p className="text-gray-400 leading-relaxed text-sm">Refunds are provided in cases where activation fails.</p>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-2">Support?</h3>
      <p className="text-gray-400 leading-relaxed text-sm">HP and ASUS are fully supported.</p>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-2">Instant delivery?</h3>
      <p className="text-gray-400 leading-relaxed text-sm">Yes, the keys are immediately sent to your ticket on our server.</p>
    </div>

    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-2">Payment Methods?</h3>
      <p className="text-gray-400 leading-relaxed text-sm">Only PayPal and Bank.</p>
    </div>

  </div>
</section>
    </main>
  );
}
