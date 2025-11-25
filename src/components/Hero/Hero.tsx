import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

interface CTAButton {
  text: string;
  action: () => void;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaButtons?: CTAButton[];
}

const esportsQuotes = [
  "IGTC ESPORTS - WHERE CHAMPIONS RISE AND LEGENDS ARE FORGED",
  "BUILDING THE FUTURE OF COMPETITIVE GAMING IN INDIA",
  "EXCELLENCE IN ESPORTS, PASSION IN EVERY GAME",
  "UNITING GAMERS, CREATING CHAMPIONS, DEFINING VICTORY"
];

const gamingImages = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop&q=80",
  "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1920&h=1080&fit=crop&q=80",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1920&h=1080&fit=crop&q=80",
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop&q=80"
];

export const Hero = ({ 
  ctaButtons = []
}: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gamingImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gamingImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gamingImages.length) % gamingImages.length);
  };

  return (
    <section className={styles.hero}>
      {/* Background Image Slider */}
      <div className={styles.backgroundSlider}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${gamingImages[currentSlide]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className={styles.backgroundOverlay} />
      </div>

      {/* Navigation Arrows */}
      <button 
        className={`${styles.navArrow} ${styles.navArrowLeft}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button 
        className={`${styles.navArrow} ${styles.navArrowRight}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentSlide}
              className={styles.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              {esportsQuotes[currentSlide]}
            </motion.h1>
          </AnimatePresence>
          
          {ctaButtons.length > 0 && (
            <motion.div 
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`${styles.ctaButton} ${styles[button.variant]}`}
                  onClick={button.action}
                >
                  {button.text}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Slide Indicators */}
        <div className={styles.slideIndicators}>
          {gamingImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
