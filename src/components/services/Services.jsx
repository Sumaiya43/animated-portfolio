import "./services.scss"
import { animate, motion } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
    return (
        <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants} >
                <motion.p>I focus on helping your brand grow
                    <br /> and move forward</motion.p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business
                    </h1>
                    <button>WHAT I DO?</button>
                </div>

            </motion.div>
            <motion.div className="listContainer" variants={variants} >
                <motion.div className="box" whileHover={{background: "lightgray", color: "black", cursor: "pointer"}}>
                    <h2>Web Development</h2>
                    <p>
                        Develop interactive user interfaces with dynamic data integration.
                        Implement routing and navigation using React Router for single-page applications.
                       
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div  className="box" whileHover={{background: "lightgray", color: "black", cursor: "pointer"}}>
                    <h2>E-commerce Solutions</h2>
                    <p>
                        Build custom e-commerce platforms with secure payment gateways and product catalogs.
                        Implement shopping cart functionalities and order management systems.
                       
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div  className="box" whileHover={{background: "lightgray", color: "black", cursor: "pointer"}}>
                    <h2>Performance Optimization</h2>
                    <p>
                        Implement code splitting and lazy loading for optimized load times.
                        Optimize rendering and minimize re-renders using React.memo and useMemo.
                      
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div  className="box" whileHover={{background: "lightgray", color: "black", cursor: "pointer"}}>
                    <h2>Maintanance and Support</h2>
                    <p>
                        Provide ongoing maintenance and updates for React applications to ensure optimal performance.
                        Monitor website uptime, security, and performance metrics.
                        
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services