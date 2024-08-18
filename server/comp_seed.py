from db import db
from models import Competition
from app import app

def seed_high_quality_competitions():
    competitions_data = [
        {
            "title": "Global Hackathon 2024",
            "description": "A global hackathon focused on solving real-world problems with innovative solutions.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-05-16",
            "education": "High School",
            "theme": "Environmental Sustainability",
            "photo_url": "https://generated-images.perchance.org/image/65df9a67d025067f5fcdf0e183d5d284eafc99a8b3188a75e4b118bb36ddd281.jpeg"
        },
        {
            "title": "Business Case Challenge 2024",
            "description": "A challenging case competition focused on business strategy and innovation.",
            "type": "Case Competition",
            "difficulty": "Advanced",
            "time": "2024-06-20",
            "education": "University",
            "theme": "Corporate Responsibility",
            "photo_url": "https://generated-images.perchance.org/image/19b422423544ae920363b8e18ac2bb8c3d34fe195f6ac555dafe826184329e5a.jpeg"
        },
        {
            "title": "University Coding Challenge",
            "description": "A coding competition designed for university students to showcase their programming skills.",
            "type": "Hackathon",
            "difficulty": "Beginner",
            "time": "2024-07-10",
            "education": "None",
            "theme": "Open Innovation",
            "photo_url": "https://generated-images.perchance.org/image/a45c8a7d81bfea67fa1ff2e1d3e25139c8707361bcdf30bdd4e8b1b475b39e61.jpeg"
        },
        {
            "title": "AI for Social Good Hackathon",
            "description": "Develop AI-based solutions to address social issues and improve lives.",
            "type": "Hackathon",
            "difficulty": "Advanced",
            "time": "2024-08-05",
            "education": "University",
            "theme": "Artificial Intelligence",
            "photo_url": "https://generated-images.perchance.org/image/b7d3e0139702a5f8b06238676bb50b8751a41e2167c13ccb6381677bd4c1b6d1.jpeg"
        },
        {
            "title": "Sustainable Future Case Competition",
            "description": "Propose business strategies that promote environmental sustainability.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-09-12",
            "education": "High School",
            "theme": "Sustainability",
            "photo_url": "https://generated-images.perchance.org/image/18b27e8171876bace5111fcb4a0bcabc38d87442d121f33fd7fc3f403f59a65d.jpeg"
        },
        {
            "title": "Healthcare Innovation Hackathon",
            "description": "Create innovative solutions to tackle challenges in healthcare.",
            "type": "Hackathon",
            "difficulty": "Advanced",
            "time": "2024-10-18",
            "education": "University",
            "theme": "Healthcare",
            "photo_url": "https://generated-images.perchance.org/image/016394f76c8dc6b186aace9d8952d76e58b29156ed42645203951a127272d54a.jpeg"
        },
        {
            "title": "Smart Cities Case Challenge",
            "description": "Design smart city solutions for urban sustainability and efficiency.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-11-03",
            "education": "None",
            "theme": "Urban Development",
            "photo_url": "https://generated-images.perchance.org/image/679279739dec183ce4fe7abe468d3a5d6ca70d55eb294762643fa9426bf9e920.jpeg"
        },
        {
            "title": "Climate Change Hackathon",
            "description": "Develop technological solutions to combat climate change.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-12-15",
            "education": "High School",
            "theme": "Climate Change",
            "photo_url": "https://generated-images.perchance.org/image/763639922da12396d29b66e7f2ed4511f02fd9164b3c7f4125e5665832e3bf7b.jpeg"
        },
        {
            "title": "Fintech Innovation Challenge",
            "description": "Revolutionize financial technology with innovative solutions.",
            "type": "Case Competition",
            "difficulty": "Advanced",
            "time": "2024-05-22",
            "education": "University",
            "theme": "Fintech",
            "photo_url": "https://generated-images.perchance.org/image/1a13fc87f558772416ab4627e8ac531304322f89fc6a85dded5e7579f299de8f.jpeg"
        },
        {
            "title": "Blockchain for Social Impact",
            "description": "Use blockchain technology to solve pressing social issues.",
            "type": "Hackathon",
            "difficulty": "Advanced",
            "time": "2024-06-14",
            "education": "University",
            "theme": "Blockchain",
            "photo_url": "https://generated-images.perchance.org/image/befe297d71924ab7d9f530fa6c5b3811b270d6e1a6471c481bfb0e41ded815e4.jpeg"
        },
        {
            "title": "Digital Transformation Case Study",
            "description": "Analyze and present digital transformation strategies for businesses.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-07-19",
            "education": "None",
            "theme": "Digital Transformation",
            "photo_url": "https://generated-images.perchance.org/image/a30b803202893905dbd7f67abc58506e5f6b6eea3705dc1b38165f5fd6da11d6.jpeg"
        },
        {
            "title": "Green Energy Hackathon",
            "description": "Innovate in the field of renewable and green energy technologies.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-08-21",
            "education": "High School",
            "theme": "Green Energy",
            "photo_url": "https://generated-images.perchance.org/image/a30b803202893905dbd7f67abc58506e5f6b6eea3705dc1b38165f5fd6da11d6.jpeg"
        },
        {
            "title": "Cybersecurity Defense Challenge",
            "description": "Develop solutions to defend against modern cybersecurity threats.",
            "type": "Case Competition",
            "difficulty": "Advanced",
            "time": "2024-09-30",
            "education": "University",
            "theme": "Cybersecurity",
            "photo_url": "https://generated-images.perchance.org/image/18910ae1973f14ca03b18d4a7b86bf1df01bbb6033a566d4caf687cda01ae019.jpeg"
        },
        {
            "title": "Internet of Things Hackathon",
            "description": "Create IoT solutions for smart homes, cities, and industries.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-10-12",
            "education": "None",
            "theme": "Internet of Things",
            "photo_url": "https://generated-images.perchance.org/image/625cebf7ddd250d576441c7c8a7709ea4b18526a8f9efdd03dcf2eda46155874.jpeg"
        },
        {
            "title": "E-commerce Innovation Case",
            "description": "Develop strategies to innovate and enhance the e-commerce experience.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-11-15",
            "education": "High School",
            "theme": "E-commerce",
            "photo_url": "https://generated-images.perchance.org/image/6e55f5be56ff06475f7bfd9b4bb74070b8b6f103185bd46aeebbbb863cde2c79.jpeg"
        },
        {
            "title": "Space Exploration Hackathon",
            "description": "Innovate in the realm of space technology and exploration.",
            "type": "Hackathon",
            "difficulty": "Advanced",
            "time": "2024-12-01",
            "education": "University",
            "theme": "Space Exploration",
            "photo_url": "https://generated-images.perchance.org/image/fe5d9d1c8940b37b8a0463d42754767e8761da5bfa9185c3a71ffe1438714e12.jpeg"
        },
        {
            "title": "Renewable Resources Case Study",
            "description": "Propose business strategies focused on renewable resources.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-05-04",
            "education": "University",
            "theme": "Renewable Resources",
            "photo_url": "https://generated-images.perchance.org/image/a8960fb166d31daf30d99229fa09e3a0dfa0192250735655c949718907b7b489.jpeg"
        },
        {
            "title": "Virtual Reality Hackathon",
            "description": "Create immersive VR experiences and solutions.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-06-28",
            "education": "None",
            "theme": "Virtual Reality",
            "photo_url": "https://generated-images.perchance.org/image/bb89ad40e2a87d53367232d5b28ba9a1b87c5ccc97c35dd6ac93f07065d7e280.jpeg"
        },
        {
            "title": "Autonomous Vehicles Challenge",
            "description": "Innovate in the field of autonomous vehicle technology.",
            "type": "Case Competition",
            "difficulty": "Advanced",
            "time": "2024-07-13",
            "education": "University",
            "theme": "Autonomous Vehicles",
            "photo_url": "https://generated-images.perchance.org/image/1ad12e3557a5a54d37e95a4c6b04acc7dffa0aa216c8d01719d514b04961a764.jpeg"
        },
        {
            "title": "Agritech Hackathon",
            "description": "Develop solutions to improve agricultural technology and processes.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-08-18",
            "education": "High School",
            "theme": "Agritech",
            "photo_url": "https://generated-images.perchance.org/image/70f4c7d510efbc0677cff613bdb144211cc80a54d49efc0918b5569662f9478b.jpeg"
        },
        {
            "title": "Social Media Strategy Case",
            "description": "Create and present effective social media strategies.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-09-09",
            "education": "University",
            "theme": "Social Media",
            "photo_url": "https://generated-images.perchance.org/image/226eb926732b4033df5cdc4dd9ec2cc69a61d0a3f1de20aa3bc2fc2b028b594f.jpeg"
        },
        {
            "title": "Quantum Computing Hackathon",
            "description": "Explore quantum computing with practical applications.",
            "type": "Hackathon",
            "difficulty": "Advanced",
            "time": "2024-10-25",
            "education": "University",
            "theme": "Quantum Computing",
            "photo_url": "https://generated-images.perchance.org/image/27dd84e2dd0ecec5657ee8e2a2a3b3941ddb4130a26966cfdfe94eed8ef7e3bb.jpeg"
        },
        {
            "title": "EdTech Innovation Case",
            "description": "Propose innovative solutions to enhance education through technology.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-11-08",
            "education": "High School",
            "theme": "EdTech",
            "photo_url": "https://generated-images.perchance.org/image/5a04a634f35e15e5dc40616d59e2c46152716391b239e81ea4e735f84bb066b4.jpeg"
        },
        {
            "title": "Smart Agriculture Hackathon",
            "description": "Develop smart farming techniques to improve efficiency and yield.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-12-20",
            "education": "None",
            "theme": "Smart Agriculture",
            "photo_url": "https://generated-images.perchance.org/image/fa141e64ba52b95b1e68fd5d85a44cde0b26cf0da57d2da15b4fd517d9a141b1.jpeg"
        },
        {
            "title": "E-learning Strategies Case Study",
            "description": "Develop and present innovative e-learning strategies.",
            "type": "Case Competition",
            "difficulty": "Intermediate",
            "time": "2024-12-27",
            "education": "University",
            "theme": "E-learning",
            "photo_url": "https://generated-images.perchance.org/image/3e889d71c1408d99eef7d3ee1028a46e4c6a1768aa8f2e57fee9f5bf5048af9e.jpeg"
        }
    ]

    with app.app_context():
        for competition in competitions_data:
            new_competition = Competition(
                title=competition["title"],
                description=competition["description"],
                type=competition["type"],
                difficulty=competition["difficulty"],
                time=competition["time"],
                education=competition["education"],
                theme=competition["theme"],
                photo_url=competition["photo_url"]
            )
            db.session.add(new_competition)

        db.session.commit()
        print("25 High-Quality Competitions Seeded.")

if __name__ == "__main__":
    seed_high_quality_competitions()

