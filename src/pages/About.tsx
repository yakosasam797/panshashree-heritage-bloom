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
            In the heart of Kerala, where coconut palms sway in the tropical breeze and tradition runs as deep 
            as the monsoon rains, Panshashree was born from a simple yet profound belief: the best things in 
            life cannot be rushed.
          </p>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Our journey began over five decades ago, when our founder, inspired by his grandmother's traditional 
              oil-making methods, decided to preserve this dying art. In an era when industrial production was 
              becoming the norm, he chose the path less traveled—the path of patience, purity, and tradition.
            </p>

            <p>
              The small wooden press that started our legacy still stands in our facility today, a testament to 
              our commitment to authentic, cold-pressed coconut oil. Generation after generation, we've passed 
              down not just recipes, but values: respect for nature, dedication to quality, and an unwavering 
              commitment to our customers.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-8 my-12 rounded-r-lg">
              <p className="text-2xl text-foreground italic font-heading leading-relaxed">
                "True quality is not an act, it is a habit. In every drop of oil we create, you'll find 
                the patience of our ancestors and the purity of Kerala's blessed land."
              </p>
              <p className="text-right text-muted-foreground mt-4">— Founder's Philosophy</p>
            </div>

            <p>
              Today, Panshashree serves over a thousand families across India, but our method remains unchanged. 
              We still handpick coconuts at the perfect stage of maturity. We still sun-dry them using the warmth 
              of Kerala's golden rays. And we still cold-press every batch without the use of heat or chemicals, 
              ensuring that nature's goodness reaches you exactly as it was meant to be.
            </p>

            <p>
              Our story is not just about coconut oil. It's about preserving a way of life, honoring the wisdom 
              of our ancestors, and sharing the gift of authentic, traditional wellness with every family we serve.
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
                The Land That Gives Us Liquid Gold
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kerala, God's Own Country, is blessed with the perfect climate for coconut cultivation. The tropical 
                  weather, rich red soil, and abundant rainfall create an environment where coconut palms don't just 
                  grow—they thrive.
                </p>
                <p>
                  Our coconuts come from traditional groves that have been nurtured by local farmers for generations. 
                  These aren't commercial plantations but family-owned lands where each tree is known by name, where 
                  sustainable farming is a way of life, not a marketing term.
                </p>
                <p>
                  The unique coastal climate of this region produces coconuts with higher oil content and richer 
                  nutritional profiles. The combination of sea breeze, laterite soil, and traditional farming methods 
                  creates coconuts that are simply superior in quality.
                </p>
                <p>
                  When you choose Panshashree, you're not just choosing coconut oil—you're choosing the essence of 
                  Kerala's agricultural heritage, captured in every golden drop.
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
                  To preserve and share the authentic tradition of cold-pressed coconut oil making, ensuring that 
                  every family experiences the pure, natural goodness that our ancestors cherished. We are committed 
                  to maintaining the highest standards of quality while supporting sustainable farming practices and 
                  local communities.
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
                  Every bottle of Panshashree coconut oil is our promise to you: 100% pure, cold-pressed, and free 
                  from any chemicals or additives. We promise to continue the traditions that have defined us for 
                  over 50 years, bringing you the same quality our grandparents would have been proud to serve.
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
                year: "1970",
                title: "The Beginning",
                description: "Founded with a single traditional wooden press and a vision to preserve authentic coconut oil making.",
              },
              {
                year: "1985",
                title: "Growing Roots",
                description: "Expanded to serve 100 families across Kerala while maintaining our traditional methods.",
              },
              {
                year: "2000",
                title: "Next Generation",
                description: "Second generation takes over, bringing modern hygiene standards while preserving traditional techniques.",
              },
              {
                year: "2015",
                title: "National Recognition",
                description: "Panshashree becomes a trusted name across India, serving over 1000 families.",
              },
              {
                year: "2024",
                title: "Heritage Continues",
                description: "Celebrating over 50 years of tradition, purity, and unwavering commitment to quality.",
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
