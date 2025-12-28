import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type InViewProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
};

const InView: React.FC<InViewProps> = ({
  children,
  className,
  delayMs = 0,
  durationMs = 900
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform transition-all ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      style={{ transitionDelay: `${delayMs}ms`, transitionDuration: `${durationMs}ms` }}
    >
      {children}
    </div>
  );
};

export default InView;

