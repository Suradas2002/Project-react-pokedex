import axios from "axios"
import { POKEMON_BASE_URL } from "../untill/constant"
import { IPokemonDetailResponse } from "../interface/pokemonDetail"
import { IResponse,handleResponse } from "../untill/handelResponse"

interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailServices = {
  getPokemonDetail: async (
    name: string
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};