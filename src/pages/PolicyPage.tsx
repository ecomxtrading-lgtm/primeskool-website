import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

type PolicyPageProps = {
  title: string;
  content: ReactNode;
};

const PolicyPage = ({ title, content }: PolicyPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 space-y-8 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Anasayfaya dön
        </Link>

        <div className="space-y-4">
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            Prime Skool
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        </div>

        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed prose-h3:text-white prose-h3:font-semibold prose-h3:mt-6">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
