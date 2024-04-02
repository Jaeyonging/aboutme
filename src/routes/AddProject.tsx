import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Projects } from '../types/types';

export const AddProject = () => {
    const [formData, setFormData] = useState<Projects>({
        id: '',
        date: '',
        gameurl: '',
        hashtags: [],
        imgurl: '',
        password: '',
        project: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleHashtagsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newHashtags = [...formData.hashtags];
        newHashtags[index] = e.target.value;
        setFormData(prevState => ({
            ...prevState,
            hashtags: newHashtags
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <NavBar />
            <form className="add-project-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID:</label>
                    <input className='project-text' type="text" name="id" value={formData.id} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Date:</label>
                    <input className='project-text' type="text" name="date" value={formData.date} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Game URL:</label>
                    <input className='project-text' type="text" name="gameurl" value={formData.gameurl} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Hashtags:</label>
                    {formData.hashtags.map((tag, index) => (
                        <input key={index} type="text" value={tag} onChange={(e) => handleHashtagsChange(e, index)} />
                    ))}
                    <button className='submit-button' onClick={() => setFormData(prevState => ({ ...prevState, hashtags: [...prevState.hashtags, ''] }))}>Add Hashtag</button>
                </div>

                <div className="form-group">
                    <label>Image URL:</label>
                    <input className='project-text' type="text" name="imgurl" value={formData.imgurl} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input className='project-text' type="text" name="password" value={formData.password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Project:</label>
                    <input className='project-text' type="text" name="project" value={formData.project} onChange={handleChange} />
                </div>

                <button className="submit-button" type="submit">Submit</button>
            </form>
        </>
    );
};
