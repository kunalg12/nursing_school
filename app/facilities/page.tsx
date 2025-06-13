import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Microscope, BookOpen, Home, Wifi, Shield, Utensils } from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Facilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art facilities provide students with the best learning 
            environment, combining modern technology with comfortable amenities.
          </p>
        </div>

        {/* Facilities Tabs */}
        <Tabs defaultValue="laboratories" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="laboratories">Laboratories</TabsTrigger>
            <TabsTrigger value="classrooms">Classrooms</TabsTrigger>
            <TabsTrigger value="hostel">Hostel Facilities</TabsTrigger>
          </TabsList>

          {/* Laboratories */}
          <TabsContent value="laboratories">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Microscope className="h-8 w-8 text-blue-600" />
                  Specialized Laboratories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Our laboratories are equipped with modern instruments and equipment 
                  to provide hands-on training in various aspects of nursing care.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-700">Nutrition Laboratory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Comprehensive facility for learning nutrition principles and therapeutic diets.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Diet planning equipment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Food composition analysis tools</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Cooking demonstration area</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Nutritional assessment instruments</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-700">Fundamentals of Nursing Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Basic nursing skills training laboratory with simulation equipment.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Patient care mannequins</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Vital signs monitoring equipment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Injection practice models</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Wound care simulation kits</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-700">Child Health Nursing Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Specialized laboratory for pediatric nursing care training.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Pediatric mannequins (various ages)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Growth monitoring equipment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Immunization training kits</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Pediatric emergency equipment</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-700">Medical-Surgical Nursing Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Advanced laboratory for complex nursing procedures and surgical care.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Surgical simulation equipment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Advanced patient simulators</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Catheterization training models</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Emergency response equipment</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-pink-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-pink-700">Maternity Nursing Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Obstetric and gynecological nursing care training facility.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Delivery simulation models</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Antenatal care equipment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Neonatal care simulators</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Breastfeeding training aids</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-700">Community Health Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Community health and public health nursing training laboratory.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Epidemiology study materials</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Health education aids</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Disease prevention kits</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">Home visit simulation setup</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Laboratory Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Microscope className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 text-sm">State-of-the-art equipment</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 text-sm">Safety protocols and guidelines</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 text-sm">Comprehensive learning resources</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Wifi className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 text-sm">Digital learning integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Classrooms */}
          <TabsContent value="classrooms">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  Modern Learning Spaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Our classrooms are designed to facilitate effective learning with modern 
                  amenities and technology integration for an enhanced educational experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-800">Classroom Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Spacious and Well-Ventilated</h4>
                            <p className="text-gray-600 text-sm">
                              Large classrooms with proper ventilation systems ensuring comfortable learning environment
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Natural Lighting</h4>
                            <p className="text-gray-600 text-sm">
                              Optimal natural light supplemented with modern LED lighting systems
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Ergonomic Furniture</h4>
                            <p className="text-gray-600 text-sm">
                              Comfortable seating arrangements designed for extended learning sessions
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Climate Control</h4>
                            <p className="text-gray-600 text-sm">
                              Air conditioning and heating systems for year-round comfort
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">Digital Learning Aids</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Smart Boards</h4>
                            <p className="text-gray-600 text-sm">
                              Interactive whiteboards for engaging multimedia presentations and demonstrations
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Projector Systems</h4>
                            <p className="text-gray-600 text-sm">
                              High-definition projectors for clear visual presentations and video content
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Wi-Fi Connectivity</h4>
                            <p className="text-gray-600 text-sm">
                              High-speed internet access throughout the campus for digital learning resources
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Audio Systems</h4>
                            <p className="text-gray-600 text-sm">
                              Clear sound systems ensuring every student can hear lectures and presentations
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white border-2 border-green-200 rounded-lg">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lecture Halls</h3>
                    <p className="text-gray-600 text-sm">
                      Large capacity halls for theoretical sessions and guest lectures
                    </p>
                  </div>

                  <div className="text-center p-6 bg-white border-2 border-blue-200 rounded-lg">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tutorial Rooms</h3>
                    <p className="text-gray-600 text-sm">
                      Small group discussion rooms for interactive learning sessions
                    </p>
                  </div>

                  <div className="text-center p-6 bg-white border-2 border-purple-200 rounded-lg">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wifi className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Classrooms</h3>
                    <p className="text-gray-600 text-sm">
                      Technology-integrated classrooms for modern learning experiences
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Learning Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Library & Study Areas</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Extensive nursing and medical literature</li>
                        <li>• Digital library access and e-books</li>
                        <li>• Quiet study areas and group discussion zones</li>
                        <li>• Reference materials and journals</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Computer Lab</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Modern computers with updated software</li>
                        <li>• Internet access for research purposes</li>
                        <li>• Digital learning platforms and simulations</li>
                        <li>• Technical support and maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hostel */}
          <TabsContent value="hostel">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Home className="h-8 w-8 text-purple-600" />
                  Comfortable Living Spaces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Our hostel facilities provide a safe, clean, and comfortable living environment 
                  that supports academic success and personal growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card className="bg-gradient-to-br from-purple-50 to-indigo-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-800">Boys Hostel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Accommodation</h4>
                            <p className="text-gray-600 text-sm">
                              Comfortable rooms with study areas and storage facilities
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Security</h4>
                            <p className="text-gray-600 text-sm">
                              24/7 security with controlled access and surveillance systems
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Common Areas</h4>
                            <p className="text-gray-600 text-sm">
                              Recreation rooms, study halls, and social interaction spaces
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Maintenance</h4>
                            <p className="text-gray-600 text-sm">
                              Regular cleaning and maintenance services for hygiene
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-pink-50 to-rose-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-pink-800">Girls Hostel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Safe Environment</h4>
                            <p className="text-gray-600 text-sm">
                              Secure accommodation with female staff and safety protocols
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Privacy & Comfort</h4>
                            <p className="text-gray-600 text-sm">
                              Well-designed rooms ensuring privacy and comfortable living
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Support Services</h4>
                            <p className="text-gray-600 text-sm">
                              Counseling support and mentorship programs for students
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Healthcare</h4>
                            <p className="text-gray-600 text-sm">
                              On-campus medical facilities and emergency response
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <Utensils className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Dining Facilities</h4>
                    <p className="text-gray-600 text-sm">Nutritious meals and clean dining areas</p>
                  </div>

                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <Wifi className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Internet Access</h4>
                    <p className="text-gray-600 text-sm">High-speed Wi-Fi throughout the hostel</p>
                  </div>

                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                    <p className="text-gray-600 text-sm">24/7 security and surveillance systems</p>
                  </div>

                  <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                    <Home className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Laundry</h4>
                    <p className="text-gray-600 text-sm">Washing machines and drying facilities</p>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">Hostel Amenities & Rules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-4">Amenities Provided</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Furnished rooms with beds, study tables, and wardrobes</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Clean washrooms and bathroom facilities</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Common room with TV and recreational facilities</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Study hall for group studies and discussions</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Emergency medical facilities and first aid</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-4">Hostel Guidelines</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Strict timing for entry and exit</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">No unauthorized visitors policy</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Maintaining cleanliness and hygiene</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Respectful behavior towards staff and peers</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Regular room inspections for safety</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}