import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaPython,
  FaAndroid,
  FaGithub,
  FaLinux,
  FaShieldAlt,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPhp,
  SiMysql,
  FaJava,
  FaPython,
  FaAndroid,
  FaGithub,
  FaLinux,
  FaShieldAlt,
};

export function getSkillIcon(iconName) {
  return iconMap[iconName] || FaJs;
}
