import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Layers, Shield } from "lucide-react";
import aiSystemsImg from "@/assets/ai-systems.jpg";
import dataEngineeringImg from "@/assets/data-engineering.jpg";
import systemArchitectureImg from "@/assets/system-architecture.jpg";
import securityComplianceImg from "@/assets/security-compliance.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "intelligent-systems",
      title: "Intelligent Systems",
      description: "Building intelligent systems that leverage machine learning and AI to automate complex processes and drive operational excellence.",
      image: aiSystemsImg,
      icon: Brain,
      tags: ["AI/ML", "Automation", "Analytics"],
      features: [
        "Machine Learning Models",
        "Process Automation",
        "Predictive Analytics",
        "Natural Language Processing"
      ]
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      description: "Building intelligent data systems that transform raw information into actionable insights for data-driven decision making.",
      image: dataEngineeringImg,
      icon: Database,
      tags: ["Big Data", "ETL", "Analytics"],
      features: [
        "Data Pipeline Architecture",
        "Real-time Processing",
        "Data Warehousing",
        "Business Intelligence"
      ]
    },
    {
      id: "system-architecture",
      title: "System Design & Architecture",
      description: "Architecting scalable, fault-tolerant systems designed for high performance and maintainability.",
      image: systemArchitectureImg,
      icon: Layers,
      tags: ["Microservices", "Cloud", "Scalability"],
      features: [
        "Microservices Architecture",
        "Cloud Infrastructure",
        "System Integration",
        "Performance Optimization"
      ]
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      description: "Building intelligent security systems that protect against threats while ensuring regulatory compliance and data privacy.",
      image: securityComplianceImg,
      icon: Shield,
      tags: ["Security", "Compliance", "Privacy"],
      features: [
        "Security Architecture",
        "Compliance Frameworks",
        "Data Protection",
        "Threat Detection"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display font-bold text-3xl lg:text-display mb-6">
            Our <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in building systems that are not just functional, but transformational.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`card-elevated group cursor-pointer stagger-fade h-full`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;