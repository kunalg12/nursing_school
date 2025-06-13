import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Brain, MessageCircle, Shield, Lightbulb } from 'lucide-react';

export default function AcademicPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive nursing education designed to develop competent, compassionate, 
            and professional healthcare providers through our GNM program.
          </p>
        </div>

        {/* Academic Tabs */}
        <Tabs defaultValue="programme-outcomes" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="programme-outcomes">Programme Outcomes</TabsTrigger>
            <TabsTrigger value="specific-outcomes">Programme Specific Outcomes</TabsTrigger>
            <TabsTrigger value="course-outcomes">Course Outcomes</TabsTrigger>
          </TabsList>

          {/* Programme Outcomes */}
          <TabsContent value="programme-outcomes">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  Programme Outcomes - GNM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Our GNM programme outcomes focus on developing nursing professionals who can 
                  apply knowledge effectively, work ethically, collaborate in teams, and 
                  communicate professionally in healthcare settings.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <Brain className="h-10 w-10 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">Knowledge Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Apply comprehensive nursing knowledge in diverse healthcare settings 
                        to provide evidence-based patient care and promote health and wellness.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <Shield className="h-10 w-10 text-green-600 mb-2" />
                      <CardTitle className="text-lg">Ethical Practice</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Demonstrate professional ethics, moral values, and legal responsibilities 
                        while maintaining patient confidentiality and dignity in all interactions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <Users className="h-10 w-10 text-purple-600 mb-2" />
                      <CardTitle className="text-lg">Teamwork & Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Work effectively as part of interdisciplinary healthcare teams, 
                        contributing to coordinated patient care and positive health outcomes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <MessageCircle className="h-10 w-10 text-red-600 mb-2" />
                      <CardTitle className="text-lg">Professional Communication</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Communicate effectively with patients, families, and healthcare 
                        professionals using appropriate therapeutic and professional communication skills.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader>
                      <Lightbulb className="h-10 w-10 text-yellow-600 mb-2" />
                      <CardTitle className="text-lg">Critical Thinking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Apply critical thinking and problem-solving skills to assess patient 
                        conditions and make informed decisions for optimal care delivery.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-indigo-500">
                    <CardHeader>
                      <BookOpen className="h-10 w-10 text-indigo-600 mb-2" />
                      <CardTitle className="text-lg">Lifelong Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Demonstrate commitment to continuous professional development and 
                        lifelong learning in the evolving healthcare environment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programme Specific Outcomes */}
          <TabsContent value="specific-outcomes">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Users className="h-8 w-8 text-green-600" />
                  Programme Specific Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Our programme specific outcomes emphasize the application of medical knowledge, 
                  development of leadership qualities, and enhancement of critical thinking abilities 
                  essential for nursing professionals.
                </p>

                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">Medical Knowledge Application</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Apply comprehensive medical and nursing knowledge to assess, plan, 
                        implement, and evaluate patient care across various healthcare settings.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Clinical Applications</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Pathophysiology understanding</li>
                            <li>• Pharmacology applications</li>
                            <li>• Diagnostic procedure knowledge</li>
                            <li>• Treatment protocol implementation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Patient Care</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Holistic patient assessment</li>
                            <li>• Care plan development</li>
                            <li>• Evidence-based interventions</li>
                            <li>• Outcome evaluation</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-800">Leadership Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Develop leadership qualities and management skills necessary to lead 
                        healthcare teams and improve patient outcomes in various clinical environments.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Leadership Skills</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Team management</li>
                            <li>• Decision making</li>
                            <li>• Conflict resolution</li>
                            <li>• Performance improvement</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Quality Management</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Quality assurance</li>
                            <li>• Process improvement</li>
                            <li>• Risk management</li>
                            <li>• Safety protocols</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Professional Growth</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Mentoring abilities</li>
                            <li>• Change management</li>
                            <li>• Innovation promotion</li>
                            <li>• Best practice implementation</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-purple-50 to-violet-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-800">Critical Thinking Enhancement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Enhance critical thinking abilities to analyze complex healthcare situations, 
                        make informed clinical decisions, and provide optimal patient care.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Analytical Skills</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Problem identification</li>
                            <li>• Data analysis and interpretation</li>
                            <li>• Pattern recognition</li>
                            <li>• Risk assessment</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Decision Making</h4>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Evidence evaluation</li>
                            <li>• Priority setting</li>
                            <li>• Solution development</li>
                            <li>• Outcome prediction</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Course Outcomes */}
          <TabsContent value="course-outcomes">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Shield className="h-8 w-8 text-red-600" />
                  Course Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Our course outcomes emphasize the development of safe, quality nursing care 
                  delivery across all healthcare sectors with focus on patient safety, 
                  evidence-based practice, and professional competence.
                </p>

                <div className="space-y-8">
                  <Card className="bg-gradient-to-r from-red-50 to-pink-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-800">Safe Nursing Care</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">
                        Provide safe, effective, and compassionate nursing care that prioritizes 
                        patient safety and prevents healthcare-associated complications.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Infection Control</h4>
                          <p className="text-sm text-gray-600">
                            Implement evidence-based infection prevention and control measures
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Medication Safety</h4>
                          <p className="text-sm text-gray-600">
                            Ensure accurate medication administration and monitoring
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Patient Safety</h4>
                          <p className="text-sm text-gray-600">
                            Identify and mitigate potential safety risks and hazards
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Emergency Response</h4>
                          <p className="text-sm text-gray-600">
                            Respond effectively to medical emergencies and critical situations
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">Quality Nursing Care</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">
                        Deliver high-quality nursing care that meets professional standards 
                        and promotes optimal patient outcomes across diverse healthcare settings.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Evidence-Based Practice</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Research utilization</li>
                            <li>• Best practice implementation</li>
                            <li>• Clinical guideline adherence</li>
                            <li>• Outcome measurement</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Patient-Centered Care</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Individualized care planning</li>
                            <li>• Cultural competency</li>
                            <li>• Family involvement</li>
                            <li>• Holistic approach</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Continuous Improvement</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Quality indicators monitoring</li>
                            <li>• Performance evaluation</li>
                            <li>• Process optimization</li>
                            <li>• Professional development</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-green-50 to-teal-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-800">Cross-Sector Competence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">
                        Demonstrate competence in providing nursing care across various healthcare 
                        sectors including acute care, community health, long-term care, and specialized units.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Healthcare Settings</h4>
                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg">
                              <h5 className="font-medium text-gray-900">Acute Care</h5>
                              <p className="text-sm text-gray-600">Hospitals, emergency departments, intensive care units</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <h5 className="font-medium text-gray-900">Community Health</h5>
                              <p className="text-sm text-gray-600">Primary health centers, home care, public health</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <h5 className="font-medium text-gray-900">Specialized Care</h5>
                              <p className="text-sm text-gray-600">Pediatrics, maternity, geriatrics, mental health</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Core Competencies</h4>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">Adaptability to different environments</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">Technology integration</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">Interdisciplinary collaboration</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">Resource optimization</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">Cultural sensitivity</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm">Professional communication</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}