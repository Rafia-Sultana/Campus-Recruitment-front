import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const CvForm = () => {
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const title = e.target.title.value;
        const linkdin = e.target.linkdin.value;
        const github = e.target.github.value;
        const portfolio = e.target.portfolio.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const location = e.target.location.value;
        const obj = e.target.obj.value;
        const language = e.target.language.value;
        const technology = e.target.technology.value;
        const tools = e.target.tools.value;
        const projectName = e.target.projectName.value;
        const projectLink = e.target.projectLink.value;
        const description = e.target.description.value;
        const education = e.target.education.value;

        console.log(name, title, linkdin, github, portfolio, email, phone, location, obj, language, technology, tools, projectName, projectLink, description, education)

        const cvInformation = {
            name, title, linkdin, github, portfolio, email, phone, location, obj, language, technology, tools, projectName, projectLink, description, education

        }
        fetch('http://localhost:5000/cv', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cvInformation)
        })
            .then(res => res.json())
            .then((data) => {
                console.log('Success:', data);
                e.target.reset()

            })

        navigate('/dashboard/cvinfo')
    }
    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <input
                    type="text"
                    name='name'
                    placeholder='enter your name'
                /><br />
                <input
                    type="text"
                    name='title'
                    placeholder='enter your title (if have any)'
                /><br />
                <input
                    type="url"
                    name='linkdin'
                    placeholder='enter lindin link (if have)' /><br />
                <input
                    type="url"
                    name='github'
                    placeholder='enter github link (if have)' /><br />
                <input
                    type="url"
                    name='portfolio'
                    placeholder='enter portfolio link (if have)' /><br />
                <input
                    type="email"
                    name='email'
                    placeholder='email' /><br />
                <input
                    type="tel"
                    name='phone'
                    placeholder='telephones' /><br />
                <input
                    type="text"
                    name='location'
                    placeholder='enter location ' /><br />
                <input
                    type="text"
                    name='obj'
                    placeholder='careere objectives' /><br />
                <input
                    type="text"
                    name='language'
                    placeholder='any computer language you know' /><br />
                <input
                    type="text"
                    name='technology'
                    placeholder='enter any technology you know'

                /><br />
                <input
                    type="text"
                    name='tools'
                    placeholder='enter any tools you know'
                /><br />
                <input
                    type="text"
                    name='projectName'
                    placeholder='enter project name'
                /><br />


                <input
                    type="url"
                    name='projectLink'
                    placeholder='enter your project link' /><br />
                <input
                    type="text"
                    name='description'
                    placeholder='project description'
                /><br />
                <input
                    type="text"
                    name='education'
                    placeholder='enter your education details'
                />

                {               /*  <input
                    type="submit"
                    value="submit"
                    className='border-4 border-indigo-500/100 px-6 mt-4 bg-cyan-500 shadow-lg shadow-cyan-500/50' /> */}


                <button type='submit'>CvINFO</button>
            </form>

        </div>
    );
};

export default CvForm;