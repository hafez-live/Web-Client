import React from 'react';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PoemCard from './card.component';

const PoemList = () =>
{
    return (
        <Swiper
            dir='ltr'
            modules={[ Keyboard, Autoplay ]}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={20}
            breakpoints={{
                0: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
                1400: { slidesPerView: 3 }
            }}
        >
            <SwiperSlide>
                <PoemCard />
            </SwiperSlide>
            <SwiperSlide>
                <PoemCard />
            </SwiperSlide>
            <SwiperSlide>
                <PoemCard />
            </SwiperSlide>
            <SwiperSlide>
                <PoemCard />
            </SwiperSlide>
        </Swiper>
    );
};

export default PoemList;
