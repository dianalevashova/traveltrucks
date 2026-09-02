'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ImageCamper } from '@/types/camper';

import 'swiper/css';
// import 'swiper/css/thumbs';

import styles from './Gallery.module.css';

interface GalleryProps {
  images: ImageCamper[];
  name: string;
}

export default function Gallery({ images, name }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
        speed={10}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={image.original}
                alt={name}
                fill
                className={styles.mainImage}
                priority
                sizes="638px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={4}
        spaceBetween={32}
        watchSlidesProgress
        speed={10}
        className={styles.thumbsSwiper}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <div className={styles.thumbWrapper}>
              <Image
                src={image.thumb}
                alt={name}
                fill
                priority
                className={styles.thumbImage}
                sizes="136px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
