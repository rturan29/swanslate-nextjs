import axios from "axios";
import { ITasks } from "../entities/IContext";

export async function getTranslateTasks() {
    const response = await axios.get(
        `https://swanslate-nextjs.vercel.app/api/translateTasks`
    );
    if (response?.data) {
        const { data }: { data: ITasks; } = response.data;
        data.translateTasks = data.translateTasks.map((task, i) => ({ ...task, id: i }));
        data.validationTasks = data.validationTasks.map((task, i) => ({ ...task, id: i }));
        return data;
    }

}
