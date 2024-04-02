import { Box, Flex } from "@chakra-ui/react"
import Domain from "./Domain"
import { FaCog, FaTractor } from "react-icons/fa"
import { MdCurrencyExchange } from "react-icons/md";

const PrimaryCard = () => {
    const domains = [
        {
            "name": "industries",
            "icon": <FaCog fontSize={150}/>
        },
        {
            "name": "agriculture",
            "icon": <FaTractor fontSize={150}/>
        },
        {
            "name": "finance",
            "icon": <MdCurrencyExchange fontSize={150}/>
        },
        {
            "name": "education",
            "icon": <MdCurrencyExchange fontSize={150}/>
        }
    ]

    return (
        <>
            <Flex justifyContent={'center'} mt={5} flexDirection={{base: "column", md: "row"}} gap={5}>
                {
                    domains.map((item, index) => (
                        <Domain key={index} {...item} />
                    ))
                }
            </Flex>
        </>
    )
}

export default PrimaryCard