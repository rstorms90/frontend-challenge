import React from 'react';
import { animated, useTrail } from 'react-spring';

import { eventTitleStyles } from './EventTitleStyles/EventTitleStyles';

const EventTitle = () => {
  // Create array for React Spring to map
  const title = [`Annual`, `Pancake`, `Festival`];
  // Title animation
  const titleSpring = useTrail(title.length, {
    from: {
      padding: '0 3px',
      opacity: 0,
      x: 0,
      height: 0,
    },
    to: {
      opacity: 1,
      x: 20,
      height: 80,
    },
    config: { tension: 250, friction: 50 },
  });

  return (
    <div style={eventTitleStyles.eventTitle}>
      {titleSpring.map(({ x, height, ...rest }, index) => (
        <animated.div
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
          key={index}
        >
          {title[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default EventTitle;
