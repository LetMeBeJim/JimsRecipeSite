import React from 'react';
import { useForm } from "react-hook-form"
import './AddRecipe.css'
import '../../App.css'


function AddRecipe() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(JSON.stringify(data));
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input htmlFor="_id"  {...register("_id")} placeholder="put id in number here" required />
            </div>
            <div>
                <input htmlFor="name" {...register("name")} placeholder="name of food" required />
            </div>
            <div>
                <input htmlFor="difficulty" {...register("difficulty")} placeholder="put minutes in number here" required />
            </div>
            <div>
                <input htmlFor="page" {...register("page")} placeholder="ex: a" required />
            </div>
            <div>
                <input htmlFor="path" {...register("path")} placeholder="/images/x.jpg" required />
            </div>
            <div>
                <input htmlFor="steps" {...register("steps")} placeholder="steps here, separated with a period" required />
            </div>
            <div>
                <input htmlFor="ingredients" {...register("ingredients")} placeholder="ingredients here, separated with a comma" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


export default AddRecipe