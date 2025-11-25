import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './MentorsSection.module.css';

const mentorImages = [
  '/images/IMG_20250929_192924.jpg',
  '/images/Picsart_25-09-29_19-35-41-668 (1).jpg'
];

const mentorData = {
  name: 'Kampelli',
  nickname: 'MrTomboy',
  fullName: 'Pavan',
  gameName: 'Efootball',
  tournament: 'Asian Esports Games 2024 Bangkok, Thailand',
  date: '01-12-2024',
  achievement: 'BRONZE MEDAL',
  place: '[3rd Place]',
  achievementNote: 'First ever medal for India in Asian eSports Games',
  additionalAchievement: 'WINNER OF ARSENAL CLUB CHAMPIONSHIP 2024'
};

export const MentorsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={styles.mentors} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Our Mentors</span>
          <h2 className={styles.title}>Our eFootball Athlete</h2>
          <p className={styles.subtitle}>
            Meet our elite esports athletes who represent India on the global stage
          </p>
        </motion.div>

        <motion.div
          className={styles.mentorCard}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.cardLayout}>
            {/* Left side - Details */}
            <div className={styles.detailsSection}>
              <h3 className={styles.sectionTitle}>Our eFootball Athlete</h3>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>NAME:</span>
                <span className={styles.value}>{mentorData.name} "{mentorData.nickname}" {mentorData.fullName}</span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>GAME NAME:</span>
                <span className={styles.value}>{mentorData.gameName}</span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>TOURNAMENT:</span>
                <span className={styles.value}>{mentorData.tournament}</span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>DATE:</span>
                <span className={styles.value}>{mentorData.date}</span>
              </div>

              <div className={styles.achievementBox}>
                <span className={styles.achievementLabel}>{mentorData.achievement}</span>
                <span className={styles.achievementPlace}>{mentorData.place}</span>
                <p className={styles.achievementNote}>{mentorData.achievementNote}</p>
              </div>

              <div className={styles.additionalAchievement}>
                <span className={styles.label}>•</span>
                <span className={styles.value}>{mentorData.additionalAchievement}</span>
              </div>
            </div>

            {/* Right side - Phone Mockup with Scrolling Images */}
            <div className={styles.imageSection}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <motion.div 
                      className={styles.imageSlider}
                      animate={{ y: [0, -1200] }}
                      transition={{ 
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Duplicate images for seamless loop */}
                      {[...mentorImages, ...mentorImages].map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`${mentorData.nickname} ${index + 1}`}
                          className={styles.phoneImage}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>
    </section>
  );
};
