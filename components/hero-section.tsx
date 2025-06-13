import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Users, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Nursing education background"
          className="w-full h-full object-cover opacity-20"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-700/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-blue-600 font-medium">
              <GraduationCap className="h-5 w-5" />
              <span>Premier Nursing Education in Maharashtra</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-blue-600">Swami Vivekanand School</span>
            <br />
            <span className="text-indigo-600">of Nursing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-medium">
            A premier institute for GNM nursing education in Maharashtra. 
            Nurturing compassionate healthcare professionals dedicated to serving society.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/90 backdrop-blur-sm hover:bg-white">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">GNM Program</h3>
              <p className="text-gray-600">Comprehensive 3.5-year nursing education</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">Training future healthcare heroes</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Experienced nursing professionals</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Commitment to quality education</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;