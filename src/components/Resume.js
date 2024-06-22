import ResumeImg from '../assets/resume.jpg';
import ResumeData from '../Resume/dineshkumar.pdf'

export default function Resume () {
 
    const handleDownload = () => {
        // Define the URL to your PDF file (assuming it's in the public directory)
        const pdfUrl = ResumeData;

        // Create an anchor element
        const a = document.createElement('a');

        // Set the href attribute to the PDF URL
        a.href = pdfUrl;

        // Specify the download attribute and the file name
        a.download = 'DineshKumar.pdf';

        // Trigger a click event to initiate the download
        a.click();
    };

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5  font-bold'>My Resume</h1>
                <p className='pb-5'>You can view my resume <button className='btn' onClick={handleDownload}> Download</button></p>
            </div>
        </div>
    </section>
}