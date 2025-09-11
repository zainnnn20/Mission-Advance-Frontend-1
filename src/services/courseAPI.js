import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAllCourses = async () => {
  try {
    const response = await apiClient.get("/courses");
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const addCourse = async (courseData) => {
  try {
    const response = await apiClient.post("/courses", courseData);
    return response.data;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

export const updateCourse = async (id, courseData) => {
  try {
    const response = await apiClient.put(`/courses/${id}`, courseData);
    return response.data;
  } catch (error) {
    console.error(`Error updating course ${id}:`, error);
    throw error;
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await apiClient.delete(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting course ${id}:`, error);
    throw error;
  }
};
