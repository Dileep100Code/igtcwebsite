import { motion } from 'framer-motion';
import styles from './SponsorsSection.module.css';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver';
  website?: string;
}

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

export const SponsorsSection = ({ sponsors }: SponsorsSectionProps) => {
  const handleSponsorClick = (sponsor: Sponsor) => {
    if (sponsor.website) {
      window.open(sponsor.website, '_blank');
    }
  };

  const tierOrder = { platinum: 1, gold: 2, silver: 3 };
  const sortedSponsors = [...sponsors].sort((a, b) => 
    tierOrder[a.tier] - tierOrder[b.tier]
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Sponsors & Partners
        </motion.h2>
        
        <div className={styles.grid}>
          {sortedSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              className={`${styles.sponsorCard} ${styles[sponsor.tier]}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSponsorClick(sponsor)}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className={styles.logo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
