import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Building, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any information 
            about our nursing programs. We're here to help you start your healthcare career.
          </p>
        </div>

        {/* Contact Information Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* College Contact */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                  <Building className="h-8 w-8" />
                  College Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      Beed Bypass Road<br />
                      Chh. Sambhajinagar, Maharashtra – 431005
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">7517275151</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">swamivekanandschoolofnursing@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Contact */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                  <Users className="h-8 w-8" />
                  Trust Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      Flat No. 04, Waheguru Complex<br />
                      Pundalik Nagar Road<br />
                      Near Gajanan Mandir<br />
                      Chh. Sambhajinagar
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">indrayanipratishthan51@gmail.com</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Trust Information</h4>
                  <p className="text-gray-700 text-sm">
                    INDRAYANI PRATISHTHAN is the educational trust that manages 
                    and oversees the operations of Swami Vivekanand School of Nursing. 
                    For administrative and trust-related matters, please use this contact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              <p className="text-gray-600 text-center">
                Have questions about admissions or our programs? Fill out the form below and we'll get back to you.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                    required 
                  />
                </div>
                
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Quick Contact Options */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quick Contact Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                  <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Speak directly with our admissions team
                  </p>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    7517275151
                  </Button>
                </div>

                <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Send us your questions anytime
                  </p>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>

                <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Schedule a campus tour
                  </p>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What are the admission requirements?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Candidates must have completed 12th standard with Science stream and minimum 45% marks. 
                    Visit our Admissions page for detailed requirements.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">When does the academic session start?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    The academic session typically begins in August. Application deadlines are usually in June.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Do you provide hostel facilities?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we have separate hostel facilities for boys and girls with all necessary amenities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What is the duration of the GNM program?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    The GNM program is 3.5 years including 6 months of internship for practical experience.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Are scholarships available?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Yes, scholarships are available for eligible students based on merit and financial need.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">How can I schedule a campus visit?</h4>
                  <p className="text-gray-600 text-sm">
                    Contact us via phone or email to schedule a campus tour and meet with our admissions team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}