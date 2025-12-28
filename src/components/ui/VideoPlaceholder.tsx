import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  id: string;
  caption?: string;
  className?: string;
}

const VideoPlaceholder = ({
  id,
  caption = "Video placeholder",
  className = "",
}: VideoPlaceholderProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/80 to-secondary/40 aspect-video ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Center gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        {/* Orange glow behind play button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/15 blur-3xl rounded-full" />
        {/* Subtle scan lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)`,
          }}
        />
      </div>

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative group cursor-pointer">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: '3s' }} />
          {/* Button */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-foreground flex items-center justify-center shadow-xl shadow-accent/30 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-white ml-1" fill="white" fillOpacity={0.9} />
          </div>
          {/* Glow */}
          <div className="absolute inset-0 blur-xl bg-accent/40 rounded-full group-hover:bg-accent/50 transition-colors" />
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-medium text-accent">
              {id}
            </span>
          </div>
          <p className="text-xs text-muted-foreground/70">16:9</p>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{caption}</p>
      </div>

      {/* Timeline bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/30">
        <div className="h-full w-0 bg-accent rounded-full" />
      </div>
    </div>
  );
};

export default VideoPlaceholder;
