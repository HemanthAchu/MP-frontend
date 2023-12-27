import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serviceURL";

//UPPLOAD NEW VIDEOS

export const uploadNewVideoAPI = async(video)=>{
    return await commonAPI('POST',`${SERVER_URL}/allVideos`,video)
}

//get all videos
export const getAllVideosAPI = async ()=>{
return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}
//view single videos
export const  getAVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
//remove videos
export const removeVideosAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}
//insert videos to history
export const addVideosToHistoryAPI = async (video)=>{
    return await commonAPI('POST',`${SERVER_URL}/history`,video)
}
//get videos from history
export const getsHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
//Remove history
export const removeHistoryAPI = async (id)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/history/${id}`,{})
}
//addCategory
export const addCategoryAPI = async (category)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,category)
}
//getallcategory
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category
export const removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

//update Category
export const updateCategoryAPI = async (id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${id}`,categoryDetails )
}
