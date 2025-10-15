import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import traditionalProcess from "@/assets/traditional-process.jpg";
import dryingCoconuts from "@/assets/drying-coconuts.jpg";
import heroMill from "@/assets/hero-traditional-mill.jpg";

const Process = () => {
  const processSteps = [
    {
      number: 1,
      title: "Coconut Selection",
      description: "Handpicking mature coconuts at the perfect stage of ripeness",
      details: "We work closely with local farmers who have been cultivating coconuts for generations. Each coconut is carefully inspected to ensure it has reached optimal maturity—typically 11-12 months old. At this stage, the coconut meat is thick, white, and rich in oil content. Only coconuts that meet our strict quality standards are selected for processing.",
      image: dryingCoconuts,
    },
    {
      number: 2,
      title: "Sun Drying",
      description: "Natural drying process using Kerala's warm sunlight",
      details: "After dehusking and splitting, the coconut meat (copra) is sun-dried for 2-3 days in Kerala's natural warmth. This traditional method removes moisture naturally without compromising the nutritional content. The copra is turned regularly to ensure even drying. Unlike kiln-drying which uses artificial heat, sun-drying preserves the delicate nutrients and enzymes in the coconut.",
      image: dryingCoconuts,
    },
    {
      number: 3,
      title: "Traditional Grating",
      description: "Grinding coconut meat using time-tested methods",
      details: "The dried copra is ground into fine particles using our traditional stone grinders. This slow grinding process prevents heat buildup, ensuring the copra remains cool throughout. The grinding is done in small batches to maintain quality control. The resulting coconut powder has the perfect consistency for maximum oil extraction.",
      image: traditionalProcess,
    },
    {
      number: 4,
      title: "Cold-Pressing",
      description: "Extracting pure oil without any heat treatment",
      details: "This is where our heritage truly shines. Using traditional wooden presses and modern cold-press technology, we extract oil at temperatures below 49°C (120°F). The slow pressing process takes longer but ensures that all the natural vitamins, minerals, and aromatic compounds remain intact. No chemicals or solvents are ever used—just natural mechanical pressure.",
      image: heroMill,
    },
    {
      number: 5,
      title: "Natural Filtration",
      description: "Multi-stage filtration to ensure clarity and purity",
      details: "The freshly pressed oil is allowed to settle naturally for 24 hours, during which natural particles settle at the bottom. We then use a series of fine cotton filters to remove any remaining particles. This traditional filtration method is gentle and doesn't require chemical clarification. The result is crystal-clear golden oil with all its natural goodness preserved.",
      image: heroMill,
    },
    {
      number: 6,
      title: "Natural Settling",
      description: "Allowing the oil to mature and stabilize naturally",
      details: "After filtration, the oil rests in stainless steel containers for another 2-3 days. This settling period allows the oil to stabilize naturally and develop its characteristic aroma. During this time, any microscopic particles settle, and the oil reaches its optimal clarity. Traditional wisdom teaches us that patience results in superior quality.",
      image: traditionalProcess,
    },
    {
      number: 7,
      title: "Hygienic Bottling",
      description: "Packaging in food-grade containers under strict hygiene",
      details: "Our bottling facility maintains pharmaceutical-grade cleanliness. Each bottle is sterilized before filling. The oil is filled using automated systems to prevent any contamination. Bottles are immediately sealed to lock in freshness. Every bottle is labeled with batch number, pressing date, and best-before date for complete traceability.",
      image: heroMill,
    },
    {
      number: 8,
      title: "Quality Inspection",
      description: "Final quality checks before reaching your kitchen",
      details: "Before any bottle leaves our facility, it undergoes rigorous quality testing. We check for color, aroma, clarity, and taste. Random samples from each batch are sent to certified laboratories for chemical analysis, ensuring purity and absence of any contaminants. Only after passing all quality parameters does the oil earn the Panshashree seal of quality.",
      image: heroMill,
    },
  ];

  const qualityMarkers = [
    "Traditional wooden press equipment",
    "Temperature controlled below 49°C",
    "No chemical solvents or additives",
    "Multi-stage natural filtration",
    "Laboratory tested for purity",
    "Traceable batch numbers",
    "Food safety certified facility",
    "Regular third-party audits",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${traditionalProcess})` }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-heading">
            Tradition in Every Drop
          </h1>
          <p className="text-2xl text-white/90 mb-4">
            Discover the art of traditional coconut oil making
          </p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-accent smooth-transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Our Process</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
            Why Traditional Cold-Pressing is Superior
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              In an age of industrial automation and mass production, we've chosen to preserve the time-honored 
              methods that have produced the finest coconut oil for centuries. Our traditional cold-pressing 
              process is not just a technique—it's a philosophy that respects nature's wisdom.
            </p>
            <p>
              Every step in our process is designed to preserve the natural nutrients, enzymes, and aromatic compounds 
              that make coconut oil truly beneficial. While modern extraction methods prioritize speed and quantity, 
              we prioritize quality and authenticity. The result? Oil that doesn't just look and smell better—it 
              performs better for your health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      {processSteps.map((step, index) => (
        <section
          key={step.number}
          className={index % 2 === 0 ? "py-16 sm:py-24 bg-secondary" : "py-16 sm:py-24 bg-card"}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-3xl font-bold font-heading shadow-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 font-heading text-foreground">
                  {step.title}
                </h3>
                <p className="text-xl text-accent mb-6 font-heading">
                  {step.description}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.details}
                </p>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-2xl shadow-2xl w-full hover-lift"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Quality Standards */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Our Quality Standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMarkers.map((marker) => (
              <Card key={marker} className="hover-lift bg-card">
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                  <p className="text-foreground font-medium">{marker}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-card">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6 font-heading text-foreground">
                  Purity Guarantee
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every batch of Panshashree coconut oil is tested by certified laboratories to ensure it meets 
                  the highest standards of purity and quality. We test for:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                  {[
                    "Absence of chemical additives",
                    "Fatty acid composition",
                    "Moisture content",
                    "Peroxide value (freshness)",
                    "Free fatty acid content",
                    "Saponification value",
                    "Iodine value",
                    "Heavy metal contamination",
                  ].map((test) => (
                    <li key={test} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{test}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-foreground">
            Traditional vs Commercial Production
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-xl font-heading">
                    Panshashree Method
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Cold-pressed below 49°C",
                    "No chemical extraction",
                    "Natural sun-drying",
                    "Single pressing only",
                    "Retains all nutrients",
                    "Natural aroma preserved",
                    "Rich golden color",
                    "Traditional equipment",
                    "Small batch processing",
                    "Hand-selected coconuts",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block bg-destructive/10 text-destructive px-6 py-3 rounded-full font-bold text-xl font-heading">
                    Commercial Method
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "High heat extraction (180°C+)",
                    "Chemical solvents used",
                    "Artificial kiln-drying",
                    "Multiple extractions",
                    "Nutrients degraded",
                    "Aroma removed/artificial",
                    "Bleached/refined",
                    "Industrial machinery",
                    "Mass production",
                    "Mixed quality coconuts",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex-shrink-0 mt-0.5 text-destructive text-2xl">✗</div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-heading text-foreground">
            Taste the Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the superior quality that only traditional cold-pressing can deliver
          </p>
          <Link to="/products">
            <Button variant="golden" size="lg">
              View Our Products
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
