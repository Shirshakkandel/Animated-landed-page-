import { motion } from 'framer-motion'
import React from 'react'
import { leavesContainer } from 'variants'
import Leaf from './Leaf'

export default function LeaveContainer() {
  return (
    <motion.div variants={leavesContainer} initial="initial" animate="animate">
      <Leaf animatationSpeed={1.8} className="leafWrapper-1" imageUrl="/images/leaf01.png" />
      <Leaf animatationSpeed={1.6} className="leafWrapper-2" imageUrl="./images/leaf02.png" />
      {/* <Leaf className="leafWrapper-3" imageUrl="./images/leaf03.png" /> */}
      <Leaf animatationSpeed={1.5} className="leafWrapper-4" imageUrl="./images/leaf04.png" />
      <Leaf animatationSpeed={1.7} className="leafWrapper-5" imageUrl="./images/leaf05.png" />
    </motion.div>
  )
}
