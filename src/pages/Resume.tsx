import { PDFViewer } from '@react-pdf/renderer';
import CustomResume from '../resume_templates/resume1';
import CustomResume2 from '../resume_templates/resume2';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentResume } from '../redux/resumeSlice';
import { Button } from '../components/ui/button';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Resume() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentResume } = useSelector((state) => state.userResume);

  useEffect(() => {
    console.log(currentResume, '------------------')
  }, [currentResume])
  
  const resumeList = [
    { id: 'resume1', component: <CustomResume size={'A4'} /> },
    { id: 'resume2', component: <CustomResume2 size={'A4'} /> },
  ];

  const [selectedResumeId, setSelectedResumeId] = useState(resumeList[0].id);

  const selectedResume = resumeList.find((res) => res.id === selectedResumeId)?.component;

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
              onClick={() => {
                setSelectedResumeId(res.id)
                dispatch(updateCurrentResume(res.id))
                }
              }
              aria-label={`Select resume ${res.id}`}
              role="button"
            />
          </div>
        ))}
      </div>

      <div className='flex flex-1 justify-center'>
        <div className='flex'>
          <PDFViewer
            showToolbar={false}
            style={{ width: '510px', height: '700px' }}
            key={selectedResumeId}
          >
            {selectedResume}
          </PDFViewer>
          <Button onClick={()=>{navigate(`/resume/${selectedResumeId}`)}} className='ml-10 text-sm lg:text-xl font-medium py-4 px-2 md:py-3 md:px-3 w-10 h-10 cursor-pointer text-white bg-blue-500 hover:bg-blue-300 rounded-full'>
            <MdOutlineArrowForwardIos />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;