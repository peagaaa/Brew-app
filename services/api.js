import {useLocalSearchParams} from 'expo-router'

const { idRecipe } = useLocalSearchParams();

// const URL = "https://dummyjson.com/recipes/";
  //const URL = `https://dummyjson.com/recipes/${idRecipe}`;

export async function getApi(URL) {
    try {
        const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Erro");
    }
    const varRecipeArm = await response.json();
    return varRecipeArm;
    } catch (err) {
        console.error(err);
    }
}
