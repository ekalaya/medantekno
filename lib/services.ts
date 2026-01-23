import { Code, Smartphone, Cpu } from "lucide-react";

export const servicesData = [
    {
        title: "Web Application Development",
        slug: "web-application-development",
        description: "Custom dashboards, school management systems, and company profiles built with the latest tech stack.",
        icon: Code,
        color: "bg-violet-500",
        details: `
      ## Web Application Development
      
      We build robust, scalable, and secure web applications tailored to your specific business needs. 
      
      ### Our Tech Stack
      - **Frontend**: Next.js, React, Vue.js, Angular
      - **Backend**: Node.js, Python (Django/FastAPI), Go
      - **Database**: PostgreSQL, MongoDB, Redis
      
      ### Key Features
      - Responsive Design (Mobile First)
      - High Performance & SEO Optimization
      - Secure Authentication & Authorization
      - Real-time features (WebSockets)
    `
    },
    {
        title: "Mobile App Solutions",
        slug: "mobile-app-solutions",
        description: "Native and cross-platform mobile applications for student portals, e-learning, and utility tools.",
        icon: Smartphone,
        color: "bg-fuchsia-500",
        details: `
      ## Mobile App Solutions
      
      Engage your users on the go with our premium mobile application services. We deliver native-like experience on both iOS and Android.
      
      ### What We Offer
      - **Cross-Platform**: React Native, Flutter
      - **Native**: Swift (iOS), Kotlin (Android)
      - **PWA**: Progressive Web Apps
      
      ### Capabilities
      - Offline Support
      - Push Notifications
      - Camera & Geolocation Integration
      - App Store Optimization (ASO)
    `
    },
    {
        title: "AI & IOT Development",
        slug: "ai-iot-development",
        description: "Smart solutions integrating Artificial Intelligence and Internet of Things for automation and analytics.",
        icon: Cpu,
        color: "bg-cyan-500",
        details: `
      ## AI & IOT Development
      
      Unlock the power of data and automation with our cutting-edge AI and IoT solutions.
      
      ### AI Services
      - Machine Learning Models
      - Natural Language Processing (NLP)
      - Computer Vision
      - Chatbots & Virtual Assistants
      
      ### IoT Solutions
      - Smart Home/Office Automation
      - Industrial IoT (IIoT)
      - Real-time Monitoring & Analytics
      - Sensor Integration (MQTT/CoAP)
    `
    },
];
