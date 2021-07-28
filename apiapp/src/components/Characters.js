import { useEffect } from "react"
import { connect } from "react-redux"
import { loadCharacterList } from "../actions/charactersAction"
import styled from 'styled-components'

const Card = styled.div`
    border: 2px solid #76C147;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    margin: 20px;
    width: 20%;
    & h3{
        color: #00B0C7;
    }
`
const Box = styled.div`
    display: relative;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

`
const Image = styled.img`
    border-radius: 50%;
    border: 2px solid #F58E22;
    width: 100%;
`

const Characters = ({list, error, loading, loadCharacterList}) => {
    useEffect(() => {
        loadCharacterList()
    }, [])

    console.log("chars renders")
    return(
        <>
            {error? <p>{error}</p>:null}
            {loading? <p>Loading the characters list...</p>: null}
            <Box>
                {list? list.map(item => 
                <Card>
                    <Image src={item.image} alt={item.name} />
                    <h3> {item.name} </h3>
                    <p>{item.species}</p>
                    <p>{item.status}</p>


                </Card>):null}
            </Box>
        </>
    )
}

const matchStateToProps = state => {
    return({
        loading: state.charactersReducer.loading,
        list: state.charactersReducer.list,
        error: state.charactersReducer.error
    })
}
export default connect(matchStateToProps, { loadCharacterList })(Characters) 