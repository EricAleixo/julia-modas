import { jwtDecode } from "jwt-decode";
import { api } from "../../services/api";

interface jwtToken {
    id: string | number;
}

export const extrairToken = async () => {
    const token = localStorage.getItem("token");
    
    if (token) {
        const tokenDecodificado = jwtDecode<jwtToken>(token);
        const idToken = tokenDecodificado.id;

        try {
            const response = await api.get(`/auth/client/${idToken}`);
            return response.data;
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    } else {
        console.error("Nenhum token encontrado no localStorage.");
    }
};
