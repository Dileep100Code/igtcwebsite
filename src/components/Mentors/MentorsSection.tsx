import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './MentorsSection.module.css';

interface Mentor {
  id: string;
  name: string;
  nickname: string;
  gameName: string;
  tournament: string;
  date: string;
  achievement: string;
  achievementNote: string;
  additionalAchievement: string;
  image: string;
}

const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Kampelli Pavan',
    nickname: 'MrTomboy',
    gameName: 'Efootball',
    tournament: 'Asian Esports Games 2024 Bangkok, Thailand',
    date: '01-12-2024',
    achievement: 'BRONZE MEDAL',
    achievementNote: 'First ever medal for India in Asian eSports Games',
    additionalAchievement: 'WINNER OF ARSENAL CLUB CHAMPIONSHIP 2024',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop&q=80'
  }
];

export const MentorsSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className={styles.mentors} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Our Champions</span>
          <h2 className={styles.title}>Our eFootball Athlete</h2>
          <p className={styles.subtitle}>
            Meet our elite esports athletes who represent India on the global stage
          </p>
        </motion.div>

        <motion.div
          className={styles.mentorGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              className={styles.mentorCard}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.cardLayout}>
                {/* Left side - Details */}
                <div className={styles.detailsSection}>
                  <h3 className={styles.sectionTitle}>Our eFootball Athlete</h3>
                  
                  <div className={styles.detailItem}>
                    <span className={styles.label}>NAME:</span>
                    <span className={styles.value}>{mentor.name} "{mentor.nickname}" Pavan</span>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.label}>GAME NAME:</span>
                    <span className={styles.value}>{mentor.gameName}</span>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.label}>TOURNAMENT:</span>
                    <span className={styles.value}>{mentor.tournament}</span>
                  </div>

                  <div className={styles.detailItem}>
                    <span className={styles.label}>DATE:</span>
                    <span className={styles.value}>{mentor.date}</span>
                  </div>

                  <div className={styles.achievementBox}>
                    <span className={styles.achievementLabel}>{mentor.achievement}</span>
                    <span className={styles.achievementPlace}>[3rd Place]</span>
                    <p className={styles.achievementNote}>{mentor.achievementNote}</p>
                  </div>

                  <div className={styles.additionalAchievement}>
                    <span className={styles.label}>•</span>
                    <span className={styles.value}>{mentor.additionalAchievement}</span>
                  </div>
                </div>

                {/* Right side - Image */}
                <div className={styles.imageSection}>
                  <div className={styles.imageWrapper}>
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className={styles.mentorImage}
                    />
                    <div className={styles.imageGlow} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
