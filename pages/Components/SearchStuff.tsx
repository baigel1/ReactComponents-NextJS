import { SearchBar, StandardCard, UniversalResults } from "@yext/answers-react-components"

const SearchStuff = () => {
    return (
        <div>
            <SearchBar />
            <UniversalResults 
                verticalConfigMap={{
                    products: {
                        CardComponent: ({result}) => (
                            <StandardCard result={result}/>
                        )
                    }
                        
                }}
            />
        </div>
    )
}

export default SearchStuff