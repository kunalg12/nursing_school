import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookOpen, HelpCircle } from 'lucide-react';

export default function DownloadsPage() {
  const syllabusFiles = [
    { semester: 1, title: 'First Semester Syllabus', size: '2.3 MB' },
    { semester: 2, title: 'Second Semester Syllabus', size: '2.1 MB' },
    { semester: 3, title: 'Third Semester Syllabus', size: '2.5 MB' },
    { semester: 4, title: 'Fourth Semester Syllabus', size: '2.2 MB' },
    { semester: 5, title: 'Fifth Semester Syllabus', size: '2.4 MB' },
    { semester: 6, title: 'Sixth Semester Syllabus', size: '2.3 MB' },
    { semester: 7, title: 'Seventh Semester Syllabus', size: '2.1 MB' },
    { semester: 8, title: 'Eighth Semester Syllabus', size: '1.9 MB' },
  ];

  const questionBanks = [
    { semester: 1, title: 'First Semester Question Bank', size: '1.8 MB' },
    { semester: 2, title: 'Second Semester Question Bank', size: '1.9 MB' },
    { semester: 3, title: 'Third Semester Question Bank', size: '2.1 MB' },
    { semester: 4, title: 'Fourth Semester Question Bank', size: '2.0 MB' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Downloads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access important academic resources including syllabi, question banks, 
            and other educational materials for your nursing studies.
          </p>
        </div>

        {/* Syllabus Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                Semester Syllabus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Download comprehensive syllabi for all eight semesters of the GNM program. 
                Each syllabus contains detailed course content, learning objectives, and assessment criteria.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {syllabusFiles.map((file) => (
                  <Card key={file.semester} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <span className="text-sm text-gray-500">{file.size}</span>
                      </div>
                      <CardTitle className="text-lg">{file.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Question Banks Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <HelpCircle className="h-8 w-8 text-green-600" />
                Question Banks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Practice with our comprehensive question banks covering the first four semesters. 
                These resources help students prepare effectively for examinations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {questionBanks.map((file) => (
                  <Card key={file.semester} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <HelpCircle className="h-8 w-8 text-green-600" />
                        <span className="text-sm text-gray-500">{file.size}</span>
                      </div>
                      <CardTitle className="text-lg">{file.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Admission Forms</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Download application forms and admission guidelines
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="text-center p-6 bg-white rounded-lg">
                  <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Calendar</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    View important dates and academic schedule
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="text-center p-6 bg-white rounded-lg">
                  <HelpCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Handbook</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete guide for students and policies
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Download Instructions</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• All files are in PDF format and require a PDF reader</li>
                  <li>• Files are regularly updated - check back for latest versions</li>
                  <li>• For technical issues with downloads, contact the IT department</li>
                  <li>• Some files may require student login credentials</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}