function Hero() {
  return (
    <section className="text-center py-24 px-4 bg-black/70 backdrop-blur-sm rounded-xl shadow-xl mt-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary animate-pulseSlow">
        Kickstart your <span className="text-white">DSA Journey!</span>
      </h1>
      <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
        Track your problems, stay consistent, and prepare for your dream company.
      </p>
      <button className="mt-8 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-black rounded-full transition-all">
        Why should you trust this?
      </button>
    </section>
  );
}

export default Hero;
