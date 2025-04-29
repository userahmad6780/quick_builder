import { Document, PDFViewer } from '@react-pdf/renderer';
import CustomResume from '../resume_templates/resume1';

function Resume() {
  return (
    <div className='px-10 py-10 flex h-screen'>
      <div className='w-1/2 bg-amber-100 scroll-auto'>
          <PDFViewer showToolbar={false} style={{width: '230px', height: '323px'}}>
            <Document
              author="Luke Skywalker"
              keywords="awesome, resume, start wars"
              subject="The resume of Luke Skywalker"
              title="CustomResume"
            >
              <CustomResume size="A4" />
            </Document>
          </PDFViewer>
        </div>
      <PDFViewer showToolbar={false} style={{width: '780px', height: '1100px'}}>
        <Document>
          <CustomResume size="A4" />
        </Document>
      </PDFViewer>
    </div>
  )
}

export default Resume