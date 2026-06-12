import { SmileIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Radiant Wizard. Built with React,
            Next.js, and Tailwind CSS.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Designed and developed with love <SmileIcon />
          </p>
        </div>
      </div>
    </footer>
  );
}
