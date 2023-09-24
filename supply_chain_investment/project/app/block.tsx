import React from 'react';
import Image from 'next/image';
import styles from './Block.module.css';

export default function Block({
  id,
  img,
  title,
  raised,
}: {
  id: number;
  img: string;
  title: string;
  raised: number;
}) {
  return (
    <div className={styles.card}>
      <div className={styles['card-image']}>
        <Image src={img} alt={title} width={300} height={1000} />
      </div>
      <div className={styles['card-content']}>
        <h1>{title}</h1>
        <p>Raised: ₹{raised}</p>
      </div>
    </div>
  );
}
