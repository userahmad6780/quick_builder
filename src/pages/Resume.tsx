import { PDFViewer } from '@react-pdf/renderer';
import CustomResume from '../resume_templates/resume1';
import CustomResume2 from '../resume_templates/resume2';
import { useEffect, useState } from 'react';

function Resume() {
  // Define resume templates as an array of components with identifiers
  const resumeList = [
    { id: 'resume1', component: <CustomResume size={'A4'} /> },
    { id: 'resume2', component: <CustomResume2 size={'A4'} /> },
  ];

  // Store the selected resume ID instead of the component
  const [selectedResumeId, setSelectedResumeId] = useState(resumeList[0].id);

  // Find the current resume component based on the selected ID
  const currentResume = resumeList.find((res) => res.id === selectedResumeId)?.component;

  useEffect(() => {
    console.log(selectedResumeId, 'Selected Resume ID');
  }, [selectedResumeId]);

  return (
    <div className="px-10 py-10 flex justify-between h-screen">
      <div className="w-1/3 h-screen grid md:grid-cols-2 gap-3 overflow-y-scroll overflow-x-hidden">
        {resumeList.map((res) => (
          <div
            key={res.id}
            className={`border-2 relative ${
              selectedResumeId === res.id ? 'border-blue-600' : 'border-gray-300'
            } w-[234px] h-[326px] cursor-pointer`}
          >
            <PDFViewer
              showToolbar={false}
              style={{ width: '230px', height: '323px' }}
              key={res.id}
            >
              {res.component}
            </PDFViewer>
            <div
              className="absolute inset-0 z-10"
              onClick={() => setSelectedResumeId(res.id)}
              aria-label={`Select resume ${res.id}`}
              role="button"
            />
          </div>
        ))}
      </div>

      <div className='flex flex-1 justify-center'>
        <PDFViewer
          showToolbar={false}
          style={{ width: '510px', height: '700px' }}
          key={selectedResumeId}
        >
          {currentResume}
        </PDFViewer>
      </div>
    </div>
  );
}

export default Resume;