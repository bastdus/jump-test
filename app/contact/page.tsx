import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <Card className="mx-auto max-w-2xl">
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
  );
};

export default ContactPage;
