import Image from 'next/image';

/**
 * HeroImages Component
 *
 * Displays the three animated hero images
 * With staggered fade-in animations
 */
export function HeroImages() {
  return (
    <>
      {/* Hero Image 03 - Top Right */}
      <div className="animate-fade-in absolute top-24 right-0 col-span-4 hidden w-[45%] opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] sm:block lg:top-6 2xl:top-0">
        <Image
          src="/images/hero-03.webp"
          alt="AI Automation Platform Interface"
          width={400}
          height={300}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Hero Image 02 - Middle */}
      <div className="animate-fade-in absolute top-[60%] left-1/2 z-20 hidden w-[25%] -translate-x-1/2 -translate-y-1/2 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] sm:block">
        <Image
          src="/images/hero-02.webp"
          alt="Workflow Automation Dashboard"
          width={450}
          height={350}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Hero Image 01 - Bottom Left */}
      <div className="relative hidden h-[230px] sm:block lg:h-[340px]">
        <div className="animate-fade-in absolute bottom-0 left-0 z-10 w-[50%] opacity-0 [animation-fill-mode:forwards]">
          <Image
            src="/images/hero-01.webp"
            alt="AI Agent Automation"
            width={400}
            height={300}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </>
  );
}
