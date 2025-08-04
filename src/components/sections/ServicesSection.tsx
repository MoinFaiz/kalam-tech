import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Database, Layers, Shield } from "lucide-react";
import aiSystemsImg from "@/assets/ai-systems.jpg";
import dataEngineeringImg from "@/assets/data-engineering.jpg";
import systemArchitectureImg from "@/assets/system-architecture.jpg";
import securityComplianceImg from "@/assets/security-compliance.jpg";
import cloudOperationsImg from "@/assets/cloud-operations.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "intelligent-systems",
      title: "Intelligent Systems",
      description: "Building intelligent systems that leverage AI/ML to automate complex processes and drive operational excellence.",
      image: aiSystemsImg,
      icon: Brain,
      tags: ["AI/ML", "Automation", "Analytics"],
      features: [
        "Machine Learning Models",
        "Process Automation",
        "Natural Language Processing"
      ]
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      description: "Building intelligent data systems that transform raw information into actionable insights.",
      image: dataEngineeringImg,
      icon: Database,
      tags: ["Big Data", "ETL", "Analytics"],
      features: [
        "Data Pipeline Architecture",
        "Real-time Processing",
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
        "System Integration"
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
        "Data Protection",
        "Threat Detection"
      ]
    },
    {
      id: "cloud-ops",
      title: "Cloud Operations",
      description: "Managing and optimizing cloud infrastructure for reliability, scalability, and cost efficiency.",
      image: cloudOperationsImg,
      icon: Cloud,
      tags: ["CloudOps", "DevOps", "Reliability"],
      features: [
        "Cloud Monitoring",
        "Cost Optimization",
        "Disaster Recovery"
      ]
    }
  ];

  return (
    <section id="services" className="py-0 min-h-[850px] flex items-center bg-warm-near-white">
      <div className="w-full pl-8 md:pl-28 pr-8 md:pr-24 pt-8 md:pt-24 pb-20 lg:pb-32">
        {/* Section Header */}
        <div className="mb-16 fade-in-up text-left">
          <h2 className="font-display text-4xl lg:text-6xl mb-6 text-warm-dark-gray">
            <span className="font-normal">Our</span><br />
            <span className="font-bold text-warm-black">Focus Areas</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/25 to-transparent" />
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
                
                <CardTitle className="text-lg mb-4 group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed text-sm text-justify">
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