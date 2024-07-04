import Image from "next/image"

const PageInfo = ({name, status, count}: {name:string; status:string; count:number}) => {
  return (
    <div className="flex items-center border border-transparent rounded-3xl p-5 bg-white">
          
          <i className="fa-duotone fa-file w-8 h-8 mr-3"></i>
          

          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm text-gray-600">${count}</div>
          </div>
        </div>
  )
}

export default PageInfo