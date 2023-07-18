import express from "express"
import mongoose from "mongoose"
import { RecipeModel } from "../models/recipes.js";
import { UserModel } from "../models/users.js";

const router = express.Router()

// get request
router.get("/", async(req, res) =>{
    try{
        const response = await RecipeModel.find({});
        res.json(response);
    } catch(err){
        res.json(err)
    }
})

// post request
router.post("/", async(req, res) =>{
    const recipe = new RecipeModel(req.body)
    try{
        const response = await recipe.save();
        res.json(response);
    } catch(err){
        res.json(err)
    }
})
// put request
router.put("/", async(req, res) =>{
    try{
        // showing user and recipes they saved
        const recipe = await RecipeModel.findById(req.body.recipeId)
        const user = await UserModel.findById(req.body.userId)
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({savedRecipes: user.savedRecipes});
    } catch(err){
        res.json(err)
    }
})
// getting the list of saved recipes by ID
router.get("/savedrecipes/ids", async(req, res)=>{
    try{
        const user = await UserModel.findById(req.body.userId)
        res.json({savedRecipes: user?.savedRecipes})
    } catch(err){
        res.json(err)
    }
})

router.get("/savedRecipes", async(req, res)=>{
    try{
        const user = await UserModel.findById(req.body.userId)
        // matching any of the values in an array
        const savedRecipes = await RecipeModel.find({_id:{$in:user.savedRecipes}})
        es.json({savedRecipes})
    }catch(err){
        res.json(err)
    }
})
    



export {router as recipesRouter}
