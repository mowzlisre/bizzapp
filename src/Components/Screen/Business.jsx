import { Flex, Text } from "@chakra-ui/react"
import { getQueryParams } from "../../config"
import { agricultureBusinesses, financeBusinesses, industrialBusinesses } from "../../database"
import Item from "../utils/Item"

const Business = () => {
    const params = getQueryParams()
    var data = []
    if(params.type === 'industries'){
        data = industrialBusinesses
    } else if (params.type === 'agriculture'){
        data = agricultureBusinesses
    } else if (params.type === 'finance'){
        data = financeBusinesses
    }
    return (
        <>
            <Text px={3} mt={5} fontWeight={"bold"} textAlign={'center'} fontSize={'xl'}>{params.type.toUpperCase()}</Text>
            <Flex p={3} direction={{base: "column", md: "row"}} gap={3}>
                {
                    data.map((item, index) => (
                        <Item key={index} {...item}/>
                    ))
                }
            </Flex>
        </>
    )
}

export default Business