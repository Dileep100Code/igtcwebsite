import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './ServicesSection.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    id: '1',
    title: 'Professional Teams',
    description: 'Elite competitive gaming teams across multiple titles with professional training and coaching.',
    icon: '🏆',
    features: ['PUBG Mobile', 'Mobile Legends', 'Free Fire', 'Call of Duty Mobile']
  },
  {
    id: '2',
    title: 'Tournament Organization',
    description: 'End-to-end tournament hosting with registrations, live streaming, and prize distribution.',
    icon: '🎮',
    features: ['Online Tournaments', 'LAN Events', 'Prize Pools', 'Live Broadcasting']
  },
  {
    id: '3',
    title: 'Player Development',
    description: 'Comprehensive training programs to transform aspiring gamers into professional esports athletes.',
    icon: '📈',
    features: ['Coaching Sessions', 'Strategy Analysis', 'Performance Tracking', 'Mental Training']
  },
  {
    id: '4',
    title: 'Content Creation',
    description: 'Professional content creation and streaming services for brands and gaming communities.',
    icon: '🎬',
    features: ['Live Streaming', 'Video Production', 'Social Media', 'Brand Partnerships']
  },
  {
    id: '5',
    title: 'Community Building',
    description: 'Building and managing vibrant gaming communities with events, forums, and engagement.',
    icon: '👥',
    features: ['Discord Communities', 'Fan Engagement', 'Community Events', 'Member Benefits']
  },
  {
    id: '6',
    title: 'Esports Consulting',
    description: 'Strategic consulting for brands and organizations looking to enter the esports industry.',
    icon: '💼',
    features: ['Brand Strategy', 'Sponsorship Deals', 'Market Analysis', 'Partnership Management']
  }
];

export const ServicesSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Services</span>
          <h2 className={styles.title}>Our Offerings</h2>
          <p className={styles.subtitle}>
            Comprehensive esports solutions connecting passion with success
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
                <div className={styles.iconGlow} />
              </div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              <ul className={styles.featureList}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.3333 4L6 11.3333L2.66667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={styles.learnMore}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
