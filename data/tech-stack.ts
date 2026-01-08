// data/tech-stack.ts
export interface TechItem {
  name: string;
  icon?: string; // For icon library reference
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  color: string; // For gradient colors
  technologies: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI/ML',
    description:
      'Machine learning systems designed for real-world production use.',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'Python', icon: 'python' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'BERT', icon: 'brain' },
      { name: 'NLP', icon: 'message-square' },
      { name: 'LSTM', icon: 'network' },
    ],
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Reliable automation pipelines and system integrations.',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Selenium', icon: 'selenium' },
      { name: 'APIs', icon: 'api' },
      { name: 'CRON', icon: 'clock' },
      { name: 'Data Pipelines', icon: 'workflow' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern, scalable web platforms built for performance.',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python Flask', icon: 'flask' },
      { name: 'FastAPI', icon: 'fastapi' },
    ],
  },
  {
    id: 'bots',
    title: 'Bot Systems',
    description: 'Custom bot architectures for messaging platforms and APIs.',
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'Discord.py', icon: 'discord' },
      { name: 'Telebot', icon: 'telegram' },
      { name: 'Custom API Bots', icon: 'bot' },
    ],
  },
  {
    id: 'trading',
    title: 'Trading Systems',
    description: 'Algorithmic trading systems and quantitative analysis tools.',
    color: 'from-yellow-500 to-amber-500',
    technologies: [
      { name: 'Pine Script v5', icon: 'pine' },
      { name: 'Binance APIs', icon: 'binance' },
      { name: 'MEXC APIs', icon: 'mexc' },
      { name: 'Quant Systems', icon: 'chart-line' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud/DevOps',
    description: 'Infrastructure designed for stability, security, and scale.',
    color: 'from-indigo-500 to-purple-500',
    technologies: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Docker', icon: 'docker' },
      { name: 'CI/CD', icon: 'git' },
      { name: 'Ubuntu', icon: 'ubuntu' },
      { name: 'VPS', icon: 'server' },
    ],
  },
];
