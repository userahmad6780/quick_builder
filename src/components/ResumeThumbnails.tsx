import { PDFViewer } from '@react-pdf/renderer'
import React, { memo } from 'react'
import CustomResume from '../resume_templates/resume1/CustomResume1';
import CustomResume2 from '../resume_templates/resume2/CustomResume2';

interface Props {
    setSelectedResumeId :any
}

function ResumeThumbnails({setSelectedResumeId} : Props) {

    const resumeList = [
        { id: 'resume1', component: <CustomResume size={'A4'} /> },
        { id: 'resume2', component: <CustomResume2 size={'A4'} /> },
        ];

  return (
    <div className="w-1/3 bg-amber-100 h-screen grid md:grid-cols-2 gap-3 overflow-y-scroll overflow-x-hidden">
        {resumeList.map((res) => (
            <div
            key={res.id}
            className={`border-2 
                
             w-[236px] h-[326px] cursor-pointer`}
            onClick={() => setSelectedResumeId(res.id)}
            >
            <PDFViewer
                showToolbar={false}
                style={{ width: '230px', height: '323px' }}
                key={res.id}
            >
                {res.component}
            </PDFViewer>
            </div>
        ))}
        </div>
  )
}
// ${
//     selectedResumeId === res.id ? 'border-blue-600' : 'border-gray-300'
// }
export default memo(ResumeThumbnails)