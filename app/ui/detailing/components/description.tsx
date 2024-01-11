import Image from 'next/image';
import React from 'react';

// *** Assets ***
import pcRoom from '@/assets/images/pc-room.png';

type Props = {};

export const Description = (props: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p>
        CUPERTINO, CA , The M1 CPU allows Apple to deliver an all-new iMac with
        a lot more compact and impressively thin design. The new iMac delivers
        tremendous performance in an 11.5-millimeter-thin design with a stunning
        side profile that almost vanishes. iMac includes a 24-inch 4.5K Retina
        display with 11.3 million pixels, 500 nits of brightness, and over a
        billion colors, giving a beautiful and vivid viewing experience. It is
        available in a variety of striking colors to match a user's own style
        and brighten any area. A 1080p FaceTime HD camera, studio-quality mics,
        and a six-speaker sound system are all included in the new iMac, making
        it the greatest camera and audio system ever in a Mac. Touch ID is also
        making its debut on the iMac, making it easier than ever to securely log
        in, make Apple Pay transactions, and switch user accounts with the touch
        of a finger. Apps launch at lightning speed, everyday chores seem
        astonishingly fast and fluid, and demanding workloads like editing 4K
        video and working with large photos are faster than ever before thanks
        to the power and performance of M1 and macOS Big Sur.
      </p>
      <Image src={pcRoom} alt="" />
      <p>
        The new iMac joins Apple's fantastic M1-powered Mac family, which
        includes the MacBook Air, 13-inch MacBook Pro, and Mac mini, and
        represents yet another step ahead in the company's shift to Apple
        silicon. Customers may order iMac starting Friday, April 30. It's the
        most personal, powerful, capable, and enjoyable it's ever been. In the
        second half of May, the iMac will be available."M1 is a huge step
        forward for the Mac," said Greg Joswiak, Apple's senior vice president
        of Worldwide Marketing. "Today, we're delighted to present the all-new
        iMac, the first Mac developed around the groundbreaking M1 processor."
        "The new iMac takes everything people love about iMac to an entirely new
        level, with its beautiful design in seven breathtaking colors, its
        immersive 4.5K Retina display, the greatest camera, mics, and speakers
        ever in a Mac, and Touch ID, combined with M1's incredible performance
        and macOS Big Sur's power."
      </p>
    </div>
  );
};
