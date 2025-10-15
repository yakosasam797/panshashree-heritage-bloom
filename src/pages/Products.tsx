import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productBottles from "@/assets/product-bottles.jpg";
import product500ml from "@/assets/product-500ml.jpg";

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const products = [
    {
      name: "Premium Cold-Pressed Coconut Oil",
      description: "Our flagship product, crafted using traditional methods passed down through generations. Perfect for cooking, skin care, and hair nourishment.",
      image: product500ml,
      sizes: [
        { size: "250ml", price: "₹250" },
        { size: "500ml", price: "₹480" },
        { size: "1L", price: "₹920" },
      ],
      features: ["Traditional cold-pressed", "Chemical-free processing", "No heat treatment", "No preservatives", "Fresh coconut aroma", "Rich in MCTs"],
      benefits: "Rich in medium-chain triglycerides (MCTs), vitamin E, and antioxidants. Supports heart health, boosts metabolism, and provides natural antimicrobial properties.",
      howToUse: "Perfect for cooking at medium heat, deep frying, baking, and as a healthy substitute for butter. Also excellent for oil pulling, skin moisturizing, and hair care.",
      storage: "Store in a cool, dry place away from direct sunlight. Natural solidification below 24°C is normal and doesn't affect quality.",
      ingredients: "100% pure cold-pressed coconut oil extracted from mature coconuts",
    },
    {
      name: "Virgin Coconut Oil",
      description: "Extra virgin coconut oil extracted from fresh coconut meat using traditional wet-milling process. Retains maximum nutrients and natural aroma.",
      image: productBottles,
      sizes: [
        { size: "250ml", price: "₹280" },
        { size: "500ml", price: "₹540" },
        { size: "1L", price: "₹1040" },
      ],
      features: ["Wet-milled virgin oil", "Superior nutrient retention", "Intense coconut aroma", "Chemical-free", "Cold-processed", "First pressing only"],
      benefits: "Higher concentration of antioxidants and nutrients. Excellent for immune support, weight management, and skin health. Contains lauric acid for natural antibacterial properties.",
      howToUse: "Best consumed raw for maximum health benefits. Add to smoothies, salads, or coffee. Use for low-heat cooking, skin care, and therapeutic massage.",
      storage: "Refrigeration optional. Keep away from heat and direct sunlight. Shelf life of 24 months when stored properly.",
      ingredients: "100% virgin coconut oil from fresh coconut milk",
    },
    {
      name: "Hair Care Coconut Oil",
      description: "Specially crafted coconut oil enriched with traditional Ayurvedic herbs like hibiscus, curry leaves, and amla. Formulated for deep hair nourishment.",
      image: product500ml,
      sizes: [
        { size: "200ml", price: "₹220" },
        { size: "400ml", price: "₹420" },
        { size: "800ml", price: "₹800" },
      ],
      features: ["Enriched with Ayurvedic herbs", "Cold-pressed base", "Promotes hair growth", "Reduces hair fall", "Natural conditioning", "Chemical-free"],
      benefits: "Strengthens hair roots, prevents premature graying, adds natural shine, and reduces dandruff. The herbal infusion provides deep conditioning and scalp nourishment.",
      howToUse: "Warm slightly and massage into scalp and hair. Leave for 1-2 hours or overnight for best results. Wash with mild shampoo. Use 2-3 times weekly.",
      storage: "Store in a cool place. Shake well before use as herbs may settle. Use within 12 months of opening.",
      ingredients: "Cold-pressed coconut oil infused with hibiscus flowers, curry leaves, amla, and fenugreek seeds",
    },
    {
      name: "Cooking Coconut Oil (Economy)",
      description: "High-quality cold-pressed coconut oil in larger quantities for regular cooking needs. Same traditional process, value pricing for families.",
      image: productBottles,
      sizes: [
        { size: "2L", price: "₹1750" },
        { size: "5L", price: "₹4200" },
      ],
      features: ["Traditional cold-pressed", "High smoke point", "Long shelf life", "Pure and natural", "No chemical refining", "Economical packaging"],
      benefits: "Ideal for everyday cooking with all the health benefits of cold-pressed oil. High smoke point makes it perfect for Indian cooking methods.",
      howToUse: "Suitable for all types of cooking including deep frying, sautéing, baking, and tempering. Replace regular cooking oil for healthier meals.",
      storage: "Store in original container in a cool, dry place. Avoid moisture contamination. Shelf life of 18 months.",
      ingredients: "100% cold-pressed coconut oil",
    },
    {
      name: "Wellness Coconut Oil",
      description: "Premium grade coconut oil specially processed for oil pulling and therapeutic use. Highest purity standards for oral and wellness applications.",
      image: product500ml,
      sizes: [
        { size: "250ml", price: "₹320" },
        { size: "500ml", price: "₹610" },
      ],
      features: ["Extra fine filtration", "Cold-pressed virgin oil", "Medical grade purity", "Neutral taste", "Perfect for oil pulling", "Therapeutic quality"],
      benefits: "Supports oral health through oil pulling, improves gum health, naturally whitens teeth, and promotes detoxification. Also excellent for massage therapy.",
      howToUse: "For oil pulling: Swish 1 tablespoon in mouth for 10-20 minutes on empty stomach, then spit out. For massage: Warm slightly and apply to body.",
      storage: "Keep in original container. Refrigeration extends shelf life. Use clean, dry spoon to avoid contamination.",
      ingredients: "100% pure cold-pressed virgin coconut oil with extra filtration",
    },
    {
      name: "Gift Set - Heritage Collection",
      description: "Beautifully packaged set featuring our premium oils in traditional brass containers. Perfect for gifting on special occasions.",
      image: productBottles,
      sizes: [
        { size: "Gift Set (3x250ml)", price: "₹850" },
        { size: "Premium Gift Set (3x500ml)", price: "₹1600" },
      ],
      features: ["Premium cold-pressed oil", "Traditional brass containers", "Elegant packaging", "Includes: Cooking, Virgin & Hair oil", "Gift-ready presentation", "Heritage design"],
      benefits: "The perfect gift for health-conscious friends and family. Showcases the complete Panshashree range in beautiful traditional packaging.",
      howToUse: "Each oil comes with usage instructions. Makes an excellent gift for weddings, festivals, housewarmings, or corporate gifting.",
      storage: "Store individual containers as per product guidelines. Brass containers add natural preservation properties.",
      ingredients: "Set includes Premium Cold-Pressed Oil, Virgin Coconut Oil, and Hair Care Coconut Oil",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-accent to-accent-hover overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-heading">Our Products</h1>
          <p className="text-2xl text-white/90 mb-4">Pure. Traditional. Authentic.</p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link to="/" className="hover:text-white smooth-transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Products</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.name} className="hover-lift">
                <CardContent className="p-8">
                  <div className="aspect-square bg-secondary rounded-xl mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 font-heading text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-4 bg-secondary/50 rounded-lg p-4">
                    {product.sizes.map((sizeOption) => (
                      <div key={sizeOption.size} className="flex justify-between items-center py-2">
                        <span className="font-semibold text-foreground">{sizeOption.size}</span>
                        <span className="text-accent font-bold text-xl">{sizeOption.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/70 smooth-transition mb-4"
                  >
                    <span className="font-semibold text-foreground">Learn More</span>
                    {expandedProduct === index ? (
                      <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent" />
                    )}
                  </button>

                  {expandedProduct === index && (
                    <div className="space-y-4 mb-4 p-4 bg-secondary/30 rounded-lg animate-fade-in">
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Benefits:</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.benefits}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">How to Use:</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.howToUse}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Storage:</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.storage}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Ingredients:</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.ingredients}</p>
                      </div>
                    </div>
                  )}

                  <Link to="/contact">
                    <Button variant="golden" className="w-full">
                      Order Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Information */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 font-heading text-foreground">
            Why Cold-Pressed?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center mb-12 text-xl">
              Understanding the difference between traditional cold-pressing and modern commercial methods
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-heading">Traditional Cold-Pressing</h3>
                  <ul className="space-y-3">
                    {[
                      "No heat applied during extraction",
                      "Retains all natural nutrients",
                      "Preserves natural aroma and flavor",
                      "No chemical solvents used",
                      "Single pressing process",
                      "Lower yield, higher quality",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-destructive font-heading">Commercial Production</h3>
                  <ul className="space-y-3">
                    {[
                      "High heat used for extraction",
                      "Nutrients degraded by heat",
                      "Natural aroma lost",
                      "Often uses chemical solvents",
                      "Multiple processing stages",
                      "High yield, compromised quality",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <div className="w-5 h-5 flex-shrink-0 mt-1 text-destructive">✗</div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-accent/10 rounded-xl border-l-4 border-accent">
              <h4 className="text-2xl font-bold mb-4 font-heading text-foreground">The Panshashree Difference</h4>
              <p className="leading-relaxed">
                Our cold-pressing process ensures that every bottle of Panshashree coconut oil retains the complete 
                nutritional profile nature intended. We never compromise on quality for quantity. Each batch is 
                carefully monitored, naturally filtered, and bottled with the same care our grandparents would have 
                taken. This is why Panshashree oil has a richer aroma, better taste, and superior health benefits 
                compared to commercially refined oils.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 sm:py-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${productBottles})` }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-heading">Ready to Order? Contact Us Today</h2>
          <p className="text-xl mb-8 text-white/90">
            We're here to help you choose the perfect product for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919876543210">
              <Button variant="golden" size="lg" className="text-lg px-8">
                📞 Call Us: +91 98765 43210
              </Button>
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20Panshashree%20coconut%20oil.%20I'd%20like%20to%20know%20more%20about..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="text-lg px-8">
                💬 WhatsApp Chat
              </Button>
            </a>
          </div>
          <Link to="/contact">
            <Button variant="goldenOutline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Contact Form
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
