'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/cards/project-card';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface ProjectsClientProps {
  projects: any[]; // Replace 'any' with your actual project type
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, projects.length));
  };

  return (
    <section className="py-20 lg:py-32">
      <Container>
        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              icon={RefreshCw}
              onClick={loadMore}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
