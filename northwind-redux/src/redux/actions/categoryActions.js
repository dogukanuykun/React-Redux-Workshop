import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return {this:actionTypes.CHANGE_CATEGORY,payload:category}
        
}

export function getCategoriesSuccess(categories){
    return {
        this:actionTypes.CHANGE_CATEGORY,payload:categories
    }
}

export function getCategories(){
    return function(dispatch){
        //debugger;
        let url = "http://localhost:3000/categories"
        return fetch(url).then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}