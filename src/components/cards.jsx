
import React from 'react'
import { motion,useScroll} from "framer-motion"

export default function Cards() {
    const {scrollYProgress} = useScroll()
    return (
        <>
            <section className='sm:h-fit md:h-screen w-full bg-black justify-center '>


                <div className='grid grid-rows-3 pb-4 md:pb-10 gap-0 px-4 md:pt-10 md:grid md:grid-cols-3 md:gap-8 '>
                    <motion.div initial = {{ opacity:0,y:200
                    }}
                    whileInView={{y:-10,opacity:1}}
                    transition={{duration:1}}>

                    <div className='relative'>
                    
                    <div className=' container h-72 w-80  bg-gradient-to-tr from-zinc-700 via-black  to-black bg-opacity-30 text-slate-50 backdrop-blur-3xl  p-7 md:h-80 md:w-96  border-2 border-slate-950 rounded-md  mt-36 gap-6 '>
                        <h2 className='mx-auto align-middle md:pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque dolores recusandae dicta laudantium temporibus, unde, neque vel perspiciatis ab cum? Magni architecto impedit ipsam numquam culpa ab quas explicabo?</h2>   
                        
                    </div>
                    </div>
                    </motion.div>
                    <motion.div initial = {{ opacity:0,y:100
                    }}
                    whileInView={{y:-10,opacity:1}}
                    transition={{duration:1.2}}>
                    <div className=' container text-slate-50 backdrop-blur-md p-7  h-72 w-80  md:h-80 md:w-96  border-2 border-slate-950 rounded-md  bg-gradient-to-t from-zinc-900 via-black  to-black mt-36 ' >
                        <h2 className='mx-auto align-middle md:pt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque dolores recusandae dicta laudantium temporibus, unde, neque vel perspiciatis ab cum? Magni architecto impedit ipsam numquam culpa ab quas explicabo?</h2>
                    </div>
                    </motion.div>
                    <motion.div initial = {{ opacity:0,y:200
                    }}
                    whileInView={{y:-10,opacity:1}}
                    transition={{duration:1}}
                    >
                    <div className=' container h-72 w-80 bg-gradient-to-tl from-zinc-700 via-black  to-black text-slate-50 backdrop-blur-md p-7 md:h-80 md:w-96  border-2 border-slate-950 rounded-md  mt-36'>
                        <h2 className='mx-auto align-middle md:pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque dolores recusandae dicta laudantium temporibus, unde, neque vel perspiciatis ab cum? Magni architecto impedit ipsam numquam culpa ab quas explicabo?</h2>
                    </div>  
                    </motion.div>
                </div>
            </section>
        </>
    )
}
