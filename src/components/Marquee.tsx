const Marquee = () => {
  const text = "PRIME EĞİTİM – PRIME SKOOL";
  const items = Array(8).fill(text);

  return (
    <section className="py-6 md:py-8 overflow-hidden border-y border-border/50 bg-secondary/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-8 text-sm md:text-base font-medium text-muted-foreground"
          >
            {item.split("–").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="text-accent mx-2">–</span>}
                {part}
              </span>
            ))}
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`duplicate-${index}`}
            className="mx-8 text-sm md:text-base font-medium text-muted-foreground"
          >
            {item.split("–").map((part, i) => (
              <span key={i}>
                {i > 0 && <span className="text-accent mx-2">–</span>}
                {part}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
