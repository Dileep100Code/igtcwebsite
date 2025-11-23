import { motion } from 'framer-motion';
import styles from './CollaborationsSection.module.css';

export interface Collaboration {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface CollaborationsSectionProps {
  collaborations: Collaboration[];
}

export const CollaborationsSection = ({ collaborations }: CollaborationsSectionProps) => {
  const handleClick = (collab: Collaboration) => {
    if (collab.link) {
      window.open(collab.link, '_blank');
    }
  };

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
          Collaborations
        </motion.h2>
        
        <div className={styles.grid}>
          {collaborations.map((collab, index) => (
            <motion.article
              key={collab.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => handleClick(collab)}
            >
              <div className={styles.imageContainer}>
                <img src={collab.image} alt={collab.title} className={styles.image} />
                <div className={styles.overlay} />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{collab.title}</h3>
                <p className={styles.description}>{collab.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
