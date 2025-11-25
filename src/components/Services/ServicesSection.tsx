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
    id: '1',
    title: 'Tournament Organisers',
    description: 'End-to-end hosting: registrations, brackets, seeding, results, and payouts—managed in one place.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=80',
    features: ['Online Tournaments', 'LAN Events', 'Prize Distribution', 'Live Broadcasting', 'Registration Management', 'Real-time Brackets']
  },
  {
    id: '2',
    title: 'Creators & Communities',
    description: 'Host community nights, run quests, publish highlights, and unlock brand-safe sponsorships.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop&q=80',
    features: ['Community Events', 'Content Creation', 'Sponsorship Deals', 'Fan Engagement', 'Social Media Growth', 'Brand Partnerships']
  },
  {
    id: '3',
    title: 'College Ambassadors',
    description: 'Become the face of IGTC on your campus—unlock perks, grow your community, and gain real experience.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80',
    features: ['Campus Events', 'Exclusive Perks', 'Leadership Training', 'Networking', 'Career Growth', 'Community Building']
  },
  {
    id: '4',
    title: 'Professional Teams',
    description: 'Elite competitive gaming teams across multiple titles with professional training and coaching.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop&q=80',
    features: ['PUBG Mobile', 'Mobile Legends', 'Free Fire', 'Call of Duty Mobile', 'Professional Coaching', 'Team Management']
  },
  {
    id: '5',
    title: 'Player Development',
    description: 'Comprehensive training programs to transform aspiring gamers into professional esports athletes.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop&q=80',
    features: ['Coaching Sessions', 'Strategy Analysis', 'Performance Tracking', 'Mental Training', 'Skill Development', 'Career Guidance']
  },
  {
    id: '6',
    title: 'Esports Consulting',
    description: 'Strategic consulting for brands and organizations looking to enter the esports industry.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop&q=80',
    features: ['Brand Strategy', 'Sponsorship Deals', 'Market Analysis', 'Partnership Management', 'Event Planning', 'ROI Optimization']
  }
];

export const ServicesSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
            Here are important features of our app highlighting what connect to success
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
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={styles.serviceImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>

                <motion.ul 
                  className={styles.featureList}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredCard === service.id ? 1 : 0,
                    height: hoveredCard === service.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className={styles.feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: hoveredCard === service.id ? 1 : 0,
                        x: hoveredCard === service.id ? 0 : -10
                      }}
                      transition={{ delay: index * 0.05 }}
                    >
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
                    </motion.li>
                  ))}
                </motion.ul>
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
