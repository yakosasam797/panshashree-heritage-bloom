import { Link } from "react-router-dom";
import { Heart, Target, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coconutGrove from "@/assets/coconut-grove.jpg";
import traditionalProcess from "@/assets/traditional-process.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${coconutGrove})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-heading">Our Story</h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-accent smooth-transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Heritage Narrative */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl text-foreground leading-relaxed mb-8 font-heading">
            In the serene coastal region of Karavali, Mangaluru, where coconut palms sway in the sea breeze and 
            tradition flows through every generation, Panchashree was born from a simple yet profound belief: 
            authentic quality cannot be compromised.
          </p>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2013, Panchashree Coconut Oil has been dedicated to delivering the finest quality coconut oil 
              crafted with care and tradition. Our journey began in Mundaje, Belthangady, in the heart of Dakshina Kannada 
              district, with a mission to bring the purest form of coconut oil to households across India.
            </p>

            <p>
              We blend time-honored production methods practiced in the coastal Karavali region with modern standards 
              of quality and hygiene. Our commitment has always been clear: preserve the authentic tradition of 
              cold-pressed coconut oil making while maintaining the highest standards of purity and safety.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-8 my-12 rounded-r-lg">
              <p className="text-2xl text-foreground italic font-heading leading-relaxed">
                "At Panchashree, we pride ourselves on preserving the heritage of traditional coconut oil production. 
                Based in the serene Karavali region of Mangaluru, we craft pure, unrefined coconut oil using techniques 
                that respect nature and celebrate the culture of coastal Karnataka."
              </p>
              <p className="text-right text-muted-foreground mt-4">— Our Philosophy</p>
            </div>

            <p>
              At Panchashree, we take pride in sourcing premium coconuts from trusted farms and processing them with 
              precision to retain their natural aroma, flavor, and nutritional benefits. We handpick coconuts at the 
              perfect stage of maturity, sun-dry them using the warmth of Karnataka's coastal sun, and cold-press 
              every batch without heat or chemicals.
            </p>

            <p>
              Over the years, we have become a trusted name for health-conscious families, offering coconut oil that 
              is versatile for cooking, skincare, and haircare. Our story is about preserving traditional coastal wisdom, 
              maintaining unwavering quality standards, and sharing the gift of authentic wellness with every family we serve.
            </p>
          </div>
        </div>
      </section>

      {/* The Place Section */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
                The Karavali Region: Where Tradition Meets Quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Karavali coastal region of Mangaluru, in Dakshina Kannada district, is blessed with the perfect 
                  climate for coconut cultivation. The tropical coastal weather, laterite-rich red soil, and abundant 
                  monsoon rainfall create an environment where coconut palms don't just grow—they thrive with exceptional 
                  oil content.
                </p>
                <p>
                  Our coconuts come from trusted farms in Mundaje, Belthangady, and surrounding areas where farmers have 
                  been cultivating coconuts for generations. These aren't commercial plantations but carefully managed groves 
                  where sustainable farming is a way of life, passed down through families.
                </p>
                <p>
                  The unique coastal climate of the Karavali region produces coconuts with higher oil content and richer 
                  nutritional profiles. The combination of sea breeze, mineral-rich laterite soil, and traditional farming 
                  methods creates coconuts that are simply superior in quality and flavor.
                </p>
                <p>
                  When you choose Panchashree, you're not just choosing coconut oil—you're choosing the essence of 
                  coastal Karnataka's agricultural heritage, captured in every golden drop.
                </p>
              </div>
            </div>
            <div>
              <img
                src={traditionalProcess}
                alt="Kerala coconut groves"
                className="rounded-2xl shadow-xl w-full hover-lift"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver the finest quality coconut oil by preserving traditional coastal methods while meeting 
                  modern quality standards. We are committed to ensuring every family experiences pure, natural goodness 
                  through our carefully crafted oil. We support sustainable farming practices and maintain the highest 
                  standards of hygiene and authenticity in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Authenticity, purity, and tradition guide everything we do. We believe in transparency, treating 
                  our farmers fairly, and never compromising on quality. Every decision we make is rooted in respect—
                  for nature, for tradition, and for the families who trust us with their health and wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-secondary">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Our Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every bottle of Panchashree coconut oil is our promise to you: 100% pure, cold-pressed, and free 
                  from any chemicals or additives. We promise to maintain the traditional coastal methods that ensure 
                  superior quality, bringing you coconut oil that preserves its natural aroma, flavor, and nutritional 
                  benefits—perfect for cooking, skincare, and haircare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 font-heading text-foreground">
            Our Journey Through Time
          </h2>
          <div className="space-y-12">
            {[
              {
                year: "2013",
                title: "The Foundation",
                description: "Panchashree Coconut Oil established in Mundaje, Belthangady, with a vision to deliver pure, traditionally-made coconut oil to health-conscious families.",
              },
              {
                year: "2015",
                title: "Building Trust",
                description: "Expanded reach across Dakshina Kannada district, earning trust through consistent quality and authentic traditional methods.",
              },
              {
                year: "2018",
                title: "Regional Recognition",
                description: "Became a recognized name in coastal Karnataka for pure cold-pressed coconut oil, serving hundreds of satisfied families.",
              },
              {
                year: "2021",
                title: "Modern Standards",
                description: "Upgraded facility with modern hygiene standards while preserving traditional coastal processing methods.",
              },
              {
                year: "2025",
                title: "Growing Legacy",
                description: "Continuing our commitment to purity, tradition, and quality—bringing the finest coconut oil from Karavali to families across India.",
              },
            ].map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl font-heading shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
            Experience the Tradition
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover our products and become part of the Panshashree family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="golden" size="lg">
                View Products
              </Button>
            </Link>
            <Link to="/process">
              <Button variant="goldenOutline" size="lg">
                See Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
