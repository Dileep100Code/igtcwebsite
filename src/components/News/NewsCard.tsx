import { motion } from 'framer-motion';
import styles from './NewsCard.module.css';

export interface NewsCardProps {
  id: string;
  title: string;
  date: Date;
  preview: string;
  image: string;
  category: string;
  onClick?: () => void;
}

export const NewsCard = ({ 
  title, 
  date, 
  preview, 
  image, 
  category,
  onClick 
}: NewsCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article 
      className={styles.card}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.category}>{category}</span>
      </div>
      
      <div className={styles.content}>
        <time className={styles.date}>{formattedDate}</time>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.preview}>{preview}</p>
        <button className={styles.readMore}>Read More →</button>
      </div>
    </motion.article>
  );
};
