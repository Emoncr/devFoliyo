import {
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-start space-x-4"
      >
        <Link
          href="https://github.com/Emoncr"
          className="p-2 bg-secondary rounded-lg hover:bg-black hover:text-white transition-colors"
          target="_blank"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/biplob-hasan-emon"
          className="p-2 bg-secondary rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          target="_blank"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://x.com/_Emon_dev"
          className="p-2 bg-secondary rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
          target="_blank"
        >
          <Twitter className="w-5 h-5" />
        </Link>
        {/* <Link
          href="#"
          className="p-2 bg-secondary rounded-lg hover:bg-pink-600 hover:text-white transition-colors"
          target="_blank"
        >
          <Instagram className="w-5 h-5" />
        </Link> */}
      </motion.div>
    </>
  );
};

export default SocialIcons;
