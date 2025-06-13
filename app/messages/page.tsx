import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, User, GraduationCap } from 'lucide-react';

export default function MessagesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Messages from Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inspiring words from our Principal and Director about our commitment 
            to excellence in nursing education and student development.
          </p>
        </div>

        {/* Principal's Message */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardHeader className="text-center">
              <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-blue-800">Principal's Message</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <Quote className="h-12 w-12 text-blue-400 mb-6 mx-auto" />
                <blockquote className="text-lg text-gray-700 italic text-center mb-8 leading-relaxed">
                  "Welcome to Swami Vivekanand School of Nursing, where we are committed to 
                  nurturing the next generation of healthcare professionals. Our institution 
                  stands as a beacon of excellence in nursing education, emphasizing not just 
                  academic achievement but holistic development of our students.
                </blockquote>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-6">
                    At our institution, we believe that nursing is not just a profession but a 
                    calling to serve humanity with compassion, competence, and dedication. Our 
                    comprehensive GNM program is designed to equip students with the knowledge, 
                    skills, and values necessary to excel in the dynamic healthcare environment.
                  </p>
                  
                  <p className="mb-6">
                    We emphasize holistic education that encompasses theoretical knowledge, 
                    practical skills, ethical values, and professional integrity. Our experienced 
                    faculty members are committed to providing personalized attention and guidance 
                    to help each student reach their full potential.
                  </p>
                  
                  <p className="mb-6">
                    The healthcare sector is evolving rapidly, and we ensure our curriculum 
                    remains current with industry standards and emerging trends. Our state-of-the-art 
                    laboratories, modern classrooms, and clinical partnerships provide students 
                    with hands-on experience in real healthcare settings.
                  </p>
                  
                  <p className="mb-8">
                    I encourage all our students to embrace the values of lifelong learning, 
                    professional excellence, and compassionate care. Together, we will continue 
                    to uphold our institution's reputation for producing competent and caring 
                    nursing professionals who make a positive difference in society.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block">
                    <p className="font-semibold text-blue-800 text-lg">Principal</p>
                    <p className="text-blue-600">Swami Vivekanand School of Nursing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Director's Message */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader className="text-center">
              <User className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-green-800">Director's Message</CardTitle>
              <p className="text-green-700 font-medium">Mr. Chandrakant Appasaheb Jadhav</p>
            </CardHeader>
            <CardContent>
              <div className="max-w-4xl mx-auto">
                <Quote className="h-12 w-12 text-green-400 mb-6 mx-auto" />
                <blockquote className="text-lg text-gray-700 italic text-center mb-8 leading-relaxed">
                  "Education is the foundation of progress, and at INDRAYANI PRATISHTHAN, 
                  we are dedicated to building that foundation with unwavering commitment 
                  to excellence, service, and the betterment of society through quality 
                  nursing education."
                </blockquote>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-6">
                    As the Director of INDRAYANI PRATISHTHAN, I am proud to lead an institution 
                    that has consistently demonstrated excellence in nursing education. Our 
                    journey began with a simple yet powerful vision: to create healthcare 
                    professionals who would serve society with dedication and competence.
                  </p>
                  
                  <p className="mb-6">
                    Our commitment extends beyond traditional education. We focus on developing 
                    well-rounded individuals who possess not only technical expertise but also 
                    the emotional intelligence and ethical grounding necessary for effective 
                    healthcare delivery. The nursing profession demands individuals who can 
                    combine scientific knowledge with human compassion.
                  </p>
                  
                  <p className="mb-6">
                    At INDRAYANI PRATISHTHAN, we have invested significantly in creating an 
                    environment that fosters learning, growth, and innovation. Our modern 
                    facilities, experienced faculty, and industry partnerships ensure that 
                    our students receive education that is both comprehensive and contemporary.
                  </p>
                  
                  <p className="mb-6">
                    We believe in the transformative power of education and its ability to 
                    create positive change in society. Our graduates go on to serve in various 
                    healthcare settings, making meaningful contributions to patient care and 
                    community health. This impact motivates us to continuously improve and 
                    innovate in our educational approach.
                  </p>
                  
                  <p className="mb-8">
                    I invite you to join our community of learners, educators, and healthcare 
                    professionals. Together, we will continue to uphold the highest standards 
                    of nursing education and contribute to the noble cause of healthcare service. 
                    Your journey with us will be one of growth, discovery, and meaningful contribution 
                    to society.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block">
                    <p className="font-semibold text-green-800 text-lg">Mr. Chandrakant Appasaheb Jadhav</p>
                    <p className="text-green-600">Director, INDRAYANI PRATISHTHAN</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vision Statement */}
        <section>
          <Card className="bg-gradient-to-r from-purple-50 to-pink-100 border-purple-200">
            <CardContent className="py-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">Our Shared Commitment</h2>
                <p className="text-lg text-purple-700 max-w-4xl mx-auto leading-relaxed">
                  Both our Principal and Director share a unified vision of excellence in nursing 
                  education. Together, they lead our institution with a commitment to developing 
                  healthcare professionals who will make a lasting positive impact on society 
                  through compassionate care, professional competence, and ethical practice.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}