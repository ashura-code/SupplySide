// 'use client';
// import React, { useState } from 'react';
import { Key } from 'react';
import Block from '../block';
import styles from '../farming/farming.module.css';

const Warehouse = async () => {
  const externalURL = 'https://pages.razorpay.com/pl_LmkwMKMYPnbB4y/view';
  async function getData() {
    const res = await fetch('http://localhost:1337/api/warehouses');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }
  const datab = await getData();

  const Cards = datab.data;

  return (
    <main>
      <div className="subject">
        <h1>Warehouses</h1>
      </div>

      {/* cards here */}
      <div className={styles['farming']}>
        {Cards?.length > 0 ? (
          <div className={styles['cards-container']}>
            {Cards.map(
              (card: {
                attributes: {
                  key: Key | null | undefined;
                  img: string;
                  title: string;
                  raised: number;
                };
              }) => (
                <a
                  href={externalURL}
                  key={1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Block
                    key={card.attributes.key}
                    id={1}
                    img={card.attributes.img}
                    title={card.attributes.title}
                    raised={card.attributes.raised}
                  />
                </a>
              )
            )}
          </div>
        ) : (
          <h1>Im alone here !!</h1>
        )}
      </div>
    </main>
  );
};

export default Warehouse;
