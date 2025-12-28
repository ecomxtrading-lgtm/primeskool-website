import { LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  id: string;
  ratio?: "1:1" | "4:3" | "16:9" | "3:4";
  brief: string;
  icon?: LucideIcon;
  className?: string;
}

const ratioClasses = {
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-video",
  "3:4": "aspect-[3/4]",
};

const ImagePlaceholder = ({
  id,
  ratio = "4:3",
  brief,
  icon: Icon,
  className = "",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/80 to-secondary/40 ${ratioClasses[ratio]} ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right orange glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
        {/* Bottom-left blue glow */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/8 blur-3xl rounded-full" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Subtle diagonal lines */}
        <svg className="absolute bottom-4 right-4 w-24 h-24 text-accent/10" viewBox="0 0 100 100">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        {Icon && (
          <div className="relative mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center shadow-lg shadow-accent/10">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            {/* Icon glow */}
            <div className="absolute inset-0 blur-xl bg-accent/20 rounded-full" />
          </div>
        )}
        
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent">
            {id}
            <span className="text-muted-foreground/70">•</span>
            <span className="text-muted-foreground/70">{ratio}</span>
          </span>
          <p className="text-xs text-muted-foreground/80 max-w-[200px] leading-relaxed">
            {brief}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rotate-45" />
      </div>
    </div>
  );
};

export default ImagePlaceholder;
