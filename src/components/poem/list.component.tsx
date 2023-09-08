import React from 'react';
import { Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PoemCard from './card.component';

const PoemList = ({ poems }: any) =>
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
            {
                poems.map((poem: any) =>
                    (
                        <SwiperSlide key={poem.id + '.POEM.HOME.LIST'}>
                            <PoemCard poem={poem}/>
                        </SwiperSlide>
                    ))
            }
        </Swiper>
    );
};

export default PoemList;
