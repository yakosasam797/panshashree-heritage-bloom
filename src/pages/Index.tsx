import { Link } from "react-router-dom";
import { ChevronDown, Check, Flower2, Droplet, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-traditional-mill.jpg";
import productBottles from "@/assets/product-bottles.jpg";
import product500ml from "@/assets/product-500ml.jpg";
import traditionalProcess from "@/assets/traditional-process.jpg";
const Index = () => {
  const products = [{
    name: "Coconut Oil - 250ml",
    description: "Pure cold-pressed coconut oil perfect for cooking, skin care, and hair nourishment. Ideal for trying our quality.",
    sizes: [{
      size: "250ml",
      price: "Contact for Price"
    }],
    features: ["Cold-pressed", "Chemical-free", "Traditional coastal method", "No preservatives"],
    image: productBottles
  }, {
    name: "Coconut Oil - 500ml",
    description: "Our most popular size, offering the perfect balance of quality and value for regular family use.",
    sizes: [{
      size: "500ml",
      price: "Contact for Price"
    }],
    features: ["Cold-pressed", "Chemical-free", "Traditional coastal method", "No preservatives"],
    image: product500ml
  }, {
    name: "Coconut Oil - 1 Litre",
    description: "Best value for families who appreciate authentic coconut oil. Economical packaging for extended use.",
    sizes: [{
      size: "1 Litre",
      price: "Contact for Price"
    }],
    features: ["Cold-pressed", "Chemical-free", "Traditional coastal method", "No preservatives"],
    image: productBottles
  }];
  const features = [{
    icon: Droplet,
    title: "Traditional Method",
    description: "Cold-pressed using traditional techniques preserving natural nutrients."
  }, {
    icon: Leaf,
    title: "Pure & Natural",
    description: "100% natural with no chemicals, additives, or preservatives."
  }, {
    icon: Flower2,
    title: "Heritage Recipe",
    description: "Time-tested family recipe passed down through generations."
  }, {
    icon: Award,
    title: "Trusted Quality",
    description: "Serving 1000+ families with premium quality coconut oil."
  }];
  const processSteps = [{
    number: 1,
    title: "Selection",
    description: "Handpicking mature coconuts"
  }, {
    number: 2,
    title: "Drying",
    description: "Sun-drying the coconut meat"
  }, {
    number: 3,
    title: "Cold-Pressing",
    description: "Extracting oil without heat"
  }, {
    number: 4,
    title: "Bottling",
    description: "Hygienic packaging"
  }];
  return <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading">
            Panshashree
          </h1>
          <p className="text-2xl sm:text-3xl text-accent mb-4 font-heading">
            Rooted in Tradition, Perfected Over Time
          </p>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Discover the golden essence of traditional cold-pressed coconut oil, crafted with care in the coastal Karavali region of Mangaluru
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
          
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={traditionalProcess} alt="Traditional oil-making process" className="rounded-2xl shadow-xl w-full hover-lift" loading="lazy" />
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
                  Founded in 2013, Panchashree Coconut Oil has been dedicated to delivering the finest quality coconut oil 
                  crafted with care and tradition. Our journey began in Mundaje, Belthangady, with a mission to bring the 
                  purest form of coconut oil to households, blending time-honored coastal production methods with modern 
                  standards of quality.
                </p>
                <p>
                  At Panchashree, we take pride in sourcing premium coconuts from trusted farms in the Karavali region 
                  and processing them with precision to retain their natural aroma, flavor, and nutritional benefits. 
                  Every drop is cold-pressed using traditional methods, free from chemicals, and rich with natural goodness.
                </p>
                <p>
                  Over the years, we have become a trusted name for health-conscious families, offering coconut oil that 
                  is versatile for cooking, skincare, and haircare. We believe in quality, authenticity, and preserving 
                  the traditional methods that make our oil truly exceptional.
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
            {[{
            value: "2013",
            label: "Established"
          }, {
            value: "100%",
            label: "Natural & Pure"
          }, {
            value: "0",
            label: "Chemicals Added"
          }, {
            value: "Traditional",
            label: "Coastal Methods"
          }].map(stat => <Card key={stat.label} className="bg-secondary hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-accent mb-2 font-heading">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>)}
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
            {products.map(product => <Card key={product.name} className="hover-lift">
                <CardContent className="p-8">
                  <div className="aspect-square bg-secondary rounded-xl mb-6 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-heading text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {product.sizes.map(sizeOption => <div key={sizeOption.size} className="flex justify-between items-center py-2 border-b border-border">
                        <span className="font-semibold text-foreground">{sizeOption.size}</span>
                        <span className="text-accent font-bold text-lg">{sizeOption.price}</span>
                      </div>)}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>

                  <Link to="/contact">
                    <Button variant="golden" className="w-full">
                      Order Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
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
            {features.map(feature => <Card key={feature.title} className="hover-lift bg-secondary">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
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
            {processSteps.map(step => <div key={step.number} className="text-center">
                <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold font-heading shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>)}
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
              <a href="tel:+919591622649" className="text-foreground hover:text-accent smooth-transition">
                +91 95916 22649
              </a>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <div className="text-2xl font-bold text-success mb-2 font-heading">💬 WhatsApp</div>
              <a href="https://wa.me/919591622649?text=Hi%2C%20I'm%20interested%20in%20Panchashree%20coconut%20oil.%20I'd%20like%20to%20know%20more%20about..." target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-success smooth-transition">
                Chat Now
              </a>
            </div>
            <div className="p-6 bg-secondary rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2 font-heading">📍 Location</div>
              <p className="text-foreground">
                Mundaje, Belthangady
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;