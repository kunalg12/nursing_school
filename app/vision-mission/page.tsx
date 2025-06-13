import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target, Award } from 'lucide-react';

export default function VisionMissionPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vision, Mission & Quality Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that shape every aspect of nursing education 
            and professional development at our institution.
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardHeader className="text-center">
              <Eye className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-blue-800">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-2xl text-center text-blue-900 font-medium italic">
                "To nurture nursing professionals who serve society with compassion and competence."
              </blockquote>
              <div className="mt-8 prose max-w-none">
                <p className="text-lg text-gray-700">
                  Our vision encompasses the development of healthcare professionals who not only 
                  possess technical expertise but also embody the values of empathy, dedication, 
                  and service to humanity. We strive to create nurses who will make a meaningful 
                  difference in the lives of patients and communities they serve.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader className="text-center">
              <Target className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-green-800">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-2xl text-center text-green-900 font-medium italic mb-8">
                "To provide holistic nursing education and develop professional excellence in care and service."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Excellence</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comprehensive theoretical and practical training</li>
                    <li>• Evidence-based nursing practices</li>
                    <li>• Continuous curriculum updates</li>
                    <li>• Integration of modern healthcare technologies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Leadership and management skills</li>
                    <li>• Ethical and professional values</li>
                    <li>• Critical thinking and problem-solving</li>
                    <li>• Lifelong learning commitment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quality Policy Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-yellow-200">
            <CardHeader className="text-center">
              <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-3xl text-yellow-800">Quality Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-2xl text-center text-yellow-900 font-medium italic mb-8">
                "To promote excellence through continuous evaluation, professional development, and hands-on training."
              </blockquote>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Continuous Evaluation</h4>
                  <p className="text-gray-700 mb-4">
                    We implement comprehensive assessment methods to monitor student progress 
                    and institutional effectiveness. Regular feedback mechanisms ensure 
                    continuous improvement in teaching methodologies and learning outcomes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Academic Assessment</h5>
                      <p className="text-sm text-gray-600">Regular testing and practical evaluations</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Clinical Competency</h5>
                      <p className="text-sm text-gray-600">Skills-based assessments in real settings</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Professional Growth</h5>
                      <p className="text-sm text-gray-600">360-degree feedback and mentoring</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h4>
                  <p className="text-gray-700 mb-4">
                    Our commitment to faculty and student development ensures that both teaching 
                    and learning remain at the forefront of nursing education standards.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Faculty Development</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Regular training workshops</li>
                        <li>• Research and publication support</li>
                        <li>• Professional conference participation</li>
                        <li>• Continuing education programs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Student Support</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Academic mentoring programs</li>
                        <li>• Career guidance and counseling</li>
                        <li>• Leadership development opportunities</li>
                        <li>• Professional networking events</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Hands-on Training</h4>
                  <p className="text-gray-700">
                    Practical experience is at the core of our educational approach. Students 
                    engage in real-world healthcare scenarios through our comprehensive 
                    clinical training programs, ensuring they graduate as confident, 
                    competent healthcare professionals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Framework */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Implementation Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="p-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Plan</h4>
                  <p className="text-gray-600 text-sm">Strategic planning and goal setting</p>
                </div>
                <div className="p-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Execute</h4>
                  <p className="text-gray-600 text-sm">Implementation of quality programs</p>
                </div>
                <div className="p-4">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monitor</h4>
                  <p className="text-gray-600 text-sm">Continuous assessment and feedback</p>
                </div>
                <div className="p-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Improve</h4>
                  <p className="text-gray-600 text-sm">Continuous enhancement and optimization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}