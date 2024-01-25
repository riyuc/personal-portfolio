import React from 'react'

const projects: Project[] = [
    {
        title: "Snap Cart",
        subtitle: "Google & Square AI Hackathon",
        image: "snapcart.png",
        date: "October 2023",
        description: "Participated in a hackathon hosted by Google and Square looking to integrate Google's AutoML and Square\'s payment process API"
    },
    {
        title: "ouckah",
        subtitle: "Content Creation",
        image: "tiktok.jpg",
        date: "February 2023 - Present",
        description: "Created educational and entertainment content revolving around the culture of Computer Science"
    },
    {
        title: "EazyWay",
        subtitle: "J.P. Morgan Code for Good",
        image: "codeforgood.jpg",
        date: "September 2023",
        description: "Developed a project for non-profit Wellfare to optimize the onboarding process for those with food stamps and government help"
    }
]

const education: Education[] = [
    {
        school: "Stevens Institute of Technology",
        major: "Computer Science, Minor in Math",
        image: "stevens.jpg",
        subtitles: [
            {
                title: "Awards",
                description: "Pinnacle Scholar 🞄 Dean’s List: Fall 2022, Spring 2023"
            },
            {
                title: "Clubs",
                description: "Ultimate Frisbee 🞄 Blueprint 🞄 Chess 🞄 Poker"
            }
        ]
    },
    {
        school: "Montclair State University",
        major: "Co-op Program",
        image: "msu.png",
        subtitles: [
            {
                title: "Classes",
                description: "Calculus I, II 🞄 Introduction to Java Programming"
            },
            {
                title: "Clubs",
                description: "None. I was scared."
            }
        ]
    }
]

const DucAnhNguyen = () => {

  return (
    <div>DucAnhNguyen</div>
  )
}

export default DucAnhNguyen