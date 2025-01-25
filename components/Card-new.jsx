import { HoverEffect } from "./uI/card-hover-effect";
import Link from "next/link";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Easy Migration",
    description:
      "Migrating the data and other information is no more a tedious process in our spam filter. You can easily store and transport your data's through network since Our experts will help to process it in a short time without any difficulties.",
    link: "",
  },
  {
    title: "Simple Manage",
    description:
      "Provide admin portals that allows you to manage the SpamAssassin through easy detection. You can handle databases and can execute mail filtration process by segregating into known and unknown clients easily. Through this, you can easily avoid spams.",
    link: "",
  },
  {
    title: "Stable Network",
    description:
      "Ceaseless networking operation will be maintained to provide continued email service with our different collocated data centres.No downtime or server queuing will be faced at critical times considering your business credibility among clients.",
    link: "",
  },
  {
    title: "Complete Control",
    description:
      "Report, block and delete the features of spam instances through controlled administration. We provide an easy to use admin portals where you can control the spam scoring levels and other settings of your filtering to avoid discomforts.",
    link: "",
  },
  {
    title: "Security",
    description:
      "None of your information will be revealed and can't be captured through hacking or other malware threats since all the emails will be TLS enabled i.e. will be in an encrypted format to safeguard your information from getting in the hands of intruders.",
    link: "",
  },
  {
    title: "24/7 Support",
    description:
      "Our experts will update, generates reports and will be available to configure and support your email services at any time. We will ensure to take sufficient care at your backend for smooth, hack-free and secured operations thereby scaling your welfare.",
    link: "",
  },
];
