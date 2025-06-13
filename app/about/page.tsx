import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Institution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            INDRAYANI PRATISHTHAN is dedicated to providing exceptional nursing education 
            through our Swami Vivekanand School of Nursing / Sai Care School of Nursing.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Institution Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Swami Vivekanand School of Nursing / Sai Care School of Nursing stands as a beacon 
                of excellence in nursing education in Maharashtra. Established under the auspices 
                of INDRAYANI PRATISHTHAN, our institution is committed to nurturing the next 
                generation of healthcare professionals.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our college has been designed to provide comprehensive nursing education that 
                combines theoretical knowledge with practical skills, ensuring our graduates 
                are well-prepared to serve in various healthcare settings with competence and compassion.
              </p>
              <p className="text-lg text-gray-700">
                We believe in holistic development, focusing not just on academic excellence 
                but also on character building, ethical values, and professional integrity 
                that are essential for healthcare professionals.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Highly qualified and experienced nursing professionals dedicated to student success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Modern Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  State-of-the-art laboratories, well-equipped classrooms, and comfortable hostel facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive curriculum aligned with industry standards and regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Compassionate Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Focus on developing empathy, compassion, and ethical values in future nurses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Our Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-4">
                Our faculty comprises experienced nursing professionals, medical experts, and 
                educational specialists who bring a wealth of knowledge and practical experience 
                to the classroom. Each faculty member is committed to providing personalized 
                attention and guidance to help students achieve their full potential.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Qualified Professionals</h4>
                  <p className="text-gray-600">
                    Masters and PhD holders in nursing and related fields
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Clinical Experience</h4>
                  <p className="text-gray-600">
                    Extensive practical experience in healthcare settings
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Dedicated Mentors</h4>
                  <p className="text-gray-600">
                    Committed to student development and success
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infrastructure Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Infrastructure & Dedication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-6">
                Our institution boasts modern infrastructure designed specifically for nursing 
                education. From well-equipped laboratories that simulate real healthcare 
                environments to comfortable learning spaces and residential facilities, 
                every aspect of our campus is designed to enhance the learning experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Educational Facilities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modern, well-ventilated classrooms</li>
                    <li>• Specialized nursing laboratories</li>
                    <li>• Digital learning aids and equipment</li>
                    <li>• Library with extensive nursing literature</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">Student Amenities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Separate hostels for boys and girls</li>
                    <li>• Safe and secure campus environment</li>
                    <li>• Clean and hygienic facilities</li>
                    <li>• Recreation and common areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}