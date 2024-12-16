import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GhostIcon, Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-6 pt-6">
          <GhostIcon className="h-24 w-24 text-muted-foreground" />
          <h1 className="text-8xl font-extrabold tracking-tighter text-primary">
            404
          </h1>
          <p className="text-center text-xl text-muted-foreground">
            Oops! The page you're looking for has vanished.
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link href="/">
              <Home />
              Return Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
