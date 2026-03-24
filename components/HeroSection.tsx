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
    <section className="relative min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
      {/* Background Image with stunning visual effect */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
          priority
          unoptimized
        />
        
        {/* Sophisticated gradient overlay */}
        {overlay && (
          <>
            {/* Left to right gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40"></div>
            
            {/* Top to bottom additional overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
            
            {/* Animated accent bars */}
            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-secondary via-secondary/50 to-transparent w-full"></div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-secondary w-full"></div>
          </>
        )}
      </div>

      {/* Content with premium styling */}
      <div className="relative h-full flex items-center justify-start py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Animated badge */}
          <div className="inline-block mb-6 animate-fade-in">
            <div className="px-6 py-2 bg-secondary/20 backdrop-blur-md border border-secondary/30 rounded-full hover:border-secondary/60 transition-colors">
              <span className="text-secondary text-sm font-semibold tracking-wide">Exceptional Legal Services</span>
            </div>
          </div>

          {/* Title with animation */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-balance text-white drop-shadow-lg animate-slide-in-up" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl leading-relaxed mb-8 drop-shadow-md animate-slide-in-up" style={{ animationDelay: '0.1s', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {subtitle}
            </p>
          )}

          {/* Decorative accent */}
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-secondary/0 rounded-full mt-4"></div>
        </div>
      </div>

      {/* Floating accent elements for visual interest */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-40 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
