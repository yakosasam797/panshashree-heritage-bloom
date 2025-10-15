import { Link } from "react-router-dom";
import { ChevronDown, Check, Flower2, Droplet, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-traditional-mill.jpg";
import productBottles from "@/assets/product-bottles.jpg";
import traditionalProcess from "@/assets/traditional-process.jpg";

const Index = () => {
  const products = [
    {
      name: "Premium Cold-Pressed Coconut Oil",
      description: "Our flagship product, crafted using traditional methods passed down through generations.",
      sizes: [
        { size: "250ml", price: "₹250" },
        { size: "500ml", price: "₹480" },
      ],
      features: ["Cold-pressed", "Chemical-free", "Traditional method", "No preservatives"],
      image: productBottles,
    },
    {
      name: "Virgin Coconut Oil",
      description: "Extra virgin coconut oil extracted from fresh coconut meat, perfect for cooking and wellness.",
      sizes: [
        { size: "250ml", price: "₹280" },
        { size: "500ml", price: "₹540" },
      ],
      features: ["Cold-pressed", "Chemical-free", "Traditional method", "No preservatives"],
      image: productBottles,
    },
    {
      name: "Hair Care Coconut Oil",
      description: "Specially crafted for hair nourishment, enriched with traditional herbs.",
      sizes: [
        { size: "200ml", price: "₹220" },
        { size: "400ml", price: "₹420" },
      ],
      features: ["Cold-pressed", "Chemical-free", "Traditional method", "No preservatives"],
      image: productBottles,
    },
  ];

  const features = [
    {
      icon: Droplet,
      title: "Traditional Method",
      description: "Cold-pressed using traditional techniques preserving natural nutrients.",
    },
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "100% natural with no chemicals, additives, or preservatives.",
    },
    {
      icon: Flower2,
      title: "Heritage Recipe",
      description: "Time-tested family recipe passed down through generations.",
    },
    {
      icon: Award,
      title: "Trusted Quality",
      description: "Serving 1000+ families with premium quality coconut oil.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Selection", description: "Handpicking mature coconuts" },
    { number: 2, title: "Drying", description: "Sun-drying the coconut meat" },
    { number: 3, title: "Cold-Pressing", description: "Extracting oil without heat" },
    { number: 4, title: "Bottling", description: "Hygienic packaging" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Flower2 className="w-12 h-12 text-accent-foreground" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">
            Panshashree
          </h1>
          <p className="text-2xl sm:text-3xl text-accent mb-4 font-heading">
            Rooted in Tradition, Perfected Over Time
          </p>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Discover the golden essence of traditional cold-pressed coconut oil, crafted with care in the heart of Kerala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="golden" size="lg" className="text-lg px-8 py-6">
                Explore Our Products
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="goldenOutline" size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
                Our Story
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={traditionalProcess}
                alt="Traditional oil-making process"
                className="rounded-2xl shadow-xl w-full hover-lift"
                loading="lazy"
              />
            </div>
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Heritage
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-foreground">
                Crafted with Tradition, Made with Love
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For over 50 years, Panshashree has been the guardian of traditional coconut oil making in Kerala. 
                  Our story began in a small village, where our founder discovered the perfect balance between ancient wisdom 
                  and natural purity.
                </p>
                <p>
                  Every drop of Panshashree coconut oil carries the essence of our heritage—cold-pressed using traditional methods, 
                  free from chemicals, and rich with the natural goodness that only time-honored practices can deliver.
                </p>
                <p>
                  We believe that the best things in life cannot be rushed. That's why we continue to follow the same 
                  careful process our ancestors perfected generations ago.
                </p>
              </div>
              <Link to="/about">
                <Button variant="golden" size="lg" className="mt-8">
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { value: "50+", label: "Years of Heritage" },
              { value: "100%", label: "Natural & Pure" },
              { value: "0", label: "Chemicals Added" },
              { value: "1000+", label: "Happy Families" },
            ].map((stat) => (
              <Card key={stat.label} className="bg-secondary hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-heading">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Products
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-heading text-foreground">
              Premium Coconut Oil Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each bottle is a testament to our commitment to purity, tradition, and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {product.sizes.map((sizeOption) => (
                      <div key={sizeOption.size} className="flex justify-between items-center py-2 border-b border-border">
                        <span className="font-semibold text-foreground">{sizeOption.size}</span>
                        <span className="text-accent font-bold text-lg">{sizeOption.price}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="golden" className="w-full">
                      Order Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="goldenOutline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-heading text-foreground">
            Why Choose Panshashree
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="hover-lift bg-secondary">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-heading text-foreground">
              Our Traditional Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From coconut grove to your kitchen—discover how we preserve tradition in every step
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold font-heading shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/process">
              <Button variant="golden" size="lg">
                Discover Complete Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-foreground">
            Experience the Tradition
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to bring the purity of traditional coconut oil to your home? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/products">
              <Button variant="golden" size="lg" className="text-lg px-8">
                View Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="goldenOutline" size="lg" className="text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-secondary rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2 font-heading">📞 Call Us</div>
              <a href="tel:+919876543210" className="text-foreground hover:text-accent smooth-transition">
                +91 98765 43210
              </a>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <div className="text-2xl font-bold text-success mb-2 font-heading">💬 WhatsApp</div>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20Panshashree%20coconut%20oil.%20I'd%20like%20to%20know%20more%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-success smooth-transition"
              >
                Chat Now
              </a>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2 font-heading">✉️ Email</div>
              <a href="mailto:info@panshashree.com" className="text-foreground hover:text-accent smooth-transition">
                info@panshashree.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
