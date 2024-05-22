import { generationList,typesList,sortList } from "../../untill/optionList"
import { useSearchForm } from "."


const SearchForm = () => {
  const {fieldKeyword,fieldGeneration,fieldType,fieldSort} = useSearchForm()
  return (
    <form className="grid  grid-cols-1   md:grid-cols-2  lg:grid-cols-4 gap-[20px] ">
        <div>
          <form className="max-w-sm mx-auto">
            <label htmlFor="generation" className="block mb-2 text-mb font-medium text-white">Generation</label>
            <select {...fieldGeneration} id="generation" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
              {generationList.map((item,index)=>{
                return <option className="capitalize"  key={`generation-key-${index}`} value={index} > {item.name} </option>
              })}
              </select>
          </form>

        </div>
        <div>
          <form className="max-w-sm mx-auto">
            <label htmlFor="type" className="block mb-2 text-mb font-medium text-white">Type</label>
            <select {...fieldType} id="type" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
               {typesList.map((item,index)=>{
                return <option className="capitalize" key={`type-key-${index}`} value={item} > {item} </option>
              })}
              </select>
          </form>

        </div>
        <div>
          <form className="max-w-sm mx-auto">
            <label htmlFor="sort" className="block mb-2 text-mb font-medium text-white">Sort</label>
            <select {...fieldSort} id="sort" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5">
              {sortList.map((item,index)=>{
                return <option className="capitalize"  key={`type-key-${index}`} value={item} > {item} </option>
              })}
              </select>
          </form>

        </div>
        <div>
          
          <form className="max-w-sm mx-auto">
            <label htmlFor="generation" className="block mb-2 text-mb font-medium text-white">Search</label>
            <input {...fieldKeyword}  id="generation" className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#375EAA] focus:border-[#375EAA] block w-full p-2.5"/>
          </form>

        </div>
    </form>
  )
}

export default SearchForm