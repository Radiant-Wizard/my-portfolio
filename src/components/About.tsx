import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./ui/ImageWithFallback";

export function About() {
  const interests = [
    "Web Development",
    "Machine Learning",
    "Command Line Interface",
    "Open Source",
    "Gaming",
    "Music",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better - my journey, interests, and what drives my
            passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">My Story</h3>
                <p className="text-muted-foreground mb-4">
                  I&apos;m currently a second-year Computer Science student at
                  HEI with a passion for creating innovative solutions through
                  code. My journey started with curiosity about how technologies
                  work, and it has evolved into a deep love for development.
                </p>
                <p className="text-muted-foreground mb-4">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, working on my homelab server, or enjoying
                  listening to Indie Musics. I believe in continuous learning
                  and always strive to challenge myself with new projects.
                </p>
                <p className="text-muted-foreground">
                  My goal is to build things that make a positive impact on
                  people&apos;s lives while constantly improving my technical
                  skills and understanding of software engineering best
                  practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-4">Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <ImageWithFallback
                    src="/profile-img-01.jpg"
                    alt="Taratra Fanoitra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl mb-2">Taratra Fanoitra</h3>
                  <p className="text-muted-foreground mb-4">
                    Computer Science Student
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📍 Madagascar, Antananarivo</p>
                    <p>🎓 Haute École d&apos;Informatique - HEI</p>
                    <p>💼 Available for apprenticeship</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
