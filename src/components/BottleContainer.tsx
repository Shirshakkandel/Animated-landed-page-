import React from 'react'
import { motion } from 'framer-motion'
import { bottle, bottleWrapper } from 'variants'

export default function BottleContainer() {
  return (
    <motion.div
      variants={bottleWrapper}
      initial="initial"
      animate="animate"
      className="bottleWrapper"
    >
      <motion.img variants={bottle} className="bottle" src="/images/juice.png" />
    </motion.div>
  )
}
