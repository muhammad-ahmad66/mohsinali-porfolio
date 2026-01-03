// components/sections/tech-stack.tsx
'use client';

import { Container } from '@/components/ui/container';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { techStack } from '@/data/tech-stack';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  MessageSquare,
  Network,
  Clock,
  Workflow,
  Zap,
  Server,
  GitBranch,
  TrendingUp,
  Bot,
  Settings,
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, any> = {
  python: Code2,
  pytorch: Brain,
  tensorflow: Brain,
  brain: Brain,
  'message-square': MessageSquare,
  network: Network,
  selenium: Zap,
  api: Zap,
  clock: Clock,
  workflow: Workflow,
  react: Code2,
  nextjs: Code2,
  nodejs: Server,
  flask: Code2,
  fastapi: Zap,
  discord: MessageSquare,
  telegram: MessageSquare,
  bot: Bot,
  pine: TrendingUp,
  binance: TrendingUp,
  mexc: TrendingUp,
  'chart-line': TrendingUp,
  linux: Server,
  docker: Server,
  git: GitBranch,
  ubuntu: Server,
  server: Server,
};

interface TechStackProps {
  variant?: 'default' | 'alternate';
}

export default function TechStack({ variant = 'default' }: TechStackProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-primary-400/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-secondary-400/30 blur-3xl" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
            <Settings className="h-4 w-4" />
            Technology & Tools
          </div>

          <h2 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Tech Stack
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Cutting-edge technologies and tools powering innovative solutions
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden border border-border transition-all duration-300 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:border-primary-700">
                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${category.color}`} />

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => {
                      const Icon = iconMap[tech.icon || 'code2'] || Code2;

                      return (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="group/tech flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 transition-all hover:border-primary-500 hover:bg-primary-50 hover:shadow-md dark:hover:bg-primary-950"
                        >
                          <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover/tech:text-primary-600 dark:group-hover/tech:text-primary-400" />
                          <span className="text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
