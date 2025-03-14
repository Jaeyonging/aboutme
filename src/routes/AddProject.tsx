import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Projects } from '../types/types';
import { InsertProject } from '../firebase/firebaseFetch';
import { useNavigate } from 'react-router-dom';

export const AddProject = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<Projects>({
        id: '',
        date: '',
        gameurl: '',
        hashtags: [''],
        imgurl: '',
        password: '',
        project: ''
    });

    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleHashtagsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newHashtags = [...formData.hashtags];
        newHashtags[index] = e.target.value.startsWith('#') ? e.target.value : `#${e.target.value}`;
        setFormData(prevState => ({
            ...prevState,
            hashtags: newHashtags
        }));
    };

    const handleAddHashtag = () => {
        setFormData(prevState => ({ ...prevState, hashtags: [...prevState.hashtags, ''] }));
    };

    const handleRemoveHashtag = () => {
        setFormData(prevState => {
            const newHashtags = [...prevState.hashtags];
            newHashtags.pop();
            return {
                ...prevState,
                hashtags: newHashtags.filter(tag => tag !== '')
            };
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { id, date, gameurl, hashtags, imgurl, password, project } = formData;
        if (!id || !date || !gameurl || !imgurl || !project || hashtags.length === 0 || hashtags.some(tag => tag.trim() === '')) {
            setError("모든 칸을 채워주세요.");
            return;
        }
        // console.log(formData);
        try {
            await InsertProject(formData);
            setFormData({
                id: '',
                date: '',
                gameurl: '',
                hashtags: [],
                imgurl: '',
                password: '',
                project: ''
            });
            navigate('/projects')

            console.log('Data inserted successfully');
        } catch (error) {
            setError((error as Error).toString());
            console.error(error);
        }
    };

    return (
        <>
            <NavBar />
            <form className="add-project-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input className='project-text' placeholder='Enter the Name' type="text" name="id" value={formData.id} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Date:</label>
                    <input className='project-text' placeholder='YYYY.MM.DD - YYYY.MM.DD' type="text" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Game URL:</label>
                    <input className='project-text' placeholder='Enter the URL' type="text" name="gameurl" value={formData.gameurl} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Hashtags:</label>
                    {formData.hashtags.map((tag, index) => (
                        <input className='project-text' key={index} type="text" placeholder='Enter the #hastag' value={tag} onChange={(e) => handleHashtagsChange(e, index)} />
                    ))}
                    <div className='hashtag-cont'>
                        <button className='submit-button' type="button" onClick={handleRemoveHashtag}>Remove Hashtag</button>
                        <button className='submit-button' type="button" onClick={handleAddHashtag}>Add Hashtag</button>
                    </div>
                </div>

                <div className="form-group">
                    <label>Image URL:</label>
                    <input className='project-text' placeholder='Enter the image url' type="text" name="imgurl" value={formData.imgurl} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input className='project-text' placeholder='Enter the password' type="text" name="password" value={formData.password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Project:</label>
                    <input className='project-text' placeholder='Enter the project' type="text" name="project" value={formData.project} onChange={handleChange} />
                </div>

                {error && (
                    <div className="form-errors">
                        {error}
                    </div>
                )}
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </>
    );
};
