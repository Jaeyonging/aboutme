import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { InsertLearned } from '../firebase/firebaseFetch';
import { Learneds } from '../types/types';
import { useNavigate } from 'react-router-dom';

export const AddLearn: React.FC = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [formData, setFormData] = useState<Learneds>({
        id: '',
        descr: '',
        hashtags: [''],
        imgurl: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        const { id, descr, hashtags, imgurl } = formData;
        if (!id || !descr || !imgurl || hashtags.length === 0 || hashtags.some(tag => tag.trim() === '')) {
            setError("모든 칸을 채워주세요.");
            return;
        }
        try {
            await InsertLearned(formData);
            setFormData({
                id: '',
                descr: '',
                hashtags: [],
                imgurl: ''
            });
            navigate('/learned')
        } catch (error: any) {
            console.log(error.code)
            switch (error.code) {
                case "invalid-argument": {
                    setError(("No title"))
                    return
                }
                default: {
                    setError((error as Error).toString())

                }
            }
        }
    };

    return (
        <>
            <NavBar />
            <form className='add-project-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input className='project-text' type="text" name="id" value={formData.id} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea className='project-descr' placeholder='**text** is bold text, (nxtln) is nextline' name="descr" value={formData.descr} onChange={handleChange} />
                </div>


                <div className="form-group">
                    <label>Hashtags:</label>
                    {formData.hashtags.map((tag, index) => (
                        <input key={index} className='project-text' type="text" value={tag} onChange={(e) => handleHashtagsChange(e, index)} />
                    ))}
                    <div className='hashtag-cont'>
                        <button className='submit-button' type="button" onClick={handleRemoveHashtag}>Remove Hashtag</button>
                        <button className='submit-button' type="button" onClick={handleAddHashtag}>Add Hashtag</button>
                    </div>
                </div>

                <div className="form-group">
                    <label>Image URL:</label>
                    <input className='project-text' type="text" name="imgurl" value={formData.imgurl} onChange={handleChange} />
                </div>
                {error && (
                    <div className="form-errors">
                        {error}
                    </div>
                )}
                <button className='submit-button' type="submit">Submit</button>
            </form>
        </>
    );
};

