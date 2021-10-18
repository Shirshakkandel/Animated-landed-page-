import { motion } from 'framer-motion'
import React from 'react'
import { leaf, leafWrapper } from 'variants'

export default function Leaf({ className, imageUrl, animatationSpeed }) {
  return (
    <motion.div variants={leafWrapper} className={className}>
      <motion.img custom={animatationSpeed} variants={leaf} src={imageUrl} className="left" />
    </motion.div>
  )
}
