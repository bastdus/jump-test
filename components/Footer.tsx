import { Globe, Linkedin, WandSparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t p-4">
      <div className="md:flex md:w-1/2 md:max-w-xl md:items-center md:justify-between">
        <div className="mb-4">
          <p className="italic">Proposed by:</p>
          <Button asChild variant="link" className="pl-0">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://linkedin.com/in/bastien-duseaux"
              target="_blank"
            >
              {/* Linkedin logo deprecated, ok for the POC */}
              <Linkedin />
              Bastien Duseaux
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-start">
          <p className="italic">Other projects:</p>
          <Button asChild variant="link" className="pl-0">
            <Link
              className="hover:underline hover:underline-offset-4"
              href="https://kidywoo.com"
              target="_blank"
            >
              <Globe />
              Kidywoo
            </Link>
          </Button>
          <Button asChild variant="link" className="pl-0">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://writeup.co"
              target="_blank"
            >
              <WandSparkles />
              WriteUp (wip)
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
