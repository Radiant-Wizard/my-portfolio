import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import { Badge } from "./ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

export function Experience() {
  const education = [
    {
      institution: "Haute Ecole d'Informatique ( HEI )",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - 2026 (Expected)",
      location: "Madagascar, Antananarivo",
      description:
        "Relevant coursework: Object-Oriented Programming, Database Systems, Software Engineering, Web Development, Algorithms and Data Science",
    },
  ];

  const experience = [
    {
      company: "Looking for my first experience",
      position: "Student / Aspiring Intern",
      period: "Currently seeking an alternance",
      location: "",
      description:
        "I am a motivated student eager to gain practical experience in the field. I am looking for my first professional opportunity to apply my skills and learn in a real-world environment.",
      achievements: [
        "Currently developing foundational skills in Java, Python, Typescript and SQL",
        "Participating in personal projects and coursework to strengthen practical knowledge",
        "Eager to contribute, learn, and grow in a professional team setting",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and professional experience in the tech industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl mb-6 flex items-center">
              <GraduationCap className="mr-2" size={24} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="text-primary">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl mb-6 flex items-center">
              <Briefcase className="mr-2" size={24} />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.position}</CardTitle>
                    <CardDescription className="text-primary">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div>
                      <strong>Key Achievements:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        {/* <div>
          <h3 className="text-2xl mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <Badge variant="outline">{cert.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
