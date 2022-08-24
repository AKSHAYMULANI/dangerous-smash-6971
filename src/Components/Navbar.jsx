import { Flex } from "@chakra-ui/react";


function Navbar(){
    return (
        <Flex>
            <Flex><img /></Flex>
            <Flex>
            <p>Product</p>
            <p>Pricing</p>
            <p>Solution</p>
            <p>Customers</p>
            <p>Resources</p>
            <p>Partners</p>
            </Flex>
            <Flex>
                <Flex>
                {/* <i class="fa fa-car" style="font-size:48px;"></i> */}
                {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
                </Flex>
                {/* <Flex></Flex>
                <Flex></Flex> */}
            </Flex>
        </Flex>
    )
}

export default Navbar