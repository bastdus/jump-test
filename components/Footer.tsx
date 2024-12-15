import { Globe, Linkedin, WandSparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-full justify-center border-t p-4">
      <div className="grid grid-cols-2 gap-10">
        <div>
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
              KidyWoo
            </Link>
          </Button>
          <Button asChild variant="link" className="pl-0">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://writeup.co"
              target="_blank"
            >
              <WandSparkles />
              Write-up (wip)
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
