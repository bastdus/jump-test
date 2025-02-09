import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { DevIndicators } from "@/components/DevIndicators";

const ContactPage = () => {
  return (
    <>
      <Card className="animate-apparition mx-auto mb-12 max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>
            We&apos;d love to hear from you. Fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>

      <DevIndicators />
    </>
  );
};

export default ContactPage;
