import { Link } from "react-router-dom";
import { ChevronRight, Users, Heart, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import coconutGrove from "@/assets/coconut-grove.jpg";
import traditionalProcess from "@/assets/traditional-process.jpg";

const Heritage = () => {
  const culturalUses = [
    {
      icon: "🍳",
      title: "Cooking Traditions",
      description: "For centuries, coconut oil has been the heart of South Indian cuisine. From crispy dosas to aromatic curries, it adds a unique flavor and nutritional richness that no other oil can match.",
    },
    {
      icon: "💆",
      title: "Wellness Practices",
      description: "Ayurveda recognizes coconut oil as a cooling, nourishing substance. Used in oil pulling, massage therapy, and natural remedies, it has been a cornerstone of traditional wellness for over 5,000 years.",
    },
    {
      icon: "🕉️",
      title: "Cultural Ceremonies",
      description: "Pure coconut oil holds sacred significance in Hindu rituals and ceremonies. It's used to light lamps in temples and homes, symbolizing the removal of darkness and ignorance.",
    },
    {
      icon: "💇",
      title: "Hair Care Rituals",
      description: "The traditional practice of coconut oil hair massage has been passed down through generations. Known as 'champi,' this ritual promotes hair health, relaxation, and family bonding.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${coconutGrove})` }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-heading">
            A Legacy of Liquid Gold
          </h1>
          <p className="text-2xl text-white/90 mb-4">
            Celebrating coconut oil's sacred place in Indian heritage
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-accent smooth-transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Heritage</span>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Coconut Oil in Indian Culture
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Long before modern science validated its benefits, ancient Indian civilizations recognized coconut oil 
              as a divine gift. Sanskrit texts dating back thousands of years describe the coconut palm as 
              "Kalpa Vriksha"—the tree that fulfills all wishes—and its oil as liquid prosperity.
            </p>
            <p>
              In the coastal regions of Kerala, Karnataka, and Tamil Nadu, coconut oil isn't just an ingredient—it's 
              an integral part of daily life. From the first oil massage a newborn receives to the sacred lamps 
              lit during festivals, coconut oil marks every important milestone and celebration.
            </p>
            <p>
              Traditional Ayurvedic texts like the Charaka Samhita and Sushruta Samhita extensively document coconut 
              oil's therapeutic properties. Ancient physicians prescribed it for everything from digestive health to 
              skin ailments, recognizing properties that modern research is only now beginning to understand.
            </p>
            <p>
              The traditional method of extracting coconut oil—the same method we use at Panshashree—was developed 
              through centuries of refinement. Our ancestors understood that patience and purity produce superior 
              quality, a wisdom that industrial methods have forgotten but we proudly preserve.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Significance */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={traditionalProcess}
                alt="Kerala coconut groves"
                className="rounded-2xl shadow-xl w-full hover-lift"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
                The Karavali Coast: Where Tradition Meets Quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Karavali coastal region of Mangaluru, in Dakshina Kannada district of Karnataka, is blessed with 
                  perfect conditions for coconut cultivation. The tropical coastal climate, laterite-rich red soil, and 
                  abundant monsoon rainfall create an environment where coconut palms thrive with exceptional oil content 
                  and nutritional density.
                </p>
                <p>
                  Panchashree's oil comes from traditional family groves in Mundaje, Belthangady, and surrounding areas 
                  where coconut cultivation is not just agriculture—it's a heritage. These farmers don't just grow coconuts; 
                  they nurture each tree, understanding its rhythms and needs through generations of intimate knowledge passed 
                  down through families.
                </p>
                <p>
                  The specific varieties of coconuts grown in our Karavali region—adapted over centuries to the coastal 
                  microclimate—produce coconuts with higher oil content and richer nutritional profiles. Each variety 
                  contributes unique characteristics to our oil's authentic flavor, golden color, and health benefits.
                </p>
                <p>
                  The combination of sea breeze, mineral-rich laterite soil, and traditional sustainable farming methods 
                  creates coconuts that are simply superior in quality. When you choose Panchashree, you're experiencing 
                  the essence of coastal Karnataka's agricultural heritage, captured in every golden drop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Practices */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Traditional Uses Through Generations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalUses.map((use) => (
              <Card key={use.title} className="hover-lift bg-secondary">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{use.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 font-heading text-foreground">{use.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{use.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-accent/10 border-2 border-accent">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-center mb-6 font-heading text-foreground">
                  The Sacred Coconut Oil Lamp
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  In traditional Hindu households, the day begins by lighting a lamp with pure coconut oil. 
                  This simple ritual, performed for thousands of years, symbolizes the triumph of knowledge 
                  over ignorance, light over darkness. The lamp fueled by coconut oil burns steady and bright, 
                  just as Panshashree keeps the flame of tradition alive in modern times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Supporting Our Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Fair Farmer Partnerships",
                description: "We work directly with 150+ coconut farmers, ensuring fair prices and sustainable livelihoods.",
              },
              {
                icon: Leaf,
                title: "Sustainable Practices",
                description: "Supporting organic farming methods and traditional agricultural wisdom.",
              },
              {
                icon: Heart,
                title: "Local Employment",
                description: "Creating jobs for 50+ families in our community, preserving traditional skills.",
              },
              {
                icon: Award,
                title: "Economic Growth",
                description: "Contributing to rural economic development while preserving cultural heritage.",
              },
            ].map((impact) => (
              <Card key={impact.title} className="hover-lift bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <impact.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-foreground">{impact.title}</h3>
                  <p className="text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-card">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 font-heading text-foreground">
                Preserving Traditional Knowledge
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Panshashree, we don't just make coconut oil—we safeguard centuries of accumulated wisdom. 
                We employ local artisans who learned the craft from their parents and grandparents. We maintain 
                traditional equipment alongside modern hygiene standards. We support coconut farmers who practice 
                sustainable agriculture as their ancestors did.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every bottle sold helps preserve this knowledge for future generations. When you choose Panshashree, 
                you're not just buying coconut oil—you're supporting a living heritage, ensuring that traditional 
                wisdom continues to enrich lives in our modern world.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Traditional Quote */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🥥</span>
            </div>
          </div>
          <blockquote className="text-3xl sm:text-4xl font-heading text-foreground italic leading-relaxed mb-8">
            "Narikelasya phalam divyam, tailam cha paramam bhavet"
          </blockquote>
          <p className="text-xl text-accent mb-4 font-heading">
            — Ancient Sanskrit Proverb
          </p>
          <p className="text-lg text-muted-foreground">
            Translation: "Divine is the fruit of the coconut, and supreme is its oil"
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
            Be Part of Our Heritage
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the tradition that has nourished generations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="golden" size="lg">
                View Our Products
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="goldenOutline" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heritage;
