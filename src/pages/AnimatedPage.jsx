import { motion } from 'framer-motion'

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
}

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
