import SearchForm from "../../components/SearchForm";
import { usePokemonListStore } from "../../store/pokemonList";
import PokemonCard from "../../components/pokemonCard/pokemonCard";
import ReactLoading from "react-loading";

const HomePage = () =>{
    const {pokemon,fetchPokemon} = usePokemonListStore()
    return (
        <div className=" w-[90%] m-[auto] max-w-[1100px]">
            <div className=" flex justify-center">
                <img src="/images/logo.webp" className=" max-h-[80px] mt[20px]" alt=""/>
            </div>
            <SearchForm/>
            {fetchPokemon.loading && <div className="h-[800px] flex justify-center items-center"><ReactLoading type="bars" color="#fff" /></div> }
            { !fetchPokemon.loading && <div className="grid  grid-cols-1   sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-[20px] mt-[40px] justify-center ">
                {pokemon.data?.map((item)=>{
                    return <PokemonCard image={item.image || ''}
                    name={item.name}
                    id={item.id}
                    types={item.types}
                    />
                })}
            </div>}
        </div>
    )
    
}
export default HomePage