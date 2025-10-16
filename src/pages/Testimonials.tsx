import { Link } from "react-router-dom";
import { ChevronRight, Star, Award, Users, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "I've been using Panshashree coconut oil for cooking for the past year, and the difference is remarkable. The aroma fills my kitchen, and my family loves the authentic taste in our traditional dishes. It's the closest I've come to the oil my grandmother used to make!",
    },
    {
      name: "Dr. Rajesh Kumar",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "As an Ayurvedic practitioner, I recommend Panshashree to all my patients. The purity and traditional cold-pressing method ensure that all the therapeutic properties are preserved. This is genuine coconut oil, not the refined versions available in supermarkets.",
    },
    {
      name: "Meera Nair",
      location: "Kochi, Kerala",
      rating: 5,
      text: "Being from Kerala, I grew up with coconut oil, and I'm very particular about quality. Panshashree takes me back to my childhood—the golden color, the rich aroma, everything is exactly how it should be. My hair has never been healthier!",
    },
    {
      name: "Anita Desai",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "I use Panshashree coconut oil for oil pulling every morning, and the results have been amazing. My dentist even noticed the improvement in my gum health. The quality is outstanding, and knowing it's made traditionally gives me confidence in its purity.",
    },
    {
      name: "Ravi Krishnan",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "My wife and I switched to Panshashree six months ago, and we'll never go back. We use it for everything—cooking, skin care, even for our baby's massage. The fact that it's chemical-free and traditionally made is incredibly important to us as parents.",
    },
    {
      name: "Lakshmi Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The hair care coconut oil has worked wonders for my daughter's hair. She had severe hair fall, but after three months of regular use, her hair is thicker and shinier. The herbal blend is fantastic, and you can smell the natural ingredients.",
    },
    {
      name: "Suresh Menon",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "I ordered the 5-liter pack for our family, and it's been excellent value. The oil stays fresh, doesn't have any rancid smell even after months, and adds authentic flavor to our cooking. The personal customer service from the team is also commendable.",
    },
    {
      name: "Kavita Reddy",
      location: "Mysore, Karnataka",
      rating: 5,
      text: "My grandmother was skeptical when I told her about ordering coconut oil online, but when she saw and smelled Panshashree, she approved! She said it reminds her of the oil they used to make in her village. That's the highest compliment possible!",
    },
    {
      name: "Arvind Joshi",
      location: "Surat, Gujarat",
      rating: 5,
      text: "As someone who takes fitness seriously, I appreciate the MCT content in Panshashree's virgin coconut oil. I add it to my morning coffee, and it gives me sustained energy throughout my workouts. Pure, effective, and traditional—exactly what I was looking for.",
    },
  ];

  const stats = [
    { value: "1000+", label: "Happy Customers", icon: Users },
    { value: "50+", label: "Years in Business", icon: Award },
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "95%", label: "Repeat Customers", icon: TrendingUp },
  ];

  const comparisonPoints = [
    {
      panshashree: "Traditional cold-pressed method",
      commercial: "High-heat industrial extraction",
    },
    {
      panshashree: "100% pure with natural aroma",
      commercial: "Refined, bleached, deodorized",
    },
    {
      panshashree: "No chemicals or additives",
      commercial: "May contain preservatives",
    },
    {
      panshashree: "Rich golden color",
      commercial: "Artificially whitened",
    },
    {
      panshashree: "All nutrients preserved",
      commercial: "Nutritional value compromised",
    },
    {
      panshashree: "Natural coconut flavor",
      commercial: "Tasteless or artificial flavor",
    },
  ];

  const faqs = [
    {
      question: "How is Panshashree coconut oil different from store-bought brands?",
      answer: "Panshashree uses traditional cold-pressing methods that preserve all natural nutrients, aroma, and flavor. Store-bought brands often use high-heat extraction and chemical refining, which destroys many beneficial properties. Our oil is 100% pure with no additives, whereas commercial oils may contain preservatives and undergo bleaching and deodorizing processes.",
    },
    {
      question: "How do I place an order?",
      answer: "You can order by calling us at +91 95916 22649, sending a WhatsApp message, or filling out the contact form on our website. We'll confirm your order, provide payment details, and arrange delivery to your address. Our team is always happy to help you choose the right product for your needs.",
    },
    {
      question: "What is the shelf life of your coconut oil?",
      answer: "When stored properly in a cool, dry place away from direct sunlight, our coconut oil has a shelf life of 18-24 months depending on the product. The oil may naturally solidify below 24°C, which is completely normal and doesn't affect quality. We recommend using opened bottles within 12 months for best freshness.",
    },
    {
      question: "Do you deliver pan-India?",
      answer: "Yes! We deliver to all major cities and towns across India. Delivery typically takes 3-7 business days depending on your location. We use reliable courier services and package our products carefully to ensure they reach you in perfect condition. Delivery charges vary based on location and order size.",
    },
    {
      question: "Why does the oil solidify in winter?",
      answer: "Coconut oil naturally solidifies below 24°C (75°F) due to its fatty acid composition. This is actually a sign of purity! Refined commercial oils often remain liquid because they've been chemically processed. To liquefy, simply place the bottle in warm water for a few minutes. Solidification doesn't affect the oil's quality or nutritional value.",
    },
    {
      question: "Can I use the same oil for cooking and hair care?",
      answer: "Yes! Our Premium Cold-Pressed and Virgin Coconut Oil can be used for both cooking and personal care. However, for best results, we recommend our specially formulated Hair Care Coconut Oil for hair use, as it's enriched with Ayurvedic herbs that provide additional benefits for hair health.",
    },
    {
      question: "Do you have any certifications?",
      answer: "Yes, Panshashree is FSSAI certified, and our facility follows strict food safety standards. Every batch is tested by certified laboratories for purity and quality. We maintain complete traceability with batch numbers on each bottle, so you can be confident about the oil's authenticity and safety.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, UPI payments, and online banking. After you place your order, we'll provide you with our payment details. Once we receive payment confirmation, we process your order immediately for dispatch.",
    },
    {
      question: "What is your return policy?",
      answer: "Customer satisfaction is our priority. If you receive a damaged or defective product, please contact us within 48 hours of delivery with photos. We'll arrange for a replacement or full refund. However, we cannot accept returns of opened bottles due to the nature of food products. Quality concerns are taken very seriously and investigated thoroughly.",
    },
    {
      question: "Is your coconut oil suitable for people with allergies?",
      answer: "Our pure coconut oil products contain only 100% coconut oil with no additives, making them suitable for most people. However, if you have a coconut allergy, you should avoid all coconut products. Our Hair Care Oil contains additional herbs, so please check the ingredient list if you have specific allergies. When in doubt, consult your healthcare provider.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-accent to-accent-hover overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-heading">
            What Our Customers Say
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Join thousands of satisfied families across India
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white smooth-transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Testimonials</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover-lift bg-secondary">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Trusted By Families Across India
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover-lift bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2 font-heading">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Why Choose Panshashree
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-2">
                <div className="bg-accent text-accent-foreground p-6 text-center font-bold text-xl font-heading">
                  Panshashree
                </div>
                <div className="bg-destructive/10 text-destructive p-6 text-center font-bold text-xl font-heading">
                  Commercial Brands
                </div>
              </div>
              {comparisonPoints.map((point, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-secondary/30' : 'bg-card'}`}
                >
                  <div className="p-6 flex items-center gap-3 border-r border-border">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground font-medium">{point.panshashree}</span>
                  </div>
                  <div className="p-6 flex items-center gap-3">
                    <span className="text-destructive text-xl flex-shrink-0">✗</span>
                    <span className="text-muted-foreground">{point.commercial}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
            Join Our Family of Satisfied Customers
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the quality and tradition that thousands of families trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="golden" size="lg">
                View Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="goldenOutline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
