import React from 'react';
import Image from 'next/image'

import styles from './CardWithoutBanner.module.scss'

import cn from 'classnames'

export const CardWithoutBanner = ({data}) => {
  return (
    <article className={styles.wrapper}>
      <img src={data.image} alt="Аватарка" className={styles.image} />
      <h1 className={styles.name}>{data.fullname}</h1>
      <p className={styles.bio}>{data.bio}</p>
      <div className={styles.links}>
        <a className={cn(styles.link, "vk")} href={data.telegram} key={data.telegram}></a>
        <a className={cn(styles.link, "telegram")} href={data.vk} key={data.vk}></a>
      </div>
      <hr className={styles.line}/>
      <a href={data.contact} className={styles.contact}>{data.contact}</a>
    </article>
  );
};
