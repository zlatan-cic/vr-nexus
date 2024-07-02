import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { id: 1,label: "Features", href: "#feature" },
  { id: 2,label: "Workflow", href: "#workflow" },
  { id: 3,label: "Pricing", href: "#pricing" },
  { id: 4,label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    id:1,
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "The services provided by VR Nexus were exceptional. The team was not only responsive and professional but also exceeded my expectations with their results.",
  },
  {
    id:2,
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Our project's outcome was outstanding. VR Nexus's innovative approach and problem-solving skills were crucial in bringing our vision to life.",
  },
  {
    id:3,
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Collaborating with VR Nexus was a pleasure. Their meticulous attention to detail and dedication to excellence are truly commendable. Highly recommended!",
  },
  {
    id:4,
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "The VR Nexus team transformed our project. Their innovative solutions and attention to detail helped us achieve our goals swiftly. Their professionalism is top-notch!",
  },
  {
    id:5,
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I was impressed by the professionalism and dedication of the VR Nexus team. They went beyond our expectations and delivered remarkable results.",
  },
  {
    id:6,
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The VR Nexus team exceeded expectations to ensure our project's success. Their unmatched expertise and dedication make them a joy to work with. I look forward to future collaborations!",
  },
];



export const features = [
  {
    id: 1,
    icon: <BotMessageSquare />,
    title: "Interactive Chat Support",
    description:
      "Get instant help and guidance with our interactive chat support, designed to assist you at every step of your VR project.",
  },
  {
    id: 2,
    icon: <Fingerprint />,
    title: "Secure Authentication",
    description:
      "Protect your VR creations with our advanced fingerprint secure authentication, ensuring only authorized access.",
  },
  {
    id: 3,
    icon: <ShieldHalf />,
    title: "Robust Security",
    description:
      "Safeguard your VR applications with our robust security features, including encryption and threat detection.",
  },
  {
    id: 4,
    icon: <BatteryCharging />,
    title: "Efficient Performance",
    description:
      "Maximize your VR application's efficiency with our battery charging optimizations for extended usage.",
  },
  {
    id: 5,
    icon: <PlugZap />,
    title: "Seamless Integration",
    description:
      "Integrate various tools and services effortlessly with our seamless plug-and-play integration options.",
  },
  {
    id: 6,
    icon: <GlobeLock />,
    title: "Global Privacy",
    description:
      "Ensure global privacy and data protection with our comprehensive globe lock security measures.",
  },
];


export const checklistItems = [
  {
    id:1,
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id:2,
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id:3,
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    id:4,
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    id:1,
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    id:2,
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    id:3,
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
