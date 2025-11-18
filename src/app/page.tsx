"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, Facebook, Instagram, Star, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Prestige Motors"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Premium Luxury Vehicles"
          description="Experience automotive excellence with our curated collection of premium luxury cars. From sports cars to elegant sedans, discover your perfect driving companion."
          tag="Exclusive Collection"
          tagIcon={Star}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473725597-jn4rnpzp.jpg"
          imageAlt="Luxury sports car in premium showroom"
          buttons={[
            { text: "View Inventory", href: "inventory" },
            { text: "Schedule Visit", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Prestige Motors"
          description={[
            "For over three decades, we have been the premier destination for luxury automotive excellence. Our passion for exceptional vehicles drives everything we do.",
            "We specialize in premium brands and provide personalized service that matches the caliber of our exclusive vehicle collection."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="inventory" data-section="inventory">
        <FeatureCardThree
          title="Featured Inventory"
          description="Explore our handpicked selection of premium luxury vehicles, each offering exceptional performance and unmatched sophistication."
          tag="Premium Selection"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "BMW M8 Competition",
              description: "Experience raw power with this high-performance luxury coupe featuring twin-turbo V8 engine and precision handling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473729227-39ehmcau.jpg",
              imageAlt: "BMW M8 Competition luxury sports car"
            },
            {
              id: "02",
              title: "Mercedes-AMG GT",
              description: "Pure automotive artistry with handcrafted AMG engine and stunning design that commands attention on every road.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473729719-v2xlfo6o.jpg",
              imageAlt: "Mercedes-AMG GT sports car"
            },
            {
              id: "03",
              title: "Audi R8 V10",
              description: "Supercar excellence with naturally aspirated V10 engine and Quattro all-wheel drive for ultimate performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473730482-1hs8pi47.jpg",
              imageAlt: "Audi R8 V10 supercar"
            },
            {
              id: "04",
              title: "Porsche 911 Turbo S",
              description: "Iconic engineering meets modern innovation in this legendary sports car with turbocharged flat-six engine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473731089-pipo4oqv.jpg",
              imageAlt: "Porsche 911 Turbo S sports car"
            }
          ]}
          buttons={[
            { text: "View All Inventory", href: "inventory" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to luxury automotive excellence is reflected in our achievements and customer satisfaction."
          tag="Our Success"
          textboxLayout="default"
          animationType="opacity"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "30+",
              description: "Years of Luxury Car Excellence"
            },
            {
              id: "2",
              value: "2,500+",
              description: "Premium Vehicles Sold"
            },
            {
              id: "3",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "4",
              value: "50+",
              description: "Luxury Brands Available"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Our passionate automotive specialists are dedicated to helping you find the perfect luxury vehicle."
          tag="Expert Team"
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Marcus Sterling",
              role: "Senior Sales Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473731847-yjl9dkrr.jpg",
              imageAlt: "Marcus Sterling, Senior Sales Director"
            },
            {
              id: "2",
              name: "Sofia Reyes",
              role: "Luxury Car Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473732807-t6bncyqj.jpg",
              imageAlt: "Sofia Reyes, Luxury Car Specialist"
            },
            {
              id: "3",
              name: "James Wellington",
              role: "Finance Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473733464-px0i4qdx.jpg",
              imageAlt: "James Wellington, Finance Manager"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Discover why discerning customers choose Prestige Motors for their luxury automotive needs."
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Alexander Thompson",
              role: "CEO",
              company: "Thompson Industries",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473734421-ff1d8kvq.jpg",
              imageAlt: "Alexander Thompson testimonial"
            },
            {
              id: "2",
              name: "Isabella Chen",
              role: "Investment Banker",
              company: "Goldman Partners",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473735001-e9acxtty.png",
              imageAlt: "Isabella Chen testimonial"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Tech Executive",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473735657-4dc02tqi.jpg",
              imageAlt: "David Rodriguez testimonial"
            },
            {
              id: "4",
              name: "Victoria Hamilton",
              role: "Real Estate Mogul",
              company: "Hamilton Properties",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1763473736319-6katg4d8.jpg",
              imageAlt: "Victoria Hamilton testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Schedule Your Private Consultation"
          description="Experience our luxury vehicles firsthand. Contact our team to arrange a personalized viewing and test drive of your dream car."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "interest", type: "text", placeholder: "Vehicle of Interest", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your luxury car preferences and requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Schedule Consultation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Prestige Motors"
          copyrightText="© 2025 Prestige Motors. All rights reserved."
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "Luxury Cars", href: "inventory" },
                { label: "Sports Cars", href: "inventory" },
                { label: "Sedans", href: "inventory" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Sales", href: "services" },
                { label: "Financing", href: "financing" },
                { label: "Trade-In", href: "trade-in" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/prestigemotors", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/prestigemotors", ariaLabel: "Follow us on Facebook" },
            { icon: Youtube, href: "https://youtube.com/prestigemotors", ariaLabel: "Subscribe to our YouTube channel" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}