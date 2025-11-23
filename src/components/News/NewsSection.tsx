import { motion } from 'framer-motion';
import { NewsCard, type NewsCardProps } from './NewsCard';
import styles from './NewsSection.module.css';

interface NewsSectionProps {
  news: NewsCardProps[];
}

export const NewsSection = ({ news }: NewsSectionProps) => {
  const sortedNews = [...news].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
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
          Latest News
        </motion.h2>
        
        <div className={styles.grid}>
          {sortedNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <NewsCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
