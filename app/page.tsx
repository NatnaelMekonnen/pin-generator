"use client";
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Tooltip,
  Popover,
} from "@mui/material";
import Image from "next/image";
import hero from "../public/images/hero.png";
import {
  AccountCircle,
  Help,
  Menu as MenuIcon,
  Close as XIcon,
} from "@mui/icons-material";
import {
  AutoAwesome,
  SmartToy,
  Schedule,
  DesignServices,
  Dashboard,
  ShoppingCart,
  Edit,
  AutoFixHigh,
  Pinterest,
} from "@mui/icons-material";
import { useState } from "react";
import { Modal, Box } from "@mui/material";
import PintersetLogo from "../public/logos/pinterest.webp";
import ShopifyLogo from "../public/logos/shopify.webp";
import EstyLogo from "../public/logos/etsy.webp";
import WordpressLogo from "../public/logos/wordpress.webp";
import AmazonLogo from "../public/logos/amazon.webp";
import WooCommerceLogo from "../public/logos/woocomerce.webp";
import PinGeneratorLogo from "../public/logos/logo.svg";
import TestimonyCard from "./components/TestimonyCard";
import SectionCard from "./components/SectionCard";
import boost from "../public/sectionImages/boostwebp.webp";
import aiOption from "../public/sectionImages/aiOption.webp";
import generate from "../public/sectionImages/generate.webp";
import pinApproved from "../public/sectionImages/pinApproved.webp";
import stayConsistent from "../public/sectionImages/stayConsistent.webp";
import templates from "../public/sectionImages/templates.webp";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  const features = [
    { icon: <AutoAwesome />, text: "Full automation" },
    { icon: <SmartToy />, text: "AI text writer" },
    { icon: <Schedule />, text: "Bulk scheduler" },
    { icon: <DesignServices />, text: "Template creator" },
    { icon: <Dashboard />, text: "Multi-board pinning" },
    { icon: <ShoppingCart />, text: "Import your products" },
    { icon: <Edit />, text: "Edit multiple pins at once" },
    { icon: <AutoFixHigh />, text: "Free generations" },
    { icon: <Pinterest />, text: "Connect unlimited Pinterest profiles" },
  ];
  const integrations = [
    {
      name: "Pinterest",
      logo: PintersetLogo,
      url: "https://www.pinterest.com",
    },
    { name: "Etsy", logo: EstyLogo, url: "https://www.etsy.com" },
    {
      name: "Shopify",
      logo: ShopifyLogo,
      url: "https://www.shopify.com",
    },
    {
      name: "Wordpress",
      logo: WordpressLogo,
      url: "https://wordpress.com",
    },

    {
      name: "Amazon",
      logo: AmazonLogo,
      url: "https://amazon.com",
    },
    {
      name: "WooCommerce",
      logo: WooCommerceLogo,
      url: "https://woocommerce.com",
    },
  ];
  const navItems = [
    {
      label: "Generate",
      href: "#generate",
      tooltip: "Create fresh pins in seconds",
    },
    {
      label: "Schedule",
      href: "#schedule",
      tooltip: "Create your pin release schedule",
    },
    {
      label: "Template",
      href: "#template",
      tooltip: "Create your own templates",
    },
    {
      label: "Pricing",
      href: "#pricing",
      tooltip: "Take your Pinterest strategy to next level",
    },
  ];
  const testimonies = [
    {
      name: "Jane Doe",
      image: "https://i.pravatar.cc/150?img=5", // replace with actual image paths
      rating: 5,
      testimony:
        "This product changed my life! The user experience is fantastic and it saves me so much time. Highly recommend it to anyone.",
    },
    {
      name: "John Smith",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 4,
      testimony:
        "Great experience overall. The interface is intuitive, and the features are incredibly useful. Could use some minor improvements, but I'm satisfied.",
    },
    {
      name: "Sarah Johnson",
      image: "https://i.pravatar.cc/150?img=7",
      rating: 5,
      testimony:
        "I've used a lot of similar tools, but this one stands out. It's fast, reliable, and has all the features I need. Excellent support team as well!",
    },
  ];
  const sections = [
    {
      title: "Boost Engagement",
      bulletPoints: [
        "Increase website traffic",
        "80% less time creating pins",
        "5 million views case study",
      ],
      imageSrc: boost.src,
      imageAlt: "boost",
    },
    {
      title: "Generate Pins FAST",
      bulletPoints: [
        "Grab images and data from any URL",
        "Shuffle pins",
        "Bulk edit pin designs",
      ],
      imageSrc: generate.src,
      imageAlt: "generate",
    },
    {
      title: "Stay Consistent",
      bulletPoints: [
        "Fully automate your pinning",
        "Bulk schedule pins",
        "Pin to multiple boards at once",
      ],
      imageSrc: stayConsistent.src,
      imageAlt: "stayConsistent",
    },
    {
      title: "AI assistant",
      bulletPoints: [
        "Write titles and descriptions",
        "Translate pins",
        "Target more keyword variations with rewrites",
      ],
      imageSrc: aiOption.src,
      imageAlt: "aiOption",
    },
    {
      title: "Templates on Tap",
      bulletPoints: [
        "Loads of templates",
        "Community templates",
        "Build your own templates",
      ],
      imageSrc: templates.src,
      imageAlt: "templates",
    },
    {
      title: "Pinterest Approved",
      bulletPoints: [
        "Tested and verified by Pinterest",
        "Trusted by 21,551+ companies",
        "Integrates directly with Pinterest",
      ],
      imageSrc: pinApproved.src,
      imageAlt: "pinApproved",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={PinGeneratorLogo}
              alt="Pin Generator Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-2xl font-bold">Pin Generator</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Tooltip title={item.tooltip} arrow>
                    <a
                      href={item.href}
                      className="px-4 py-2 hover:bg-stone-100 text-lg"
                    >
                      {item.label}
                    </a>
                  </Tooltip>
                </li>
              ))}
              <li>
                <Tooltip title="Help" arrow>
                  <IconButton>
                    <Help />
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Account" arrow>
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <IconButton onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Popover
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Tooltip title={item.tooltip} arrow>
                  <a
                    href={item.href}
                    className="block px-4 py-2 hover:bg-stone-100 text-lg"
                  >
                    {item.label}
                  </a>
                </Tooltip>
              </li>
            ))}
            <li>
              <Tooltip title="Help" arrow>
                <Button startIcon={<Help />}>Help</Button>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Account" arrow>
                <Button startIcon={<AccountCircle />}>Account</Button>
              </Tooltip>
            </li>
          </ul>
        </Popover>
      </header>

      <div className="flex flex-col md:px-[15ch] px-6">
        <div className="flex md:flex-row flex-col">
          <section className="flex flex-col items-start w-full md:w-2/3">
            <Typography
              variant="h2"
              className="font-extrabold text-stone-600 py-10"
            >
              {"Create "}
              <span className="animated-text">1 Month </span>
              Of<br></br>
              {"Pinterest Content "} <br></br>
              In <span className="animated-text">1 Minute</span>
            </Typography>
            <Typography variant="h6" className="text-stone-600">
              Creating engaging Pins used to take hours. We have reduced it to
              seconds.
            </Typography>
            <section className="flex flex-row gap-4 md:w-3/4 py-10">
              <TextField
                fullWidth
                variant="filled"
                label="Enter any website URL"
              />
              <Button
                variant="contained"
                style={{
                  color: "white",
                  whiteSpace: "nowrap",
                  width: "30ch",
                  fontWeight: "bold",
                }}
              >
                GENERATE PINS
              </Button>
            </section>
            <Typography
              variant="h6"
              className="font-bold cursor-pointer"
              style={{ color: "#28c3a6" }}
              onClick={handleOpen}
            >
              Watch a 1 minute tutorial
            </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="tutorial-modal-title"
              aria-describedby="tutorial-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <iframe
                  width="540"
                  height="315"
                  src="https://www.youtube.com/embed/6WOOL9XDl0s"
                  title="Automated Pinterest Pin Maker - Pin Generator Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  style={{
                    color: "white",
                    float: "right",
                    marginTop: "3ch",
                    fontWeight: "bold",
                  }}
                >
                  Done
                </Button>
              </Box>
            </Modal>
            <section className="py-8 flex flex-row flex-wrap md:grid md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2" style={{ color: "#28c3a6" }}>
                    {feature.icon}
                  </span>
                  <span
                    style={{
                      maxWidth: "20ch",
                      whiteSpace: "wrap",
                      fontWeight: "bold",
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </section>
          </section>
          <section className="flex flex-col items-center md:items-end justify-center md:min-w-[50ch]">
            <Image
              src={hero}
              alt="hero image"
              width={500}
              height={300}
              layout="responsive"
            />
          </section>
        </div>

        <section className="py-10 w-3/4">
          <Typography variant="body2" className="mb-4 opacity-50">
            Integrates with...
          </Typography>
          <div className="flex flex-wrap gap-8">
            {integrations.map((integration, index) => (
              <a
                key={index}
                href={integration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-32 h-16"
              >
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center">
          <Typography variant="h4" className="font-bold">
            Join 21,551+ Pinterest pros
          </Typography>
          <div className="flex flex-wrap flex-row justify-center gap-10 py-14">
            {testimonies.map((testimony, key) => (
              <TestimonyCard
                key={key}
                image={testimony.image}
                name={testimony.name}
                rating={testimony.rating}
                testimony={testimony.testimony}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-14">
          {sections.map((section, key) => (
            <SectionCard
              key={key}
              title={section.title}
              bulletPoints={section.bulletPoints}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
            />
          ))}
        </section>
      </div>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Pin Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
