// components/sections/testimonials.tsx
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

interface TestimonialsProps {
  variant?: 'default' | 'alternate';
  limit?: number;
  featured?: boolean;
}

export default function Testimonials({
  variant = 'default',
  limit,
  featured = false,
}: TestimonialsProps) {
  let displayTestimonials = featured
    ? testimonials.filter((t) => t.featured)
    : testimonials;

  if (limit) {
    displayTestimonials = displayTestimonials.slice(0, limit);
  }

  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section id="testimonials" className={`py-20 lg:py-32 ${bgClass}`}>
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to
            say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardHeader>
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary-500 text-primary-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base text-foreground">
                  "{testimonial.content}"
                </p>
              </CardHeader>

              <CardContent className="mt-auto">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
