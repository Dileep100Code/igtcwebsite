import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './ServicesSection.module.css';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: '3',
    title: 'College Ambassadors',
    description: 'Become the face of IGTC on your campus—unlock perks, grow your community, and gain real experience.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80',
    features: ['Campus Events', 'Exclusive Perks', 'Leadership Training', 'Networking', 'Career Growth', 'Community Building']
  },
  {
    id: '1',
    title: 'Tournament Organisers',
    description: 'End-to-end hosting: registrations, brackets, seeding, results, and payouts—managed in one place.',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop&q=80',
    features: ['Online Tournaments', 'LAN Events', 'Prize Distribution', 'Live Broadcasting', 'Registration Management', 'Real-time Brackets']
  },
  {
    id: '5',
    title: 'Player Development',
    description: 'Comprehensive training programs to transform aspiring gamers into professional esports athletes.',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=600&fit=crop&q=80',
    features: ['Coaching Sessions', 'Strategy Analysis', 'Performance Tracking', 'Mental Training', 'Skill Development', 'Career Guidance']
  },
  {
    id: '2',
    title: 'Creators & Communities',
    description: 'Host community nights, run quests, publish highlights, and unlock brand-safe sponsorships.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=600&fit=crop&q=80',
    features: ['Community Events', 'Content Creation', 'Sponsorship Deals', 'Fan Engagement', 'Social Media Growth', 'Brand Partnerships']
  },
  {
    id: '6',
    title: 'Esports Consulting',
    description: 'Strategic consulting for brands and organizations looking to enter the esports industry.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&q=80',
    features: ['Brand Strategy', 'Sponsorship Deals', 'Market Analysis', 'Partnership Management', 'Event Planning', 'ROI Optimization']
  },
  {
    id: '4',
    title: 'Professional Teams',
    description: 'Elite competitive gaming teams across multiple titles with professional training and coaching.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop&q=80',
    features: ['PUBG Mobile', 'Mobile Legends', 'Free Fire', 'Call of Duty Mobile', 'Professional Coaching', 'Team Management']
  }
];

export const ServicesSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

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
            Here are important features of our app highlighting what connect to success
          </p>
        </motion.div>

        <div className={styles.scrollContainer}>
          <motion.div
            className={styles.scrollTrack}
            animate={{
              x: [0, -2400]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {/* Render services twice for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className={styles.serviceCard}
                onMouseEnter={() => setFlippedCard(`${service.id}-${index}`)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`${styles.cardInner} ${flippedCard === `${service.id}-${index}` ? styles.flipped : ''}`}>
                  {/* Front of card - Image */}
                  <div className={styles.cardFront}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={styles.serviceImage}
                    />
                    <div className={styles.imageOverlay}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                    </div>
                  </div>

                  {/* Back of card - Features */}
                  <div className={styles.cardBack}>
                    <h3 className={styles.backTitle}>{service.title}</h3>
                    <p className={styles.backDescription}>{service.description}</p>
                    <ul className={styles.featureList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.feature}>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>
    </section>
  );
};
