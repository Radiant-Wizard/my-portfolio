"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "motion/react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full-Stack Developer"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-6">
            Hi, I&apos;m <span className="text-primary">Radiant Wizard </span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-8">
            {displayText}<span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A passionate computer science student specializing in building exceptional digital experiences. 
            Currently in my second year, exploring the endless possibilities of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={scrollToContact} size="lg" className="px-8">
              Get In Touch
            </Button>
            <Button onClick={scrollToAbout} variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Radiant-Wizard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/taratra-rakotomalala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  )
}