import HeroSection from '@/components/hero-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Building, Phone, Award, Heart, Stethoscope, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Welcome Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Excellence in Nursing Education
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Swami Vivekanand School of Nursing / Sai Care School of Nursing. 
                A premier institute for GNM nursing education in Maharashtra, dedicated to shaping 
                the future of healthcare through comprehensive education and training.
              </p>
              <p className="text-gray-600 mb-8">
                Our institution combines modern facilities with experienced faculty to provide 
                students with the knowledge, skills, and values needed to excel in healthcare. 
                We focus on developing compassionate professionals who make a real difference 
                in patient care and community health.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nursing students in clinical training"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Campus Life & Learning Environment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a vibrant campus life with modern facilities, dedicated faculty, 
              and a supportive learning environment that prepares you for a successful nursing career.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <Carousel>
                <CarouselContent>
                  {[
                    "/IMG_20240815_083955.jpg",
                    "/IMG_20240815_082245.jpg",
                    "/IMG_20240815_082209.jpg",
                    "/IMG_20240815_081747.jpg",
                    "/IMG_20240810_164503.jpg",
                    "/IMG_20240710_140352.jpg"
                  ].map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex justify-center items-center h-72 md:h-96">
                        <Image
                          src={src}
                          alt={`Campus life image ${idx + 1}`}
                          className="object-cover rounded-lg shadow-lg w-full h-full"
                          width={1200}
                          height={675}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Programs & Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover everything we offer to support your nursing education journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-l-4 border-l-blue-500">
              <Link href="/academic">
                <CardHeader className="text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-blue-600 transition-colors">Academic Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Explore our comprehensive GNM curriculum and course outcomes designed for excellence.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-l-4 border-l-green-500">
              <Link href="/admissions">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-green-600 transition-colors">Admissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Learn about eligibility criteria, fees, and application process for enrollment.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-l-4 border-l-purple-500">
              <Link href="/facilities">
                <CardHeader className="text-center">
                  <Building className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-purple-600 transition-colors">Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Discover our modern labs, classrooms, and comfortable hostel facilities.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-l-4 border-l-red-500">
              <Link href="/contact">
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-red-600 transition-colors">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Get in touch with us for any queries or information about our programs.
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nursing education excellence"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                width={800}
                height={400}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Excellence in</p>
                    <p className="text-sm text-gray-600">Nursing Education</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Institution?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Stethoscope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Clinical Training</h3>
                    <p className="text-gray-600">Hands-on experience in real healthcare environments with modern equipment and expert supervision.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                    <p className="text-gray-600">Learn from experienced nursing professionals and medical experts dedicated to your success.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Holistic Development</h3>
                    <p className="text-gray-600">Focus on character building, ethical values, and professional integrity alongside academic excellence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">Our graduates are highly sought after by leading healthcare institutions across Maharashtra.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Students Make a Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our graduates are making meaningful contributions to healthcare and serving communities with dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4173258/pexels-photo-4173258.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nursing graduate in action"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Making Healthcare Accessible</h3>
                <p className="text-sm opacity-90">Our graduates serve in hospitals, clinics, and community health centers</p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nursing team collaboration"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Leading with Compassion</h3>
                <p className="text-sm opacity-90">Developing leaders who transform healthcare delivery with empathy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Nursing Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in our mission to create compassionate healthcare professionals 
            who make a difference in the world. Your journey to excellence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Schedule Campus Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}