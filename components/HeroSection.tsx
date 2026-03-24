import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
  overlay?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-96 md:min-h-[500px] w-full overflow-hidden bg-primary text-primary-foreground">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/50"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
