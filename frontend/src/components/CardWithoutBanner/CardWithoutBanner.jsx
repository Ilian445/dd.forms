import React from 'react';
import Image from 'next/image'

import styles from './CardWithoutBanner.module.scss'

import cn from 'classnames'

export const CardWithoutBanner = ({data}) => {
  return (
    <article className={styles.wrapper}>
      {/*<Image src={data.image} width={150} height={150} alt="Аватарка" className={styles.image}/>*/}
      <img src={data.image} alt="Аватарка" className={styles.image}/>
      <h1 className={styles.name}>{data.fullname}</h1>
      <p className={styles.bio}>{data.bio}</p>
      <div className={styles.links}>
        {data.vk && <a className={cn(styles.link, "vk")} href={data.vk} key={data.vk}></a>}
        {data.telegram && <a className={cn(styles.link, "telegram")} href={data.telegram} key={data.telegram}></a>}
      </div>
      <hr className={styles.line}/>
      <a href={data.contact} className={styles.contact}>{data.contact}</a>
    </article>
  );
};
