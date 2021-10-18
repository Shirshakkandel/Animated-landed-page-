import { Variants } from 'framer-motion'

export { fadeIn, staggerContainer, bottleWrapper, bottle, leavesContainer, leafWrapper }

const fadeIn = (direction: 'up' | 'down' = 'up'): Variants => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }
}
const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
}

const bottleWrapper: Variants = {
  initial: { y: -1000 },
  animate: {
    y: 0,
    transition: { delay: 2.6, duration: 0.8, type: 'tween' },
  },
}

const bottle: Variants = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: 'linear',
      repeat: Infinity,
    },
  },
}

const leavesContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3,
    },
  },
}

const leafWrapper: Variants = {
  initial: { y: -1000 },
  animate: { y: 0, transition: { duration: 0.4, type: 'spring' } },
}

export const leaf: Variants = {
  initial: {},
  animate: (i: number) => ({
    x: [20, 0, 20],
    transition: { delay: 2, duration: 1 * i, ease: 'linear', repeat: Infinity },
  }),
}
