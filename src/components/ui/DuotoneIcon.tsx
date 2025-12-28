import { LucideIcon } from "lucide-react";

interface DuotoneIconProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeConfig = {
  sm: {
    container: "w-10 h-10",
    icon: "w-5 h-5",
  },
  md: {
    container: "w-12 h-12",
    icon: "w-6 h-6",
  },
  lg: {
    container: "w-14 h-14",
    icon: "w-7 h-7",
  },
};

const DuotoneIcon = ({ icon: Icon, size = "md", className = "" }: DuotoneIconProps) => {
  const config = sizeConfig[size];

  return (
    <div className={`relative ${className}`}>
      {/* Background glow */}
      <div className={`absolute inset-0 ${config.container} bg-accent/20 blur-xl rounded-xl`} />
      
      {/* Icon container */}
      <div
        className={`relative ${config.container} rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-300`}
      >
        <Icon className={`${config.icon} text-accent`} />
      </div>
    </div>
  );
};

export default DuotoneIcon;
