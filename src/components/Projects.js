import React, { useState } from 'react';
import valorImg from '../assets/Valor_Portal_Image_new_1.png';
import slotbookImg from '../assets/slot book.jpg'
import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
// import './Projects.css'; // Import your Tailwind CSS styles

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [projectTitle, setProjectTitle] = React.useState(null);

    const handleOpen = () => setOpen(!open);


    const project_titls = ['VIRTUAL TERMINAL', 'EMPLOYE SLOT BOOKING']

    const config = {
        projects: [
            {
                image: valorImg,
                description: 'The Friend-to-Friend Product Purchasing System aims to facilitate the process of buying products for friends who are located in different places. If you are away from your current location but wish to buy a product from a local store, you can have your friend purchase it on your behalf. The shopkeeper will then send the payment link to your designated WhatsApp number or email, allowing you to make the payment securely and conveniently.',
                // link: 'https://github.com/jvlcode/jvlcart',
            },
            {
                image: slotbookImg,
                description: 'Welcome to the Student Education Tracking System, a comprehensive platform designed to monitor and manage student progress and academic performance. Whether you are an educator, administrator, or parent, our system provides the tools you need to support student learning and achievement effectively.',
                // link: 'https://github.com/jvlcode/food',
            },
            //   {
            //     image: websiteImg3,
            //     description: 'Basic Blog Website . Built with Next JS and MongoDB',
            //     link: 'https://github.com/jvlcode/blog',
            //   },
        ],
    };

    const handleViewClick = (index) => {
        console.log('index', index);
        let getData = config.projects[index].description

        setSelectedProject(getData);
        setProjectTitle(project_titls[index])
        setIsOpen(true);
        setShowModal(true)
    };

    const handleClosePopup = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex justify-center items-center flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary flex mb-5  font-bold">My Projects</h1>
                    {/* <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p> */}
                </div>
            </div>
            <div className="w-full flex justify-center bg-primary ">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map((project, i) => (
                        <div className="relative key={project.description} ">
                            <img className="h-[200px] w-[350px]" src={project.image} alt={project.description} />
                            <div className="project-desc">
                                <p className="text-center px-5 py-5">{' '}</p>
                                <div className="flex justify-center">
                                    <Button onClick={() => handleViewClick(i)} className="btn">
                                        View Project
                                    </Button>
                                </div>
                            </div>



                        </div>
                    ))}


                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-3xl font-medium text-gray-900 dark:text-white">
                                                {projectTitle}
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex-auto">
                                            <p className="text-1xl text-gray-900 dark:text-white">
                                                {selectedProject}
                                            </p>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Projects;
