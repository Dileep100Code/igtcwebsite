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
          <h2 className={styles.title}>Our eFootball Athlete</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Phone Mockup */}
          <div className={styles.phoneSection}>
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

          {/* Right side - Compact Details */}
          <div className={styles.detailsSection}>
            <ul className={styles.detailsList}>
              <li className={styles.detailItem}>
                <span className={styles.label}>NAME:</span>
                <span className={styles.value}>{mentorData.name} "{mentorData.nickname}" {mentorData.fullName}</span>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.label}>GAME NAME:</span>
                <span className={styles.value}>{mentorData.gameName}</span>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.label}>TOURNAMENT:</span>
                <span className={styles.value}>{mentorData.tournament}</span>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.label}>DATE:</span>
                <span className={styles.value}>{mentorData.date}</span>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.label}>{mentorData.achievement}</span>
                <span className={styles.place}>{mentorData.place}</span>
                <span className={styles.note}>{mentorData.achievementNote}</span>
              </li>

              <li className={styles.detailItem}>
                <span className={styles.label}>•</span>
                <span className={styles.value}>{mentorData.additionalAchievement}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
