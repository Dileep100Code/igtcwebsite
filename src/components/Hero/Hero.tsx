import { motion } from 'framer-motion';
import styles from './Hero.module.css';

interface CTAButton {
  text: string;
  action: () => void;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButtons?: CTAButton[];
}

export const Hero = ({ 
  title, 
  subtitle, 
  ctaButtons = []
}: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOverlay} />
        <div className={styles.gridPattern} />
        
        {/* Moving Shapes */}
        <div className={styles.movingShapes}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.shape}
              style={{
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: ['-100%', '100vw'],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
            >
              <div className={styles.shapeInner} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeDot} />
            Professional Esports Organization
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className={styles.titleWord}>{title}</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
          
          {ctaButtons.length > 0 && (
            <motion.div 
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  className={`${styles.ctaButton} ${styles[button.variant]}`}
                  onClick={button.action}
                >
                  {button.text}
                  <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </motion.div>
          )}

          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span>Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Phone Mockup with Auto-Scrolling Images */}
          <div className={styles.phoneMockup}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <motion.div 
                  className={styles.imageSlider}
                  animate={{ y: [0, -1600] }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Duplicate images for seamless loop */}
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className={styles.imageSet}>
                      <img 
                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=800&fit=crop" 
                        alt="PUBG Mobile Tournament"
                        className={styles.phoneImage}
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=800&fit=crop" 
                        alt="Mobile Legends Championship"
                        className={styles.phoneImage}
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=800&fit=crop" 
                        alt="Free Fire Competition"
                        className={styles.phoneImage}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Below */}
          <div className={styles.statsGrid}>
            <motion.div 
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Championships</div>
            </motion.div>

            <motion.div 
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Pro Players</div>
            </motion.div>

            <motion.div 
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Games</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
