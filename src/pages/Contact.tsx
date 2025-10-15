import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-accent to-accent-hover">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4 font-heading">Get in Touch</h1>
          <p className="text-xl text-white/90 mb-4">We'd love to hear from you</p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white smooth-transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 font-heading text-foreground">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="product">Product Interest</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium Cold-Pressed Oil</SelectItem>
                        <SelectItem value="virgin">Virgin Coconut Oil</SelectItem>
                        <SelectItem value="haircare">Hair Care Oil</SelectItem>
                        <SelectItem value="cooking">Cooking Oil (Economy)</SelectItem>
                        <SelectItem value="wellness">Wellness Oil</SelectItem>
                        <SelectItem value="gift">Gift Set</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message / Order Details *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." className="mt-2 min-h-32" />
                  </div>
                  <Button variant="golden" size="lg" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <Phone className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Call Us</h3>
                  <a href="tel:+919876543210" className="block text-lg text-muted-foreground hover:text-accent mb-2">+91 98765 43210</a>
                  <a href="tel:+919876543211" className="block text-lg text-muted-foreground hover:text-accent">+91 98765 43211</a>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-8">
                  <Mail className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Email Us</h3>
                  <a href="mailto:info@panshashree.com" className="text-lg text-muted-foreground hover:text-accent">info@panshashree.com</a>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-8">
                  <MapPin className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Visit Us</h3>
                  <p className="text-muted-foreground">Traditional Mill, Coconut Grove Village<br />Kerala, India - 682001</p>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-secondary">
                <CardContent className="p-8">
                  <Clock className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  <a href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20Panshashree%20coconut%20oil.%20I'd%20like%20to%20know%20more%20about..." target="_blank" rel="noopener noreferrer" className="mt-4 block">
                    <Button variant="whatsapp" className="w-full">Chat on WhatsApp</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
